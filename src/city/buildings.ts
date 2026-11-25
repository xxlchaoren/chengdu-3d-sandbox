import * as THREE from 'three';
import { GU } from '../core/uniforms.ts';
import { UNIT_PER_KM } from '../geo/project.ts';
import { hash2 } from '../geo/rng.ts';
import { RINGS, bandOf } from '../geo/chengdu.ts';
import { getField } from './field.ts';
import { groundHeight, urbanity } from './terrain.ts';
import { bandAttribute, dimAttribute, instanceFloatAttribute, instancedFacadeMaterial, PAL, unit, winAttribute, type FacadeKind } from './matkit.ts';
import type { BuildingForm } from './field.ts';

/**
 * 程序化建筑生成。
 *
 * 采样格用「环向 + 径向」的极坐标格网，与成都环形＋放射路网同构，
 * 街区会顺着环路和放射路铺开，而不是笛卡尔格子那种假整齐。
 */

export type Tier = 'high' | 'medium' | 'low';

const TIER_LIMIT: Record<Tier, number> = { high: 42000, medium: 24000, low: 12000 };
const TIER_RADIUS: Record<Tier, number> = { high: 46, medium: 40, low: 34 };
/** 采样格边长（km）：建成区要连成底，格距必须小于街区尺度。 */
const TIER_STEP: Record<Tier, number> = { high: 0.15, medium: 0.2, low: 0.26 };

interface Spec {
  wRange: [number, number];
  dRange: [number, number];
  hScale: number;
  hMin: number;
  hMax: number;
  kind: FacadeKind;
  colors: string[];
  /** 坡屋顶高度（m），0 表示平屋顶。 */
  roofM: number;
}

const SPECS: Record<BuildingForm, Spec> = {
  hutong: {
    wRange: [12, 26],
    dRange: [8, 15],
    hScale: 0.5,
    hMin: 5,
    hMax: 13,
    kind: 0,
    colors: [PAL.plasterWarm, '#cfc4b2', PAL.brick, '#9b8f80'],
    roofM: 3.2,
  },
  slab: {
    wRange: [30, 62],
    dRange: [12, 19],
    hScale: 0.85,
    hMin: 18,
    hMax: 110,
    kind: 0,
    colors: [PAL.plasterCool, '#d4d0c6', '#c3bdb2', '#b9bfc6', '#cbc2b4'],
    roofM: 0,
  },
  tower: {
    wRange: [22, 42],
    dRange: [22, 42],
    hScale: 1.05,
    hMin: 60,
    hMax: 250,
    kind: 1,
    colors: [PAL.concrete, '#9aa4ae', '#b0aca4', '#8f9aa6'],
    roofM: 0,
  },
  office: {
    wRange: [36, 88],
    dRange: [26, 62],
    hScale: 0.9,
    hMin: 30,
    hMax: 160,
    kind: 1,
    colors: ['#aebdc9', '#9fb2c0', '#c0c8cf', PAL.concrete],
    roofM: 0,
  },
  industrial: {
    wRange: [50, 120],
    dRange: [26, 56],
    hScale: 0.35,
    hMin: 9,
    hMax: 26,
    kind: 3,
    colors: ['#b4b7bb', '#a3a8ad', '#c2c0bb'],
    roofM: 1.6,
  },
  village: {
    wRange: [9, 17],
    dRange: [7, 13],
    hScale: 0.4,
    hMin: 4,
    hMax: 14,
    kind: 0,
    colors: [PAL.white, '#d9d2c4', '#c8bfae'],
    roofM: 2.6,
  },
};

const GLASS_TINT: Record<FacadeKind, string> = { 0: '#7f95a6', 1: PAL.glassCool, 2: '#7d93a8', 3: '#93a0a8' };

interface Pending {
  x: number;
  y: number;
  z: number;
  w: number;
  h: number;
  d: number;
  rot: number;
  /** 该格位的环路切向（弧度）：街区底板按它摆放，楼可以歪，街坊不能歪。 */
  bearing: number;
  color: THREE.Color;
  seed: number;
  kind: FacadeKind;
  band: number;
  roofM: number;
  span: number;
  form: BuildingForm;
  /** 该格位的采样间距（km），街区底板据此决定尺寸。 */
  cell: number;
}

export interface BuildingLayer {
  group: THREE.Group;
  count: number;
  dispose(): void;
}

function sampleGrid(tier: Tier, limit: number): Pending[] {
  const field = getField();
  const maxR = TIER_RADIUS[tier];
  const out: Pending[] = [];
  const dr = TIER_STEP[tier];
  const ringEdges = [0, ...RINGS.map((r) => r.radiusKm), maxR];

  for (let b = 0; b < ringEdges.length - 1; b++) {
    const r0 = ringEdges[b];
    const r1 = Math.min(ringEdges[b + 1], maxR);
    if (r1 <= r0) continue;
    const stepKm = bandOf(r0).index === 0 ? dr * 0.72 : dr * (1 + b * 0.12);
    for (let r = r0 + stepKm * 0.5; r < r1; r += stepKm) {
      const steps = Math.max(8, Math.round((2 * Math.PI * r) / stepKm));
      for (let s = 0; s < steps; s++) {
        if (out.length >= limit) return out;
        const rad = (s / steps) * Math.PI * 2;
        const deg = (rad * 180) / Math.PI;
        const jitterA = (hash2(r * 31.7, s, 3) - 0.5) * (360 / steps) * 0.8;
        const jitterR = (hash2(r * 7.1, s * 1.7, 5) - 0.5) * stepKm * 0.7;
        const rr = r + jitterR;
        const bearing = deg + jitterA;
        const br = (bearing * Math.PI) / 180;
        // 绕城被机场—龙泉方向拉长，与 RINGS.southStretch 的处理保持一致。
        const stretch = 1 + Math.max(0, Math.cos(br)) * 0.14;
        const x = Math.sin(br) * rr * stretch * UNIT_PER_KM;
        const z = -Math.cos(br) * rr * stretch * UNIT_PER_KM;
        if (field.blocked(x, z)) continue;
        const info = field.classify(x, z);
        // 密度抽签只该管乡野：城里每个格位都是街坊，按概率撒点会把建成区抽成一地盐粒。
        // 用建成度的平方做门槛，城区接近铺满（u=0.9→0.93），农田仍由基准密度决定。
        const fill = Math.max(info.density, urbanity(x, z) ** 2 * 1.15);
        if (hash2(Math.round(x * 10), Math.round(z * 10), 11) > fill) continue;

        const spec = SPECS[info.form];
        const rw = hash2(Math.round(x), Math.round(z), 17);
        const rd = hash2(Math.round(z), Math.round(x), 19);
        const w = spec.wRange[0] + rw * (spec.wRange[1] - spec.wRange[0]);
        const d = spec.dRange[0] + rd * (spec.dRange[1] - spec.dRange[0]);
        let h = Math.max(spec.hMin, Math.min(spec.hMax, info.heightM * spec.hScale));
        // 环路路口与副中心核心做少量突尖，天际线才有起伏。
        const spike = hash2(Math.round(x * 0.5), Math.round(z * 0.5), 23);
        if (spike > 0.965) h *= 1.5 + spike;

        out.push({
          x,
          y: groundHeight(x, z),
          z,
          w,
          h,
          d,
          rot: br + (hash2(Math.round(x * 2), Math.round(z * 2), 7) - 0.5) * 0.5,
          bearing: br,
          color: new THREE.Color(spec.colors[(hash2(Math.round(x), Math.round(z), 29) * spec.colors.length) | 0]),
          seed: hash2(Math.round(x), Math.round(z), 41),
          kind: spec.kind,
          band: bandOf(rr).index,
          roofM: spec.roofM,
          span: Math.max(w, d),
          form: info.form,
          cell: stepKm,
        });
      }
    }
  }
  return out;
}

/**
 * 每格补上附属体量：真实街坊是沿街排开的几栋楼共用一个院落，
 * 不是一块空地上插一栋独楼。远景看不出差别，飞近了就露馅。
 */
function fillBlocks(cells: Pending[]): Pending[] {
  const field = getField();
  const out: Pending[] = [];
  for (const it of cells) {
    if (it.form === 'industrial') continue;
    const u = urbanity(it.x, it.z);
    const s = it.cell * 1000 * (0.34 + 0.62 * u);
    const n = u > 0.55 ? 2 : 1;
    for (let k = 0; k < n; k++) {
      const hx = hash2(Math.round(it.x) + k * 7, Math.round(it.z) - k * 3, 61);
      const hy = hash2(Math.round(it.z) + k * 5, Math.round(it.x) + k * 11, 67);
      const lx = (hx - 0.5) * s * 0.7;
      const lz = (hy - 0.5) * s * 0.7;
      const cos = Math.cos(it.bearing);
      const sin = Math.sin(it.bearing);
      const x = it.x + lx * cos + lz * sin;
      const z = it.z - lx * sin + lz * cos;
      if (field.blocked(x, z)) continue;
      const scale = 0.55 + hash2(Math.round(x), Math.round(z), 71) * 0.3;
      out.push({
        ...it,
        x,
        z,
        y: groundHeight(x, z),
        w: it.w * scale,
        d: it.d * scale,
        h: Math.max(4, it.h * (0.45 + scale * 0.6)),
        rot: it.bearing,
        span: it.span * scale,
        seed: hash2(Math.round(x), Math.round(z), 41),
      });
    }
  }
  return out;
}

export function buildBuildings(scene: THREE.Scene, tier: Tier = 'high'): BuildingLayer {
  const group = new THREE.Group();
  group.name = 'buildings';
  const cells = sampleGrid(tier, TIER_LIMIT[tier]);
  const items = cells.concat(fillBlocks(cells));
  const dummy = new THREE.Object3D();
  const owned: Array<{ dispose(): void }> = [];
  const instanced: THREE.InstancedMesh[] = [];

  const byKind = new Map<FacadeKind, Pending[]>();
  for (const it of items) {
    const list = byKind.get(it.kind);
    if (list) list.push(it);
    else byKind.set(it.kind, [it]);
  }

  for (const [kind, list] of byKind) {
    const litRatio = kind === 1 ? 0.5 : kind === 0 ? 0.36 : 0.16;
    const mat = instancedFacadeMaterial({
      base: '#ffffff',
      glassTint: GLASS_TINT[kind],
      litRatio,
      roughness: kind === 1 ? 0.56 : 0.78,
      metalness: kind === 1 ? 0.16 : 0.04,
    });
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const dims = new Float32Array(list.length * 4);
    const wins = new Float32Array(list.length * 4);
    const bands = new Float32Array(list.length);
    const mesh = new THREE.InstancedMesh(geo, mat, list.length);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    mesh.name = `buildings-kind${kind}`;
    list.forEach((it, i) => {
      dummy.position.set(it.x, it.y + unit(it.h) / 2, it.z);
      dummy.rotation.set(0, it.rot, 0);
      dummy.scale.set(unit(it.w), unit(it.h), unit(it.d));
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      mesh.setColorAt(i, it.color);
      dims[i * 4] = it.w;
      dims[i * 4 + 1] = it.h;
      dims[i * 4 + 2] = it.d;
      wins[i * 4 + 1] = it.seed;
      wins[i * 4 + 2] = kind;
      bands[i] = it.band;
    });
    geo.setAttribute('aDim', dimAttribute(dims));
    geo.setAttribute('aWin', winAttribute(wins));
    geo.setAttribute('aBand', bandAttribute(bands));
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    group.add(mesh);
    instanced.push(mesh);
    owned.push(geo);
  }

  // 街区底板：真实成都街区是「围合式」——沿街 6 层左右连成一片，中间是院子。
  // 只摆独立塔楼会散成「盐粒」，所以每个格位先铺一块低层底板，塔楼再从板上长出来。
  const plates = cells.filter((it) => it.form !== 'industrial');
  if (plates.length) {
    const plateGeo = new THREE.BoxGeometry(1, 1, 1);
    const plateMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.9, metalness: 0.02 });
    // 街区底板兼作光污染层：亮度跟着逐实例的建成度走，
    // 建成区夜里是一团暖光，乡下的稀疏底板保持黑——夜景的城乡边界就是这么来的。
    plateMat.onBeforeCompile = (shader) => {
      shader.uniforms.uNight = GU.uNight;
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nattribute float aUrban;\nattribute vec2 aUv;\nvarying float vUrban;\nvarying vec2 vFaceUv;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\n vUrban = aUrban;\n vFaceUv = aUv;');
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', '#include <common>\nuniform float uNight;\nvarying float vUrban;\nvarying vec2 vFaceUv;')
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
           // 夜里要压掉底板白天的底色：不压，环境光会把全城照成一片纸板黄，
           // 琥珀色的光污染读不出来。
           diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.18, 0.20, 0.32), uNight * 0.92);`,
        )
        .replace(
          '#include <emissivemap_fragment>',
          `#include <emissivemap_fragment>
           // 屋顶夜里是黑的，亮的是街：顶面只留薄薄一层反光，
           // 侧墙按「墙脚亮、檐口暗」模拟街灯洒在沿街立面上的光。
           float top = step(0.5, abs(vNormal.y));
           float street = 1.0 - vFaceUv.y;
           float spill = top * 0.20 + (1.0 - top) * (0.25 + 1.45 * street * street);
           totalEmissiveRadiance += vec3(1.0, 0.55, 0.22) * uNight * (vUrban * vUrban * 0.40 + vUrban * 0.06) * spill;`,
        );
    };
    plateMat.customProgramCacheKey = () => 'cd-plate';
    const plateMesh = new THREE.InstancedMesh(plateGeo, plateMat, plates.length);
    const urban = new Float32Array(plates.length);
    plateMesh.castShadow = true;
    plateMesh.receiveShadow = true;
    plateMesh.frustumCulled = false;
    plateMesh.name = 'block-plates';
    const plateCol = new THREE.Color();
    plates.forEach((it, i) => {
      // 底板按采样格（街区）尺寸铺：城区铺到约 0.9 倍格距，剩下的缝正好是一条街宽，
      // 街区连成片、街道同时读得出来；乡下按建成度收缩成稀疏一小块，否则连成一片仓库。
      // 朝向取环路切向而不是单栋楼的偏转角——楼可以歪，街坊不能歪，
      // 各自乱转的方块在俯瞰下就是一地彩色盐粒。
      const cellM = it.cell * 1000;
      const u = urbanity(it.x, it.z);
      urban[i] = u;
      const jitter = 0.92 + hash2(Math.round(it.x), Math.round(it.z), 43) * 0.2;
      const s = cellM * (0.34 + 0.62 * u) * jitter;
      const deep = it.d / Math.max(it.w, 1e-3) > 1.6 ? 0.6 : 1;
      const hh = Math.min(it.h * 0.5, (5 + 13 * u) * (0.7 + it.seed * 0.6));
      dummy.position.set(it.x, it.y + unit(hh / 2), it.z);
      dummy.rotation.set(0, it.bearing, 0);
      dummy.scale.set(unit(s), unit(hh), unit(s * deep));
      dummy.updateMatrix();
      plateMesh.setMatrixAt(i, dummy.matrix);
      // 底板明度压在中灰并留出街区差异：一律 0.44 在正午会被太阳推到近白，
      // 城区会读成一张棋盘；真实街坊是水泥、瓷砖、彩钢瓦混在一起的。
      const tone = 0.13 + u * 0.10 + hash2(Math.round(it.z), Math.round(it.x), 47) * 0.15;
      const warm = 1 - u;
      plateCol.setRGB(tone * (1.05 + warm * 0.08), tone * (1.0 + warm * 0.02), tone * (0.96 - warm * 0.12));
      plateMesh.setColorAt(i, plateCol);
    });
    plateGeo.setAttribute('aUrban', instanceFloatAttribute(urban));
    // 盒子自带的 uv 换个名字再挂一次：材质没有贴图，three 不会声明 uv，
    // 但沿街亮窗的比例要靠它算。
    plateGeo.setAttribute('aUv', plateGeo.getAttribute('uv'));
    plateMesh.instanceMatrix.needsUpdate = true;
    if (plateMesh.instanceColor) plateMesh.instanceColor.needsUpdate = true;
    group.add(plateMesh);
    instanced.push(plateMesh);
    owned.push(plateGeo, plateMat);
  }

  // 老城与村落的青瓦坡顶：成都老照片里最常见的轮廓。
  const roofed = items.filter((it) => it.roofM > 0);
  if (roofed.length) {
    const roofGeo = new THREE.ConeGeometry(Math.SQRT1_2, Math.SQRT1_2, 4);
    const roofMat = new THREE.MeshStandardMaterial({ color: PAL.oldRoof, roughness: 0.92 });
    const roofMesh = new THREE.InstancedMesh(roofGeo, roofMat, roofed.length);
    roofMesh.castShadow = true;
    roofMesh.receiveShadow = true;
    roofMesh.frustumCulled = false;
    roofMesh.name = 'pitched-roofs';
    roofed.forEach((it, i) => {
      const s = unit(it.span * 0.78);
      dummy.position.set(it.x, it.y + unit(it.h) + unit(it.roofM / 2), it.z);
      dummy.rotation.set(0, it.rot + Math.PI / 4, 0);
      dummy.scale.set(s, unit(it.roofM), s);
      dummy.updateMatrix();
      roofMesh.setMatrixAt(i, dummy.matrix);
    });
    roofMesh.instanceMatrix.needsUpdate = true;
    group.add(roofMesh);
    instanced.push(roofMesh);
    owned.push(roofGeo);
  }

  // 高层屋顶设备层：100m 以上的楼在远景里要有厚度，不然像纸片。
  const caps = items.filter((it) => it.h > 90);
  if (caps.length) {
    const capGeo = new THREE.BoxGeometry(1, 1, 1);
    const capMat = new THREE.MeshStandardMaterial({ color: '#7d8288', roughness: 0.6, metalness: 0.25 });
    const capMesh = new THREE.InstancedMesh(capGeo, capMat, caps.length);
    capMesh.castShadow = true;
    capMesh.frustumCulled = false;
    capMesh.name = 'roof-caps';
    caps.forEach((it, i) => {
      const hh = 2 + it.seed * 7;
      dummy.position.set(it.x, it.y + unit(it.h) + unit(hh / 2), it.z);
      dummy.rotation.set(0, it.rot, 0);
      dummy.scale.set(unit(it.w * 0.45), unit(hh), unit(it.d * 0.45));
      dummy.updateMatrix();
      capMesh.setMatrixAt(i, dummy.matrix);
    });
    capMesh.instanceMatrix.needsUpdate = true;
    group.add(capMesh);
    instanced.push(capMesh);
    owned.push(capGeo);
  }

  scene.add(group);
  return {
    group,
    count: items.length,
    dispose() {
      scene.remove(group);
      for (const m of instanced) m.dispose();
      for (const o of owned) o.dispose();
    },
  };
}
