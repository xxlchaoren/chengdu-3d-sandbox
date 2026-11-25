import { bearingOf, distOf, project, type Planar, polar } from './project.ts';
import { hash2 } from './rng.ts';
import type { PoiDef } from './pois.ts';

export interface RingDef {
  name: string;
  radiusKm: number;
  widthM: number;
  elevated: boolean;
  year: number;
  southStretch?: number;
}

/**
 * 成都地理骨架。
 *
 * 注意：成都习惯用「环线长度」称呼环路（如一环 19.38km），而不是半径。
 * 这里统一换算成到天府广场（30.6577°N, 104.0657°E，城市几何原点）的等效半径
 * radiusKm = 里程 / (2π)，并用 southStretch 表示绕城被成洛／机场方向拉长的比。
 * 因此 RINGS 画出来是同心圆，真实的二环／三环路更接近圆角矩形／卵形；
 * 各环与放射线的交点即路口，可作为「到没到某个盘子」的定位参照。
 */
export const RINGS: RingDef[] = [
  { name: '内环路', radiusKm: 2.26, widthM: 22, elevated: true, year: 1995 },
  { name: '一环路', radiusKm: 3.09, widthM: 40, elevated: false, year: 1986 },
  { name: '二环路', radiusKm: 4.5, widthM: 32, elevated: true, year: 1993 },
  { name: '中环路', radiusKm: 6.78, widthM: 36, elevated: false, year: 2012 },
  { name: '三环路', radiusKm: 8.1, widthM: 50, elevated: false, year: 2002 },
  { name: '绕城高速（四环路）', radiusKm: 13.5, widthM: 40, elevated: false, year: 2001, southStretch: 1.14 },
  { name: '五环路（在建）', radiusKm: 22.7, widthM: 30, elevated: false, year: 2027 },
  { name: '第二绕城高速（六环路）', radiusKm: 35.5, widthM: 28, elevated: false, year: 2015 },
];

export interface RadialDef {
  name: string;
  bearingDeg: number;
  lengthKm: number;
  widthM: number;
  axis?: boolean;
  /** 垂直于射线方向的平移（km），用于红星路、剑南大道这类平行副轴。 */
  lateralKm?: number;
  startKm?: number;
}

export const RADIALS: RadialDef[] = [
  { name: '人民北路—北星大道', bearingDeg: 0, lengthKm: 24, widthM: 44, axis: true },
  { name: '川陕路—成绵高速', bearingDeg: 13, lengthKm: 18, widthM: 32 },
  { name: '建设路—成南高速', bearingDeg: 45, lengthKm: 20, widthM: 36 },
  { name: '双成大道—龙潭寺', bearingDeg: 66, lengthKm: 16, widthM: 30 },
  { name: '蜀都大道东段—东大路', bearingDeg: 90, lengthKm: 20, widthM: 46, axis: true },
  { name: '成龙大道—驿都大道', bearingDeg: 96, lengthKm: 24, widthM: 40 },
  { name: '成渝高速—天府机场高速', bearingDeg: 137, lengthKm: 34, widthM: 40 },
  { name: '剑南大道南延', bearingDeg: 160, lengthKm: 22, widthM: 36, lateralKm: -1.6 },
  { name: '人民南路—天府大道（百里城市中轴）', bearingDeg: 180, lengthKm: 34, widthM: 60, axis: true },
  { name: '红星路—红星路南延线', bearingDeg: 180, lengthKm: 24, widthM: 36, lateralKm: 1.1 },
  { name: '益州大道—天府大道西辅轴', bearingDeg: 202, lengthKm: 20, widthM: 32, lateralKm: -2.6 },
  { name: '武侯大道—成雅高速', bearingDeg: 226, lengthKm: 22, widthM: 38 },
  { name: '光华大道—成温邛高速', bearingDeg: 248, lengthKm: 22, widthM: 36 },
  { name: '蜀都大道西段—金河街', bearingDeg: 270, lengthKm: 22, widthM: 46, axis: true },
  { name: '羊市街西延线—成灌高速', bearingDeg: 288, lengthKm: 22, widthM: 36 },
  { name: '西华大道—彭州', bearingDeg: 315, lengthKm: 20, widthM: 34 },
  { name: '北星大道二段—新都', bearingDeg: 338, lengthKm: 20, widthM: 32 },
];

export interface RiverDef {
  name: string;
  widthM: number;
  latLon: Array<[number, number]>;
  main?: boolean;
}

export const RIVERS: RiverDef[] = [
  {
    name: '府河',
    widthM: 46,
    main: true,
    latLon: [
      [30.755, 104.032],
      [30.727, 104.058],
      [30.706, 104.07],
      [30.686, 104.076],
      [30.671, 104.083],
      [30.66, 104.088],
      [30.652, 104.08],
      [30.6484, 104.0772],
    ],
  },
  {
    name: '锦江（南河）',
    widthM: 44,
    main: true,
    latLon: [
      [30.712, 103.952],
      [30.692, 103.988],
      [30.678, 104.018],
      [30.665, 104.038],
      [30.656, 104.05],
      [30.651, 104.062],
      [30.6484, 104.0772],
    ],
  },
  {
    name: '锦江下游',
    widthM: 48,
    main: true,
    latLon: [
      [30.6484, 104.0772],
      [30.6425, 104.0895],
      [30.636, 104.1],
      [30.626, 104.113],
      [30.614, 104.128],
      [30.6005, 104.146],
      [30.578, 104.171],
      [30.545, 104.196],
      [30.475, 104.224],
    ],
  },
  {
    name: '沙河',
    widthM: 30,
    latLon: [
      [30.762, 104.128],
      [30.733, 104.132],
      [30.705, 104.128],
      [30.682, 104.126],
      [30.662, 104.135],
      [30.642, 104.152],
      [30.622, 104.156],
      [30.6005, 104.146],
    ],
  },
  {
    name: '江安河',
    widthM: 22,
    latLon: [
      [30.768, 103.892],
      [30.738, 103.94],
      [30.71, 103.985],
      [30.695, 104.028],
      [30.686, 104.066],
      [30.706, 104.07],
    ],
  },
  {
    name: '毗河',
    widthM: 20,
    latLon: [
      [30.845, 103.828],
      [30.812, 103.89],
      [30.785, 103.962],
      [30.762, 104.028],
      [30.755, 104.032],
    ],
  },
  {
    name: '金马河（岷江）',
    widthM: 60,
    latLon: [
      [31.005, 103.612],
      [30.885, 103.688],
      [30.762, 103.762],
      [30.628, 103.835],
      [30.5, 103.868],
      [30.402, 103.905],
      [30.318, 103.982],
    ],
  },
  {
    name: '羊马河',
    widthM: 26,
    latLon: [
      [30.965, 103.702],
      [30.868, 103.775],
      [30.762, 103.828],
      [30.672, 103.858],
      [30.6, 103.872],
    ],
  },
  {
    name: '潦河—第二绕城以北',
    widthM: 24,
    latLon: [
      [31.035, 103.688],
      [30.965, 103.702],
      [30.888, 103.744],
      [30.812, 103.792],
    ],
  },
  {
    name: '沱江支流（绛溪河）',
    widthM: 26,
    latLon: [
      [30.638, 104.352],
      [30.575, 104.368],
      [30.505, 104.398],
      [30.432, 104.432],
      [30.362, 104.462],
    ],
  },
];

export interface LakeDef {
  name: string;
  lat: number;
  lon: number;
  radiusKm: number;
  elongate?: number;
  bearing?: number;
}

export const LAKES: LakeDef[] = [
  { name: '兴隆湖', lat: 30.4150, lon: 104.0715, radiusKm: 0.62, elongate: 1.9, bearing: 96 },
  { name: '东安湖', lat: 30.6055, lon: 104.2430, radiusKm: 0.55, elongate: 1.5, bearing: 25 },
  { name: '北湖（青龙湖）', lat: 30.7535, lon: 104.1485, radiusKm: 0.45 },
  { name: '升仙湖', lat: 30.7355, lon: 104.1155, radiusKm: 0.2 },
  { name: '锦城湖', lat: 30.5960, lon: 104.0570, radiusKm: 0.35, elongate: 1.6, bearing: 180 },
  { name: '麓湖', lat: 30.4845, lon: 104.0885, radiusKm: 0.42 },
  { name: '三岔湖', lat: 30.3025, lon: 104.3355, radiusKm: 1.15, elongate: 1.7, bearing: 40 },
  { name: '鲁家滩（金马河）', lat: 30.6955, lon: 103.8075, radiusKm: 0.4 },
  { name: '天鹤湖（东部新区）', lat: 30.4055, lon: 104.4325, radiusKm: 0.35 },
  { name: '百花潭·浣花溪水面', lat: 30.6515, lon: 104.0415, radiusKm: 0.12 },
  { name: '二仙桥公园水系', lat: 30.6885, lon: 104.1185, radiusKm: 0.12 },
];

export interface GreenDef {
  name: string;
  lat: number;
  lon: number;
  radiusKm: number;
  kind: 'park' | 'ridge' | 'farm' | 'forest';
  elongate?: number;
  bearing?: number;
}

export const GREENS: GreenDef[] = [
  { name: '浣花溪公园', lat: 30.6545, lon: 104.0345, radiusKm: 0.45, kind: 'park' },
  { name: '文化公园', lat: 30.6565, lon: 104.0425, radiusKm: 0.22, kind: 'park' },
  { name: '望江楼公园', lat: 30.6352, lon: 104.0945, radiusKm: 0.3, kind: 'park', elongate: 1.4, bearing: 135 },
  { name: '活水公园', lat: 30.6655, lon: 104.0885, radiusKm: 0.14, kind: 'park' },
  { name: '新华公园', lat: 30.6555, lon: 104.1095, radiusKm: 0.2, kind: 'park' },
  { name: '塔子山公园', lat: 30.6405, lon: 104.1335, radiusKm: 0.32, kind: 'park' },
  { name: '离堆公园·杜甫草堂园林', lat: 30.6615, lon: 104.0275, radiusKm: 0.28, kind: 'park' },
  { name: '百花潭公园', lat: 30.6485, lon: 104.0465, radiusKm: 0.18, kind: 'park' },
  { name: '成都市植物园', lat: 30.7205, lon: 104.1055, radiusKm: 0.35, kind: 'forest' },
  { name: '三圣乡·花乡农居', lat: 30.6125, lon: 104.1685, radiusKm: 1.3, kind: 'farm', elongate: 1.6, bearing: 135 },
  { name: '北湖生态公园', lat: 30.7485, lon: 104.1425, radiusKm: 1.2, kind: 'forest' },
  { name: '青龙湖二期', lat: 30.7315, lon: 104.1665, radiusKm: 1.0, kind: 'forest' },
  { name: '凤凰山', lat: 30.7395, lon: 104.0790, radiusKm: 0.9, kind: 'forest' },
  { name: '天府艺术公园', lat: 30.7275, lon: 104.0395, radiusKm: 0.5, kind: 'park' },
  { name: '怡心湖', lat: 30.5225, lon: 104.0355, radiusKm: 0.35, kind: 'park' },
  { name: '怡龙生态公园', lat: 30.5685, lon: 104.0965, radiusKm: 0.4, kind: 'forest' },
  { name: '牧马山', lat: 30.4855, lon: 103.9255, radiusKm: 1.6, kind: 'forest', elongate: 1.5, bearing: 45 },
  { name: '龙泉山城市森林公园', lat: 30.4625, lon: 104.3085, radiusKm: 4.2, kind: 'forest', elongate: 2.4, bearing: 20 },
  { name: '丹景台·城市之眼', lat: 30.4150, lon: 104.2850, radiusKm: 0.4, kind: 'ridge' },
  { name: '长秋山森林公园', lat: 30.3025, lon: 103.8025, radiusKm: 2.2, kind: 'forest', elongate: 1.6, bearing: 320 },
  { name: '天台山—西部山地', lat: 30.3855, lon: 103.2325, radiusKm: 6, kind: 'forest' },
  { name: '青城山—都江堰山林', lat: 30.9625, lon: 103.5825, radiusKm: 4.5, kind: 'forest' },
  { name: '龙门山·西岭雪山', lat: 30.7025, lon: 103.1725, radiusKm: 7, kind: 'ridge' },
  { name: '九顶山—岷山雪峰', lat: 31.0255, lon: 102.9125, radiusKm: 9, kind: 'ridge' },
  { name: '赵公山', lat: 30.8925, lon: 103.4625, radiusKm: 3.2, kind: 'ridge' },
  { name: '龙泉山脉主脊', lat: 30.6525, lon: 104.2925, radiusKm: 4.5, kind: 'ridge', elongate: 2.6, bearing: 25 },
  { name: '天府公园', lat: 30.4615, lon: 104.0660, radiusKm: 0.95, kind: 'park', elongate: 2, bearing: 0 },
  { name: '露天音乐公园', lat: 30.7355, lon: 104.0685, radiusKm: 0.55, kind: 'park' },
];

/** 环城生态公园：绕城内外的 100km 绿道环带（半径区间，单位 km）。 */
export const GREEN_BELT = { innerKm: 12.1, outerKm: 14.9, label: '天府绿道·环城生态公园' };

export interface DistrictDef {
  name: string;
  fromDeg: number;
  toDeg: number;
  innerKm: number;
  outerKm: number;
  color: string;
  note: string;
}

export const DISTRICTS: DistrictDef[] = [
  { name: '锦江区', fromDeg: 92, toDeg: 168, innerKm: 0, outerKm: 7.2, color: '#e0876a', note: '春熙路·太古里·三圣乡' },
  { name: '青羊区', fromDeg: 200, toDeg: 278, innerKm: 0, outerKm: 6.6, color: '#7fb7d9', note: '宽窄巷子·杜甫草堂·青羊宫' },
  { name: '金牛区', fromDeg: 278, toDeg: 22, innerKm: 0, outerKm: 8.4, color: '#9fc78a', note: '火车北站·荷花池·凤凰山' },
  { name: '武侯区', fromDeg: 168, toDeg: 200, innerKm: 0, outerKm: 8.0, color: '#d6b26a', note: '武侯祠·锦里·桐梓林' },
  { name: '成华区', fromDeg: 22, toDeg: 92, innerKm: 0, outerKm: 9.2, color: '#b593d6', note: '建设路·东郊记忆·熊猫基地' },
  { name: '成都高新区', fromDeg: 158, toDeg: 202, innerKm: 7.6, outerKm: 14.5, color: '#5fb6c9', note: '金融城·大源·天府软件园·环球中心' },
  { name: '天府新区成都直管区', fromDeg: 152, toDeg: 208, innerKm: 14.8, outerKm: 30, color: '#65c98b', note: '总部商务区·科学城·兴隆湖' },
  { name: '双流区', fromDeg: 196, toDeg: 252, innerKm: 10, outerKm: 24, color: '#c9975f', note: '双流国际机场·怡心湖' },
  { name: '龙泉驿区', fromDeg: 68, toDeg: 122, innerKm: 11, outerKm: 24, color: '#8fb36b', note: '成都经开区·东安湖·龙泉山' },
  { name: '温江区', fromDeg: 252, toDeg: 282, innerKm: 11, outerKm: 26, color: '#86a1cc', note: '鲁家滩·医学城' },
  { name: '郫都区', fromDeg: 282, toDeg: 316, innerKm: 11, outerKm: 26, color: '#c2d06b', note: '菁蓉镇·川菜博物馆' },
  { name: '新都区', fromDeg: 316, toDeg: 24, innerKm: 10, outerKm: 24, color: '#d98fa6', note: '香城·西南石油大学' },
  { name: '青白江区', fromDeg: 24, toDeg: 68, innerKm: 14, outerKm: 30, color: '#7fc4b8', note: '国际铁路港·城厢古城' },
  { name: '东部新区', fromDeg: 122, toDeg: 158, innerKm: 14, outerKm: 56, color: '#e2b155', note: '三岔湖·天府国际机场·绛溪河' },
  { name: '简阳市', fromDeg: 158, toDeg: 196, innerKm: 26, outerKm: 44, color: '#a9b7c9', note: '天府国际机场所在市' },
  { name: '都江堰市', fromDeg: 288, toDeg: 318, innerKm: 34, outerKm: 62, color: '#78bfa4', note: '拜水都江堰·青城山' },
];

export interface ClusterDef {
  name: string;
  lat: number;
  lon: number;
  radiusKm: number;
  peakM: number;
  density: number;
}

export const CLUSTERS: ClusterDef[] = [
  { name: '天府广场—盐道街', lat: 30.6577, lon: 104.0685, radiusKm: 1.6, peakM: 90, density: 1 },
  { name: '春熙路—东大街', lat: 30.6565, lon: 104.0835, radiusKm: 1.2, peakM: 160, density: 1.05 },
  { name: '攀成钢—锦江大道', lat: 30.6435, lon: 104.1065, radiusKm: 1.4, peakM: 150, density: 0.95 },
  { name: '火车北站—人民北路', lat: 30.6835, lon: 104.0775, radiusKm: 1.3, peakM: 110, density: 0.9 },
  { name: '建设路—电子科大', lat: 30.6865, lon: 104.0995, radiusKm: 1.4, peakM: 120, density: 0.95 },
  { name: '双桥—万年场', lat: 30.6695, lon: 104.1265, radiusKm: 1.5, peakM: 105, density: 0.9 },
  { name: '红牌楼—丽都花园', lat: 30.6205, lon: 104.0315, radiusKm: 1.4, peakM: 110, density: 0.95 },
  { name: '桐梓林—神仙树', lat: 30.6095, lon: 104.0585, radiusKm: 1.3, peakM: 130, density: 0.95 },
  { name: '光华—中坝', lat: 30.6725, lon: 104.0015, radiusKm: 1.5, peakM: 100, density: 0.9 },
  { name: '金沙—一品天下', lat: 30.6785, lon: 104.0315, radiusKm: 1.3, peakM: 115, density: 0.95 },
  { name: '成都南站—交子公园', lat: 30.6085, lon: 104.0715, radiusKm: 1.5, peakM: 165, density: 1 },
  { name: '高新南区 世纪城—天府软件园', lat: 30.5605, lon: 104.0655, radiusKm: 2.3, peakM: 210, density: 1.05 },
  { name: '金融城—双子塔', lat: 30.5578, lon: 104.0660, radiusKm: 1.9, peakM: 240, density: 1.1 },
  { name: '大源—蜀锦路', lat: 30.5515, lon: 104.0505, radiusKm: 1.8, peakM: 185, density: 1 },
  { name: '华阳', lat: 30.4955, lon: 104.0545, radiusKm: 1.6, peakM: 130, density: 0.95 },
  { name: '怡心湖', lat: 30.5225, lon: 104.0355, radiusKm: 1.3, peakM: 140, density: 0.9 },
  { name: '天府新区 总部商务区', lat: 30.4650, lon: 104.0640, radiusKm: 2.1, peakM: 280, density: 1 },
  { name: '西博城—天府国际会议中心', lat: 30.4560, lon: 104.0750, radiusKm: 1.6, peakM: 150, density: 0.9 },
  { name: '成都科学城（兴隆湖）', lat: 30.4195, lon: 104.0725, radiusKm: 1.7, peakM: 130, density: 0.85 },
  { name: '煎茶—鹿溪河生态区', lat: 30.4305, lon: 104.0285, radiusKm: 1.5, peakM: 70, density: 0.55 },
  { name: '龙泉驿城区', lat: 30.5705, lon: 104.2725, radiusKm: 1.6, peakM: 110, density: 0.85 },
  { name: '十陵—青龙', lat: 30.6395, lon: 104.1855, radiusKm: 1.3, peakM: 90, density: 0.8 },
  { name: '成都东站—西河', lat: 30.6085, lon: 104.1475, radiusKm: 1.4, peakM: 105, density: 0.85 },
  { name: '双流城区', lat: 30.5685, lon: 103.9385, radiusKm: 1.7, peakM: 110, density: 0.85 },
  { name: '蛟龙港—蛟龙港', lat: 30.6065, lon: 103.9885, radiusKm: 1.3, peakM: 85, density: 0.75 },
  { name: '温江城区', lat: 30.6955, lon: 103.8205, radiusKm: 1.7, peakM: 100, density: 0.8 },
  { name: '郫都城区', lat: 30.7955, lon: 103.8905, radiusKm: 1.6, peakM: 95, density: 0.8 },
  { name: '红光—西华大学', lat: 30.7775, lon: 103.9625, radiusKm: 1.3, peakM: 85, density: 0.75 },
  { name: '天回—北部新城', lat: 30.7345, lon: 104.0785, radiusKm: 1.5, peakM: 115, density: 0.85 },
  { name: '新都城区', lat: 30.8135, lon: 104.1595, radiusKm: 1.7, peakM: 100, density: 0.8 },
  { name: '大丰—三河', lat: 30.7455, lon: 104.0605, radiusKm: 1.4, peakM: 100, density: 0.85 },
  { name: '龙潭寺', lat: 30.7105, lon: 104.1285, radiusKm: 1.3, peakM: 85, density: 0.75 },
  { name: '青白江城区', lat: 30.8685, lon: 104.2495, radiusKm: 1.5, peakM: 90, density: 0.7 },
  { name: '新津城区', lat: 30.4085, lon: 103.8125, radiusKm: 1.4, peakM: 80, density: 0.65 },
  { name: '三岔—东部新区', lat: 30.3385, lon: 104.2245, radiusKm: 1.6, peakM: 120, density: 0.7 },
  { name: '崇州城区', lat: 30.6285, lon: 103.6785, radiusKm: 1.4, peakM: 75, density: 0.6 },
  { name: '彭州城区', lat: 30.9855, lon: 103.9405, radiusKm: 1.4, peakM: 75, density: 0.6 },
  { name: '邛崃城区', lat: 30.4085, lon: 103.4625, radiusKm: 1.4, peakM: 70, density: 0.55 },
  { name: '都江堰城区', lat: 30.9885, lon: 103.6205, radiusKm: 1.5, peakM: 75, density: 0.6 },
];

export { POIS } from './pois.ts';
export type { PoiCategory, PoiDef } from './pois.ts';


export interface MetroDef {
  name: string;
  color: string;
  latLon?: Array<[number, number]>;
  ringKm?: number;
  express?: boolean;
  lengthKm: number;
  stations: number;
  year: number;
  note: string;
}

/**
 * 线路走向按主要干道与枢纽近似。
 * 截至 2025-12，成都地铁运营 17 条线路、约 718.95 km、452 座车站；
 * 本沙盘绘制其中 13 条骨干线（里程/站数/开通年份见 docs/DATA.md）。
 */
export const METRO: MetroDef[] = [
  {
    name: '1号线',
    color: '#0f6fc4',
    lengthKm: 41,
    stations: 35,
    year: 2010,
    note: '沿人民路—天府大道的南北主轴',
    latLon: [
      [30.7005, 104.0685],
      [30.6855, 104.0685],
      [30.6577, 104.066],
      [30.6305, 104.066],
      [30.6105, 104.0665],
      [30.5805, 104.0665],
      [30.5605, 104.066],
      [30.5405, 104.066],
      [30.5105, 104.061],
      [30.4905, 104.0565],
      [30.4725, 104.0585],
      [30.4505, 104.0585],
    ],
  },
  {
    name: '2号线',
    color: '#e0761f',
    lengthKm: 42,
    stations: 32,
    year: 2012,
    note: '犀浦—龙泉驿，横贯蜀都大道与东站',
    latLon: [
      [30.7545, 103.9755],
      [30.7205, 104.0085],
      [30.6805, 104.0305],
      [30.6605, 104.0565],
      [30.6585, 104.0805],
      [30.6555, 104.1055],
      [30.6405, 104.1305],
      [30.6105, 104.1455],
      [30.5905, 104.1855],
      [30.5805, 104.2725],
    ],
  },
  {
    name: '3号线',
    color: '#d3559a',
    lengthKm: 47,
    stations: 37,
    year: 2016,
    note: '熊猫大道—武侯祠—双流',
    latLon: [
      [30.7205, 104.1055],
      [30.7005, 104.0905],
      [30.6755, 104.0805],
      [30.6525, 104.0705],
      [30.6305, 104.0505],
      [30.6105, 104.0305],
      [30.5805, 104.0005],
      [30.5605, 103.9405],
    ],
  },
  {
    name: '4号线',
    color: '#3f9e56',
    lengthKm: 43,
    stations: 30,
    year: 2016,
    note: '温江—-city北部—西河',
    latLon: [
      [30.6905, 103.8105],
      [30.6905, 103.8605],
      [30.6805, 103.9505],
      [30.6705, 104.0305],
      [30.6655, 104.0685],
      [30.6605, 104.0755],
      [30.6655, 104.0905],
      [30.6705, 104.1205],
      [30.6805, 104.2105],
    ],
  },
  {
    name: '5号线',
    color: '#7a5fc0',
    lengthKm: 47,
    stations: 34,
    year: 2019,
    note: '北部新城—永陵—大源—回龙',
    latLon: [
      [30.7605, 104.0805],
      [30.7205, 104.0705],
      [30.6805, 104.0605],
      [30.6505, 104.0505],
      [30.6205, 104.0405],
      [30.5805, 104.0305],
      [30.5405, 104.0305],
      [30.4905, 104.0305],
      [30.4405, 104.0355],
    ],
  },
  {
    name: '6号线',
    color: '#b5651d',
    lengthKm: 42,
    stations: 29,
    year: 2020,
    note: '望丛祠—光华—IDI 园区东南',
    latLon: [
      [30.8005, 103.8805],
      [30.7605, 103.9605],
      [30.7005, 104.0205],
      [30.6605, 104.0505],
      [30.6205, 104.0705],
      [30.5805, 104.0905],
      [30.5305, 104.1205],
      [30.4905, 104.1505],
      [30.4505, 104.1905],
    ],
  },
  { name: '7号线', color: '#3aa6b8', ringKm: 6.14, lengthKm: 38.6, stations: 31, year: 2017, note: '环线（38.6km／31 站），套住中环路一带' },
  {
    name: '8号线',
    color: '#8fbf3f',
    lengthKm: 36,
    stations: 25,
    year: 2020,
    note: '龙潭寺—琉璃场—蛟龙港',
    latLon: [
      [30.7105, 104.1205],
      [30.6805, 104.1005],
      [30.6505, 104.0805],
      [30.6205, 104.0605],
      [30.5805, 104.0305],
      [30.5505, 104.0005],
      [30.5305, 103.9605],
    ],
  },
  {
    name: '9号线',
    color: '#e0503a',
    lengthKm: 22,
    stations: 13,
    year: 2020,
    note: '黄田坝—金融城',
    latLon: [
      [30.6705, 103.9805],
      [30.6505, 104.0305],
      [30.6305, 104.0605],
      [30.6005, 104.0705],
      [30.5705, 104.0805],
      [30.5405, 104.0905],
    ],
  },
  {
    name: '10号线',
    color: '#3f78c9',
    lengthKm: 38,
    stations: 21,
    year: 2017,
    note: '太平园—双流机场—新津',
    latLon: [
      [30.6205, 104.0405],
      [30.6005, 104.0105],
      [30.5805, 103.9705],
      [30.5705, 103.9545],
      [30.5405, 103.9305],
      [30.4705, 103.8805],
      [30.4105, 103.8125],
    ],
  },
  {
    name: '17号线',
    color: '#9aa3ad',
    lengthKm: 26,
    stations: 10,
    year: 2021,
    note: '温江—机投桥',
    latLon: [
      [30.6905, 103.8105],
      [30.6605, 103.9005],
      [30.6405, 104.0005],
      [30.6105, 104.0305],
      [30.5605, 104.0405],
    ],
  },
  {
    name: '18号线',
    color: '#d30a0a',
    express: true,
    lengthKm: 67,
    stations: 12,
    year: 2020,
    note: '南北快线，火车南站直达天府机场',
    latLon: [
      [30.6105, 104.0705],
      [30.5605, 104.0705],
      [30.5005, 104.0685],
      [30.4505, 104.0705],
      [30.3905, 104.1105],
      [30.3505, 104.1805],
      [30.3155, 104.3605],
      [30.3115, 104.4445],
    ],
  },
  {
    name: '19号线',
    color: '#f2c500',
    express: true,
    lengthKm: 61,
    stations: 21,
    year: 2023,
    note: '温江—双流—天府机场快线',
    latLon: [
      [30.6805, 103.8305],
      [30.6505, 103.9305],
      [30.6005, 104.0305],
      [30.5405, 104.0705],
      [30.4505, 104.1105],
      [30.3705, 104.2005],
      [30.3115, 104.4445],
    ],
  },
];

const planarCache = new Map<string, Planar>();

export function poiPlanar(poi: PoiDef): Planar {
  const hit = planarCache.get(poi.id);
  if (hit) return hit;
  const p = project(poi.lat, poi.lon);
  planarCache.set(poi.id, p);
  return p;
}

export function poiDistanceKm(poi: PoiDef): { distKm: number; bearingDeg: number } {
  const p = poiPlanar(poi);
  return { distKm: distOf(p), bearingDeg: bearingOf(p) };
}

export interface RingBand {
  index: number;
  name: string;
  innerKm: number;
  outerKm: number;
}

const BAND_EDGES = [0, RINGS[1].radiusKm, RINGS[2].radiusKm, RINGS[3].radiusKm, RINGS[4].radiusKm, RINGS[5].radiusKm];
export const BAND_NAMES = ['一环内·老城', '一环—二环', '二环—中环', '中环—三环', '三环—绕城', '绕城以外'];

/** 分区环带的内外半径（km），UI 画选中圈层高亮环用。 */
export function bandEdges(index: number): { innerKm: number; outerKm: number } {
  const i = Math.max(0, Math.min(BAND_EDGES.length - 1, index | 0));
  return { innerKm: BAND_EDGES[i], outerKm: i === BAND_EDGES.length - 1 ? 70 : BAND_EDGES[i + 1] };
}

export function bandOf(distKm: number): RingBand {
  for (let i = BAND_EDGES.length - 1; i >= 0; i--) {
    if (distKm >= BAND_EDGES[i]) {
      const last = i === BAND_EDGES.length - 1;
      return {
        index: i,
        name: BAND_NAMES[i],
        innerKm: BAND_EDGES[i],
        outerKm: last ? 70 : BAND_EDGES[i + 1],
      };
    }
  }
  return { index: 0, name: BAND_NAMES[0], innerKm: 0, outerKm: BAND_EDGES[1] };
}

export function ringRadiusPoint(ring: RingDef, angleDeg: number): Planar {
  const rad = (angleDeg * Math.PI) / 180;
  const stretch = ring.southStretch ?? 1;
  const south = Math.max(0, Math.cos(rad));
  const r = ring.radiusKm * (1 + (stretch - 1) * south);
  return polar(r, angleDeg);
}

export function districtOf(p: Planar): DistrictDef | undefined {
  const d = distOf(p);
  const b = bearingOf(p);
  const matches = DISTRICTS.filter((dist) => {
    const inRadial = d >= dist.innerKm && d <= dist.outerKm;
    const span = (dist.toDeg - dist.fromDeg + 360) % 360;
    const rel = (b - dist.fromDeg + 360) % 360;
    return inRadial && rel <= span;
  });
  if (!matches.length) return undefined;
  return matches.find((dist) => dist.outerKm - dist.innerKm > 8) ?? matches[0];
}

export function hashAt(x: number, z: number, seed = 0): number {
  return hash2(x, z, seed);
}
