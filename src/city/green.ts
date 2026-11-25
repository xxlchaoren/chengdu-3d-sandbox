import * as THREE from 'three';
import { GU } from '../core/uniforms.ts';
import { UNIT_PER_KM } from '../geo/project.ts';
import { hash2 } from '../geo/rng.ts';
import { GREEN_BELT, RINGS } from '../geo/chengdu.ts';
import { LAKE_SHAPES, PARK_SHAPES, RIVER_PATHS, type EllipseShape } from './paths.ts';
import { paint, unit } from './matkit.ts';
import { groundHeight } from './terrain.ts';

/**
 * 绿地：公园、环城生态公园绿带、熊猫绿道与树。
 *
 * 成都「公园城市」的空间证据是 100km 环城绿带 + 121 座公园 + 锦江绿道，
 * 所以绿带画成一整圈可辨识的深绿环，树木沿河、沿湖、沿绿带聚集。
 */

export interface GreenLayer {
  group: THREE.Group;
  dispose(): void;
}

function turfMaterial(tint: string): THREE.MeshStandardMaterial {
  const mat = new THREE.MeshStandardMaterial({ color: tint, roughness: 0.95 });
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uNight = GU.uNight;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWorldPos;')
      .replace(
        '#include <worldpos_vertex>',
        `#include <worldpos_vertex>
         vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
      );
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uNight;\nvarying vec3 vWorldPos;')
      .replace(
        '#include <map_fragment>',
        `#include <map_fragment>
         float turf = fract(sin(dot(floor(vWorldPos.xz / 3.0), vec2(12.9898, 78.233))) * 43758.5453);
         diffuseColor.rgb *= 0.82 + 0.36 * turf;
         diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.4, 0.5, 0.66), uNight * 0.5);`,
      );
  };
  mat.customProgramCacheKey = () => `cd-turf-${tint}`;
  return mat;
}

/** 三角形扇面：中心 + 轮廓，顶点贴自然地面。 */
function fan(shape: EllipseShape, lift: number): THREE.BufferGeometry {
  const ring = shape.ring;
  const steps = ring.length - 1;
  const pos = new Float32Array((steps + 1) * 3);
  const cx = shape.center.x;
  const cz = shape.center.z;
  pos[0] = cx;
  pos[1] = groundHeight(cx, cz) + lift;
  pos[2] = cz;
  for (let i = 0; i < steps; i++) {
    const p = ring[i];
    pos[i * 3 + 3] = p.x;
    pos[i * 3 + 4] = groundHeight(p.x, p.z) + lift;
    pos[i * 3 + 5] = p.z;
  }
  const idx: number[] = [];
  for (let i = 0; i < steps; i++) idx.push(0, i === steps - 1 ? 1 : i + 2, i + 1);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

/** 环带（贴合地面），用于绕城绿带与熊猫绿道。 */
function belt(innerKm: number, outerKm: number, steps = 220, lift = 0.012): THREE.BufferGeometry {
  const pos = new Float32Array(steps * 2 * 3);
  const idx: number[] = [];
  for (let i = 0; i < steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const sx = Math.sin(a);
    const sz = -Math.cos(a);
    const stretch = 1 + Math.max(0, Math.cos(a)) * 0.1;
    const ix = sx * innerKm * UNIT_PER_KM * stretch;
    const iz = sz * innerKm * UNIT_PER_KM * stretch;
    const ox = sx * outerKm * UNIT_PER_KM * stretch;
    const oz = sz * outerKm * UNIT_PER_KM * stretch;
    pos[i * 6] = ix;
    pos[i * 6 + 1] = groundHeight(ix, iz) + lift;
    pos[i * 6 + 2] = iz;
    pos[i * 6 + 3] = ox;
    pos[i * 6 + 4] = groundHeight(ox, oz) + lift;
    pos[i * 6 + 5] = oz;
    const k = i * 2;
    const nk = ((i + 1) % steps) * 2;
    idx.push(k, nk, k + 1, k + 1, nk, nk + 1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

interface TreeSpot {
  x: number;
  z: number;
  h: number;
  r: number;
  tint: number;
}

function scatterDisk(shape: EllipseShape, count: number, out: TreeSpot[]) {
  for (let i = 0; i < count; i++) {
    const t = hash2(i * 1.7, shape.center.x, 3) * Math.PI * 2;
    const rad = Math.sqrt(hash2(i, shape.center.z, 5));
    const ex = Math.cos(t) * shape.a * rad * 0.94;
    const ey = Math.sin(t) * shape.b * rad * 0.94;
    const x = shape.center.x + ex * Math.cos(shape.rot) - ey * Math.sin(shape.rot);
    const z = shape.center.z + ex * Math.sin(shape.rot) + ey * Math.cos(shape.rot);
    out.push({ x, z, h: 6 + hash2(i, 7.3, 9) * 9, r: 2.6 + hash2(i, 2.1, 11) * 2.4, tint: hash2(i, 4.4, 13) });
  }
}

function scatterAlongPath(pts: Array<{ x: number; z: number }>, spacingUnits: number, offsetUnits: number, out: TreeSpot[]) {
  const every = Math.max(1, Math.round(spacingUnits / 2.2));
  for (let i = 0; i < pts.length; i += every) {
    const p = pts[i];
    const q = pts[Math.min(pts.length - 1, i + 1)];
    const dx = q.x - p.x;
    const dz = q.z - p.z;
    const len = Math.hypot(dx, dz) || 1;
    const nx = (-dz / len) * offsetUnits;
    const nz = (dx / len) * offsetUnits;
    for (const side of [-1, 1]) {
      const x = p.x + nx * side;
      const z = p.z + nz * side;
      out.push({ x, z, h: 5 + hash2(x, z, 17) * 6, r: 1.8 + hash2(z, x, 19) * 1.8, tint: hash2(x + z, 3, 23) });
    }
  }
}

export function buildGreen(scene: THREE.Scene, tier: 'high' | 'medium' | 'low' = 'high'): GreenLayer {
  const group = new THREE.Group();
  group.name = 'green';
  const owned: Array<{ dispose(): void }> = [];

  const turfPark = turfMaterial('#4f7a44');
  const turfBelt = turfMaterial('#4a6f3e');
  const turfFarm = turfMaterial('#8a9250');
  owned.push(turfPark, turfBelt, turfFarm);

  for (const park of PARK_SHAPES) {
    const geo = fan(park, -0.006);
    const mesh = new THREE.Mesh(geo, park.kind === 'farm' ? turfFarm : turfPark);
    mesh.receiveShadow = true;
    mesh.name = `park-${park.name}`;
    group.add(mesh);
    owned.push(geo);
  }

  // 环城生态公园：12.1—14.9km 的绿带，是成都环城最醒目的一圈。
  const beltGeo = belt(GREEN_BELT.innerKm, GREEN_BELT.outerKm, 300);
  const beltMesh = new THREE.Mesh(beltGeo, turfBelt);
  beltMesh.receiveShadow = true;
  beltMesh.name = 'green-belt';
  group.add(beltMesh);
  owned.push(beltGeo);

  // 熊猫绿道：三环路外侧的绿道走廊，实际只有 20—30m 宽，画成细带才不会盖过城市底色。
  const ring3 = RINGS.find((r) => r.name === '三环路') ?? RINGS[4];
  const pandaGeo = belt(ring3.radiusKm + 0.06, ring3.radiusKm + 0.31, 220, 0.03);
  const pandaMesh = new THREE.Mesh(pandaGeo, paint('#7d8a68', 0.82));
  pandaMesh.receiveShadow = true;
  pandaMesh.name = 'panda-greenway';
  group.add(pandaMesh);
  owned.push(pandaGeo);

  const trees: TreeSpot[] = [];
  const perPark = tier === 'high' ? 120 : tier === 'medium' ? 70 : 35;
  for (const park of PARK_SHAPES) scatterDisk(park, park.b > 20 ? perPark * 2 : perPark, trees);
  for (const lake of LAKE_SHAPES) scatterDisk(lake, Math.round(perPark / 2), trees);
  if (tier !== 'low') {
    for (const river of RIVER_PATHS.slice(0, 5)) {
      scatterAlongPath(river.pts, 34, unit((river.widthM ?? 30) / 2 + 14), trees);
    }
  }
  const beltCount = tier === 'high' ? 900 : tier === 'medium' ? 480 : 220;
  const midKm = (GREEN_BELT.innerKm + GREEN_BELT.outerKm) / 2;
  for (let i = 0; i < beltCount; i++) {
    const deg = (i / beltCount) * 360;
    const rad = (deg * Math.PI) / 180;
    const r = (midKm + (hash2(i, 3.3, 7) - 0.5) * 2.4) * UNIT_PER_KM;
    const x = Math.sin(rad) * r;
    const z = -Math.cos(rad) * r;
    trees.push({ x, z, h: 6 + hash2(i, 5, 9) * 7, r: 2.4 + hash2(i, 6, 11) * 2, tint: hash2(i, 8, 13) });
  }

  if (trees.length) {
    const canopyGeo = new THREE.IcosahedronGeometry(1, 0);
    const canopyMat = new THREE.MeshStandardMaterial({ color: '#3d6b3a', roughness: 0.95, flatShading: true });
    canopyMat.onBeforeCompile = (shader) => {
      shader.uniforms.uNight = GU.uNight;
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', '#include <common>\nuniform float uNight;')
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
           diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.38, 0.46, 0.62), uNight * 0.6);`,
        );
    };
    canopyMat.customProgramCacheKey = () => 'cd-canopy';
    const canopy = new THREE.InstancedMesh(canopyGeo, canopyMat, trees.length);
    canopy.castShadow = tier !== 'low';
    canopy.receiveShadow = true;
    canopy.frustumCulled = false;
    canopy.name = 'trees';

    // 树干：半径按米换算成场景单位，高度用实例 y 缩放。
    const trunkGeo = new THREE.CylinderGeometry(unit(0.4), unit(0.6), 1, 5);
    const trunk = new THREE.InstancedMesh(trunkGeo, paint('#5a4634', 0.95), trees.length);
    trunk.frustumCulled = false;
    trunk.name = 'trunks';

    const dummy = new THREE.Object3D();
    const col = new THREE.Color();
    trees.forEach((t, i) => {
      const y = groundHeight(t.x, t.z);
      dummy.position.set(t.x, y + unit(t.h) + unit(t.r) * 0.6, t.z);
      dummy.rotation.set(0, t.tint * 6.28, 0);
      dummy.scale.set(unit(t.r), unit(t.r * 1.2), unit(t.r));
      dummy.updateMatrix();
      canopy.setMatrixAt(i, dummy.matrix);
      col.setHSL(0.26 + t.tint * 0.05, 0.3 + t.tint * 0.16, 0.2 + t.tint * 0.13);
      canopy.setColorAt(i, col);
      dummy.position.set(t.x, y + unit(t.h) / 2, t.z);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.set(1, unit(t.h), 1);
      dummy.updateMatrix();
      trunk.setMatrixAt(i, dummy.matrix);
    });
    canopy.instanceMatrix.needsUpdate = true;
    trunk.instanceMatrix.needsUpdate = true;
    if (canopy.instanceColor) canopy.instanceColor.needsUpdate = true;
    group.add(canopy, trunk);
    owned.push(canopyGeo, canopyMat, trunkGeo, canopy, trunk);
  }

  scene.add(group);
  return {
    group,
    dispose() {
      scene.remove(group);
      for (const o of owned) o.dispose();
    },
  };
}
