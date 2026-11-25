import * as THREE from 'three';
import { Stage, type Quality, type ViewMode } from './core/renderer.ts';
import { SkySystem } from './core/sky.ts';
import { GU } from './core/uniforms.ts';
import { Store, clockLabel, type LayerKey } from './state.ts';
import { createPanel, poiCard, type Card, type Panel } from './ui/panel.ts';
import { BAND_NAMES, bandEdges, districtOf } from './geo/chengdu.ts';
import { distOf, polar, unproject, type Planar } from './geo/project.ts';
import { POI_PLACES, type PoiPlace } from './city/paths.ts';
import { buildTerrain, groundHeight } from './city/terrain.ts';
import { makeRibbon } from './city/ribbon.ts';
import { buildRoads, type RoadLayer } from './city/roads.ts';
import { buildWater, type WaterLayer } from './city/water.ts';
import { buildGreen, type GreenLayer } from './city/green.ts';
import { buildMetro, type MetroLayer } from './city/metro.ts';
import { buildBuildings, type BuildingLayer } from './city/buildings.ts';
import { buildLandmarks, disposeLandmarks } from './city/landmarks.ts';

/**
 * 入口：装配图层、驱动昼夜循环、接上控制台。
 *
 * 生成顺序按「先看见城市轮廓、再补细节」排，每步让出一帧，
 * 首帧在遮罩淡出前就画出来，而不是白屏等到最后。
 */

const canvas = document.getElementById('stage') as HTMLCanvasElement;
const bootEl = document.getElementById('boot') as HTMLElement;
const bootMsg = document.getElementById('boot-msg') as HTMLElement;
const bootFill = document.getElementById('boot-fill') as HTMLElement;
const labelHost = document.getElementById('labels') as HTMLElement;

/**
 * 让出一帧给浏览器合成，好让启动进度条动得起来。
 * 页面在后台时 rAF 不触发，所以再用定时器兜底，避免启动流程卡在第一步。
 */
function yieldFrame(): Promise<void> {
  return new Promise((resolve) => {
    let done = false;
    const fin = () => {
      if (done) return;
      done = true;
      resolve();
    };
    requestAnimationFrame(fin);
    window.setTimeout(fin, 32);
  });
}

async function step(label: string, pct: number, run: () => void) {
  bootMsg.textContent = label;
  bootFill.style.width = `${pct}%`;
  await yieldFrame();
  run();
}

const store = new Store();
const stage = new Stage(canvas);
const sky = new SkySystem(stage.scene);
stage.sunLight = sky.sun;

interface Layers {
  roads: RoadLayer | null;
  water: WaterLayer | null;
  green: GreenLayer | null;
  metro: MetroLayer | null;
  buildings: BuildingLayer | null;
  landmarks: THREE.Group | null;
}

const layers: Layers = { roads: null, water: null, green: null, metro: null, buildings: null, landmarks: null };
let buildingCount = 0;
let panel: Panel;

function bandCircle(radiusKm: number, steps = 220): Planar[] {
  const pts: Planar[] = [];
  for (let i = 0; i < steps; i++) pts.push(polar(radiusKm, (i / steps) * 360));
  return pts;
}

/** 选中圈层时画出它的内外边界，配合着色器把其它分区压成灰底。 */
function rebuildBandOverlay(band: string | null) {
  const old = stage.scene.getObjectByName('band-overlay');
  if (old) {
    old.traverse((o) => {
      const mesh = o as THREE.Mesh;
      mesh.geometry?.dispose();
      (mesh.material as THREE.Material | undefined)?.dispose();
    });
    stage.scene.remove(old);
  }
  const index = band ? BAND_NAMES.indexOf(band) : -1;
  GU.uBandSel.value = index;
  if (index < 0) return;

  const { innerKm, outerKm } = bandEdges(index);
  const group = new THREE.Group();
  group.name = 'band-overlay';
  const mat = new THREE.MeshBasicMaterial({ color: '#ffc76b', transparent: true, opacity: 0.55, side: THREE.DoubleSide });
  for (const radiusKm of [innerKm, Math.min(outerKm, 40)]) {
    if (radiusKm <= 0.05) continue;
    const pts = bandCircle(radiusKm);
    const geo = makeRibbon(pts, {
      widthAt: () => 0.055,
      yAt: (t) => {
        const p = pts[Math.min(pts.length - 1, Math.round(t * (pts.length - 1)))];
        return groundHeight(p.x, p.z) + 0.05;
      },
      closed: true,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.renderOrder = 4;
    group.add(mesh);
  }
  stage.scene.add(group);
}

function makeCardForBuilding(mesh: THREE.InstancedMesh, id: number): Card {
  const m = new THREE.Matrix4();
  mesh.getMatrixAt(id, m);
  const pos = new THREE.Vector3();
  const q = new THREE.Quaternion();
  const s = new THREE.Vector3();
  m.decompose(pos, q, s);
  const wM = Math.round(s.x * 100);
  const dM = Math.round(s.z * 100);
  const hM = Math.round(s.y * 100);
  const bandAttr = mesh.geometry.getAttribute('aBand');
  const bandIndex = bandAttr ? bandAttr.getX(id) : -1;
  const kind = Number(mesh.name.replace('buildings-kind', '')) || 0;
  const kindName = ['住宅（带阳台）', '办公幕墙', '商业裙房', '工业厂房'][kind] ?? '建筑';
  const p: Planar = { x: pos.x, z: pos.z };
  const ll = unproject(pos.x, pos.z);
  const district = districtOf(p);
  return {
    kind: `${BAND_NAMES[bandIndex] ?? '圈层未知'} · ${kindName}`,
    title: `${district?.name ?? '成都市'} 街区体量`,
    body:
      '这栋楼不是手工摆的：程序按「所在圈层基准高度 + 副中心强度 + 街区临路宽 + 随机起伏」推出体量，再用极坐标格网和环—放射路网咬合。点空地看行政区，点地标记它的资料。',
    facts: [
      ['估算尺寸', `${wM} × ${dM} m，高 ${hM} m（约 ${Math.max(1, Math.round(hM / 3.4))} 层）`],
      ['所在圈层', BAND_NAMES[bandIndex] ?? '—'],
      ['距天府广场', `${distOf(p).toFixed(2)} km`],
      ['经纬度', `${ll.lat.toFixed(4)}°N，${ll.lon.toFixed(4)}°E`],
    ],
  };
}

function makeCardForGround(p: Planar): Card {
  const district = districtOf(p);
  const km = distOf(p);
  const ll = unproject(p.x, p.z);
  const index = bandEdgesOf(p).index;
  return {
    kind: '地面 · 未建模区域',
    title: district ? district.name : '成都平原',
    body: district
      ? `${district.note}。行政区在本沙盘里按「方位角 + 里程」扇区近似，不是法定界线。`
      : '成都平原海拔约 500 m，城区相对高差按 0 处理；真正的起伏在西侧龙门山和东侧龙泉山。',
    facts: [
      ['距天府广场', `${km.toFixed(2)} km · 方位 ${(((Math.atan2(p.x, -p.z) * 180) / Math.PI + 360) % 360).toFixed(0)}°`],
      ['所在圈层', BAND_NAMES[index] ?? '绕城以外'],
      ['海拔（相对）', `${(groundHeight(p.x, p.z) * 100).toFixed(0)} m`],
      ['经纬度', `${ll.lat.toFixed(4)}°N，${ll.lon.toFixed(4)}°E`],
    ],
  };
}

function bandEdgesOf(p: Planar) {
  const km = distOf(p);
  for (let i = BAND_NAMES.length - 1; i >= 0; i--) {
    const e = bandEdges(i);
    if (km >= e.innerKm) return { index: i, ...e };
  }
  return { index: 0, ...bandEdges(0) };
}

/* ———— 地名标注 ———— */

interface LabelItem {
  poi: PoiPlace;
  el: HTMLElement;
  pos: THREE.Vector3;
  key: boolean;
}

let labelItems: LabelItem[] = [];

function buildLabels() {
  labelHost.textContent = '';
  labelItems = POI_PLACES.map((poi) => {
    const el = document.createElement('div');
    const key = (poi.heightM ?? 0) >= 150 || poi.category === 'core' || poi.category === 'nature';
    el.className = key ? 'lbl is-key' : 'lbl';
    el.textContent = poi.name;
    el.hidden = true;
    const y = groundHeight(poi.p.x, poi.p.z) + Math.max(0.35, (poi.heightM ?? 0) / 100 + 0.22);
    labelHost.append(el);
    return { poi, el, pos: new THREE.Vector3(poi.p.x, y, poi.p.z), key };
  });
}

const projected = new THREE.Vector3();

function updateLabels(cameraPos: THREE.Vector3) {
  const occupied = new Set<string>();
  const sorted = labelItems.slice().sort((a, b) => (b.poi.heightM ?? 0) - (a.poi.heightM ?? 0));
  for (const item of sorted) {
    const dist = cameraPos.distanceTo(item.pos);
    if ((item.key ? dist > 900 : dist > 135) || stage.mode === 'map' && !item.key) {
      item.el.hidden = true;
      continue;
    }
    projected.copy(item.pos).project(stage.camera);
    if (projected.z > 1 || Math.abs(projected.x) > 1 || Math.abs(projected.y) > 1) {
      item.el.hidden = true;
      continue;
    }
    const x = (projected.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-projected.y * 0.5 + 0.5) * window.innerHeight;
    const cell = `${Math.round(x / 96)}:${Math.round(y / 20)}`;
    if (occupied.has(cell)) {
      item.el.hidden = true;
      continue;
    }
    occupied.add(cell);
    item.el.hidden = false;
    item.el.style.transform = `translate(-50%, -120%) translate(${x.toFixed(0)}px, ${y.toFixed(0)}px)`;
  }
}

/* ———— 图层开关 ———— */

function applyLayers(map: Record<LayerKey, boolean>) {
  const named: Array<[LayerKey, string]> = [
    ['roads', 'roads'],
    ['water', 'water'],
    ['green', 'green'],
    ['metro', 'metro'],
    ['buildings', 'buildings'],
    ['landmarks', 'landmarks'],
    ['terrain', 'terrain'],
  ];
  for (const [key, name] of named) {
    const obj = stage.scene.getObjectByName(name);
    if (obj) obj.visible = map[key];
  }
  const traffic = stage.scene.getObjectByName('traffic');
  if (traffic) traffic.visible = map.roads && map.traffic;
  labelHost.style.display = map.labels ? '' : 'none';
}

/* ———— 生成 ———— */

function clearCity() {
  layers.roads?.dispose();
  layers.green?.dispose();
  layers.buildings?.dispose();
  if (layers.landmarks) disposeLandmarks(layers.landmarks);
  layers.roads = null;
  layers.green = null;
  layers.buildings = null;
  layers.landmarks = null;
}

async function buildCity(q: Quality, initial: boolean) {
  const detailed = q !== 'low';
  if (initial) {
    await step('铺设地形：龙门山 · 龙泉山 · 成都平原', 12, () => {
      if (!stage.scene.getObjectByName('terrain')) buildTerrain(stage.scene);
    });
    await step('绘制锦江 · 府河 · 湖库水面', 24, () => {
      layers.water = buildWater(stage.scene);
    });
    await step('画出环 + 放射路网与高架桥墩', 38, () => {
      layers.roads = buildRoads(stage.scene, q);
    });
    await step('铺公园 · 环城生态公园 · 行道树', 52, () => {
      layers.green = buildGreen(stage.scene, q);
    });
    await step('拉出轨道交通线网与站点', 62, () => {
      layers.metro = buildMetro(stage.scene);
    });
    await step('生成建筑体量（InstancedMesh）', 80, () => {
      layers.buildings = buildBuildings(stage.scene, q);
      buildingCount = layers.buildings.count;
    });
    await step('摆下成都地标与交通枢纽', 95, () => {
      layers.landmarks = buildLandmarks(stage.scene, { detailed });
    });
  } else {
    clearCity();
    await step('按新画质重建路网与绿地', 40, () => {
      layers.roads = buildRoads(stage.scene, q);
      layers.green = buildGreen(stage.scene, q);
    });
    await step('重铺建筑体量', 70, () => {
      layers.buildings = buildBuildings(stage.scene, q);
      buildingCount = layers.buildings.count;
    });
    await step('重铺地标细节', 90, () => {
      layers.landmarks = buildLandmarks(stage.scene, { detailed });
    });
  }
  buildLabels();
  applyLayers(store.state.layers);
}

/* ———— 拾取 ———— */

const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();

function pick(clientX: number, clientY: number) {
  if (!layers.buildings) return;
  ndc.set((clientX / window.innerWidth) * 2 - 1, -(clientY / window.innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, stage.camera);
  const targets = [layers.landmarks, layers.buildings.group, stage.scene.getObjectByName('terrain')].filter(Boolean) as THREE.Object3D[];
  const hits = raycaster.intersectObjects(targets, true);
  for (const hit of hits) {
    if (!hit.object.visible) continue;
    let obj: THREE.Object3D | null = hit.object;
    while (obj) {
      const poiId = obj.userData?.poiId as string | undefined;
      if (poiId) {
        const poi = POI_PLACES.find((p) => p.id === poiId);
        if (poi) {
          store.set({ poiId: poi.id });
          panel.showCard(poiCard(poi));
          return;
        }
      }
      obj = obj.parent;
    }
    const mesh = hit.object as THREE.InstancedMesh;
    if (mesh.isInstancedMesh && mesh.name.startsWith('buildings-kind') && hit.instanceId !== undefined) {
      panel.showCard(makeCardForBuilding(mesh, hit.instanceId));
      return;
    }
    if (hit.object.name === 'terrain') {
      store.set({ poiId: null });
      panel.showCard(makeCardForGround({ x: hit.point.x, z: hit.point.z }));
      return;
    }
  }
  panel.hidePoi();
}

/* ———— 主循环 ———— */

const clock = new THREE.Clock();
let hour = store.state.hour;
let persistAcc = 0;
let fpsAcc = 0;
let fpsFrames = 0;
let labelTick = 0;

function tick() {
  requestAnimationFrame(tick);
  const dt = Math.min(0.05, clock.getDelta());
  const s = store.state;

  hour = (hour + dt * s.speed + 24) % 24;
  persistAcc += dt;
  if (persistAcc > 0.3) {
    persistAcc = 0;
    store.set({ hour }, false);
  }

  GU.uTime.value += dt;
  GU.uLitGain.value = s.litRatio / 0.5;
  sky.setWeather(s.weather);
  sky.update(hour, stage.camera.position, dt);
  stage.update(dt);
  layers.roads?.update(dt);
  stage.render();

  fpsAcc += dt;
  fpsFrames++;
  if (fpsAcc >= 0.4) {
    const info = stage.renderer.info.render;
    panel.setStats((fpsFrames / fpsAcc) * 1, info.triangles, info.calls, buildingCount);
    fpsAcc = 0;
    fpsFrames = 0;
  }

  labelTick++;
  if (labelTick % 2 === 0 && s.layers.labels) updateLabels(stage.camera.position);
}

/* ———— 交互接线 ———— */

function setView(v: ViewMode) {
  store.set({ view: v });
  stage.applyMode(v);
}

function wireInput(panelRoot: HTMLElement) {
  let downX = 0;
  let downY = 0;
  let downT = 0;
  canvas.addEventListener('pointerdown', (e) => {
    downX = e.clientX;
    downY = e.clientY;
    downT = performance.now();
  });
  canvas.addEventListener('pointerup', (e) => {
    if (Math.hypot(e.clientX - downX, e.clientY - downY) < 6 && performance.now() - downT < 450) pick(e.clientX, e.clientY);
  });
  window.addEventListener('resize', () => stage.resize());
  window.addEventListener('keydown', (e) => {
    const tag = (e.target as HTMLElement | null)?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    const k = e.key.toLowerCase();
    if (k === '1') setView('sandbox');
    else if (k === '2') setView('panorama');
    else if (k === '3') setView('map');
    else if (k === 'r') stage.resetView();
    else if (k === 'n') store.set({ hour: 21.6 });
    else if (k === 'd') store.set({ hour: 12.4 });
    else if (k === 'h') panelRoot.classList.toggle('is-hidden');
    else if (k === ' ') {
      store.set({ speed: store.state.speed > 0 ? 0 : 0.35 });
      e.preventDefault();
    }
  });
}

/**
 * 开发期自检接口：window.__cd
 *
 * 后台标签页里 rAF 不跑、也拿不到截图，所以这里强制渲染一帧并回读像素摘要，
 * 用来判断「画面是真black还是真出图了」。只在 DEV 构建里挂载。
 */
function installDiagnostics() {
  if (!import.meta.env.DEV) return;
  const api = {
    stats() {
      return {
        buildings: buildingCount,
        hour,
        night: GU.uNight.value,
        scene: stage.scene.children.map((c) => c.name || c.type),
        tris: stage.renderer.info.render.triangles,
        calls: stage.renderer.info.render.calls,
        geometries: stage.renderer.info.memory.geometries,
        textures: stage.renderer.info.memory.textures,
        programs: stage.renderer.info.programs?.length ?? 0,
        labels: labelItems.filter((l) => !l.el.hidden).length,
      };
    },
    /** 渲染一帧并抽样像素：返回亮暗占比与平均色，足够区分黑屏/白屏/出图。 */
    sample(): { mean: [number, number, number]; bright: number; dark: number; pixels: number } {
      sky.update(hour, stage.camera.position, 0.016);
      stage.update(0.016);
      stage.render();
      const gl = stage.renderer.getContext();
      const w = gl.drawingBufferWidth;
      const h = gl.drawingBufferHeight;
      const buf = new Uint8Array(w * h * 4);
      gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, buf);
      let r = 0;
      let g = 0;
      let b = 0;
      let bright = 0;
      let dark = 0;
      let n = 0;
      for (let i = 0; i < buf.length; i += 4 * 37) {
        const pr = buf[i];
        const pg = buf[i + 1];
        const pb = buf[i + 2];
        r += pr;
        g += pg;
        b += pb;
        const l = (pr + pg + pb) / 3;
        if (l > 150) bright++;
        if (l < 18) dark++;
        n++;
      }
      return { mean: [Math.round(r / n), Math.round(g / n), Math.round(b / n)], bright: bright / n, dark: dark / n, pixels: n };
    },
    fly(id: string) {
      const poi = POI_PLACES.find((p) => p.id === id);
      if (poi) {
        stage.focusPlanar(poi.p, poi.flyKm ?? 1.2, 0.5);
        panel.showCard(poiCard(poi));
      }
    },
    setHour(v: number) {
      hour = v;
      store.set({ hour: v });
    },
    setView(v: ViewMode) {
      setView(v);
    },
    store,
    stage,
  };
  (window as unknown as { __cd: typeof api }).__cd = api;
}

async function main() {
  stage.applyMode(store.state.view, true);
  stage.setQuality(store.state.quality);
  await buildCity(store.state.quality, true);
  rebuildBandOverlay(store.state.band);

  panel = createPanel(store, {
    flyTo(poi) {
      stage.focusPlanar(poi.p, poi.flyKm ?? 1.2, store.state.view === 'panorama' ? 0.22 : 0.5);
      panel.showCard(poiCard(poi));
    },
    setView,
    setQuality(q) {
      stage.setQuality(q);
      void buildCity(q, false);
    },
    applyLayers,
    setBand: rebuildBandOverlay,
    reset() {
      store.reset();
      stage.setQuality(store.state.quality);
      stage.applyMode(store.state.view, true);
      rebuildBandOverlay(store.state.band);
      applyLayers(store.state.layers);
    },
  });

  document.body.append(panel.root, panel.hud, panel.info);

  const toggle = document.createElement('button');
  toggle.className = 'panel-toggle';
  toggle.type = 'button';
  toggle.textContent = '控制台';
  toggle.addEventListener('click', () => panel.root.classList.toggle('is-open'));
  document.body.append(toggle);

  wireInput(panel.root);
  installDiagnostics();

  bootMsg.textContent = `已生成 ${buildingCount.toLocaleString('zh-CN')} 栋建筑 · ${POI_PLACES.length} 处地标 · ${clockLabel(hour)}`;
  bootEl.classList.add('is-done');
  window.setTimeout(() => bootEl.remove(), 800);

  clock.start();
  tick();
}

void main();
