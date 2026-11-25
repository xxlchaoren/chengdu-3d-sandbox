import { fbm, hash2 } from '../geo/rng.ts';
import { UNIT_PER_KM } from '../geo/project.ts';
import { GREEN_BELT, bandOf } from '../geo/chengdu.ts';
import { CLUSTER_PLACES, LAKE_SHAPES, PARK_SHAPES, RADIAL_PATHS, RING_PATHS, RIVER_PATHS, type PolyPath } from './paths.ts';
import { groundHeight } from './terrain.ts';

/**
 * 城市强度场：把「哪里能盖楼、盖多高、什么形态」变成可查询的函数。
 *
 * 路网／水体／绿地被栅格化成三张带符号距离图（值 = 到走廊边缘的距离，场景单位，
 * 负值表示落在走廊内部）。生成数万栋建筑时只查网格，不做逐条线的几何测试。
 */

const SPAN = 3000; // ±150km
const CELL = 2; // 200m
const GRID = Math.round(SPAN / CELL);
const FAR = 60; // 视为「远离走廊」的哨兵值
const REACH = 14; // 每个采样点只影响 14 单位（1.4km）内的网格

const cellX = (i: number) => i * CELL - SPAN / 2 + CELL / 2;
const cellZ = (j: number) => j * CELL - SPAN / 2 + CELL / 2;

class SignedGrid {
  data: Float32Array;
  constructor() {
    this.data = new Float32Array(GRID * GRID);
    this.data.fill(FAR);
  }
  private stamp(x: number, z: number, halfWidth: number) {
    const reach = halfWidth + REACH;
    const i0 = Math.max(0, Math.floor((x - reach + SPAN / 2) / CELL));
    const i1 = Math.min(GRID - 1, Math.floor((x + reach + SPAN / 2) / CELL));
    const j0 = Math.max(0, Math.floor((z - reach + SPAN / 2) / CELL));
    const j1 = Math.min(GRID - 1, Math.floor((z + reach + SPAN / 2) / CELL));
    for (let j = j0; j <= j1; j++) {
      const dz = cellZ(j) - z;
      const row = j * GRID;
      for (let i = i0; i <= i1; i++) {
        const dx = cellX(i) - x;
        const d = Math.sqrt(dx * dx + dz * dz) - halfWidth;
        const k = row + i;
        if (d < this.data[k]) this.data[k] = d;
      }
    }
  }
  /** 折线走廊：半宽 halfWidth，按段加密采样。 */
  path(lines: PolyPath[], halfWidthM: (p: PolyPath) => number) {
    for (const p of lines) {
      const hw = halfWidthM(p);
      const pts = p.pts;
      const n = pts.length;
      const last = p.closed ? n : n - 1;
      for (let a = 0; a < last; a++) {
        const b = pts[(a + 1) % n];
        const q = pts[a];
        const seg = Math.hypot(b.x - q.x, b.z - q.z);
        const steps = Math.max(1, Math.ceil(seg / (CELL * 0.5)));
        for (let s = 0; s < steps; s++) {
          const t = s / steps;
          this.stamp(q.x + (b.x - q.x) * t, q.z + (b.z - q.z) * t, hw);
        }
      }
    }
  }
  /** 实心椭圆（湖泊、公园、绿带节点）。 */
  disk(cx: number, cz: number, radius: number, elongate = 1, rotRad = 0) {
    const b = radius;
    const a = radius * elongate;
    const along = Math.max(0, a - b);
    const steps = Math.max(1, Math.ceil(along / (CELL * 0.6)));
    for (let s = 0; s <= steps; s++) {
      const t = steps === 0 ? 0 : (s / steps - 0.5) * 2 * along;
      this.stamp(cx + Math.cos(rotRad) * t, cz + Math.sin(rotRad) * t, b);
    }
  }
  /**
   * 环形绿带（绕城生态公园）。真实绿带并非连续封闭：天府大道中轴、成龙—驿都、
   * 光华—成温邛、成绵—北星等放射走廊在绕城处是城市穿越口，所以给这些方位留出可建缺口。
   */
  ring(inner: number, outer: number, gaps: Array<[number, number]> = []) {
    const mid = (inner + outer) / 2;
    const half = (outer - inner) / 2;
    for (let j = 0; j < GRID; j++) {
      const z = cellZ(j);
      for (let i = 0; i < GRID; i++) {
        const x = cellX(i);
        const d = Math.hypot(x, z);
        const k = j * GRID + i;
        let value = d < inner ? inner - d : d - outer;
        if (gaps.length) {
          const b = ((Math.atan2(x, -z) * 180) / Math.PI + 360) % 360;
          for (const [from, to] of gaps) {
            const span = (to - from + 360) % 360;
            const rel = (b - from + 360) % 360;
            if (rel <= span) {
              value = Math.abs(d - mid) - Math.max(2.4, half * 0.16);
              break;
            }
          }
        }
        if (value < this.data[k]) this.data[k] = value;
      }
    }
  }
  sample(x: number, z: number): number {
    const i = Math.floor((x + SPAN / 2) / CELL);
    const j = Math.floor((z + SPAN / 2) / CELL);
    if (i < 0 || j < 0 || i >= GRID || j >= GRID) return FAR;
    return this.data[j * GRID + i];
  }
}

export type BuildingForm = 'hutong' | 'slab' | 'tower' | 'office' | 'industrial' | 'village';

export interface CellInfo {
  /** 檐口高度（m）。 */
  heightM: number;
  /** 出现建筑的概率 0—1。 */
  density: number;
  form: BuildingForm;
  /** 0—1，夜间亮窗比例。 */
  lit: number;
}

/** 分区基准檐口高度（m）：老城低、环路之间中层、副中心高层、郊区稀疏。 */
const BAND_H = [16, 54, 76, 96, 82, 46];
// 绕城以外的成都平原是农田＋林盘，聚落很稀；基准密度压到 0.24，
// 否则卫星视角下乡野会被采样格铺成一地白方块。
const BAND_DENSITY = [0.94, 0.9, 0.86, 0.8, 0.66, 0.24];

export class CityField {
  road = new SignedGrid();
  water = new SignedGrid();
  green = new SignedGrid();

  constructor() {
    this.road.path(RING_PATHS, (p) => ((p.widthM ?? 24) / 2 + 8) / 100);
    this.road.path(RADIAL_PATHS, (p) => ((p.widthM ?? 30) / 2 + 6) / 100);

    this.water.path(RIVER_PATHS, (p) => (p.widthM ?? 30) / 2 / 100);
    for (const lake of LAKE_SHAPES) this.water.disk(lake.center.x, lake.center.z, lake.b, lake.a / lake.b, lake.rot);

    for (const park of PARK_SHAPES) {
      this.green.disk(park.center.x, park.center.z, park.b, park.a / park.b, park.rot);
    }
    this.green.ring(GREEN_BELT.innerKm * UNIT_PER_KM, GREEN_BELT.outerKm * UNIT_PER_KM, [
      [165, 200],
      [78, 112],
      [240, 300],
      [340, 390],
      [128, 150],
    ]);
  }

  roadProx(x: number, z: number) {
    return this.road.sample(x, z);
  }

  blocked(x: number, z: number): boolean {
    if (this.water.sample(x, z) < 0.05) return true;
    if (this.green.sample(x, z) < 0.05) return true;
    if (this.road.sample(x, z) < 0.02) return true;
    if (groundHeight(x, z) > 0.7) return true;
    return false;
  }

  /** 檐口高度：分区基准与副中心峰值取大，再叠临路溢价与噪声。 */
  heightM(x: number, z: number): number {
    const d = Math.hypot(x, z) / UNIT_PER_KM;
    const base = BAND_H[bandOf(d).index];
    let peak = 0;
    for (const c of CLUSTER_PLACES) {
      const t = 1 - Math.min(1, Math.hypot(x - c.p.x, z - c.p.z) / c.radius);
      if (t <= 0) continue;
      const w = t * t * c.peakM;
      if (w > peak) peak = w;
    }
    const prox = this.roadProx(x, z);
    const frontage = prox < 3 ? 1 + (3 - prox) * 0.12 : 1;
    const n = fbm(x * 0.02 + 5, z * 0.02 + 9, 3, 13);
    return Math.max(base, peak) * frontage * (0.55 + n * 0.95);
  }

  density(x: number, z: number): number {
    const d = Math.hypot(x, z) / UNIT_PER_KM;
    let v = BAND_DENSITY[bandOf(d).index];
    if (d > GREEN_BELT.outerKm) v *= Math.max(0.22, 1 - (d - GREEN_BELT.outerKm) / 26);
    const n = hash2(Math.round(x * 0.5), Math.round(z * 0.5), 21);
    return Math.max(0, Math.min(1, v * (0.7 + n * 0.6)));
  }

  classify(x: number, z: number): CellInfo {
    const d = Math.hypot(x, z) / UNIT_PER_KM;
    const band = bandOf(d);
    const heightM = this.heightM(x, z);
    const density = this.density(x, z);
    const r = hash2(Math.round(x), Math.round(z), 31);
    let form: BuildingForm;
    if (band.index === 0) form = r < 0.7 ? 'hutong' : 'slab';
    else if (band.index === 5 && r < 0.4) form = 'village';
    else if (heightM > 120) form = r < 0.55 ? 'tower' : 'office';
    else if (r < 0.1) form = 'industrial';
    else if (heightM > 55) form = r < 0.5 ? 'slab' : 'tower';
    else form = 'slab';
    if (form === 'hutong') return { heightM: Math.min(heightM, 14), density, form, lit: 0.32 };
    if (form === 'village') return { heightM: Math.min(heightM, 24), density, form, lit: 0.25 };
    const lit = form === 'office' || form === 'tower' ? 0.86 : form === 'slab' ? 0.52 : 0.22;
    return { heightM, density, form, lit };
  }
}

let singleton: CityField | null = null;

export function getField(): CityField {
  if (!singleton) singleton = new CityField();
  return singleton;
}
