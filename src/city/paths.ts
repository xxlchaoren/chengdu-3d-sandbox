import {
  CLUSTERS,
  GREENS,
  GREEN_BELT,
  LAKES,
  METRO,
  POIS,
  RADIALS,
  RINGS,
  RIVERS,
  poiPlanar,
  ringRadiusPoint,
  type LakeDef,
  type PoiDef,
  type RingDef,
} from '../geo/chengdu.ts';
import {
  UNIT_PER_KM,
  closeRing,
  distOf,
  polar,
  project,
  smoothPath,
  type Planar,
} from '../geo/project.ts';
import { groundHeight } from './terrain.ts';

/** 一条被离散化的线：等距点列 + 每点的自然地面高度。 */
export interface PolyPath {
  name: string;
  pts: Planar[];
  /** 与 pts 等长，存 groundHeight(x, z)。 */
  ys: number[];
  lengthUnits: number;
  closed: boolean;
  kind: 'ring' | 'radial' | 'river' | 'metro' | 'greenway';
  widthM?: number;
  color?: string;
  ringIndex?: number;
  elevated?: boolean;
  express?: boolean;
  stations?: number;
}

/** 环线路径：用 ringRadiusPoint 保证 southStretch 一致。 */
function ringPath(ring: RingDef, index: number): PolyPath {
  const r = ring.radiusKm * UNIT_PER_KM;
  const steps = Math.max(64, Math.round((2 * Math.PI * r) / 2.2));
  const pts: Planar[] = [];
  for (let i = 0; i < steps; i++) {
    const a = (i / steps) * 360;
    pts.push(ringRadiusPoint(ring, a));
  }
  const closed = true;
  return wrap(ring.name, pts, closed, 'ring', { widthM: ring.widthM, ringIndex: index, elevated: ring.elevated });
}

/** 放射线路径：从城内起点沿方位角到外端，可带横向偏移（lateralKm）。 */
function radialPath(def: (typeof RADIALS)[number]): PolyPath {
  const from = def.axis ? 0 : 1.2;
  const lat = def.lateralKm ? def.lateralKm * UNIT_PER_KM : 0;
  const dir = polar(1, def.bearingDeg);
  const side = { x: -dir.z, z: dir.x };
  const pts: Planar[] = [];
  const step = 1.6;
  const len = def.lengthKm * UNIT_PER_KM;
  for (let d = from * UNIT_PER_KM; d <= len; d += step) {
    pts.push({ x: dir.x * d + side.x * lat, z: dir.z * d + side.z * lat });
  }
  return wrap(def.name, pts, false, 'radial', { widthM: def.widthM });
}

function wrap(
  name: string,
  pts: Planar[],
  closed: boolean,
  kind: PolyPath['kind'],
  extra: Partial<PolyPath> = {},
): PolyPath {
  let lengthUnits = 0;
  for (let i = 1; i < pts.length; i++) lengthUnits += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z);
  if (closed) {
    const last = pts[pts.length - 1];
    lengthUnits += Math.hypot(last.x - pts[0].x, last.z - pts[0].z);
  }
  return { name, pts, ys: pts.map((p) => groundHeight(p.x, p.z)), lengthUnits, closed, kind, ...extra };
}

export const RING_PATHS: PolyPath[] = RINGS.map((r, i) => ringPath(r, i));
export const RADIAL_PATHS: PolyPath[] = RADIALS.map(radialPath);
export const RIVER_PATHS: PolyPath[] = RIVERS.map((r) =>
  wrap(r.name, smoothPath(r.latLon, 12, 1.6), false, 'river', { widthM: r.widthM }),
);

export const METRO_PATHS: PolyPath[] = METRO.map((m) => {
  if (m.ringKm) {
    const r = m.ringKm * UNIT_PER_KM;
    const steps = Math.max(64, Math.round((2 * Math.PI * r) / 2.4));
    const pts: Planar[] = [];
    for (let i = 0; i < steps; i++) pts.push(polar(m.ringKm, (i / steps) * 360));
    return wrap(m.name, pts, true, 'metro', { color: m.color, express: m.express, stations: m.stations });
  }
  return wrap(m.name, smoothPath(m.latLon ?? [], 10, 2.0), false, 'metro', { color: m.color, express: m.express, stations: m.stations });
});

/** 环城生态公园绿道（100km 骑行道）画在绕城绿带中心。 */
export const GREENWAY_PATH: PolyPath = (() => {
  const km = (GREEN_BELT.innerKm + GREEN_BELT.outerKm) / 2;
  const steps = 260;
  const pts: Planar[] = [];
  for (let i = 0; i < steps; i++) pts.push(polar(km, (i / steps) * 360));
  return wrap(GREEN_BELT.label, pts, true, 'greenway');
})();

export interface EllipseShape {
  name: string;
  center: Planar;
  /** 长短半轴（场景单位）。 */
  a: number;
  b: number;
  /** 长轴朝向（弧度，从 +X 起算）。 */
  rot: number;
  ring: Planar[];
  kind?: string;
}

function ellipse(name: string, lat: number, lon: number, radiusKm: number, elongate: number, bearingDeg: number, kind?: string): EllipseShape {
  const center = project(lat, lon);
  const b = radiusKm * UNIT_PER_KM;
  const a = b * elongate;
  const rot = ((bearingDeg - 90) * Math.PI) / 180;
  const ring: Planar[] = [];
  const steps = 48;
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const ex = Math.cos(t) * a;
    const ey = Math.sin(t) * b;
    ring.push({ x: center.x + ex * Math.cos(rot) - ey * Math.sin(rot), z: center.z + ex * Math.sin(rot) + ey * Math.cos(rot) });
  }
  return { name, center, a, b, rot, ring: closeRing(ring), kind };
}

export const LAKE_SHAPES: EllipseShape[] = LAKES.map((l: LakeDef) =>
  ellipse(l.name, l.lat, l.lon, l.radiusKm, l.elongate ?? 1, l.bearing ?? 90),
);

/** 公园／湿地／农场：建筑生成要避让，绿地图层要画出来。 */
export const PARK_SHAPES: EllipseShape[] = GREENS.filter((g) => g.kind !== 'ridge').map((g) =>
  ellipse(g.name, g.lat, g.lon, g.radiusKm, g.elongate ?? 1, g.bearing ?? 90, g.kind),
);

export interface PoiPlace extends PoiDef {
  p: Planar;
  /** 到市中心的公里数与方位角。 */
  distKm: number;
  bearingDeg: number;
}

export const POI_PLACES: PoiPlace[] = POIS.map((poi) => {
  const p = poiPlanar(poi);
  return { ...poi, p, distKm: distOf(p), bearingDeg: (Math.atan2(p.x, -p.z) * 180) / Math.PI };
});

export interface ClusterPlace {
  name: string;
  p: Planar;
  radius: number;
  peakM: number;
  density: number;
}

export const CLUSTER_PLACES: ClusterPlace[] = CLUSTERS.map((c) => ({
  name: c.name,
  p: project(c.lat, c.lon),
  radius: c.radiusKm * UNIT_PER_KM,
  peakM: c.peakM,
  density: c.density,
}));

/** ribbon 的 yAt 回调：沿等距点列取自然地面高度。 */
export function followTerrain(path: PolyPath, lift = 0): (t: number) => number {
  const n = path.pts.length;
  return (t: number) => {
    const i = Math.min(n - 1, Math.max(0, Math.round(t * (n - 1))));
    return path.ys[i] + lift;
  };
}

/** 高架路面相对自然地面的抬升（场景单位，1 单位 = 100m）。 */
export function elevatedLift(path: PolyPath): number {
  if (!path.elevated) return 0;
  return 0.1;
}

export { RINGS, RADIALS, METRO, GREEN_BELT, UNIT_PER_KM };
export type { RingDef };
