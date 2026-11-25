export const UNIT_PER_KM = 10;

export const ORIGIN_LAT = 30.6577;
export const ORIGIN_LON = 104.0657;

const KM_PER_DEG_LAT = 110.98;
const KM_PER_DEG_LON = 111.32 * Math.cos((ORIGIN_LAT * Math.PI) / 180);

export interface Planar {
  x: number;
  z: number;
}

export function kmToUnit(km: number): number {
  return km * UNIT_PER_KM;
}

export function unitToKm(unit: number): number {
  return unit / UNIT_PER_KM;
}

/** 正北为 0°，顺时针。返回场景平面坐标（单位=100m）。 */
export function polar(distKm: number, bearingDeg: number): Planar {
  const rad = (bearingDeg * Math.PI) / 180;
  return {
    x: Math.sin(rad) * distKm * UNIT_PER_KM,
    z: -Math.cos(rad) * distKm * UNIT_PER_KM,
  };
}

export function bearingOf(p: Planar): number {
  const deg = (Math.atan2(p.x, -p.z) * 180) / Math.PI;
  return (deg + 360) % 360;
}

export function distOf(p: Planar): number {
  return Math.hypot(p.x, p.z) / UNIT_PER_KM;
}

export function project(lat: number, lon: number): Planar {
  return {
    x: (lon - ORIGIN_LON) * KM_PER_DEG_LON * UNIT_PER_KM,
    z: -(lat - ORIGIN_LAT) * KM_PER_DEG_LAT * UNIT_PER_KM,
  };
}

export function projectAll(points: Array<[number, number]>): Planar[] {
  return points.map(([lat, lon]) => project(lat, lon));
}

/** project 的逆运算：把场景坐标还原成经纬度，拾取信息卡要用。 */
export function unproject(x: number, z: number): { lat: number; lon: number } {
  return {
    lon: ORIGIN_LON + x / (KM_PER_DEG_LON * UNIT_PER_KM),
    lat: ORIGIN_LAT - z / (KM_PER_DEG_LAT * UNIT_PER_KM),
  };
}

export function lerpPlanar(a: Planar, b: Planar, t: number): Planar {
  return { x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t };
}

export function planarLengthKm(pts: Planar[]): number {
  let sum = 0;
  for (let i = 1; i < pts.length; i++) sum += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z);
  return sum / UNIT_PER_KM;
}

function catmull(p0: Planar, p1: Planar, p2: Planar, p3: Planar, t: number): Planar {
  const t2 = t * t;
  const t3 = t2 * t;
  const axis = (a: number, b: number, c: number, d: number) =>
    0.5 * (2 * b + (c - a) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (3 * b - a - 3 * c + d) * t3);
  return { x: axis(p0.x, p1.x, p2.x, p3.x), z: axis(p0.z, p1.z, p2.z, p3.z) };
}

/** Catmull-Rom 平滑折线（等参数采样）。 */
export function smoothPolyline(pts: Planar[], samplesPerSeg = 16): Planar[] {
  if (pts.length < 2) return pts.slice();
  const out: Planar[] = [];
  const at = (i: number) => pts[Math.min(Math.max(i, 0), pts.length - 1)];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = at(i - 1);
    const p1 = at(i);
    const p2 = at(i + 1);
    const p3 = at(i + 2);
    for (let s = 0; s < samplesPerSeg; s++) out.push(catmull(p0, p1, p2, p3, s / samplesPerSeg));
  }
  out.push({ ...pts[pts.length - 1] });
  return out;
}

/** 按弧长等距重采样，ribbon 的 UV 与车流速度依赖等距点列。 */
export function resample(pts: Planar[], step: number): Planar[] {
  if (pts.length < 2 || step <= 0) return pts.slice();
  const out: Planar[] = [{ ...pts[0] }];
  let carry = 0;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1];
    const b = pts[i];
    const seg = Math.hypot(b.x - a.x, b.z - a.z);
    if (seg < 1e-6) continue;
    let travelled = carry;
    while (travelled + step <= seg) {
      travelled += step;
      const t = travelled / seg;
      out.push({ x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t });
    }
    carry = seg - travelled;
    if (i === pts.length - 1) out.push({ ...b });
  }
  return out;
}

export function smoothPath(latLon: Array<[number, number]>, samplesPerSeg = 16, step = 1.2): Planar[] {
  return resample(smoothPolyline(projectAll(latLon), samplesPerSeg), step);
}

export function closeRing(pts: Planar[]): Planar[] {
  const out = pts.slice();
  out.push({ ...pts[0] });
  return out;
}
