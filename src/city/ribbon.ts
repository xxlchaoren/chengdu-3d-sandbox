import * as THREE from 'three';
import type { Planar } from '../geo/project.ts';

export interface RibbonOptions {
  widthAt?: (t: number) => number;
  yAt?: (t: number) => number;
  closed?: boolean;
  /** v 轴每 uvScale 个单位记 1，默认 1（即 100m = 1 个 v 单位）。 */
  uvScale?: number;
}

/** 沿折线生成条带；v 轴按实际长度累加，长路上的车道线不会被拉伸。 */
export function makeRibbon(pts: Planar[], opts: RibbonOptions = {}): THREE.BufferGeometry {
  const closed = !!opts.closed;
  const n = pts.length;
  const count = closed ? n + 1 : n;
  const pos = new Float32Array(count * 2 * 3);
  const uv = new Float32Array(count * 2 * 2);
  const idx: number[] = [];
  let acc = 0;
  const uvScale = opts.uvScale ?? 1;

  for (let i = 0; i < count; i++) {
    const i1 = closed ? i % n : i;
    const a = pts[closed ? (i1 - 1 + n) % n : Math.max(i1 - 1, 0)];
    const b = pts[i1];
    const c = pts[closed ? (i1 + 1) % n : Math.min(i1 + 1, n - 1)];
    let dx = c.x - a.x;
    let dz = c.z - a.z;
    const len = Math.hypot(dx, dz) || 1;
    dx /= len;
    dz /= len;
    if (i > 0) {
      const prev = closed ? pts[(i1 - 1 + n) % n] : pts[Math.max(i1 - 1, 0)];
      acc += Math.hypot(b.x - prev.x, b.z - prev.z);
    }
    const t = count > 1 ? i / (count - 1) : 0;
    const half = (opts.widthAt ? opts.widthAt(t) : 2) * 0.5;
    const y = opts.yAt ? opts.yAt(t) : 0;
    const base = i * 2;
    pos[base * 3] = b.x - dz * half;
    pos[base * 3 + 1] = y;
    pos[base * 3 + 2] = b.z + dx * half;
    pos[(base + 1) * 3] = b.x + dz * half;
    pos[(base + 1) * 3 + 1] = y;
    pos[(base + 1) * 3 + 2] = b.z - dx * half;
    const v = (acc * uvScale) / 10;
    uv[base * 2] = 0;
    uv[base * 2 + 1] = v;
    uv[(base + 1) * 2] = 1;
    uv[(base + 1) * 2 + 1] = v;
    if (i < count - 1) {
      // 顶点 0 在左、1 在右（相对前进方向），逆序绕制才能让法线朝上，
      // 否则 FrontSide 的路面／河面在俯视时会被背面剔除掉。
      idx.push(base, base + 2, base + 1, base + 1, base + 2, base + 3);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  geo.computeBoundingSphere();
  return geo;
}

export function ribbonMesh(pts: Planar[], material: THREE.Material, opts: RibbonOptions = {}): THREE.Mesh {
  const mesh = new THREE.Mesh(makeRibbon(pts, opts), material);
  mesh.receiveShadow = true;
  return mesh;
}
