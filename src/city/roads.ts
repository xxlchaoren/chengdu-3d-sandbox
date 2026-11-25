import * as THREE from 'three';
import { GU } from '../core/uniforms.ts';
import { hash2 } from '../geo/rng.ts';
import type { Planar } from '../geo/project.ts';
import { RADIAL_PATHS, RING_PATHS, elevatedLift, followTerrain, type PolyPath } from './paths.ts';
import { makeRibbon } from './ribbon.ts';
import { paint, unit } from './matkit.ts';

/**
 * 路网：沥青带 + 车道线 + 高架（内环／二环）＋ 车流。
 *
 * 「环＋放射」是成都最强的视觉指纹，所以环路画得比真实车道更醒目：
 * 主干环用深色带＋白色虚线，高架用抬升桥面与立柱，车流在夜里形成光的循环。
 */

export type Tier = 'high' | 'medium' | 'low';

export interface RoadLayer {
  group: THREE.Group;
  update(dt: number): void;
  dispose(): void;
}

const ASPHALT = '#2f3237';
const ASPHALT_OLD = '#3b3d40';

/** 车道线：v 方向每 16.7m 一段虚线，u 方向按车道数分格。 */
function roadMaterial(dark: string, markings: 'dash' | 'solid' | 'none', lanes: number): THREE.MeshStandardMaterial {
  const mat = new THREE.MeshStandardMaterial({ color: dark, roughness: 0.88, metalness: 0.02 });
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uMarkings = { value: markings === 'none' ? 0 : markings === 'dash' ? 1 : 2 };
    shader.uniforms.uLanes = { value: lanes };
    shader.uniforms.uNight = GU.uNight;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vUvR;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\n vUvR = uv;');
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        '#include <common>\nuniform float uMarkings;\nuniform float uLanes;\nuniform float uNight;\nvarying vec2 vUvR;',
      )
      .replace(
        '#include <map_fragment>',
        `#include <map_fragment>
         float lane = fract(vUvR.x * uLanes);
         float atEdge = 1.0 - smoothstep(0.0, 0.035, min(lane, 1.0 - lane));
         float dash = step(0.45, fract(vUvR.y * 60.0));
         float line = uMarkings < 0.5 ? 0.0 : atEdge * (uMarkings < 1.5 ? dash : 1.0);
         diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.84, 0.85, 0.80), clamp(line, 0.0, 1.0) * 0.8);`,
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
         // 路灯照亮的是一条走廊，不只是标线：夜里路网本身就是成都最清楚的结构线。
         totalEmissiveRadiance += vec3(1.0, 0.74, 0.45) * uNight * (0.42 + 0.55 * clamp(line, 0.0, 1.0));`,
      );
  };
  mat.customProgramCacheKey = () => `cd-road-${markings}`;
  return mat;
}

function roadGeometry(path: PolyPath, widthUnits: number, lift: number): THREE.BufferGeometry {
  return makeRibbon(path.pts, {
    widthAt: () => widthUnits,
    yAt: followTerrain(path, lift),
    closed: path.closed,
    uvScale: 1,
  });
}

function addPiers(path: PolyPath, group: THREE.Group, owned: Array<{ dispose(): void }>, widthUnits: number) {
  const pts = path.pts;
  const n = pts.length;
  const spacing = path.lengthUnits / (path.closed ? n : Math.max(1, n - 1));
  // 立柱间距约 1.2km（12 个场景单位）。
  const every = Math.max(1, Math.round(12 / Math.max(0.001, spacing)));
  const count = Math.max(1, Math.floor(n / every));
  const geo = new THREE.BoxGeometry(1, 1, 1);
  const mesh = new THREE.InstancedMesh(geo, paint('#8d8b86', 0.9), count);
  mesh.castShadow = true;
  mesh.frustumCulled = false;
  mesh.name = `piers-${path.name}`;
  const dummy = new THREE.Object3D();
  const lift = elevatedLift(path);
  for (let i = 0; i < count; i++) {
    const idx = (i * every) % n;
    const p = pts[idx];
    dummy.position.set(p.x, path.ys[idx] + lift / 2, p.z);
    dummy.rotation.set(0, (idx / n) * Math.PI * 2, 0);
    dummy.scale.set(widthUnits * 0.55, lift, widthUnits * 0.55);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  group.add(mesh);
  owned.push(mesh, geo);
}

interface Car {
  path: PolyPath;
  offset: number;
  speed: number;
  dir: number;
}

export function buildRoads(scene: THREE.Scene, tier: Tier = 'high'): RoadLayer {
  const group = new THREE.Group();
  group.name = 'roads';
  const owned: Array<{ dispose(): void }> = [];
  const meshes: THREE.Mesh[] = [];

  for (const path of RING_PATHS) {
    const w = unit(path.widthM ?? 24);
    const lift = elevatedLift(path);
    const mat = roadMaterial(path.ringIndex !== undefined && path.ringIndex < 4 ? ASPHALT_OLD : ASPHALT, path.elevated ? 'solid' : 'dash', Math.max(2, Math.round((path.widthM ?? 24) / 3.6)));
    const geo = roadGeometry(path, w, lift + 0.004);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    group.add(mesh);
    meshes.push(mesh);
    owned.push(geo, mat);
    if (lift > 0 && tier !== 'low') addPiers(path, group, owned, w);
  }

  for (const path of RADIAL_PATHS) {
    const w = unit(path.widthM ?? 30);
    const mat = roadMaterial(ASPHALT, 'dash', Math.max(2, Math.round((path.widthM ?? 30) / 3.6)));
    const geo = roadGeometry(path, w, 0.004);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    group.add(mesh);
    meshes.push(mesh);
    owned.push(geo, mat);
  }

  // 车流：沿环线与放射线跑的光块，夜里能直接看出环路在转。
  const all = [...RING_PATHS, ...RADIAL_PATHS];
  const carCount = tier === 'high' ? 900 : tier === 'medium' ? 520 : 240;
  const cars: Car[] = [];
  for (let i = 0; i < carCount; i++) {
    const path = all[(hash2(i, 3.7, 13) * all.length) | 0];
    if (!path.pts.length) continue;
    cars.push({
      path,
      offset: hash2(i, 9.1, 5),
      speed: 0.01 + hash2(i, 2.3, 7) * 0.018,
      dir: hash2(i, 5.5, 11) > 0.5 ? 1 : -1,
    });
  }

  const carGeo = new THREE.BoxGeometry(1, 1, 1);
  const carMat = new THREE.MeshStandardMaterial({ color: '#1d2025', roughness: 0.5, metalness: 0.3 });
  carMat.onBeforeCompile = (shader) => {
    shader.uniforms.uNight = GU.uNight;
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uNight;')
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
         totalEmissiveRadiance += vec3(1.0, 0.88, 0.66) * uNight * 0.85;`,
      );
  };
  carMat.customProgramCacheKey = () => 'cd-car';
  const carMesh = new THREE.InstancedMesh(carGeo, carMat, Math.max(1, cars.length));
  carMesh.frustumCulled = false;
  carMesh.name = 'traffic';
  group.add(carMesh);
  owned.push(carGeo, carMat, carMesh);

  const dummy = new THREE.Object3D();
  const place = (c: Car, t: number) => {
    const pts = c.path.pts;
    const n = pts.length;
    const u = (((c.offset + t * c.speed * c.dir) % 1) + 1) % 1;
    const i = Math.min(n - 1, Math.max(0, Math.floor(u * n)));
    const j = c.dir > 0 ? (i + 1) % n : (i - 1 + n) % n;
    const a: Planar = pts[i];
    const b: Planar = pts[j];
    const halfW = unit((c.path.widthM ?? 24) / 2) * 0.5 * c.dir;
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const len = Math.hypot(dx, dz) || 1;
    dummy.position.set(a.x - (dz / len) * halfW, c.path.ys[i] + elevatedLift(c.path) + 0.012, a.z + (dx / len) * halfW);
    dummy.rotation.set(0, Math.atan2(c.dir > 0 ? dx : -dx, c.dir > 0 ? dz : -dz), 0);
    dummy.scale.set(unit(4.2), unit(1.7), unit(1.9));
    dummy.updateMatrix();
    return dummy.matrix;
  };
  for (let i = 0; i < cars.length; i++) carMesh.setMatrixAt(i, place(cars[i], 0));
  carMesh.instanceMatrix.needsUpdate = true;

  let clock = 0;
  scene.add(group);
  return {
    group,
    update(dt: number) {
      clock += dt;
      for (let i = 0; i < cars.length; i++) carMesh.setMatrixAt(i, place(cars[i], clock));
      carMesh.instanceMatrix.needsUpdate = true;
    },
    dispose() {
      scene.remove(group);
      for (const o of owned) o.dispose();
      meshes.length = 0;
    },
  };
}
