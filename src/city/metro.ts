import * as THREE from 'three';
import { GU } from '../core/uniforms.ts';
import { METRO_PATHS, followTerrain, type PolyPath } from './paths.ts';
import { makeRibbon } from './ribbon.ts';
import { unit } from './matkit.ts';

/**
 * 轨道交通层。
 *
 * 成都地铁成网后，线路走向本身就是城市结构的说明图：1/18 号线拉出天府大道中轴，
 * 7 号线画出环，18 号线一路向南戳到天府新站。所以这一层用彩色细带 + 站点珠来表达，
 * 在正射地图视角下最好读。
 */

export interface MetroLayer {
  group: THREE.Group;
  dispose(): void;
}

function railMaterial(hex: string): THREE.MeshStandardMaterial {
  const col = new THREE.Color(hex);
  const mat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.55, metalness: 0.1 });
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uNight = GU.uNight;
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uNight;')
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
         totalEmissiveRadiance += diffuseColor.rgb * (0.14 + uNight * 0.8);`,
      );
  };
  mat.customProgramCacheKey = () => `cd-metro-${col.getHexString()}`;
  return mat;
}

/** 沿线按站距取样：MetroDef.stations 决定珠子密度。 */
function stationSpots(path: PolyPath, stations: number): THREE.Vector3[] {
  const n = path.pts.length;
  const out: THREE.Vector3[] = [];
  if (n < 2 || stations <= 0) return out;
  const step = Math.max(1, Math.round((n - 1) / stations));
  for (let i = 0; i < n; i += step) {
    const p = path.pts[i];
    const t = i / (n - 1);
    out.push(new THREE.Vector3(p.x, followTerrain(path, 0.05)(t), p.z));
  }
  return out;
}

export function buildMetro(scene: THREE.Scene): MetroLayer {
  const group = new THREE.Group();
  group.name = 'metro';
  const owned: Array<{ dispose(): void }> = [];
  const allStations: THREE.Vector3[] = [];

  for (const line of METRO_PATHS) {
    const geo = makeRibbon(line.pts, {
      widthAt: () => unit(line.express ? 9 : 6.5),
      yAt: followTerrain(line, 0.028),
      closed: line.closed,
      uvScale: 1,
    });
    const mesh = new THREE.Mesh(geo, railMaterial(line.color ?? '#8a8f96'));
    mesh.receiveShadow = true;
    mesh.name = `metro-${line.name}`;
    group.add(mesh);
    owned.push(geo);
    const stations = line.stations ?? Math.max(6, Math.round(line.lengthUnits / 12));
    for (const s of stationSpots(line, stations)) allStations.push(s);
  }

  if (allStations.length) {
    const sGeo = new THREE.SphereGeometry(unit(14), 8, 6);
    // 站点珠用中性灰：白天是地面设施的颜色，夜里才靠 emissive 亮起来。
    const stationMat = railMaterial('#9aa1a8');
    const mesh = new THREE.InstancedMesh(sGeo, stationMat, allStations.length);
    mesh.frustumCulled = false;
    mesh.name = 'metro-stations';
    const dummy = new THREE.Object3D();
    allStations.forEach((p, i) => {
      dummy.position.copy(p);
      dummy.scale.set(1, 0.55, 1);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
    group.add(mesh);
    owned.push(sGeo, mesh);
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
