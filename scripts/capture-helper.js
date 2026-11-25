/**
 * 开发期视觉验证工具（不进构建产物，应用本身不引用它）。
 *
 * 隐藏标签页里 rAF 被节流、浏览器截图接口不可用，所以这里用「手动推帧 +
 * readPixels + PNG POST」的方式取帧。用法：页面加载后注入本文件，再调用
 *   __cd_shot('name', { hour: 20.2, view: 'sandbox', frames: 20 })
 * 图片由 dev server 的 /__shot 中间件写进 shots/（见 vite.config.ts）。
 */

function render(frames) {
  for (let i = 0; i < frames; i++) globalThis.__cd.sample();
}

/** 相机补间按 dt 推进，不必每步都出图：先空跑几秒虚拟时间让视角落定。 */
function settle(seconds = 3) {
  const st = globalThis.__cd.stage;
  for (let t = 0; t < seconds; t += 0.1) st.update(0.1);
}

function boxStats(buf, w, h, x0, y0, x1, y1) {
  let r = 0;
  let g = 0;
  let b = 0;
  let n = 0;
  let hot = 0;
  for (let y = (y0 * h) | 0; y < y1 * h; y++) {
    for (let x = (x0 * w) | 0; x < x1 * w; x++) {
      const i = (y * w + x) * 4;
      r += buf[i];
      g += buf[i + 1];
      b += buf[i + 2];
      n++;
      if ((buf[i] + buf[i + 1] + buf[i + 2]) / 3 > 200) hot++;
    }
  }
  return [Math.round(r / n), Math.round(g / n), Math.round(b / n), +(hot / n).toFixed(3)];
}

/** 当前帧的原始像素（已翻正），供截图与取样共用。 */
function grab() {
  const gl = globalThis.__cd.stage.renderer.getContext();
  const w = gl.drawingBufferWidth;
  const h = gl.drawingBufferHeight;
  const buf = new Uint8Array(w * h * 4);
  gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, buf);
  const row = w * 4;
  const flip = new Uint8Array(buf.length);
  for (let y = 0; y < h; y++) flip.set(buf.subarray((h - 1 - y) * row, (h - y) * row), y * row);
  return { buf, w, h, flip };
}

globalThis.__cd_probe = (frames = 6) => {
  render(frames);
  const { buf, w, h } = grab();
  return {
    sky: boxStats(buf, w, h, 0.4, 0.02, 0.6, 0.12),
    core: boxStats(buf, w, h, 0.42, 0.45, 0.58, 0.6),
    suburb: boxStats(buf, w, h, 0.05, 0.7, 0.2, 0.85),
    night: +globalThis.__cd.stats().night.toFixed(2),
  };
};

globalThis.__cd_shot = async (name, opts = {}) => {
  globalThis.__cd.store.set({ speed: opts.speed ?? 0 });
  if (opts.view) globalThis.__cd.setView(opts.view);
  if (opts.hour !== undefined) globalThis.__cd.setHour(opts.hour);
  if (opts.fly) globalThis.__cd.fly(opts.fly);
  if (opts.view || opts.fly) settle(opts.settle ?? 3);
  render(opts.frames ?? 18);
  const { w, h, flip } = grab();
  const cvs = new OffscreenCanvas(w, h);
  cvs.getContext('2d').putImageData(new ImageData(new Uint8ClampedArray(flip.buffer), w, h), 0, 0);
  const blob = await cvs.convertToBlob({ type: 'image/png' });
  await fetch(`/__shot?name=${name}`, { method: 'POST', body: blob });
  return { name, bytes: blob.size, probe: boxStatsFrom(flip, w, h) };
};

function boxStatsFrom(buf, w, h) {
  return { core: boxStats(buf, w, h, 0.42, 0.45, 0.58, 0.6), sky: boxStats(buf, w, h, 0.4, 0.02, 0.6, 0.12) };
}

globalThis.__cd_ready = () => !!globalThis.__cd;
