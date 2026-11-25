import { POI_PLACES, type PoiPlace } from '../city/paths.ts';
import { BAND_NAMES } from '../geo/chengdu.ts';
import type { PoiCategory } from '../geo/pois.ts';
import { clockLabel, TIME_PRESETS, type LayerKey, type Quality, type Store, type ViewMode, type Weather } from '../state.ts';

export const CATEGORY_LABEL: Record<PoiCategory, string> = {
  core: '城市原点',
  tower: '超高层',
  culture: '历史文化',
  park: '公园生态',
  transport: '交通枢纽',
  edu: '高校园区',
  newcity: '天府新区',
  nature: '山水远景',
};

const LAYER_LABEL: Record<LayerKey, string> = {
  terrain: '地形（龙门山—龙泉山）',
  green: '绿地 · 环城生态公园',
  water: '水系（锦江—府河—湖）',
  roads: '路网（环 + 放射）',
  traffic: '环线车流',
  buildings: '建筑（实例化）',
  landmarks: '地标',
  metro: '轨道交通',
  labels: '地名标注',
};

const VIEW_LABEL: Record<ViewMode, string> = {
  sandbox: '沙盘俯瞰',
  panorama: '贴地漫游',
  map: '正射地图',
};

const WEATHER_LABEL: Record<Weather, string> = {
  clear: '晴',
  mist: '雾',
  rain: '雨',
  snow: '雪',
};

export interface PanelActions {
  flyTo(poi: PoiPlace): void;
  setView(view: ViewMode): void;
  setQuality(q: Quality): void;
  applyLayers(layers: Record<LayerKey, boolean>): void;
  setBand(band: string | null): void;
  reset(): void;
}

export interface Card {
  kind: string;
  title: string;
  body: string;
  facts: Array<[string, string]>;
}

export interface Panel {
  root: HTMLElement;
  hud: HTMLElement;
  info: HTMLElement;
  setStats(fps: number, tris: number, calls: number, buildings: number): void;
  showCard(card: Card): void;
  showPoi(poi: PoiPlace): void;
  hidePoi(): void;
}

export function poiCard(poi: PoiPlace): Card {
  const facts: Array<[string, string]> = [
    ['坐标', `${poi.lat.toFixed(4)}°N，${poi.lon.toFixed(4)}°E`],
    ['距天府广场', `${poi.distKm.toFixed(2)} km · 方位 ${((poi.bearingDeg + 360) % 360).toFixed(0)}°`],
  ];
  if (poi.heightM) facts.push(['建成高度', `${poi.heightM} m`]);
  if (poi.tag) facts.push(['说明', poi.tag]);
  return { kind: CATEGORY_LABEL[poi.category], title: poi.name, body: poi.blurb, facts };
}

function h<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text !== undefined) el.textContent = text;
  return el;
}

function section(title: string, ...children: Node[]): HTMLElement {
  const s = h('section', 'sec');
  s.append(h('h3', 'sec-title', title), ...children);
  return s;
}

/** 单选按钮组：重绘由 sync() 统一驱动，避免各处手写 class。 */
function chipRow<T extends string>(
  items: Array<[T, string]>,
  active: (v: T) => boolean,
  onPick: (v: T) => void,
): { el: HTMLElement; sync: () => void } {
  const el = h('div', 'chips');
  const buttons: Array<[T, HTMLButtonElement]> = [];
  for (const [value, label] of items) {
    const b = h('button', 'chip', label);
    b.type = 'button';
    b.addEventListener('click', () => onPick(value));
    buttons.push([value, b]);
    el.append(b);
  }
  return { el, sync: () => buttons.forEach(([v, b]) => b.classList.toggle('is-on', active(v))) };
}

export function createPanel(store: Store, actions: PanelActions): Panel {
  const root = h('div', 'panel');
  const syncers: Array<() => void> = [];

  const header = h('header', 'panel-head');
  header.append(
    h('h1', 'panel-title', '成都 · 3D 城市沙盘'),
    h('p', 'panel-sub', '环 + 放射路网 · 程序化生成 · 1 场景单位 = 100 m'),
  );

  // —— 视角 / 画质 ——
  const viewRow = chipRow<ViewMode>(
    [
      ['sandbox', VIEW_LABEL.sandbox],
      ['panorama', VIEW_LABEL.panorama],
      ['map', VIEW_LABEL.map],
    ],
    (v) => store.state.view === v,
    (v) => {
      store.set({ view: v });
      actions.setView(v);
    },
  );
  const qualityRow = chipRow<Quality>(
    [
      ['high', '高'],
      ['medium', '中'],
      ['low', '低'],
    ],
    (v) => store.state.quality === v,
    (v) => {
      store.set({ quality: v });
      actions.setQuality(v);
    },
  );
  syncers.push(viewRow.sync, qualityRow.sync);

  const viewBlock = h('div', 'stack');
  viewBlock.append(
    h('span', 'row-label', '相机'),
    viewRow.el,
    h('span', 'row-label', '画质（改建筑数量与阴影）'),
    qualityRow.el,
  );

  // —— 昼夜 ——
  const clockOut = h('span', 'mono');
  const playBtn = h('button', 'btn', '暂停');
  playBtn.type = 'button';
  const speedBtn = (mult: number, label: string) => {
    const b = h('button', 'chip', label);
    b.type = 'button';
    b.addEventListener('click', () => store.set({ speed: store.state.speed > 0 ? 0 : mult }));
    return b;
  };
  const hourSlider = h('input', 'slider');
  hourSlider.type = 'range';
  hourSlider.min = '0';
  hourSlider.max = '24';
  hourSlider.step = '0.05';
  hourSlider.addEventListener('input', () => store.set({ hour: Number(hourSlider.value) }));

  const speedChips = h('div', 'chips');
  const presetChips = h('div', 'chips');
  for (const [mult, label] of [
    [0.12, '慢'],
    [0.35, '常速'],
    [1.2, '快'],
    [4, '飞速'],
  ] as Array<[number, string]>) {
    speedChips.append(speedBtn(mult, label));
  }
  for (const preset of TIME_PRESETS) {
    const b = h('button', 'chip', `${preset.label} ${clockLabel(preset.hour)}`);
    b.type = 'button';
    b.addEventListener('click', () => store.set({ hour: preset.hour }));
    presetChips.append(b);
  }

  const timeBlock = h('div', 'stack');
  const clockRow = h('div', 'row');
  clockRow.append(h('span', 'row-label', '地方时'), clockOut, playBtn);
  timeBlock.append(clockRow, hourSlider, speedChips, presetChips);

  const syncPlay = () => {
    playBtn.textContent = store.state.speed > 0 ? '暂停' : '播放';
    for (const [i, el] of Array.from(speedChips.children).entries()) {
      const want = [0.12, 0.35, 1.2, 4][i];
      el.classList.toggle('is-on', store.state.speed === want);
    }
    for (const [i, el] of Array.from(presetChips.children).entries()) {
      const want = [6.6, 12.4, 18.7, 22.6][i];
      el.classList.toggle('is-on', Math.abs(store.state.hour - want) < 0.03);
    }
  };
  syncers.push(syncPlay);

  // —— 天气 / 亮窗 ——
  const weatherRow = chipRow<Weather>(
    [
      ['clear', WEATHER_LABEL.clear],
      ['mist', WEATHER_LABEL.mist],
      ['rain', WEATHER_LABEL.rain],
      ['snow', WEATHER_LABEL.snow],
    ],
    (v) => store.state.weather === v,
    (v) => store.set({ weather: v }),
  );
  const litOut = h('span', 'mono');
  const litSlider = h('input', 'slider');
  litSlider.type = 'range';
  litSlider.min = '0.05';
  litSlider.max = '0.95';
  litSlider.step = '0.05';
  litSlider.addEventListener('input', () => store.set({ litRatio: Number(litSlider.value) }));
  const litRow = h('div', 'row');
  litRow.append(h('span', 'row-label', '夜间亮窗比例'), litOut);
  syncers.push(weatherRow.sync);
  const weatherBlock = h('div', 'stack');
  weatherBlock.append(weatherRow.el, litRow, litSlider);

  // —— 图层 ——
  const layerList = h('div', 'layers');
  const layerBoxes = new Map<LayerKey, HTMLInputElement>();
  for (const key of Object.keys(LAYER_LABEL) as LayerKey[]) {
    const label = h('label', 'layer');
    const box = document.createElement('input');
    box.type = 'checkbox';
    box.checked = store.state.layers[key];
    box.addEventListener('change', () => {
      store.setLayer(key, box.checked);
      actions.applyLayers(store.state.layers);
    });
    layerBoxes.set(key, box);
    label.append(box, h('span', undefined, LAYER_LABEL[key]));
    layerList.append(label);
  }

  // —— 圈层对比 ——
  const BAND_SHORT = ['一环内', '一二环', '二中环', '中三环', '三环—绕城', '绕城外'];
  const bandChips = h('div', 'chips');
  const bandButtons: Array<[string | null, HTMLButtonElement]> = [];
  const bandEntries: Array<[string | null, string]> = [[null, '全部'], ...BAND_NAMES.map((n, i) => [n, BAND_SHORT[i]] as [string, string])];
  for (const [value, label] of bandEntries) {
    const b = h('button', 'chip', label);
    b.type = 'button';
    b.title = value ?? '不过滤圈层';
    b.addEventListener('click', () => {
      store.set({ band: value });
      actions.setBand(value);
    });
    bandButtons.push([value, b]);
    bandChips.append(b);
  }

  // —— 地标 ——
  const search = h('input', 'search');
  search.type = 'search';
  search.placeholder = `搜索 ${POI_PLACES.length} 个地标：双子塔、都江堰…`;
  const list = h('div', 'poi-list');
  const listItems = new Map<string, HTMLButtonElement>();
  const renderList = () => {
    const q = search.value.trim();
    list.textContent = '';
    listItems.clear();
    for (const poi of POI_PLACES) {
      if (q && !poi.name.includes(q) && !poi.blurb.includes(q) && CATEGORY_LABEL[poi.category].includes(q) === false) continue;
      const b = h('button', 'poi');
      b.type = 'button';
      const meta = poi.heightM && poi.heightM > 0 ? `${Math.round(poi.heightM)} m` : `距心 ${poi.distKm.toFixed(1)} km`;
      b.append(h('span', 'poi-name', poi.name), h('span', 'poi-meta', `${CATEGORY_LABEL[poi.category]} · ${meta}`));
      b.addEventListener('click', () => {
        store.set({ poiId: poi.id });
        actions.flyTo(poi);
      });
      listItems.set(poi.id, b);
      list.append(b);
    }
  };
  search.addEventListener('input', renderList);
  renderList();

  const resetBtn = h('button', 'btn btn-wide', '恢复默认视角与参数');
  resetBtn.type = 'button';
  resetBtn.addEventListener('click', () => actions.reset());

  const foot = h('div', 'panel-foot');
  foot.append(resetBtn, h('p', 'hint', '拖拽旋转 · 滚轮缩放 · 右键平移 · 点击建筑看信息'));

  root.append(
    header,
    section('视角', viewBlock),
    section('昼夜循环', timeBlock),
    section('天气 · 夜景', weatherBlock),
    section('图层', layerList),
    section('圈层对比', bandChips),
    section('地标（点击飞入）', search, list),
    foot,
  );

  const info = h('aside', 'info-card');
  info.hidden = true;
  const hud = h('div', 'hud');
  const hudTop = h('div', 'hud-row');
  const hudSub = h('div', 'hud-row hud-sub');
  hud.append(hudTop, hudSub);

  const syncAll = () => {
    hourSlider.value = String(store.state.hour);
    litSlider.value = String(store.state.litRatio);
    clockOut.textContent = clockLabel(store.state.hour);
    litOut.textContent = `${Math.round(store.state.litRatio * 100)}%`;
    for (const [key, box] of layerBoxes) box.checked = store.state.layers[key];
    for (const [value, b] of bandButtons) b.classList.toggle('is-on', value === store.state.band);
    for (const [id, el] of listItems) el.classList.toggle('is-on', id === store.state.poiId);
    for (const fn of syncers) fn();
  };
  store.subscribe(syncAll);

  const showCard = (card: Card) => {
    info.textContent = '';
    info.hidden = false;
    const close = h('button', 'info-close', '×');
    close.type = 'button';
    close.addEventListener('click', () => {
      info.hidden = true;
    });
    const facts = h('dl', 'info-facts');
    for (const [k, v] of card.facts) facts.append(h('dt', undefined, k), h('dd', undefined, v));
    info.append(close, h('div', 'info-kind', card.kind), h('div', 'info-title', card.title), h('p', 'info-body', card.body), facts);
  };

  return {
    root,
    hud,
    info,
    setStats(fps, tris, calls, buildings) {
      const s = store.state;
      hudTop.textContent = `${clockLabel(s.hour)} · ${fps.toFixed(0)} FPS · ${(tris / 1000).toFixed(0)}k 三角面 · ${calls} draw call`;
      hudSub.textContent = `${VIEW_LABEL[s.view]} · ${WEATHER_LABEL[s.weather]} · 建筑 ${buildings.toLocaleString('zh-CN')} 栋 · 画质${s.quality}`;
    },
    showCard,
    showPoi(poi) {
      showCard(poiCard(poi));
    },
    hidePoi() {
      info.hidden = true;
    },
  };
}
