/** 成都地标手工建模：POI.model key → 程序化生成器；全部在 landmarkRoot 的缩放组内以「米」为单位建模。 */
import * as THREE from 'three';
import { hash2 } from '../geo/rng.ts';
import { POI_PLACES, type PoiPlace } from './paths.ts';
import { box, cylinder, emissive, facadeBox, facadeMaterial, paint, PAL } from './matkit.ts';
import { faceCenter, groundY, landmarkRoot } from './place.ts';

export interface LandmarkOptions {
  detailed: boolean;
}

const DEG = Math.PI / 180;

/* 共用单位几何体：实例化件靠缩放复用同一份几何，避免每座地标都新建 BufferGeometry。 */
const G_BOX = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
const G_CYL = new THREE.CylinderGeometry(1, 1, 1, 8).translate(0, 0.5, 0);
const G_CONE = new THREE.ConeGeometry(1, 1, 8).translate(0, 0.5, 0);
const G_PYR = new THREE.ConeGeometry(1, 1, 4).rotateY(Math.PI / 4).translate(0, 0.5, 0);
const G_SPHERE = new THREE.SphereGeometry(1, 10, 7);
const G_GABLE = makeGable();

function makeGable(): THREE.BufferGeometry {
  const A = [-0.5, 0, -0.5];
  const B = [-0.5, 0, 0.5];
  const C = [0.5, 0, 0.5];
  const D = [0.5, 0, -0.5];
  const E = [-0.5, 1, 0];
  const F = [0.5, 1, 0];
  const tri = [A, E, F, A, F, D, B, C, F, B, F, E, A, B, E, D, F, C, A, C, B, A, D, C];
  const pos: number[] = [];
  for (const v of tri) pos.push(v[0], v[1], v[2]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.computeVertexNormals();
  return geo;
}

const glowCache = new Map<string, THREE.MeshStandardMaterial>();
/** 夜景自发光件按「颜色+强度」共享材质，一座塔不必产生十几个材质。 */
function glow(hex: string, intensity = 1.2): THREE.MeshStandardMaterial {
  const key = `${hex}|${intensity}`;
  const hit = glowCache.get(key);
  if (hit) return hit;
  const mat = emissive(hex, intensity);
  glowCache.set(key, mat);
  return mat;
}

interface Xf {
  x?: number;
  y?: number;
  z?: number;
  rx?: number;
  ry?: number;
  rz?: number;
  sx?: number;
  sy?: number;
  sz?: number;
}

const _m = new THREE.Matrix4();
const _p = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _s = new THREE.Vector3();

/** 重复构件一律实例化：y 是底面标高（单位几何已把原点挪到底面）。 */
function inst(geo: THREE.BufferGeometry, mat: THREE.Material, list: Xf[], cast = true): THREE.InstancedMesh {
  const mesh = new THREE.InstancedMesh(geo, mat, Math.max(1, list.length));
  for (let i = 0; i < list.length; i++) {
    const t = list[i];
    _p.set(t.x ?? 0, t.y ?? 0, t.z ?? 0);
    _q.setFromEuler(_e.set(t.rx ?? 0, t.ry ?? 0, t.rz ?? 0));
    _s.set(t.sx ?? 1, t.sy ?? 1, t.sz ?? 1);
    mesh.setMatrixAt(i, _m.compose(_p, _q, _s));
  }
  mesh.count = list.length;
  mesh.instanceMatrix.needsUpdate = true;
  mesh.castShadow = cast;
  mesh.receiveShadow = true;
  if (list.length) mesh.computeBoundingSphere();
  return mesh;
}

/** 水平圆盘／环带：地面铺装、观景平台、屋面开孔。sx/sz 用于把正圆压成椭圆。 */
function annulus(rIn: number, rOut: number, mat: THREE.Material, y = 0, seg = 32, sx = 1, sz = 1): THREE.Mesh {
  const geo = new THREE.RingGeometry(Math.max(0.02, rIn), Math.max(rIn + 0.05, rOut), seg, 1).rotateX(-Math.PI / 2);
  const m = new THREE.Mesh(geo, mat);
  m.position.y = y;
  m.scale.set(sx, 1, sz);
  m.receiveShadow = true;
  return m;
}

/** 四坡顶（庑殿／攒尖近似）：w×d 为檐口平面尺寸，y 为檐口标高。 */
function roof4(w: number, d: number, h: number, mat: THREE.Material, x = 0, y = 0, z = 0): THREE.Mesh {
  const m = new THREE.Mesh(G_PYR, mat);
  m.scale.set(w * Math.SQRT1_2, h, d * Math.SQRT1_2);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

/** 悬山顶：屋脊沿 X，rotY = 90° 改为沿 Z。 */
function gableRoof(w: number, d: number, h: number, mat: THREE.Material, x = 0, y = 0, z = 0, rotY = 0): THREE.Mesh {
  const m = new THREE.Mesh(G_GABLE, mat);
  m.scale.set(w, h, d);
  m.position.set(x, y, z);
  m.rotation.y = rotY;
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

/** 攒尖顶（亭子）：n 边形锥，y 为檐口标高。 */
function spire(r: number, h: number, n: number, mat: THREE.Material, x = 0, y = 0, z = 0): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, n), mat);
  m.scale.y = 1;
  m.position.set(x, y + h / 2, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

/** 檐下一圈立柱，(cx, cz) 是柱廊中心。 */
function colonnade(cols: number, w: number, d: number, h: number, y = 0, r = 0.55, mat: THREE.Material = paint(PAL.red), cx = 0, cz = 0): THREE.InstancedMesh {
  const list: Xf[] = [];
  const per = 2 * (w + d);
  for (let i = 0; i < cols; i++) {
    const s = (i / cols) * per;
    let x = 0;
    let z = 0;
    if (s < w) {
      x = -w / 2 + s;
      z = -d / 2;
    } else if (s < w + d) {
      x = w / 2;
      z = -d / 2 + (s - w);
    } else if (s < 2 * w + d) {
      x = w / 2 - (s - w - d);
      z = d / 2;
    } else {
      x = -w / 2;
      z = d / 2 - (s - 2 * w - d);
    }
    list.push({ x: x + cx, z: z + cz, y, sx: r, sy: h, sz: r });
  }
  return inst(G_CYL, mat, list);
}

/** 树丛：位置由确定性哈希给出，同一 POI 每次重建完全一致。 */
function trees(count: number, cx: number, cz: number, rx: number, rz: number, h: number, seed: number, mat: THREE.Material = paint(PAL.green)): THREE.InstancedMesh {
  const list: Xf[] = [];
  for (let i = 0; i < count; i++) {
    const a = hash2(i, seed, 3) * Math.PI * 2;
    const rr = 0.22 + 0.78 * hash2(i, seed, 11);
    const s = 0.72 + 0.6 * hash2(i, seed, 23);
    list.push({ x: cx + Math.cos(a) * rx * rr, z: cz + Math.sin(a) * rz * rr, sy: h * s, sx: s * 0.6, sz: s * 0.6 });
  }
  return inst(G_CONE, mat, list);
}

/** 多层阁／塔：每层墙体 + 出檐屋顶，逐层收分。 */
function tiers(g: THREE.Group, n: number, w: number, d: number, tierH: number, y0: number, wallMat: THREE.Material, roofMat: THREE.Material, shrink = 0.88, x = 0, z = 0): void {
  let y = y0;
  let cw = w;
  let cd = d;
  for (let i = 0; i < n; i++) {
    g.add(box(cw, tierH, cd, wallMat, { x, y: y + tierH / 2, z }));
    y += tierH;
    g.add(roof4(cw * 1.45, cd * 1.45, tierH * 0.6, roofMat, x, y, z));
    y += tierH * 0.48;
    cw *= shrink;
    cd *= shrink;
  }
}

/** 米制根组：落在自然地面、朝向天府广场。 */
function place(poi: PoiPlace, biasDeg = 0): THREE.Group {
  const g = landmarkRoot(poi.p);
  g.rotation.y = faceCenter(poi.p) + biasDeg * DEG;
  return g;
}

/** 跨路／跨河／跑道类模型必须钉在绝对方位上，否则 faceCenter 的偏转会把它拧离走廊。局部 -Z 指向 bearingDeg。 */
function placeBearing(poi: PoiPlace, bearingDeg: number): THREE.Group {
  const g = landmarkRoot(poi.p);
  g.rotation.y = -bearingDeg * DEG;
  return g;
}

/** XY 平面内两点之间的直杆，用于桁架与悬索。 */
function strut(ax: number, ay: number, bx: number, by: number, thick: number, mat: THREE.Material, z = 0): THREE.Mesh {
  const dx = bx - ax;
  const dy = by - ay;
  const m = box(Math.hypot(dx, dy) || 1, thick, thick, mat, { x: (ax + bx) / 2, y: (ay + by) / 2, z });
  m.rotation.z = Math.atan2(dy, dx);
  return m;
}

type Builder = (poi: PoiPlace, detailed: boolean) => THREE.Object3D;

const ROOF_MAT = paint(PAL.oldRoof, 0.7);
const WOOD_MAT = paint(PAL.wood, 0.82);
const WALL_MAT = paint(PAL.plasterWarm, 0.88);
const RED_WALL = paint(PAL.red, 0.82);
const STONE_MAT = paint(PAL.stone, 0.9);
const GOLD_MAT = paint(PAL.gold, 0.35, 0.65);
const STRAW_MAT = paint('#b9a163', 0.95);
const BRICK_MAT = paint(PAL.brick, 0.9);
const GLASS_ROOF = paint('#a9c4d2', 0.25, 0.4);
const PAVEMENT = paint('#c6bfb1', 0.92);
const ASPHALT = paint('#3c3d40', 0.95);
const STEEL = paint(PAL.metal, 0.45, 0.6);

/* ——— 生成器 ——— */

const tianfuSquare: Builder = (poi, detailed) => {
  const g = placeBearing(poi, 0);
  g.add(box(300, 1.2, 250, PAVEMENT, { y: 0.6 }));
  // 太阳神鸟地雕：直径 12 m
  g.add(cylinder(6, 6, 0.7, 26, GOLD_MAT, { y: 1.5 }));
  g.add(annulus(4.1, 5.6, glow('#ffc46a', 1.5), 2, 26));
  g.add(box(60, 2.6, 6, paint('#8e9a52', 0.95), { x: -84, z: 30 }));
  g.add(box(60, 2.6, 6, paint('#8e9a52', 0.95), { x: 84, z: 30 }));
  if (detailed) {
    // 北缘金顶翼楼与 190 m 外的科技馆主馆（另一个 POI）拼成一组展场
    g.add(facadeBox(150, 20, 26, { base: PAL.plasterWarm, kind: 2, litRatio: 0.32 }, { z: -140 }));
    g.add(roof4(164, 40, 9, GOLD_MAT, 0, 20, -140));
    g.add(colonnade(12, 150, 30, 11, 0, 0.8, paint('#b3ab9d'), 0, -140));
    g.add(trees(18, 0, 112, 128, 20, 14, 4));
  }
  return g;
};

const hallBlock: Builder = (poi, detailed) => {
  const n = poi.name;
  const g = place(poi);
  const h = poi.heightM ?? 38;
  const isSci = n.includes('科技馆');
  const isMus = n.includes('成都博物馆');
  const isTheatre = n.includes('大剧院');
  const isNature = n.includes('自然');
  const w = isNature ? 170 : isSci ? 150 : isMus ? 110 : 126;
  const d = isMus ? 62 : isNature ? 96 : 44;
  g.add(facadeBox(w, h, d, { base: isSci ? PAL.plasterWarm : PAL.white, kind: 2, litRatio: 0.34, roughness: 0.6 }, {}));
  g.add(box(w * 1.16, 2.4, d * 1.14, PAVEMENT, { y: 1.2 }));
  if (isSci) {
    g.add(roof4(w * 1.1, d * 1.5, 13, GOLD_MAT, 0, h));
    const clock = annulus(6.4, 8, glow('#fff0c4', 1.1), 0, 20);
    clock.position.set(0, h * 0.7, -d / 2 - 0.6);
    clock.rotation.x = -Math.PI / 2;
    g.add(clock);
  } else if (isMus) {
    const fins: Xf[] = [];
    for (let i = 0; i <= 24; i++) fins.push({ x: -w / 2 + (i * w) / 24, z: -d / 2 - 1, sy: h * 0.74, sx: 1.2, sz: 1.2 });
    for (let i = 0; i <= 24; i++) fins.push({ x: w / 2 + 1, z: -d / 2 + (i * d) / 24, sy: h * 0.74, sx: 1.2, sz: 1.2 });
    for (let i = 0; i <= 24; i++) fins.push({ x: -w / 2 - 1, z: -d / 2 + (i * d) / 24, sy: h * 0.74, sx: 1.2, sz: 1.2 });
    g.add(inst(G_BOX, paint('#8a5a3c', 0.55, 0.5), fins, false));
    g.add(box(w * 0.6, 6, d * 0.6, paint('#6e6a63'), { y: h + 3 }));
  } else if (isTheatre) {
    const shell = new THREE.Mesh(new THREE.CylinderGeometry(d * 0.66, d * 0.66, w * 0.9, 16, 1, false, 0, Math.PI), GLASS_ROOF);
    shell.rotation.z = Math.PI / 2;
    shell.position.set(0, 1, d / 2 - 4);
    shell.castShadow = true;
    g.add(shell);
    g.add(box(w * 0.9, 3, 22, PAVEMENT, { z: d / 2 + 16, y: 1.5 }));
  } else if (isNature) {
    // 「蜀犬吠日」：一块歪着掀起的屋面
    const lid = box(w * 1.02, 3.4, d * 1.06, paint('#cfd6d8', 0.4, 0.35), { y: h + 1 });
    lid.rotation.z = 0.13;
    lid.rotation.x = -0.05;
    g.add(lid);
    g.add(box(24, h * 0.6, 24, GLASS_ROOF, { x: w * 0.3, y: h * 0.5, z: d * 0.2 }));
  }
  if (detailed) {
    g.add(inst(G_BOX, PAVEMENT, [
      { x: 0, z: d / 2 + 14, sx: w * 0.5, sy: 1.2, sz: 6 },
      { x: 0, z: d / 2 + 22, sx: w * 0.62, sy: 2.2, sz: 6 },
    ], false));
    const poles: Xf[] = [];
    for (let i = 0; i < 5; i++) poles.push({ x: -40 + i * 20, z: d / 2 + 34, sy: 14, sx: 0.35, sz: 0.35 });
    g.add(inst(G_CYL, STEEL, poles, false));
    g.add(trees(10, 0, -d / 2 - 26, w * 0.5, 16, 12, 9));
  }
  return g;
};

const temple: Builder = (poi, detailed) => {
  const g = place(poi);
  const W = 118;
  const D = 158;
  g.add(box(W, 6.5, 1.6, RED_WALL, { z: D / 2 - 3, y: 3.25 }));
  g.add(box(W, 6.5, 1.6, RED_WALL, { z: -D / 2 + 3, y: 3.25 }));
  g.add(box(1.6, 6.5, D, RED_WALL, { x: W / 2 - 3, y: 3.25 }));
  g.add(box(1.6, 6.5, D, RED_WALL, { x: -W / 2 + 3, y: 3.25 }));
  if (detailed) {
    // 墙头盖瓦只在看远处时才看得见，低模直接省掉
    g.add(roof4(W + 6, 7, 2.2, ROOF_MAT, 0, 6.5, D / 2 - 3));
    g.add(roof4(W + 6, 7, 2.2, ROOF_MAT, 0, 6.5, -D / 2 + 3));
    g.add(roof4(7, D + 6, 2.2, ROOF_MAT, W / 2 - 3, 6.5));
    g.add(roof4(7, D + 6, 2.2, ROOF_MAT, -W / 2 + 3, 6.5));
  }
  // 山门
  g.add(box(26, 8, 9, BRICK_MAT, { z: D / 2 - 16, y: 4 }));
  g.add(roof4(34, 17, 4.4, ROOF_MAT, 0, 8, D / 2 - 16));
  // 大殿：台基 + 重檐
  g.add(box(56, 1.8, 40, STONE_MAT, { z: 8, y: 0.9 }));
  g.add(box(38, 9, 24, WALL_MAT, { z: 8, y: 6.3 }));
  g.add(colonnade(14, 43, 28, 9, 1.8, 0.55, paint(PAL.red), 0, 8));
  g.add(roof4(52, 36, 3.4, ROOF_MAT, 0, 10.8, 8));
  g.add(roof4(40, 27, 5.2, ROOF_MAT, 0, 14.2, 8));
  // 后楼（藏经楼）
  g.add(box(30, 12, 16, WALL_MAT, { z: -D / 2 + 26, y: 6 }));
  g.add(roof4(40, 24, 4.6, ROOF_MAT, 0, 12, -D / 2 + 26));
  if (poi.name.includes('文殊')) {
    tiers(g, 5, 14, 14, 4.4, 0, WALL_MAT, ROOF_MAT, 0.85, -40, -28);
    g.add(cylinder(0.5, 1.5, 6, 6, GOLD_MAT, { x: -40, y: 36, z: -28 }));
  }
  if (poi.name.includes('青羊')) {
    g.add(cylinder(9, 9.6, 1, 8, STONE_MAT, { x: 34, z: -24, y: 0.5 }));
    g.add(colonnade(8, 15, 15, 7, 1, 0.5, paint(PAL.red), 34, -24));
    g.add(spire(11.6, 6, 8, ROOF_MAT, 34, 8, -24));
    g.add(cylinder(2.6, 2.6, 3.4, 8, GOLD_MAT, { x: 34, y: 16, z: -24 }));
  }
  if (poi.name.includes('武侯')) {
    const huts: Xf[] = [];
    for (let i = 0; i < 12; i++) huts.push({ x: -55 + (i % 6) * 22, z: D / 2 + 16 + Math.floor(i / 6) * 20, sx: 17, sy: 6, sz: 12 });
    g.add(inst(G_BOX, BRICK_MAT, huts));
    g.add(inst(G_GABLE, ROOF_MAT, huts.map((t) => ({ x: t.x, z: t.z, y: 6, sx: 19, sy: 3.2, sz: 14 }))));
  }
  if (detailed) {
    g.add(trees(22, 0, -16, W * 0.42, D * 0.4, 16, 5, paint('#2f5741')));
    g.add(cylinder(2.2, 2.6, 3.4, 10, paint('#6b6560'), { z: 36, y: 1.7 }));
  }
  return g;
};

const oldStreet: Builder = (poi, detailed) => {
  const g = place(poi);
  if (poi.name.includes('东郊记忆')) {
    const halls: Array<[number, number, number, number, number]> = [[-70, -34, 150, 20, 44], [64, -46, 90, 17, 36], [-16, 62, 120, 22, 38]];
    for (const [x, z, w, h, d] of halls) {
      g.add(facadeBox(w, h, d, { base: PAL.brick, kind: 3, litRatio: 0.3 }, { x, z }));
      g.add(roof4(w * 1.04, d * 1.6, 4.4, ROOF_MAT, x, h, z));
    }
    g.add(cylinder(2.8, 4, 62, 10, paint('#9c5a4a', 0.85), { x: 96, z: 46 }));
    g.add(cylinder(2.4, 3.4, 52, 10, paint('#9c5a4a', 0.85), { x: 120, z: 46 }));
    const truss: Xf[] = [];
    for (let i = 0; i < 12; i++) truss.push({ x: -132 + i * 24, z: -34, sy: 18, sx: 0.9, sz: 0.9, rz: (i % 2 ? 1 : -1) * 0.3 });
    g.add(inst(G_CYL, STEEL, truss, false));
    if (detailed) g.add(trees(12, -40, 106, 80, 24, 13, 6));
    return g;
  }
  const houses: Xf[] = [];
  const rows = detailed ? 3 : 2;
  for (let r = 0; r < rows; r++) {
    for (let i = 0; i < 8; i++) {
      const x = -84 + i * 24;
      const z = -66 + r * 56;
      houses.push({ x, z, sx: 17, sy: 5.4 + (i % 3) * 0.9, sz: 13 });
      if (i % 4 !== 3) houses.push({ x: x + 6, z: z + 24, sx: 13, sy: 5, sz: 11 });
    }
  }
  g.add(inst(G_BOX, BRICK_MAT, houses));
  g.add(inst(G_GABLE, ROOF_MAT, houses.map((t) => ({ x: t.x, y: t.sy ?? 5, z: t.z, sx: (t.sx ?? 16) + 2.4, sy: 3, sz: (t.sz ?? 12) + 2 }))));
  const lanes: Xf[] = [];
  for (let r = 0; r < rows; r++) lanes.push({ x: 0, z: -44 + r * 56, sx: 210, sy: 0.4, sz: 7 });
  g.add(inst(G_BOX, paint('#9c968b', 0.95), lanes, false));
  g.add(inst(G_BOX, RED_WALL, [
    { x: -9, z: 78, sy: 11, sx: 1.8, sz: 1.8 },
    { x: 9, z: 78, sy: 11, sx: 1.8, sz: 1.8 },
  ]));
  g.add(box(24, 2.2, 3, RED_WALL, { z: 78, y: 11 }));
  g.add(box(30, 1.8, 4, RED_WALL, { z: 78, y: 14.4 }));
  g.add(roof4(34, 8, 2.6, ROOF_MAT, 0, 16.2, 78));
  if (detailed) g.add(trees(10, 0, -88, 90, 14, 11, 12));
  return g;
};

const thatchedCottage: Builder = (poi, detailed) => {
  const g = place(poi);
  const huts: Array<[number, number, number, number]> = [[-30, 34, 16, 11], [8, 46, 13, 9], [38, 26, 15, 10], [-14, -8, 12, 9]];
  for (const [x, z, w, d] of huts) {
    g.add(box(w, 4.4, d, paint('#c9b79a', 0.92), { x, z, y: 2.2 }));
    g.add(gableRoof(w + 3.6, d + 3, 4.6, STRAW_MAT, x, 4.4, z));
  }
  g.add(box(34, 9, 20, WALL_MAT, { z: -46, y: 4.5 }));
  g.add(roof4(44, 30, 5.6, ROOF_MAT, 0, 9, -46));
  // 花径：一条复廊
  const posts: Xf[] = [];
  for (let i = 0; i < 12; i++) posts.push({ x: -66 + i * 11, z: 10, sy: 4.2, sx: 0.4, sz: 0.4 });
  g.add(inst(G_CYL, WOOD_MAT, posts, false));
  g.add(gableRoof(136, 7, 2.2, ROOF_MAT, -8, 4.2, 10));
  g.add(box(46, 0.6, 30, paint('#5f7f74', 0.35, 0.2), { x: 52, z: -8, y: 0.3 }));
  if (detailed) {
    g.add(trees(16, 0, 0, 74, 62, 15, 17, paint('#3d6b46')));
    g.add(inst(G_CYL, paint('#7f8a4a'), [
      { x: -52, z: 46, sy: 6, sx: 0.35, sz: 0.35 }, { x: -45, z: 50, sy: 5.4, sx: 0.35, sz: 0.35 },
      { x: 60, z: 42, sy: 6.2, sx: 0.35, sz: 0.35 }, { x: 66, z: 36, sy: 5.6, sx: 0.35, sz: 0.35 },
    ], false));
  }
  return g;
};

const jinsha: Builder = (poi, detailed) => {
  const g = place(poi);
  // 遗迹馆：一枚斜切在草地上的椭圆贝壳（亚洲最大单体保护棚之一）
  const shell = new THREE.Mesh(new THREE.CylinderGeometry(34, 86, 26, 26), paint('#b7bcc0', 0.45, 0.4));
  shell.scale.set(1.32, 1, 1);
  shell.position.y = 13;
  shell.castShadow = true;
  shell.receiveShadow = true;
  g.add(shell);
  g.add(annulus(0.4, 33, GLASS_ROOF, 26.6, 26, 1.32, 1));
  g.add(box(230, 0.5, 176, paint('#7f8f5c', 0.95), { y: 0.25 }));
  g.add(cylinder(6, 6, 0.6, 24, GOLD_MAT, { x: 66, z: 44, y: 0.9 }));
  const halo = annulus(4, 5.4, glow('#ffcb72', 1.6), 1.3, 24);
  halo.position.set(66, 1.3, 44);
  g.add(halo);
  g.add(facadeBox(64, 16, 30, { base: PAL.concrete, kind: 2, litRatio: 0.3 }, { x: -104, z: 62 }));
  if (detailed) {
    const pits: Xf[] = [];
    for (let i = 0; i < 14; i++) pits.push({ x: -70 + (i % 7) * 22, z: -52 - Math.floor(i / 7) * 22, sx: 16, sy: 1.2, sz: 12 });
    g.add(inst(G_BOX, paint('#8d7f6a', 0.95), pits, false));
    g.add(trees(16, 44, -74, 90, 26, 13, 21));
  }
  return g;
};

const taikooLi: Builder = (poi, detailed) => {
  const g = place(poi);
  const shops: Xf[] = [];
  for (let r = 0; r < 3; r++) {
    for (let i = 0; i < 7; i++) shops.push({ x: -72 + i * 24, z: -30 + r * 30, sx: 20, sy: 8 + (i % 2) * 3.4, sz: 17 });
  }
  g.add(inst(G_BOX, WALL_MAT, shops));
  g.add(inst(G_GABLE, ROOF_MAT, shops.map((t) => ({ x: t.x, y: t.sy ?? 8, z: t.z, sx: (t.sx ?? 20) + 2, sy: 2.6, sz: (t.sz ?? 17) + 2, ry: Math.PI / 2 }))));
  const h1 = poi.heightM ?? 98;
  g.add(facadeBox(46, h1, 40, { base: PAL.plasterCool, kind: 1, litRatio: 0.55, roughness: 0.4 }, { x: -66, z: 76 }));
  if (detailed) {
    g.add(facadeBox(38, h1 * 1.15, 34, { base: '#7f97a6', kind: 1, litRatio: 0.6, roughness: 0.35 }, { x: 66, z: 80 }));
    const court = annulus(9, 21, paint('#6f8b62', 0.95), 0.4, 20);
    court.position.set(0, 0.4, 70);
    g.add(court);
    g.add(trees(10, 0, 24, 70, 60, 11, 31));
  }
  return g;
};

const ifsPanda: Builder = (poi, detailed) => {
  const g = place(poi);
  g.add(facadeBox(96, 34, 74, { base: PAL.plasterWarm, kind: 2, litRatio: 0.45 }, { z: 12 }));
  const h = poi.heightM ?? 248;
  g.add(facadeBox(56, h, 46, { base: '#6f8ea4', kind: 1, litRatio: 0.6, glassTint: '#8fb4cc', roughness: 0.3 }, { x: -6, z: -20 }));
  g.add(box(56, 3, 46, paint('#dfe6ea', 0.35, 0.4), { x: -6, y: h, z: -20 }));
  g.add(cylinder(0.6, 2, 26, 6, STEEL, { x: -6, y: h + 16, z: -20 }));
  // 爬墙熊猫：15 m 长，趴在 34 m 高的裙房屋檐上，前爪翻过檐口
  const white = paint('#f3f1ec', 0.6);
  const black = paint('#1c1c1e', 0.6);
  const body = new THREE.Mesh(G_SPHERE, white);
  body.scale.set(3.4, 2.9, 6.6);
  body.position.set(14, 37, 40);
  body.rotation.x = -0.35;
  body.castShadow = true;
  g.add(body);
  const head = new THREE.Mesh(G_SPHERE, white);
  head.scale.setScalar(3.2);
  head.position.set(14, 39.6, 48.4);
  head.castShadow = true;
  g.add(head);
  g.add(inst(G_SPHERE, black, [
    { x: 11.4, y: 42.6, z: 48.4, sx: 1.1, sy: 1.1, sz: 1.1 },
    { x: 16.6, y: 42.6, z: 48.4, sx: 1.1, sy: 1.1, sz: 1.1 },
    { x: 10.6, y: 34.5, z: 50.4, sx: 1.3, sy: 1.7, sz: 1.3 },
    { x: 17.4, y: 34.5, z: 50.4, sx: 1.3, sy: 1.7, sz: 1.3 },
    { x: 11.4, y: 35.4, z: 34.6, sx: 1.5, sy: 1.9, sz: 1.5 },
    { x: 16.6, y: 35.4, z: 34.6, sx: 1.5, sy: 1.9, sz: 1.5 },
  ]));
  if (detailed) {
    g.add(box(96, 1.2, 8, glow('#ffb765', 0.8), { z: 50, y: 34.6 }));
    g.add(facadeBox(40, 96, 36, { base: PAL.plasterCool, kind: 1, litRatio: 0.5 }, { x: 76, z: 54 }));
    g.add(trees(6, -44, 62, 34, 20, 10, 41));
  }
  return g;
};

const tvTower: Builder = (poi, detailed) => {
  const g = place(poi);
  const H = poi.heightM ?? 339;
  g.add(facadeBox(96, 14, 78, { base: PAL.concrete, kind: 2, litRatio: 0.4 }, {}));
  g.add(cylinder(4.5, 17, 200, 12, paint(PAL.concrete, 0.8), { y: 114 }));
  g.add(cylinder(2.2, 4.5, 26, 10, paint(PAL.concrete, 0.8), { y: 227 }));
  const pod = new THREE.Mesh(G_SPHERE, paint('#cdd3d6', 0.5, 0.25));
  pod.scale.set(28, 17, 28);
  pod.position.y = 212;
  pod.castShadow = true;
  g.add(pod);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(31, 3.2, 6, 24).rotateX(Math.PI / 2), paint('#e4e8ea', 0.45, 0.3));
  ring.position.y = 217;
  ring.castShadow = true;
  g.add(ring);
  g.add(annulus(24, 31, glow('#ff9f52', 1.2), 224, 24));
  g.add(cylinder(0.7, 2.6, H - 240, 8, STEEL, { y: 240 + (H - 240) / 2 }));
  const beacon = new THREE.Mesh(G_SPHERE, glow('#ff5a4a', 1.6));
  beacon.scale.setScalar(1.8);
  beacon.position.y = H;
  g.add(beacon);
  if (detailed) {
    g.add(annulus(6.6, 9, glow('#8fd8ff', 0.9), 186, 18));
    g.add(annulus(8.4, 11, glow('#8fd8ff', 0.7), 148, 18));
    g.add(inst(G_CYL, paint('#9aa1a6'), [
      { x: -15, z: -15, sy: 26, sx: 1.5, sz: 1.5 }, { x: 15, z: -15, sy: 26, sx: 1.5, sz: 1.5 },
      { x: -15, z: 15, sy: 26, sx: 1.5, sz: 1.5 }, { x: 15, z: 15, sy: 26, sx: 1.5, sz: 1.5 },
    ], false));
    g.add(trees(8, 0, 78, 70, 22, 12, 43));
  }
  return g;
};

const pavilion: Builder = (poi, detailed) => {
  const lake = poi.name.includes('汇龙');
  const g = place(poi);
  g.add(cylinder(lake ? 15 : 11, lake ? 16 : 12, 1.4, 6, STONE_MAT, { y: 0.7 }));
  g.add(colonnade(6, 15, 15, 6.4, 1.4, 0.45, RED_WALL));
  g.add(spire(11.6, 3.6, 6, ROOF_MAT, 0, 7.8));
  g.add(cylinder(6.6, 7.6, 2.6, 6, WALL_MAT, { y: 11 }));
  g.add(spire(9.4, 4.6, 6, ROOF_MAT, 0, 12.2));
  g.add(cylinder(0.35, 0.9, 2.6, 6, GOLD_MAT, { y: 17.4 }));
  if (lake) {
    g.add(box(6, 0.6, 46, WOOD_MAT, { z: 32, y: 1.2 }));
    g.add(inst(G_BOX, WOOD_MAT, [
      { x: -18, z: 26, sx: 26, sy: 0.5, sz: 6 }, { x: 20, z: 36, sx: 20, sy: 0.5, sz: 6 },
    ], false));
    g.add(trees(14, 0, -36, 60, 30, 13, 47, paint('#3c6b4c')));
  } else {
    g.add(box(72, 0.6, 34, paint('#6f8f86', 0.35, 0.2), { z: 36, y: 0.3 }));
  }
  if (detailed) {
    g.add(inst(G_BOX, STONE_MAT, [
      { x: -22, z: 14, sx: 4, sy: 0.9, sz: 4 }, { x: 22, z: 14, sx: 4, sy: 0.9, sz: 4 }, { x: 0, z: 26, sx: 4, sy: 0.9, sz: 4 },
    ], false));
    g.add(trees(7, 0, -26, 40, 20, 11, 53));
  }
  return g;
};

const stoneBridge: Builder = (poi, detailed) => {
  // 安顺廊桥跨锦江：九眼桥一带河道为 NW—SE，桥身取 NE—SW（局部 +X 指向方位 45°）
  const g = placeBearing(poi, -45);
  const L = 96;
  const stoneMat = paint('#a89a86', 0.9);
  g.add(box(L, 2, 13, STONE_MAT, { y: 6.6 }));
  for (const x of [-30, 0, 30]) {
    const arch = new THREE.Mesh(new THREE.TorusGeometry(13, 2.4, 5, 14, Math.PI), stoneMat);
    arch.position.set(x, 5.4, 0);
    arch.scale.set(1, 1, 2.2);
    arch.castShadow = true;
    g.add(arch);
  }
  g.add(inst(G_BOX, stoneMat, [
    { x: -L / 2 - 5, sy: 8, sx: 12, sz: 15 }, { x: L / 2 + 5, sy: 8, sx: 12, sz: 15 },
    { x: -15, sy: 6, sx: 7, sz: 9 }, { x: 15, sy: 6, sx: 7, sz: 9 },
  ]));
  // 桥上廊屋
  g.add(box(L - 14, 7, 10, WALL_MAT, { y: 12.1 }));
  g.add(gableRoof(L - 8, 14, 3.6, ROOF_MAT, 0, 15.6));
  g.add(roof4(16, 16, 4.4, ROOF_MAT, -L / 2 + 8, 15.6));
  g.add(roof4(16, 16, 4.4, ROOF_MAT, L / 2 - 8, 15.6));
  if (detailed) {
    const lanterns: Xf[] = [];
    for (let i = 0; i < 10; i++) lanterns.push({ x: -40 + i * 9, y: 16.6, sx: 1.3, sy: 1.8, sz: 1.3 });
    g.add(inst(G_BOX, glow('#ffb257', 1.5), lanterns, false));
    g.add(trees(6, 0, 34, 46, 14, 11, 59));
  }
  return g;
};

const wangjiangLou: Builder = (poi, detailed) => {
  const g = place(poi);
  g.add(box(52, 5, 46, STONE_MAT, { y: 2.5 }));
  // 崇丽阁四层，取「既丽且崇」，连台基约 39 m
  tiers(g, 4, 22, 22, 5.6, 5, WALL_MAT, ROOF_MAT, 0.9);
  g.add(cylinder(0.5, 1.6, 6, 6, GOLD_MAT, { y: 44.6 }));
  g.add(colonnade(12, 26, 26, 5.6, 5, 0.55, RED_WALL));
  // 浣笺亭
  if (detailed) {
    g.add(cylinder(7, 7.6, 1, 6, STONE_MAT, { x: -40, z: 32, y: 0.5 }));
    g.add(colonnade(6, 11, 11, 5.4, 1, 0.4, paint(PAL.red), -40, 32));
    g.add(spire(9, 4.4, 6, ROOF_MAT, -40, 6.4, 32));
  }
  g.add(box(30, 8, 16, BRICK_MAT, { x: 42, z: 28, y: 4 }));
  g.add(roof4(38, 24, 4, ROOF_MAT, 42, 8, 28));
  // 望江楼以竹得名：细高圆柱代替锥形树
  const bamboo: Xf[] = [];
  for (let i = 0; i < (detailed ? 54 : 24); i++) {
    const a = hash2(i, 5, 61) * Math.PI * 2;
    const rr = 26 + hash2(i, 9, 61) * 44;
    bamboo.push({ x: Math.cos(a) * rr, z: Math.sin(a) * rr + 12, sy: 11 + hash2(i, 13, 61) * 5, sx: 0.28, sz: 0.28 });
  }
  g.add(inst(G_CYL, paint('#5c8a4e', 0.9), bamboo, false));
  if (detailed) g.add(box(70, 6, 2, STONE_MAT, { z: -32, y: 3 }));
  return g;
};

const monument: Builder = (poi, detailed) => {
  const g = place(poi);
  const H = poi.heightM ?? 32;
  g.add(annulus(0.5, 34, PAVEMENT, 0.2, 28));
  g.add(inst(G_BOX, STONE_MAT, [
    { sx: 30, sy: 1.4, sz: 30 }, { sx: 22, sy: 1.4, sz: 22, y: 1.4 }, { sx: 14, sy: 1.6, sz: 14, y: 2.8 },
  ], false));
  g.add(box(6.4, H - 9, 6.4, paint('#cdc7bb', 0.8), { y: 4.4 + (H - 9) / 2 }));
  g.add(roof4(8.8, 8.8, 5, paint('#bdb6a9', 0.8), 0, H - 4.6));
  g.add(inst(G_BOX, paint('#b8b2a6'), [
    { x: -11, z: 30, sy: 12, sx: 2, sz: 2 }, { x: 11, z: 30, sy: 12, sx: 2, sz: 2 },
  ]));
  g.add(box(26, 2, 2.6, paint('#b8b2a6'), { z: 30, y: 12 }));
  g.add(roof4(30, 7, 2.4, ROOF_MAT, 0, 14, 30));
  if (detailed) {
    g.add(trees(16, 0, 0, 46, 46, 15, 67, paint('#33604a')));
    g.add(box(52, 0.6, 8, paint('#6f8f7a', 0.45), { z: -34, y: 0.3 }));
  }
  return g;
};

const globalCenter: Builder = (poi, detailed) => {
  const g = place(poi);
  const L = 500;
  const W = 400;
  g.add(facadeBox(L, 48, W, { base: PAL.plasterCool, kind: 2, litRatio: 0.3, roughness: 0.6 }, {}));
  // 桶形拱顶：quadraticCurveTo 的峰值只有控制点的一半，所以控制点抬到 104
  const shape = new THREE.Shape();
  shape.moveTo(-W / 2, 0);
  shape.quadraticCurveTo(0, 104, W / 2, 0);
  shape.lineTo(-W / 2, 0);
  const vault = new THREE.ExtrudeGeometry(shape, { depth: L, bevelEnabled: false, curveSegments: 14 });
  vault.rotateY(Math.PI / 2);
  vault.translate(-L / 2, 0, 0);
  const lid = new THREE.Mesh(vault, paint('#c3cacd', 0.45, 0.35));
  lid.position.y = 48;
  lid.castShadow = true;
  lid.receiveShadow = true;
  g.add(lid);
  g.add(box(L + 4, 2.4, 26, GLASS_ROOF, { y: 99 }));
  g.add(box(L + 6, 1, 8, glow('#7fd4ff', 0.7), { y: 100.6 }));
  g.add(facadeBox(46, 132, 46, { base: '#7c93a3', kind: 1, litRatio: 0.55 }, { x: -L / 2 + 62, z: -W / 2 + 62 }));
  if (detailed) {
    const fins: Xf[] = [];
    for (let i = 0; i < 24; i++) fins.push({ x: -L / 2 + 11 + i * (L / 24), z: W / 2 + 1, sx: 1.6, sy: 44, sz: 1.6 });
    g.add(inst(G_BOX, paint('#b4bbbe', 0.5, 0.3), fins, false));
    g.add(box(L * 0.7, 1.4, 40, glow('#ffb061', 0.5), { y: 0.9, z: W / 2 + 34 }));
  }
  return g;
};

const twinTowers: Builder = (poi, detailed) => {
  const g = place(poi);
  const H = poi.heightM ?? 218;
  g.add(facadeBox(200, 10, 64, { base: PAL.plasterCool, kind: 2, litRatio: 0.45 }, {}));
  for (const dx of [-56, 56]) {
    g.add(facadeBox(60, H, 34, { base: '#6b8ca4', kind: 1, litRatio: 0.62, glassTint: '#8ab6d4', roughness: 0.28 }, { x: dx, z: -8 }));
    g.add(box(62, 4, 36, paint('#dfe6ea', 0.35, 0.4), { x: dx, y: H, z: -8 }));
    g.add(box(64, 2.4, 38, glow('#6fd2ff', 1.3), { x: dx, y: H + 6, z: -8 }));
    g.add(cylinder(0.7, 2.4, 34, 6, STEEL, { x: dx, y: H + 26, z: -8 }));
    // 竖向 LED 灯带：夜景里两栋楼合起来是一块屏幕
    const strips: Xf[] = [];
    for (let i = 0; i < 7; i++) strips.push({ x: dx - 27 + i * 9, y: 12, z: 9.4, sx: 1.3, sy: H - 26, sz: 0.7 });
    g.add(inst(G_BOX, glow('#ff8a4c', 0.85), strips, false));
  }
  if (detailed) {
    g.add(box(150, 1.4, 26, glow('#ffd08a', 0.6), { y: 10.8, z: 42 }));
    g.add(inst(G_BOX, paint('#5f7a52'), [
      { x: -134, z: 22, sx: 22, sy: 3, sz: 22 }, { x: 134, z: 22, sx: 22, sy: 3, sz: 22 },
    ], false));
  }
  return g;
};

const jiaoziRing: Builder = (poi, detailed) => {
  const g = placeBearing(poi, 0);
  const RED = paint('#b8371f', 0.5, 0.35);
  g.add(annulus(45, 55, paint('#c9c3b8', 0.85), 28, 44));
  g.add(annulus(45, 55, paint('#8f8a82'), 26.4, 44));
  const outer = new THREE.Mesh(new THREE.TorusGeometry(55, 2.6, 6, 44).rotateX(Math.PI / 2), RED);
  outer.position.y = 31.4;
  outer.castShadow = true;
  g.add(outer);
  const inner = new THREE.Mesh(new THREE.TorusGeometry(45, 2, 6, 40).rotateX(Math.PI / 2), RED);
  inner.position.y = 31.4;
  inner.castShadow = true;
  g.add(inner);
  g.add(annulus(54, 55.6, glow('#ff7a48', 1.2), 28.3, 44));
  const legs: Xf[] = [];
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    legs.push({
      x: Math.cos(a) * 50, z: Math.sin(a) * 50, sy: 28, sx: 2.6, sz: 2.6,
      rz: -Math.cos(a) * 0.08, rx: Math.sin(a) * 0.08,
    });
  }
  g.add(inst(G_CYL, RED, legs));
  const posts: Xf[] = [];
  for (let i = 0; i < 40; i++) {
    const a = (i / 40) * Math.PI * 2;
    posts.push({ x: Math.cos(a) * 54.4, z: Math.sin(a) * 54.4, y: 28.2, sy: 1.6, sx: 0.28, sz: 0.28 });
  }
  g.add(inst(G_CYL, STEEL, posts, false));
  if (detailed) {
    g.add(annulus(44.4, 45.6, glow('#ff7a48', 1), 28.3, 40));
    g.add(box(14, 6, 4, glow('#ffd39a', 0.9), { z: 63, y: 3 }));
  }
  return g;
};

const euCenter: Builder = (poi, detailed) => {
  const g = place(poi);
  const H = poi.heightM ?? 192;
  const h1 = H * 0.66;
  const h2 = H - h1;
  g.add(facadeBox(46, h1, 40, { base: '#7295ab', kind: 1, litRatio: 0.58, glassTint: '#9dc0d8', roughness: 0.3 }, { z: -18 }));
  g.add(facadeBox(38, h2, 34, { base: '#7f9fb4', kind: 1, litRatio: 0.6, roughness: 0.3 }, { y: h1 + h2 / 2, z: -18 }));
  g.add(box(40, 3, 36, glow('#8fdcff', 1.1), { y: H, z: -18 }));
  // 天使大厅：一枚三角玻璃体楔在塔楼脚下
  const tri = new THREE.Shape();
  tri.moveTo(-52, 0);
  tri.lineTo(52, 0);
  tri.lineTo(10, 46);
  tri.closePath();
  const wedge = new THREE.ExtrudeGeometry(tri, { depth: 44, bevelEnabled: false, curveSegments: 1 });
  wedge.translate(0, 0, -22);
  const mat = facadeMaterial({ base: PAL.glassCool, kind: 1, litRatio: 0.5, roughness: 0.22, metalness: 0.25 });
  mat.userData.dim.set(104, 46, 44, 0);
  mat.userData.win.set(0, 1, 1, 0);
  const hall = new THREE.Mesh(wedge, mat);
  hall.position.set(6, 0, 36);
  hall.castShadow = true;
  hall.receiveShadow = true;
  g.add(hall);
  if (detailed) {
    g.add(facadeBox(34, 74, 32, { base: PAL.plasterCool, kind: 1, litRatio: 0.5 }, { x: -64, z: 30 }));
    g.add(box(120, 1.4, 30, glow('#ffd08a', 0.55), { y: 0.7, z: 70 }));
  }
  return g;
};

const officePark: Builder = (poi, detailed) => {
  const g = place(poi);
  if (poi.name.includes('公园')) {
    g.add(box(340, 0.7, 240, paint('#7f9a52', 0.95), { y: 0.35 }));
    g.add(box(220, 0.6, 46, paint('#4f7f8c', 0.32, 0.25), { y: 0.9, z: 44 }));
    g.add(box(300, 0.4, 9, PAVEMENT, { y: 1.1, z: -32 }));
    g.add(trees(detailed ? 46 : 22, 0, 0, 150, 100, 14, 71));
    for (const dx of detailed ? [-92, 92] : [92]) {
      g.add(cylinder(7, 7.4, 0.9, 6, STONE_MAT, { x: dx, z: -72, y: 0.45 }));
      g.add(colonnade(6, 11, 11, 3.4, 0.9, 0.3, WOOD_MAT, dx, -72));
      g.add(spire(9.6, 3.8, 6, ROOF_MAT, dx, 4.3, -72));
    }
    return g;
  }
  g.add(box(320, 6, 230, PAVEMENT, { y: 3 }));
  const blocks: Xf[] = [];
  for (let r = 0; r < 2; r++) {
    for (let i = 0; i < 4; i++) {
      if (r === 0 && i === 1) continue; // 留院落缺口，园区不是浇成一块的
      if (!detailed && (r === 1 || i === 2)) continue;
      blocks.push({ x: -105 + i * 70, z: -60 + r * 120 });
    }
  }
  for (const b of blocks) {
    const bx = b.x ?? 0;
    const bz = b.z ?? 0;
    const h = 40 + hash2(bx, bz, 3) * 28;
    g.add(facadeBox(52, h, 42, { base: '#7f97a8', kind: 1, litRatio: 0.55, roughness: 0.4 }, { x: bx, y: 6 + h / 2, z: bz }));
    g.add(box(54, 1.6, 44, paint('#c9d2d4', 0.5), { x: bx, y: 6 + h, z: bz }));
  }
  if (detailed) {
    g.add(facadeBox(80, 92, 46, { base: '#6d8ea3', kind: 1, litRatio: 0.6 }, { x: 150, y: 52, z: 0 }));
    g.add(trees(24, 0, 0, 150, 105, 12, 73, paint('#4d7a52')));
  }
  return g;
};

const cbdSupertall: Builder = (poi, detailed) => {
  const g = place(poi);
  const H = poi.heightM ?? 400;
  const segs: Array<[number, number]> = [[0.3, 0.68], [0.28, 0.6], [0.24, 0.52], [0.18, 0.44]];
  let y = 0;
  for (const [fh, k] of segs) {
    const h = H * fh;
    g.add(facadeBox(64 * k, h, 52 * k, { base: '#68899f', kind: 1, litRatio: 0.62, glassTint: '#9dc4dd', roughness: 0.26 }, { y: y + h / 2, z: -10 }));
    y += h;
  }
  g.add(roof4(40, 32, H * 0.05, glow('#9fe2ff', 0.85), 0, y, -10));
  g.add(cylinder(0.6, 2.2, H * 0.1, 6, STEEL, { y: y + H * 0.1, z: -10 }));
  g.add(facadeBox(210, 14, 90, { base: PAL.plasterCool, kind: 2, litRatio: 0.45 }, { z: 44 }));
  if (detailed) {
    const partners: Array<[number, number, number]> = [[-112, -62, 0.34], [110, -72, 0.44], [-118, 80, 0.28], [114, 98, 0.36], [4, -136, 0.5]];
    for (const [x, z, k] of partners) {
      const h = H * k;
      g.add(facadeBox(44, h, 38, { base: '#7b96a8', kind: 1, litRatio: 0.55, roughness: 0.36 }, { x, z, y: 14 + h / 2 }));
      g.add(box(46, 2, 40, glow('#7ccfff', 0.45), { x, z, y: 14 + h }));
    }
    g.add(annulus(70, 98, PAVEMENT, 0.3, 26));
  }
  return g;
};

const expoHall: Builder = (poi, detailed) => {
  const g = place(poi);
  g.add(box(560, 0.8, 430, PAVEMENT, { y: 0.4 }));
  g.add(facadeBox(520, 34, 62, { base: PAL.white, kind: 2, litRatio: 0.4, roughness: 0.5 }, { z: -152 }));
  g.add(box(524, 2.6, 66, paint('#d7dcde', 0.4, 0.3), { y: 34, z: -152 }));
  for (let i = 0; i < (detailed ? 4 : 2); i++) {
    const z = 40 + i * (detailed ? 62 : 124);
    g.add(facadeBox(74, 28, 46, { base: '#dfe2e3', kind: 3, litRatio: 0.34 }, { x: -162, z }));
    g.add(facadeBox(74, 28, 46, { base: '#dfe2e3', kind: 3, litRatio: 0.34 }, { x: 162, z }));
  }
  g.add(box(24, 20, 250, GLASS_ROOF, { y: 10, z: 122 }));
  if (detailed) {
    const lamps: Xf[] = [];
    for (let i = 0; i < 16; i++) lamps.push({ x: -300 + i * 40, z: 300, sy: 14, sx: 0.6, sz: 0.6 });
    g.add(inst(G_CYL, STEEL, lamps, false));
    g.add(inst(G_BOX, glow('#ffd7a0', 0.9), lamps.map((l) => ({ x: l.x, y: 14, z: l.z, sx: 3, sy: 0.6, sz: 1.2 })), false));
    g.add(box(300, 1.4, 60, glow('#9fd8ff', 0.4), { y: 0.9, z: -60 }));
  }
  return g;
};

const lakeCampus: Builder = (poi, detailed) => {
  const g = place(poi);
  if (poi.name.includes('三岔湖')) {
    const isles: Xf[] = [];
    const roofs: Xf[] = [];
    for (let i = 0; i < 6; i++) {
      const a = hash2(i, 3, 91) * Math.PI * 2;
      const rr = 90 + hash2(i, 7, 91) * 230;
      const x = Math.cos(a) * rr;
      const z = Math.sin(a) * rr * 0.7;
      const s = 40 + hash2(i, 11, 91) * 66;
      isles.push({ x, z, sx: s, sy: 3 + hash2(i, 13, 91) * 4, sz: s * 0.7 });
      roofs.push({ x, z: z - 8, y: 6.4, sx: 15 * Math.SQRT1_2, sy: 5.5, sz: 15 * Math.SQRT1_2 });
    }
    g.add(inst(G_CYL, paint('#6f8b58', 0.95), isles));
    g.add(inst(G_PYR, ROOF_MAT, roofs));
    g.add(box(9, 1.4, 90, WOOD_MAT, { x: -22, z: 62, y: 3, rotY: 0.4 }));
    if (detailed) g.add(trees(20, 0, 0, 250, 170, 11, 83, paint('#40684b')));
    return g;
  }
  g.add(box(420, 0.6, 300, paint('#7d9260', 0.95), { y: 0.3 }));
  const halls: Array<[number, number, number, number, number]> = [[-120, -62, 90, 52, 26], [-112, 62, 76, 46, 20], [58, -74, 66, 44, 32]];
  const blocks = detailed ? halls : halls.slice(0, 2);
  for (const [x, z, w, d, h] of blocks) {
    g.add(facadeBox(w, h, d, { base: PAL.white, kind: 1, litRatio: 0.5, roughness: 0.45 }, { x, z }));
    g.add(box(w + 3, 1.4, d + 3, paint('#c9d2d4', 0.5), { x, y: h, z }));
  }
  // 弧形研究楼：非盒体几何，窗格尺寸要手动写进 uniform
  const arcMat = facadeMaterial({ base: '#89a9bd', kind: 1, litRatio: 0.55, roughness: 0.3, metalness: 0.2 });
  arcMat.userData.dim.set(196, 30, 144, 0);
  arcMat.userData.win.set(0, 1, 1, 0);
  const arc = new THREE.Mesh(new THREE.CylinderGeometry(72, 72, 30, 22, 1, false, 0, Math.PI * 1.35), arcMat);
  arc.position.set(150, 15, 44);
  arc.castShadow = true;
  arc.receiveShadow = true;
  g.add(arc);
  if (detailed) {
    g.add(trees(30, -40, 40, 190, 120, 13, 87));
    g.add(box(180, 0.8, 12, PAVEMENT, { y: 0.4, z: 136 }));
  }
  return g;
};

/** 碗状看台 + 内场 + 环状屋盖。 */
function stadiumBowl(g: THREE.Group, a: number, b: number, h: number, roofH: number, detailed: boolean, roofMat: THREE.Material): void {
  const bowl = cylinder(a * 0.82, a, h, 30, paint('#cfd3d4', 0.6), {});
  bowl.scale.z = b / a;
  g.add(bowl);
  const field = cylinder(a * 0.7, a * 0.7, 1.2, 26, paint('#4f7f42', 0.9), {});
  field.scale.z = b / a;
  field.position.y = 1.4;
  g.add(field);
  const roof = new THREE.Mesh(new THREE.RingGeometry(a * 0.66, a * 1.06, 30, 1).rotateX(-Math.PI / 2), roofMat);
  roof.scale.set(1, 1, b / a);
  roof.position.y = roofH;
  roof.castShadow = true;
  g.add(roof);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(a * 1.06, 1.8, 5, 30).rotateX(Math.PI / 2), STEEL);
  rim.scale.set(1, 1, b / a);
  rim.position.y = roofH;
  g.add(rim);
  if (detailed) {
    const masts: Xf[] = [];
    for (let i = 0; i < 20; i++) {
      const t = (i / 20) * Math.PI * 2;
      masts.push({ x: Math.cos(t) * a * 1.03, z: Math.sin(t) * b * 1.03, sy: h * 0.72, sx: 1.5, sz: 1.5 });
    }
    g.add(inst(G_CYL, paint('#b7bcbe', 0.5, 0.4), masts, false));
  }
}

const donganhu: Builder = (poi, detailed) => {
  const g = place(poi);
  g.add(box(560, 0.6, 430, PAVEMENT, { y: 0.3 }));
  const roofMat = facadeMaterial({ base: '#e6eaec', kind: 2, litRatio: 0.42, roughness: 0.4 });
  roofMat.userData.dim.set(300, 50, 240, 0);
  roofMat.userData.win.set(0, 2, 2, 0);
  roofMat.transparent = true;
  roofMat.opacity = 0.92;
  stadiumBowl(g, 130, 108, 34, 50, detailed, roofMat);
  // 屋面开孔成太阳神鸟：深色洞口 + 一圈发光檐
  g.add(cylinder(52, 52, 1.4, 24, paint('#2f3438', 0.7), { y: 49.4 }));
  g.add(annulus(46, 52, glow('#ffc46a', 1.1), 51, 24));
  const halls: Array<[number, number, number, number, number]> = [[-232, -122, 110, 70, 34], [-238, 12, 96, 64, 30], [-232, 134, 84, 58, 26]];
  for (const [x, z, w, d, h] of halls) {
    g.add(facadeBox(w, h, d, { base: PAL.plasterWarm, kind: 2, litRatio: 0.45 }, { x, z }));
    g.add(roof4(w + 8, d + 8, 4, paint('#d8dfe1', 0.4, 0.3), x, h, z));
  }
  if (detailed) {
    g.add(trees(24, 120, 176, 160, 60, 13, 101));
    g.add(box(120, 14, 26, GLASS_ROOF, { x: 120, z: -176, y: 7 }));
  }
  return g;
};

const stadium: Builder = (poi, detailed) => {
  const g = place(poi);
  if (poi.name.includes('音乐') || (poi.tag ?? '').includes('万人')) {
    // 露天音乐公园：主舞台是张拉膜「金三角」，看台沿扇面铺开
    const canopy = spire(76, 34, 3, paint('#eef1f2', 0.4, 0.2), 0, 16, -74);
    canopy.scale.set(1, 1, 0.7);
    canopy.rotation.y = 0.5;
    g.add(canopy);
    g.add(box(120, 12, 40, paint('#4a4e52', 0.7), { z: -74, y: 6 }));
    const seats: Xf[] = [];
    for (let r = 0; r < 7; r++) {
      for (let i = 0; i < 5; i++) seats.push({ x: -96 + i * 48, z: 18 + r * 26, sx: 46, sy: 2.4 + r * 1.1, sz: 22 });
    }
    g.add(inst(G_BOX, paint('#9a9488', 0.9), seats, false));
    const masts: Xf[] = [];
    for (let i = 0; i < 6; i++) {
      const t = (i / 6) * Math.PI * 2;
      masts.push({ x: Math.cos(t) * 66, z: -74 + Math.sin(t) * 48, sy: 42, sx: 1.6, sz: 1.6 });
    }
    g.add(inst(G_CYL, STEEL, masts, false));
    if (detailed) g.add(trees(22, 0, 130, 150, 60, 14, 103));
    return g;
  }
  const roofMat = facadeMaterial({ base: '#e9edef', kind: 2, litRatio: 0.4, roughness: 0.35 });
  roofMat.userData.dim.set(280, 55, 230, 0);
  roofMat.userData.win.set(0, 2, 2, 0);
  roofMat.transparent = true;
  roofMat.opacity = 0.9;
  g.add(box(360, 0.6, 300, PAVEMENT, { y: 0.3 }));
  stadiumBowl(g, 142, 116, 38, 55, detailed, roofMat);
  g.add(annulus(92, 100, glow('#ffd39a', 0.6), 55.6, 28, 1.2, 0.95));
  if (detailed) {
    g.add(cylinder(3, 4, 62, 8, paint('#b0b5b8', 0.5, 0.5), { x: -176, z: 124 }));
    g.add(trees(18, 60, -146, 120, 40, 13, 107));
  }
  return g;
};

const pandaBase: Builder = (poi, detailed) => {
  const g = place(poi);
  g.add(box(300, 0.6, 250, paint('#728c56', 0.95), { y: 0.3 }));
  const halls: Array<[number, number, number]> = [[-80, -52, 80], [60, -62, 96], [-40, 60, 70], [90, 58, 64]];
  for (const [x, z, w] of halls) {
    g.add(facadeBox(w, 16, 40, { base: PAL.plasterWarm, kind: 2, litRatio: 0.4 }, { x, z }));
    g.add(roof4(w + 8, 48, 4.6, ROOF_MAT, x, 16, z));
  }
  const fence: Xf[] = [];
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    fence.push({ x: Math.cos(a) * 120, z: Math.sin(a) * 94, ry: -a, sx: 28, sy: 2.4, sz: 0.5 });
  }
  g.add(inst(G_BOX, paint('#8f7a5c', 0.9), fence, false));
  const bamboo: Xf[] = [];
  for (let i = 0; i < (detailed ? 70 : 32); i++) {
    const a = hash2(i, 17, 111) * Math.PI * 2;
    const rr = 58 + hash2(i, 23, 111) * 92;
    bamboo.push({ x: Math.cos(a) * rr, z: Math.sin(a) * rr, sy: 7 + hash2(i, 29, 111) * 5, sx: 0.3, sz: 0.3 });
  }
  g.add(inst(G_CYL, paint('#6f9a52', 0.9), bamboo, false));
  // 熊猫：白色实例做身体／头，黑色实例做耳与四肢，远处也认得出
  const spots: Array<[number, number, number]> = [[-28, 22, 0.5], [26, -12, 2.1], [72, 26, 4.3]];
  const white: Xf[] = [];
  const black: Xf[] = [];
  for (const [x, z, ry] of spots) {
    const c = Math.cos(ry);
    const s = Math.sin(ry);
    // 局部坐标：l 左右、f 头朝向；实例自身的 ry 与偏移必须用同一套旋转，否则熊猫会横着站
    const at = (l: number, f: number): [number, number] => [x + l * c + f * s, z - l * s + f * c];
    white.push({ x, z, y: 2.4, ry, sx: 2.6, sy: 2.2, sz: 3.6 });
    const [hx, hz] = at(0, 3.6);
    white.push({ x: hx, z: hz, y: 3.6, sx: 2, sy: 1.9, sz: 1.9 });
    for (const [l, f] of [[-1.7, 1.4], [1.7, 1.4], [-1.6, -1.6], [1.6, -1.6]] as const) {
      const [bx, bz] = at(l, f);
      black.push({ x: bx, z: bz, y: 1.2, sx: 0.9, sy: 1.2, sz: 0.9 });
    }
    for (const side of [-1, 1]) {
      const [ex, ez] = at(side * 1.1, 4.2);
      black.push({ x: ex, z: ez, y: 5.3, sx: 0.7, sy: 0.7, sz: 0.7 });
    }
  }
  g.add(inst(G_SPHERE, paint('#f4f2ee', 0.7), white));
  g.add(inst(G_SPHERE, paint('#1e1e20', 0.7), black));
  if (detailed) {
    g.add(box(60, 1.2, 10, PAVEMENT, { y: 1.2, z: 116 }));
    g.add(trees(14, -96, 96, 70, 40, 15, 113, paint('#3f6b4a')));
  }
  return g;
};

const stationRoof: Builder = (poi, detailed) => {
  // 站台线方位近似取该 POI 相对市中心的放射方向
  const g = placeBearing(poi, poi.bearingDeg);
  const isEast = poi.name.includes('东');
  const isNorth = poi.name.includes('北');
  const len = isEast ? 305 : isNorth ? 210 : 250;
  const span = isEast ? 105 : isNorth ? 62 : 87.5;
  const ridge = poi.heightM ?? 39;
  const lines = isEast ? 14 : isNorth ? 8 : 11;
  const roofMat = paint('#c3c9cc', 0.45, 0.4);
  for (const side of [-1, 1]) {
    const slab = box(span * 0.56, 1.8, len, roofMat, { x: (side * span) / 4, y: ridge - 4 });
    slab.rotation.z = -side * 0.13;
    g.add(slab);
  }
  g.add(box(6, 2.4, len + 6, STEEL, { y: ridge - 1 }));
  const cols: Xf[] = [];
  for (let i = 0; i < Math.round(len / 18); i++) {
    for (const side of [-1, 1]) cols.push({ x: (side * span) / 2.1, z: -len / 2 + 9 + i * 18, sy: ridge - 6, sx: 1.3, sz: 1.3 });
  }
  g.add(inst(G_CYL, paint('#b4b9bb', 0.5, 0.4), cols));
  const plat: Xf[] = [];
  for (let i = 0; i < lines; i++) plat.push({ x: -span / 2 + 8 + (i * (span - 16)) / Math.max(1, lines - 1), sy: 1.3, sx: 6, sz: len * 0.96 });
  g.add(inst(G_BOX, paint('#8e8b84', 0.95), plat, false));
  g.add(inst(G_BOX, ASPHALT, plat.map((p) => ({ x: p.x, y: 0.2, z: p.z, sx: 2.4, sy: 0.4, sz: p.sz })), false));
  g.add(facadeBox(isEast ? 190 : 130, ridge * 0.66, 62, { base: PAL.plasterWarm, kind: 2, litRatio: 0.5 }, { z: len / 2 + 42 }));
  if (isNorth) {
    g.add(box(26, 46, 26, paint('#d3d0c8'), { x: -span / 2 - 36, z: -40, y: 23 }));
    g.add(cylinder(0.8, 2.4, 26, 6, glow('#ff6a52', 1.2), { x: -span / 2 - 36, y: 59, z: -40 }));
  }
  if (detailed) {
    const cat: Xf[] = [];
    for (let i = 0; i < 6; i++) cat.push({ x: 0, y: ridge - 8, z: -len / 2 + i * (len / 5), sx: span * 1.02, sy: 0.8, sz: 0.8 });
    g.add(inst(G_BOX, STEEL, cat, false));
    g.add(box(240, 0.8, 60, PAVEMENT, { z: len / 2 + 100, y: 0.4 }));
  }
  return g;
};

function runwayStrip(g: THREE.Group, x: number, len: number, wid: number, dashes: Xf[]): void {
  g.add(box(wid, 0.5, len, ASPHALT, { x, y: 0.6 }));
  for (let i = 0; i < Math.round(len / 90); i++) dashes.push({ x, y: 0.95, z: -len / 2 + 45 + i * 90, sx: 1.6, sy: 0.3, sz: 18 });
}

const airport: Builder = (poi, detailed) => {
  // 双流 02L/20R — 02R/20L：跑道方位约 20°
  const g = placeBearing(poi, 20);
  const dashes: Xf[] = [];
  g.add(box(1080, 0.4, 3880, paint('#7c7f78', 0.95), { y: 0.2, x: -70 }));
  runwayStrip(g, -300, 3600, 60, dashes);
  runwayStrip(g, 120, 3600, 45, dashes);
  g.add(inst(G_BOX, glow('#f2f4f4', 0.8), dashes, false));
  g.add(facadeBox(240, 30, 74, { base: PAL.white, kind: 2, litRatio: 0.45 }, { x: -660, z: -170 }));
  g.add(facadeBox(430, 40, 118, { base: PAL.white, kind: 2, litRatio: 0.5 }, { x: -720, z: 270 }));
  g.add(box(620, 0.5, 250, PAVEMENT, { x: -340, z: 40, y: 0.5 }));
  for (const z of [-120, 40, 200]) g.add(box(200, 12, 30, paint('#d9dcdd', 0.5), { x: -270, z, y: 6 }));
  g.add(cylinder(6, 9, 58, 10, paint('#c8ccce', 0.6), { x: -430, z: 440 }));
  g.add(cylinder(11, 8, 8, 10, GLASS_ROOF, { x: -430, y: 60, z: 440 }));
  // 机位：机身与机翼各一组实例，俯视才读得出是飞机
  const fuse: Xf[] = [];
  const wing: Xf[] = [];
  const count = detailed ? 46 : 22;
  for (let i = 0; i < count; i++) {
    const row = Math.floor(i / 12);
    const x = -430 + row * 150 + hash2(i, 5, 131) * 40;
    const z = -300 + (i % 12) * 56 + hash2(i, 9, 131) * 12;
    const ry = row % 2 ? 0.35 : -0.4;
    fuse.push({ x, z, y: 1.4, ry, sx: 4, sy: 4, sz: 34 });
    wing.push({ x, z, y: 2.4, ry, sx: 36, sy: 0.8, sz: 6 });
  }
  g.add(inst(G_BOX, paint('#e8eaeb', 0.5), fuse, false));
  g.add(inst(G_BOX, paint('#dcdfe1', 0.5), wing, false));
  if (detailed) {
    g.add(box(44, 16, 300, paint('#9fa4a6', 0.7), { x: -40, y: 8, z: -60 }));
    g.add(trees(14, -830, 640, 90, 60, 12, 137));
  }
  return g;
};

const airportTianfu: Builder = (poi, detailed) => {
  const g = placeBearing(poi, 18);
  const dashes: Xf[] = [];
  g.add(box(1240, 0.4, 4120, paint('#7c7f78', 0.95), { y: 0.2, x: 70 }));
  runwayStrip(g, -420, 4000, 60, dashes);
  runwayStrip(g, -160, 3800, 60, dashes);
  runwayStrip(g, 600, 3200, 45, dashes);
  g.add(inst(G_BOX, glow('#f2f4f4', 0.8), dashes, false));
  // 「太阳神鸟」：6 座卫星厅绕中央环状主楼
  const coreMat = facadeMaterial({ base: PAL.white, kind: 2, litRatio: 0.55, roughness: 0.4 });
  coreMat.userData.dim.set(260, 40, 260, 0);
  coreMat.userData.win.set(0, 2, 2, 0);
  const core = cylinder(130, 130, 40, 26, coreMat, { z: 300 });
  core.castShadow = true;
  g.add(core);
  g.add(cylinder(96, 132, 16, 26, GLASS_ROOF, { y: 48, z: 300 }));
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
    const x = Math.sin(a) * 250;
    const z = 300 - Math.cos(a) * 250;
    g.add(facadeBox(58, 30, 240, { base: '#eef0f1', kind: 2, litRatio: 0.5, roughness: 0.4 }, { x, z, rotY: -a }));
    if (detailed) g.add(box(60, 3, 240, glow('#9fd8ff', 0.4), { x, y: 30, z, rotY: -a }));
  }
  g.add(cylinder(214, 214, 0.6, 30, paint('#8f9a72', 0.95), { y: 0.4, z: 300 }));
  const fuse: Xf[] = [];
  const wing: Xf[] = [];
  for (let i = 0; i < (detailed ? 40 : 18); i++) {
    const a = ((i % 6) / 6) * Math.PI * 2 + Math.PI / 6;
    const r = 172 + Math.floor(i / 8) * 46;
    const spread = ((i % 8) - 3.5) * 0.1;
    const x = Math.sin(a + spread) * r;
    const z = 300 - Math.cos(a + spread) * r;
    fuse.push({ x, z, y: 1.4, ry: -a - spread, sx: 4, sy: 4, sz: 32 });
    wing.push({ x, z, y: 2.4, ry: -a - spread, sx: 34, sy: 0.8, sz: 5.6 });
  }
  g.add(inst(G_BOX, paint('#e8eaeb', 0.5), fuse, false));
  g.add(inst(G_BOX, paint('#dcdfe1', 0.5), wing, false));
  if (detailed) {
    g.add(cylinder(8, 12, 62, 10, paint('#c8ccce', 0.6), { x: 260, z: 660 }));
    g.add(facadeBox(120, 18, 60, { base: PAL.plasterCool, kind: 3, litRatio: 0.3 }, { x: -370, z: 740 }));
  }
  return g;
};

const danjingTai: Builder = (poi, detailed) => {
  const g = place(poi);
  // 「太阳神鸟」巢：一圈外倾钢肋托起环形观景台，702 m 山脊已由 landmarkRoot 抬好
  g.add(cylinder(46, 58, 4, 22, STONE_MAT, { y: 2 }));
  const ribs: Xf[] = [];
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    ribs.push({
      x: Math.cos(a) * 40, z: Math.sin(a) * 40, y: 3, sx: 2.6, sz: 2.6, sy: 30,
      rz: -Math.cos(a) * 0.3, rx: Math.sin(a) * 0.3,
    });
  }
  g.add(inst(G_BOX, paint('#c9a86a', 0.45, 0.5), ribs));
  g.add(annulus(16, 44, paint('#d8cdb4', 0.8), 30, 26));
  g.add(annulus(14, 16.4, glow('#ffc46a', 1.4), 30.8, 22));
  g.add(cylinder(13.6, 13.6, 1.2, 20, paint('#3b4046', 0.7), { y: 29.4 }));
  const rail: Xf[] = [];
  for (let i = 0; i < 30; i++) {
    const a = (i / 30) * Math.PI * 2;
    rail.push({ x: Math.cos(a) * 43, z: Math.sin(a) * 43, y: 30.2, sy: 1.4, sx: 0.25, sz: 0.25 });
  }
  g.add(inst(G_CYL, STEEL, rail, false));
  if (detailed) {
    g.add(facadeBox(28, 10, 18, { base: PAL.wood, kind: 2, litRatio: 0.4 }, { x: 70, z: 22 }));
    g.add(trees(26, 0, 0, 92, 78, 15, 149, paint('#38603f')));
  }
  return g;
};

const campusGate: Builder = (poi, detailed) => {
  const g = place(poi);
  const isUESTC = poi.name.includes('电子科技');
  const gateMat = paint(isUESTC ? '#b9b3a6' : '#a86a52', 0.85);
  g.add(inst(G_BOX, gateMat, [
    { x: -22, sx: 9, sy: 16, sz: 7 }, { x: 22, sx: 9, sy: 16, sz: 7 },
    { x: -40, sx: 6, sy: 9, sz: 6 }, { x: 40, sx: 6, sy: 9, sz: 6 },
  ]));
  g.add(box(58, 4.6, 9, gateMat, { y: 18.3 }));
  g.add(box(64, 1.8, 11, gateMat, { y: 21.5 }));
  g.add(roof4(70, 15, 4, ROOF_MAT, 0, 22.4));
  g.add(box(44, 3.2, 0.8, glow('#e8d9a8', 0.5), { y: 13, z: -4.9 }));
  g.add(box(120, 0.6, 26, PAVEMENT, { z: 32, y: 0.3 }));
  const libW = 76;
  const libH = isUESTC ? 54 : 42;
  g.add(facadeBox(libW, libH, 40, { base: PAL.brick, kind: 1, litRatio: 0.5 }, { x: -92, z: -114 }));
  if (!isUESTC) g.add(roof4(libW + 12, 52, 7, ROOF_MAT, -92, libH, -114));
  const dorms: Xf[] = [];
  for (let i = 0; i < (detailed ? 4 : 2); i++) dorms.push({ x: 40 + (i % 2) * 74, z: -70 - Math.floor(i / 2) * 82, sx: 52, sy: 44 + (i % 3) * 9, sz: 26 });
  g.add(inst(G_BOX, paint(isUESTC ? '#c3c7cb' : '#b07a63', 0.85), dorms));
  if (detailed) {
    g.add(trees(20, 0, -60, 120, 90, 14, 151));
    g.add(facadeBox(60, 24, 34, { base: PAL.concrete, kind: 3, litRatio: 0.4 }, { x: 152, z: 62 }));
  }
  return g;
};

const dujiangyanWeir: Builder = (poi, detailed) => {
  const g = placeBearing(poi, 311);
  const gravel = paint('#8c8577', 0.95);
  const water = paint('#4a7f86', 0.32, 0.25);
  // 内江／外江在这一带不在 RIVERS 里，用砂砾河床把分水工程垫进河里
  g.add(box(320, 0.6, 900, gravel, { y: 0.3, z: -60 }));
  g.add(box(110, 0.9, 860, water, { x: -98, y: 0.9, z: -60 }));
  g.add(box(140, 0.9, 860, water, { x: 102, y: 0.9, z: -60 }));
  // 鱼嘴：楔形分水堤
  const wedge = new THREE.Shape();
  wedge.moveTo(-28, -60);
  wedge.lineTo(28, -60);
  wedge.lineTo(0, 92);
  wedge.closePath();
  const leveeGeo = new THREE.ExtrudeGeometry(wedge, { depth: 12, bevelEnabled: false, curveSegments: 1 });
  leveeGeo.rotateX(-Math.PI / 2);
  const levee = new THREE.Mesh(leveeGeo, paint('#9c9483', 0.9));
  levee.position.set(2, 0.8, 0);
  levee.castShadow = true;
  g.add(levee);
  g.add(box(14, 4, 150, paint('#a8a091', 0.9), { y: 2, z: -110 }));
  // 飞沙堰：一道低溢流堰
  const weir = new THREE.Mesh(new THREE.TorusGeometry(120, 6, 4, 16, 1.1).rotateX(Math.PI / 2), paint('#b0a894', 0.9));
  weir.position.set(-40, 1.6, -250);
  weir.castShadow = true;
  g.add(weir);
  // 宝瓶口：两壁夹一窄口
  g.add(box(30, 22, 26, paint('#6f6a62', 0.95), { x: -80, z: -402, y: 11 }));
  g.add(box(30, 20, 26, paint('#6f6a62', 0.95), { x: -14, z: -402, y: 10 }));
  g.add(box(20, 1.2, 60, water, { x: -47, y: 2, z: -390 }));
  // 安澜索桥
  g.add(inst(G_BOX, WOOD_MAT, [{ x: 118, sy: 22, sx: 4, sz: 4 }, { x: 252, sy: 22, sx: 4, sz: 4 }]));
  const cableMat = paint('#5a5148', 0.6, 0.5);
  const pts: Array<[number, number]> = [[118, 21], [152, 12], [185, 9], [218, 12], [252, 21]];
  for (const z of [-4.5, 4.5]) {
    for (let i = 0; i < pts.length - 1; i++) g.add(strut(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], 0.6, cableMat, z));
  }
  const deck: Xf[] = [];
  const hang: Xf[] = [];
  for (let i = 0; i < 12; i++) {
    const t = i / 11;
    const x = 118 + t * 134;
    const y = 21 - Math.sin(t * Math.PI) * 12;
    deck.push({ x, y: y - 1.4, sx: 13, sy: 0.8, sz: 13 });
    hang.push({ x, y, sx: 0.45, sy: 1.4, sz: 0.45 });
  }
  g.add(inst(G_BOX, WOOD_MAT, deck, false));
  g.add(inst(G_BOX, cableMat, hang, false));
  // 二王庙依山而上
  for (let i = 0; i < (detailed ? 3 : 2); i++) {
    const y = i * 8;
    g.add(box(34, 10, 20, WALL_MAT, { x: 196, y: y + 5, z: -232 - i * 46 }));
    g.add(roof4(42, 28, 4.6, ROOF_MAT, 196, y + 10, -232 - i * 46));
  }
  if (detailed) {
    g.add(trees(24, 176, -320, 90, 130, 16, 157, paint('#38603f')));
    g.add(box(26, 3, 12, STONE_MAT, { x: 2, y: 1.5, z: 62 }));
  }
  return g;
};

const snowPeaks: Builder = (poi, detailed) => {
  // 地形已把这条山脊抬到雪线以上，这里只补「相对高差」，让主峰从岭线上凸出来
  const footM = groundY(poi.p.x, poi.p.z) * 100;
  const rise = (peak: number) => Math.max(peak - footM, 320) + (peak - 4200) * 0.5;
  const g = placeBearing(poi, 270);
  const rock = paint('#6c6660', 0.95);
  const peaks: Array<[number, number, number, number]> = [
    [0, -1500, 6250, 1200], [-260, -700, 5800, 1020], [180, 60, 5364, 1120],
    [-120, 860, 4800, 960], [220, 1480, 4200, 880],
  ];
  const snow: Xf[] = [];
  for (const [dx, dz, peak, r] of peaks) {
    const h = rise(peak);
    const cone = new THREE.Mesh(G_CONE, rock);
    cone.position.set(dx, -340, dz);
    cone.scale.set(r, h, r * 0.78);
    cone.castShadow = true;
    g.add(cone);
    snow.push({ x: dx, y: h * 0.55 - 340, z: dz, sx: r * 0.44, sy: h * 0.46, sz: r * 0.34 });
  }
  g.add(inst(G_CONE, paint('#eef4f8', 0.6), snow, false));
  if (detailed) {
    const ridge: Xf[] = [];
    for (let i = 0; i < 7; i++) {
      ridge.push({
        x: -900 + hash2(i, 3, 161) * 1600, z: -1900 + i * 600, y: -260,
        sx: 720, sy: 380 + hash2(i, 7, 161) * 460, sz: 540,
      });
    }
    g.add(inst(G_CONE, paint('#5f6a58', 0.95), ridge, false));
  }
  return g;
};

const greenwayArch: Builder = (poi, detailed) => {
  // 绿道是绕城的圆环：本点切线 = POI 方位 + 90°，于是局部 Z 沿绿道、拱门横跨绿道
  const g = placeBearing(poi, poi.bearingDeg + 90);
  const RED = paint('#b8371f', 0.5, 0.35);
  const arch = new THREE.Mesh(new THREE.TorusGeometry(26, 1.9, 6, 26, Math.PI), RED);
  arch.position.y = 4;
  arch.castShadow = true;
  g.add(arch);
  const arch2 = new THREE.Mesh(new THREE.TorusGeometry(23, 1.1, 5, 24, Math.PI), RED);
  arch2.position.y = 4;
  g.add(arch2);
  const cross: Xf[] = [];
  for (const side of [-1, 1]) {
    for (let i = 0; i < 5; i++) {
      const a = (0.22 + i * 0.16) * Math.PI;
      cross.push({ x: side * Math.cos(a) * 24.5, y: 4 + Math.sin(a) * 24.5, rz: side > 0 ? a : Math.PI - a, sx: 3.4, sy: 0.7, sz: 0.7 });
    }
    g.add(box(2.4, 8, 6, STONE_MAT, { x: side * 26 }));
  }
  g.add(inst(G_BOX, RED, cross, false));
  g.add(box(9, 0.7, 190, paint('#3f7f6a', 0.85), { y: 0.9 }));
  g.add(box(5, 0.6, 190, paint('#8f8b82', 0.95), { z: 9, y: 0.8 }));
  const lamps: Xf[] = [];
  for (let i = 0; i < 10; i++) lamps.push({ x: -7, z: -90 + i * 20, sy: 5.4, sx: 0.28, sz: 0.28 });
  g.add(inst(G_CYL, STEEL, lamps, false));
  g.add(inst(G_BOX, glow('#ffd7a0', 1), lamps.map((l) => ({ x: l.x, y: 5.6, z: l.z, sx: 0.8, sy: 0.5, sz: 1.8 })), false));
  if (detailed) {
    g.add(box(16, 5, 7, WALL_MAT, { x: 44, z: 26 }));
    g.add(box(12, 3.4, 0.6, glow('#7cd0a0', 0.7), { x: 44, y: 4, z: 22.4 }));
    g.add(trees(16, 0, 66, 90, 40, 13, 163));
  }
  return g;
};

const BUILDERS: Record<string, Builder> = {
  tianfuSquare,
  hallBlock,
  temple,
  oldStreet,
  thatchedCottage,
  jinsha,
  taikooLi,
  ifsPanda,
  tvTower,
  pavilion,
  stoneBridge,
  wangjiangLou,
  monument,
  globalCenter,
  twinTowers,
  jiaoziRing,
  euCenter,
  officePark,
  cbdSupertall,
  expoHall,
  lakeCampus,
  donganhu,
  danjingTai,
  stadium,
  pandaBase,
  stationRoof,
  airport,
  airportTianfu,
  campusGate,
  dujiangyanWeir,
  snowPeaks,
  greenwayArch,
};

export const KNOWN_MODELS: string[] = Object.keys(BUILDERS);

export function buildModel(key: string, poi: PoiPlace, detailed: boolean): THREE.Object3D | null {
  const fn = BUILDERS[key];
  if (!fn || !poi || !poi.p) return null;
  return fn(poi, detailed);
}

export function buildLandmarks(scene: THREE.Scene, opts?: Partial<LandmarkOptions>): THREE.Group {
  const detailed = opts?.detailed ?? true;
  const root = new THREE.Group();
  root.name = 'landmarks';
  for (const poi of POI_PLACES) {
    const key = poi.model;
    if (!key) continue;
    const obj = buildModel(key, poi, detailed);
    if (!obj) continue;
    obj.name = `landmark:${poi.id}`;
    obj.userData = {
      poiId: poi.id,
      name: poi.name,
      blurb: poi.blurb,
      heightM: poi.heightM ?? 0,
      tag: poi.tag ?? '',
    };
    root.add(obj);
  }
  // 重建沙盘时先摘掉同名旧组；材质与几何跨次共享，不能 dispose
  const stale = scene.getObjectByName('landmarks');
  if (stale && stale !== root) scene.remove(stale);
  scene.add(root);
  return root;
}

/** 单位几何与常用材质是模块级共享的，重建时只能释放各地标自建的那份。 */
const SHARED: Set<THREE.BufferGeometry> = new Set([G_BOX, G_CYL, G_CONE, G_PYR, G_SPHERE, G_GABLE]);

export function disposeLandmarks(root: THREE.Object3D) {
  root.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (mesh.geometry && !SHARED.has(mesh.geometry)) mesh.geometry.dispose();
  });
  root.parent?.remove(root);
}
