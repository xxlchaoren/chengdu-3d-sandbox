export type Quality = 'high' | 'medium' | 'low';
export type ViewMode = 'sandbox' | 'panorama' | 'map';
export type Weather = 'clear' | 'mist' | 'rain' | 'snow';

/** 可独立开关的图层，对应 city/* 里各 buildXxx() 产出的组。 */
export const LAYER_KEYS = [
  'terrain',
  'green',
  'water',
  'roads',
  'traffic',
  'buildings',
  'landmarks',
  'metro',
  'labels',
] as const;

export type LayerKey = (typeof LAYER_KEYS)[number];

export interface AppState {
  quality: Quality;
  view: ViewMode;
  /** 地方时 0—24。 */
  hour: number;
  /** 每秒推进多少模拟小时；0 表示暂停。 */
  speed: number;
  weather: Weather;
  /** 夜间亮窗比例 0—1。 */
  litRatio: number;
  layers: Record<LayerKey, boolean>;
  /** 高亮的环线分区（bandOf 的名字），null 为不高亮。 */
  band: string | null;
  poiId: string | null;
}

export const DEFAULT_STATE: AppState = {
  quality: 'high',
  view: 'sandbox',
  // 开场定在蓝调时刻：太阳落到地平线下约 1°，天空还剩一线余色，
  // 而路灯、窗光与环路车流光河已经全部点亮——成都夜景最好看的那十几分钟。
  hour: 20.2,
  speed: 0.35,
  weather: 'clear',
  litRatio: 0.55,
  layers: {
    terrain: true,
    green: true,
    water: true,
    roads: true,
    traffic: true,
    buildings: true,
    landmarks: true,
    metro: true,
    labels: true,
  },
  band: null,
  poiId: null,
};

/** 时间按钮：一天里最能说明问题的四个时刻（北京时间，成都的日出约 06:00、日落约 20:00）。 */
export const TIME_PRESETS: Array<{ label: string; hour: number }> = [
  { label: '清晨', hour: 6.6 },
  { label: '正午', hour: 13.1 },
  { label: '黄昏', hour: 19.9 },
  { label: '深夜', hour: 22.6 },
];

const STORAGE_KEY = 'cd-sandbox-state-v1';

type Listener = (s: AppState) => void;

export class Store {
  state: AppState;
  private listeners = new Set<Listener>();

  constructor() {
    this.state = load();
  }

  get<K extends keyof AppState>(key: K): AppState[K] {
    return this.state[key];
  }

  /** write=false 用于每帧推进的时钟：照常通知 UI，但不落盘。 */
  set(patch: Partial<AppState>, write = true) {
    this.state = { ...this.state, ...patch };
    if (write) persist(this.state);
    this.emit();
  }

  setLayer(key: LayerKey, on: boolean) {
    this.state = { ...this.state, layers: { ...this.state.layers, [key]: on } };
    persist(this.state);
    this.emit();
  }

  reset() {
    this.state = { ...DEFAULT_STATE, layers: { ...DEFAULT_STATE.layers } };
    persist(this.state);
    this.emit();
  }

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    fn(this.state);
    return () => this.listeners.delete(fn);
  }

  private emit() {
    for (const fn of this.listeners) fn(this.state);
  }
}

function load(): AppState {
  const base: AppState = { ...DEFAULT_STATE, layers: { ...DEFAULT_STATE.layers } };
  if (typeof localStorage === 'undefined') return base;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const parsed = JSON.parse(raw) as Partial<AppState>;
    return {
      ...base,
      ...parsed,
      layers: { ...base.layers, ...(parsed.layers ?? {}) },
    };
  } catch {
    return base;
  }
}

function persist(s: AppState) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    // 隐私模式写不进去，忽略即可。
  }
}

export function clockLabel(hour: number): string {
  const h = Math.floor(hour) % 24;
  const m = Math.floor((hour - Math.floor(hour)) * 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}
