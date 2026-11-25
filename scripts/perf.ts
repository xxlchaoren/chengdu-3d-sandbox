/**
 * 无 GPU 的构建耗时／规模基准：在 Node 里把各图层建出来，统计实例数与三角形数。
 * 渲染器不在这里参与，因此跑的是纯 CPU 生成成本（首帧预算的主要来源）。
 *   node scripts/perf.ts
 */
import * as THREE from 'three';
import { buildTerrain } from '../src/city/terrain.ts';
import { buildRoads } from '../src/city/roads.ts';
import { buildWater } from '../src/city/water.ts';
import { buildGreen } from '../src/city/green.ts';
import { buildMetro } from '../src/city/metro.ts';
import { buildBuildings } from '../src/city/buildings.ts';
import { buildLandmarks } from '../src/city/landmarks.ts';

function count(root: THREE.Object3D) {
  let objects = 0;
  let tris = 0;
  let instances = 0;
  root.traverse((o) => {
    objects++;
    const m = o as THREE.Mesh;
    const geo = m.geometry as THREE.BufferGeometry | undefined;
    if (!geo?.attributes?.position) return;
    const n = geo.index ? geo.index.count : geo.attributes.position.count;
    const per = geo.index ? n / 3 : n / 3;
    const mult = o instanceof THREE.InstancedMesh ? o.count : 1;
    tris += per * mult;
    if (o instanceof THREE.InstancedMesh) instances += o.count;
  });
  return { objects, tris: Math.round(tris), instances };
}

const scene = new THREE.Scene();
const total: Record<string, number> = { objects: 0, tris: 0, instances: 0 };
let msAll = 0;

function step(name: string, fn: () => THREE.Object3D | { group: THREE.Object3D }) {
  const t = performance.now();
  const built = fn();
  const ms = performance.now() - t;
  const root = 'group' in built ? built.group : built;
  const c = count(root);
  msAll += ms;
  total.objects += c.objects;
  total.tris += c.tris;
  total.instances += c.instances;
  console.log(
    `${name.padEnd(12)} ${ms.toFixed(1).padStart(7)} ms  objects=${String(c.objects).padStart(5)}  tris=${String(c.tris).padStart(9)}  instances=${c.instances}`,
  );
}

step('terrain', () => buildTerrain(scene));
step('roads', () => buildRoads(scene, 'high'));
step('water', () => buildWater(scene));
step('green', () => buildGreen(scene, 'high'));
step('metro', () => buildMetro(scene));
step('buildings', () => buildBuildings(scene, 'high'));
step('landmarks', () => buildLandmarks(scene, { detailed: true }));

console.log(
  `\n合计 ${msAll.toFixed(0)} ms  objects=${total.objects}  tris=${total.tris}  instances=${total.instances}`,
);

// 覆盖度：绕城（13.5 km 半径）内每 400 m 采一个点，看有多少格落了建筑。
const group = scene.getObjectByName('buildings');
if (group) {
  const cells = new Set<string>();
  group.traverse((o) => {
    if (!(o instanceof THREE.InstancedMesh)) return;
    const m = new THREE.Matrix4();
    const p = new THREE.Vector3();
    for (let i = 0; i < o.count; i++) {
      o.getMatrixAt(i, m);
      p.setFromMatrixPosition(m);
      cells.add(`${Math.round(p.x / 4)}:${Math.round(p.z / 4)}`);
    }
  });
  const edge = 13.5 * 10; // 绕城半径 → 场景单位
  let hit = 0;
  let probe = 0;
  for (let x = -edge; x <= edge; x += 4) {
    for (let z = -edge; z <= edge; z += 4) {
      probe++;
      if (cells.has(`${Math.round(x / 4)}:${Math.round(z / 4)}`)) hit++;
    }
  }
  console.log(`绕城建筑格 ${cells.size} 个，400m 网格覆盖率 ${((100 * hit) / probe).toFixed(1)}%`);
}
