import test from 'node:test';
import assert from 'node:assert/strict';

import {
  BAND_NAMES,
  GREENS,
  GREEN_BELT,
  LAKES,
  METRO,
  POIS,
  RADIALS,
  RINGS,
  bandEdges,
  bandOf,
  districtOf,
  poiPlanar,
} from '../src/geo/chengdu.ts';
import { UNIT_PER_KM, distOf, planarLengthKm, polar, project, unproject } from '../src/geo/project.ts';
import { KNOWN_MODELS } from '../src/city/landmarks.ts';
import { CLUSTER_PLACES, METRO_PATHS, PARK_SHAPES, POI_PLACES, RING_PATHS, RIVER_PATHS } from '../src/city/paths.ts';
import { getField as fieldOf } from '../src/city/field.ts';
import { groundHeight } from '../src/city/terrain.ts';

/** 官方公布的环线里程（km），用来校核 radiusKm = 里程 / 2π 的换算没写错。 */
const OFFICIAL_CIRCUMFERENCE: Record<string, number> = {
  内环路: 14.2,
  一环路: 19.38,
  二环路: 28.4,
  中环路: 42.6,
  三环路: 51.0,
  '绕城高速（四环路）': 85.0,
  '五环路（在建）': 142.5,
  '第二绕城高速（六环路）': 223.6,
};

test('环线：半径换算与官方里程一致（±1.5%）', () => {
  for (const ring of RINGS) {
    const official = OFFICIAL_CIRCUMFERENCE[ring.name];
    assert.ok(official, `缺少 ${ring.name} 的里程基准`);
    const drawn = 2 * Math.PI * ring.radiusKm;
    assert.ok(
      Math.abs(drawn - official) / official < 0.015,
      `${ring.name}：画出 ${drawn.toFixed(2)} km，公布 ${official} km`,
    );
  }
  for (let i = 1; i < RINGS.length; i++) {
    assert.ok(RINGS[i].radiusKm > RINGS[i - 1].radiusKm, '环线半径必须单调递增');
  }
});

test('放射线：方位角覆盖整圈，中轴朝南是天府大道', () => {
  const axis = RADIALS.filter((r) => r.axis).map((r) => r.bearingDeg);
  assert.ok(axis.includes(180), '天府大道中轴应为正南 180°');
  assert.ok(RADIALS.length >= 15, `放射线应有成都那种密度，实际 ${RADIALS.length} 条`);
  for (const r of RADIALS) {
    assert.ok(r.bearingDeg >= 0 && r.bearingDeg < 360, `${r.name} 方位角越界`);
    assert.ok(r.lengthKm > 8, `${r.name} 长度过短`);
  }
});

test('投影：以天府广场为原点，正北为 -Z，正东为 +X', () => {
  const origin = project(30.6577, 104.0657);
  assert.ok(Math.abs(origin.x) < 1e-6 && Math.abs(origin.z) < 1e-6, '原点必须落在天府广场');
  assert.ok(project(30.7, 104.0657).z < 0, '纬度更大（北）应在 -Z');
  assert.ok(project(30.6577, 104.1).x > 0, '经度更大（东）应在 +X');
  const back = unproject(origin.x + 12, origin.z - 8);
  const again = project(back.lat, back.lon);
  assert.ok(Math.abs(again.x - 12) < 1e-6 && Math.abs(again.z + 8) < 1e-6, '经纬度换算需可逆');
});

test('比例：1 场景单位 = 100 m，1 km = 10 单位', () => {
  assert.equal(UNIT_PER_KM, 10);
  const north = polar(5, 0);
  assert.ok(Math.abs(distOf(north) - 5) < 1e-9, 'polar 输出的模长应等于给定公里数');
  assert.ok(north.z < 0 && Math.abs(north.x) < 1e-9, '0° 应指向正北');
});

test('圈层分区：边界与命名对齐，bandEdges 单调', () => {
  assert.equal(bandOf(0).name, '一环内·老城');
  assert.equal(bandOf(3.5).name, '一环—二环');
  assert.equal(bandOf(7).name, '中环—三环');
  assert.equal(bandOf(15).name, '绕城以外');
  assert.equal(BAND_NAMES.length, 6);
  for (let i = 1; i < BAND_NAMES.length; i++) {
    assert.equal(bandEdges(i).innerKm, bandEdges(i - 1).outerKm, '相邻分区应无缝拼接');
  }
});

test('水系与绿地：湖面在绕城内外都有，绿带包住城区', () => {
  assert.ok(LAKES.length >= 8, '湖库数量偏少');
  assert.ok(GREENS.length >= 20, '公园／山体数量偏少');
  assert.ok(GREEN_BELT.innerKm > RINGS[4].radiusKm, '环城生态公园应在三环路以外');
  assert.ok(GREEN_BELT.outerKm < RINGS[5].radiusKm + 2, '环城生态公园应贴着绕城');
  // 几何上是一条贴着绕城的 85km 级圆环；官方「100km 绿道」是沿线骑行里程，不是圆周长。
  const beltKm = 2 * Math.PI * ((GREEN_BELT.innerKm + GREEN_BELT.outerKm) / 2);
  assert.ok(beltKm > 78 && beltKm < 95, `环城绿带圆环周长应约 85km，实算 ${beltKm.toFixed(1)} km`);
});

test('地铁：线路数量、7 号线环线里程与总规模', () => {
  assert.ok(METRO.length >= 12, `骨干线至少画 12 条，实际 ${METRO.length}`);
  const ring = METRO.find((m) => m.ringKm);
  assert.ok(ring, '应有一条环线（7 号线）');
  assert.ok(Math.abs(2 * Math.PI * (ring?.ringKm ?? 0) - 38.6) < 1.5, '7 号线全长约 38.6 km');
  const total = METRO.reduce((s, m) => s + m.lengthKm, 0);
  assert.ok(total > 380, `13 条骨干线里程合计应接近 500 km 以上，实算 ${total.toFixed(0)} km`);
  assert.ok(METRO_PATHS.length === METRO.length, '路径层与数据层线路数要一致');
});

test('POI：id 唯一、坐标在成都市域、模型 key 都有对应生成器', () => {
  const ids = new Set(POIS.map((p) => p.id));
  assert.equal(ids.size, POIS.length, 'POI id 不能重复');
  for (const poi of POIS) {
    assert.ok(poi.lat > 30.1 && poi.lat < 31.2, `${poi.name} 纬度越界`);
    assert.ok(poi.lon > 102.7 && poi.lon < 104.7, `${poi.name} 经度越界`);
    assert.ok(poi.blurb.length > 8, `${poi.name} 缺少说明文字`);
    if (poi.model) {
      assert.ok(KNOWN_MODELS.includes(poi.model), `${poi.name} 的模型 ${poi.model} 没有生成器`);
    }
  }
  const twins = POIS.find((p) => p.id === 'tianfu-ifs-twins' || p.name.includes('双子塔'));
  assert.ok(twins && (twins.heightM ?? 0) >= 210, '天府双子塔应约 218 m');
  const tower339 = POIS.find((p) => p.name.includes('339'));
  assert.ok(tower339 && tower339.heightM === 339, '339 电视塔高度应为 339 m');
});

test('几何层：环线离散折线长度贴合里程，路径点数足够画带', () => {
  const one = RING_PATHS.find((p) => p.name === '一环路');
  assert.ok(one && one.closed, '一环路应为闭合路径');
  const km = planarLengthKm(one!.pts);
  assert.ok(Math.abs(km - 19.38) / 19.38 < 0.03, `一环路折线 ${km.toFixed(2)} km 偏离 19.38 km`);
  assert.ok(one!.pts.length > 60, '折线点太稀会看出多边形');
  assert.ok(RIVER_PATHS.every((r) => r.pts.length > 10), '河流折线太短');
  assert.ok(POI_PLACES.every((p) => Number.isFinite(p.p.x) && Number.isFinite(p.p.z)), 'POI 平面坐标必须是有限值');
});

test('建筑场地：市区大部分格位可建，水面与绿地被排除，金融城足够高', () => {
  const field = fieldOf();
  assert.equal(field.blocked(project(30.415, 104.0715).x, project(30.415, 104.0715).z), true, '兴隆湖水面不可建');
  let free = 0;
  let total = 0;
  for (let x = -4; x <= 4; x += 0.25) {
    for (let z = -4; z <= 4; z += 0.25) {
      total++;
      if (!field.blocked(x, z)) free++;
    }
  }
  assert.ok(free / total > 0.45, `一环内应有过半格位可建，实际 ${(100 * free / total).toFixed(0)}%`);
  const cbd = project(30.5578, 104.066);
  assert.ok(field.classify(cbd.x, cbd.z).heightM > 60, '天府大道—金融城一带应生成高层建筑');
  const suburb = project(30.6577, 104.3);
  assert.ok(field.classify(suburb.x, suburb.z).heightM < 60, '东三环外不应出现 CBD 尺度');
});

test('地形：平原平、西边龙门山抬升、东边龙泉山起脊', () => {
  assert.ok(groundHeight(0, 0) < 0.35, '市区应按近平原处理');
  assert.ok(groundHeight(-400, 0) < 3, '西 40km（崇州—大邑坝子）仍是平原');
  assert.ok(groundHeight(-500, 0) > 8, '西 50km 进入龙门山前山');
  assert.ok(groundHeight(-700, 0) > 40, '西 70km 应有 4000m 级雪山轮廓（西岭雪山）');
  assert.ok(groundHeight(-700, 400) > 12, '西北方向（大邑—邛崃以北）应继续升高');
  assert.ok(groundHeight(0, -700) < 1.5, '北 70km（广汉—金堂）属成都平原，不该有山');
  assert.ok(groundHeight(252, 0) > 3, '龙泉山脊（东 25km）应有明显高程');
  assert.ok(groundHeight(60, 0) < 1.2, '龙泉山与市区之间是平原，不该有丘陵');
});

test('副中心与公园形状：几何生成器的输入都有效', () => {
  assert.ok(CLUSTER_PLACES.length >= 6, '副中心太少撑不起多中心结构');
  for (const c of CLUSTER_PLACES) {
    assert.ok(c.radius > 2 && c.radius < 30, `${c.name} 影响半径异常`);
    assert.ok(c.peakM > 40, `${c.name} 作为副中心应有高度`);
  }
  for (const park of PARK_SHAPES) {
    assert.deepEqual(park.ring[0], park.ring[park.ring.length - 1], `${park.name} 轮廓需闭合`);
    assert.ok(park.a >= park.b - 1e-9, `${park.name} 长轴不应短于短轴`);
  }
  const danjing = POIS.find((p) => p.name.includes('丹景台'));
  assert.ok(danjing, '龙泉山城市之巅丹景台应在 POI 里');
  assert.ok(poiPlanar(danjing!).x > 150, '丹景台应在城市东侧');
  assert.ok(districtOf(project(30.3115, 104.4445))?.name.match(/简阳|东部新区/), '天府机场应落在简阳／东部新区');
});
