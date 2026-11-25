import * as THREE from 'three';
import { fbm, hash2 } from '../geo/rng.ts';
import { UNIT_PER_KM, project } from '../geo/project.ts';
import { CLUSTERS, GREEN_BELT, RADIALS, bandOf } from '../geo/chengdu.ts';
import { GU } from '../core/uniforms.ts';

const smooth = (a: number, b: number, x: number) => {
  const t = THREE.MathUtils.clamp((x - a) / (b - a || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

const bell = (d: number, w: number) => Math.exp(-(d * d) / (w * w));

/**
 * 成都平原极平坦（市区海拔约 500m，相对高差按 0 处理），
 * 西侧龙门山迅速抬升到 5000m 级，东侧龙泉山是 600~900m 的窄岭，东南为浅丘。
 */
export function groundHeight(x: number, z: number): number {
  const kx = x / UNIT_PER_KM;
  const kz = z / UNIT_PER_KM;
  let h = 0;

  const front = -36 - 0.2 * Math.max(0, kz) + 4 * Math.sin(kz * 0.09) + 3 * fbm(kz * 0.05, 3.1, 3, 7);
  const westGain = smooth(front, front - 46, kx);
  h += Math.pow(westGain, 1.15) * 44;

  const northGain = smooth(-30, -66, kz) * smooth(-18, -60, kx * -1 + 30);
  h += Math.pow(THREE.MathUtils.clamp(northGain + westGain - westGain * northGain, 0, 1), 1.2) * 30;

  // 龙泉山是南北向窄脊（金堂—龙泉驿—彭山），脊线海拔 850—1050m，槽谷宽 10—12km。
  const longquan = kx - (25.2 - 0.1 * kz + 2.2 * Math.sin(kz * 0.11));
  h += bell(longquan, 4.2) * 8.5 * smooth(6, 14, kx);

  const qiu = smooth(24, 52, kx - 0.35 * kz);
  h += qiu * (2.2 + 1.8 * fbm(kx * 0.09, kz * 0.09, 3, 21));

  const longqiu = bell(kx + 34 + 0.5 * (kz - 20), 9) * smooth(6, 24, kz) * 9;
  h += longqiu;

  // 平原相对高差按 0 处理：只留 15m 级的微起伏，避免整块平原看起来是丘陵。
  const noise = fbm(kx * 0.16, kz * 0.16, 4, 101) - 0.5;
  h += noise * (0.15 + Math.min(h, 40) * 0.22);
  const ridge = fbm(kx * 0.055, kz * 0.055, 3, 55);
  h += Math.pow(ridge, 2) * Math.min(h, 34) * 0.22;

  return Math.max(-0.6, h);
}

const C_LOWFIELD = new THREE.Color('#74854a');
const C_FIELD = new THREE.Color('#7d8a4e');
// 建成区底色走「中性浅灰」而不是「暗灰」：从高空看，成都的城区是一大片水泥与
// 瓦顶的中性色，农田才是饱和的黄绿，两者靠色相而非明暗区分。
const C_URBAN = new THREE.Color('#8f8c86');
const C_URBAN_EDGE = new THREE.Color('#6f7360');
const C_FOREST = new THREE.Color('#42603c');
const C_DEEP_FOREST = new THREE.Color('#2f4a30');
const C_ROCK = new THREE.Color('#6c6660');
const C_SNOW = new THREE.Color('#eef4f8');

/**
 * 建成度 0—1，地面灰底的来源。
 * 成都卫星影像的读法是「环状底色 + 放射手指 + 一圈绿带边界」：
 * 环路之间基本铺满，建成区沿放射路向外伸出，绕城生态公园把城市掐出一个清晰的圆环。
 */
const BAND_URBAN = [0.9, 0.95, 0.9, 0.84, 0.66, 0.26];
const RADIAL_BEARINGS = RADIALS.map((r) => r.bearingDeg);
const CLUSTER_XZ = CLUSTERS.map((c) => {
  const p = project(c.lat, c.lon);
  return { x: p.x, z: p.z, r: c.radiusKm * UNIT_PER_KM * 2.1, w: c.density };
});

export function urbanity(x: number, z: number): number {
  const dKm = Math.hypot(x, z) / UNIT_PER_KM;
  let v = BAND_URBAN[bandOf(dKm).index];
  if (dKm > GREEN_BELT.innerKm - 0.5 && dKm < GREEN_BELT.outerKm + 0.5) v *= 0.3;
  if (dKm > GREEN_BELT.outerKm) v *= Math.max(0.16, 1 - (dKm - GREEN_BELT.outerKm) / 20);
  for (const c of CLUSTER_XZ) {
    const dx = x - c.x;
    const dz = z - c.z;
    if (Math.abs(dx) > c.r || Math.abs(dz) > c.r) continue;
    const t = 1 - Math.min(1, Math.hypot(dx, dz) / c.r);
    v = Math.max(v, t * t * c.w);
  }
  if (dKm > 4) {
    const b = ((Math.atan2(x, -z) * 180) / Math.PI + 360) % 360;
    let best = 999;
    for (const rb of RADIAL_BEARINGS) {
      const diff = Math.abs(((b - rb + 540) % 360) - 180);
      if (diff < best) best = diff;
    }
    const lateral = dKm * Math.sin((best * Math.PI) / 180);
    if (lateral < 1.2) v = Math.max(v, 0.8 * (1 - lateral / 1.2) * Math.min(1, Math.max(0.25, 1 - (dKm - 14) / 30)));
  }
  return Math.min(1, v);
}

function terrainColor(h: number, x: number, z: number, out: THREE.Color) {
  const kx = x / UNIT_PER_KM;
  const kz = z / UNIT_PER_KM;
  const patch = hash2(Math.round(kx * 3), Math.round(kz * 3), 9);
  out.copy(C_FIELD).lerp(C_LOWFIELD, patch * 0.6);
  // 建成区把农田灰化成城市底色，山区不掺灰，避免山坡出现脏斑。
  const u = urbanity(x, z) * smooth(3, 1.2, h);
  if (u > 0.04) out.lerp(C_URBAN, u * (0.68 + patch * 0.26));
  if (h > 0.4) out.lerp(C_URBAN_EDGE, smooth(0.4, 2.4, h) * 0.35);
  if (h > 1.2) out.lerp(C_FOREST, smooth(1.2, 6, h) * 0.85);
  if (h > 7) out.lerp(C_DEEP_FOREST, smooth(7, 16, h) * 0.7);
  if (h > 14) out.lerp(C_ROCK, smooth(14, 30, h) * 0.9);
  // 雪线按 4200m 起，且按斑块分布：整片涂白会把龙门山画成一条白云，
  // 而「窗含西岭千秋雪」要的是山脊上零星的雪斑。
  if (h > 30) {
    const patch = hash2(Math.round(kx * 1.7), Math.round(kz * 1.7), 71);
    const line = 30 + patch * 12;
    out.lerp(C_SNOW, smooth(line, line + 8, h));
    const shade = 0.82 + 0.18 * hash2(Math.round(kx * 2.3), Math.round(kz * 2.3), 33);
    out.multiplyScalar(shade);
  }
}

/** 远地面：平原 + 龙泉山 + 龙门山雪线，顶点色上色。 */
export function buildTerrain(scene: THREE.Scene, size = 2900, segments = 512): THREE.Mesh {
  const geo = new THREE.PlaneGeometry(size, size, segments, segments);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.getAttribute('position') as THREE.BufferAttribute;
  const colors = new Float32Array(pos.count * 3);
  const urban = new Float32Array(pos.count);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const h = groundHeight(x, z);
    pos.setY(i, h);
    terrainColor(h, x, z, c);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
    urban[i] = urbanity(x, z) * smooth(3, 1.2, h);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.setAttribute('aUrban', new THREE.BufferAttribute(urban, 1));
  geo.computeVertexNormals();

  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.96,
    metalness: 0,
    dithering: true,
  });
  injectHeightTint(mat);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.name = 'terrain';
  scene.add(mesh);
  return mesh;
}

/** 让远山在夜里压暗、雾天发灰，地面自发光跟着建成度走。 */
function injectHeightTint(mat: THREE.MeshStandardMaterial) {
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uNight = GU.uNight;
    shader.uniforms.uMist = GU.uMist;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aUrban;\nvarying float vUrban;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\n vUrban = aUrban;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uNight;\nuniform float uMist;\nvarying float vUrban;')
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
         // 街灯照亮的从来不只是路面：巷子、广场、树冠之间都摊着一层散光，
         // 把街区底板之间的缝连成一片。卫星夜视图里那团不散的暖光就是这么来的。
         totalEmissiveRadiance += vec3(1.0, 0.52, 0.20) * uNight * vUrban * vUrban * 0.18;`,
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
         diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.42,0.5,0.68), uNight*0.55);
         diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62,0.68,0.74), uMist*0.28);`,
      );
  };
  mat.customProgramCacheKey = () => 'cd-terrain';
}
