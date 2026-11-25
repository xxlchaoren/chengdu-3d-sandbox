import test from 'node:test';
import assert from 'node:assert/strict';

import { makeRibbon } from '../src/city/ribbon.ts';

type P = { x: number; z: number };

const OPEN: P[] = [
  { x: -60, z: 0 },
  { x: -20, z: 6 },
  { x: 25, z: -4 },
  { x: 60, z: 0 },
];
const LOOP: P[] = [
  { x: -50, z: -50 },
  { x: 50, z: -50 },
  { x: 50, z: 50 },
  { x: -50, z: 50 },
];

/**
 * 路面／河面／地铁走廊都是 FrontSide 的单面条带。绕制方向一旦反了，
 * 法线朝下，俯视时整条网络会被背面剔除——画面里「什么都没有」但没有任何报错，
 * 所以这条不变量必须由测试守住。
 */
function assertUp(geo: { getAttribute(n: string): { count: number; getY(i: number): number } }, label: string) {
  const n = geo.getAttribute('normal');
  assert.ok(n.count > 0, `${label} 应有顶点`);
  for (let i = 0; i < n.count; i++) {
    assert.ok(n.getY(i) > 0.5, `${label} 顶点 ${i} 法线应朝上，实得 ${n.getY(i).toFixed(2)}`);
  }
}

test('条带绕制：开放折线的法线朝上', () => {
  assertUp(makeRibbon(OPEN, { widthAt: () => 4 }), '开放条带');
});

test('条带绕制：闭合环线的法线朝上', () => {
  assertUp(makeRibbon(LOOP, { widthAt: () => 4, closed: true }), '闭合条带');
});

test('条带顶点数：闭合环要复制首点，开放线按点数', () => {
  assert.equal(makeRibbon(LOOP, { closed: true }).getAttribute('position').count, (LOOP.length + 1) * 2);
  assert.equal(makeRibbon(OPEN).getAttribute('position').count, OPEN.length * 2);
});

test('条带 v 轴按实际长度累加，长路的车道线不被拉伸', () => {
  const geo = makeRibbon(OPEN, { widthAt: () => 4 });
  const uv = geo.getAttribute('uv');
  const v = (i: number) => uv.getY(i * 2);
  assert.equal(v(0), 0, '起点 v 应为 0');
  assert.ok(v(OPEN.length - 1) > 1.2, `终点 v 应接近全长，实得 ${v(OPEN.length - 1).toFixed(2)}`);
  for (let i = 1; i < OPEN.length; i++) assert.ok(v(i) > v(i - 1), `v 应单调递增到顶点 ${i}`);

  const scaled = makeRibbon(OPEN, { uvScale: 0.1 });
  const sv = scaled.getAttribute('uv').getY((OPEN.length - 1) * 2);
  assert.ok(Math.abs(sv / v(OPEN.length - 1) - 0.1) < 1e-6, 'uvScale 应等比缩放 v 轴');
});
