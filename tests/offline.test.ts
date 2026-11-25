import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));

/** data: URI 是内联资源（含 SVG 的 XML 命名空间串），不产生任何请求，扫描前先剔除。 */
function stripData(text: string): string {
  return text.replace(/"[^"\n]*data:[^"\n]*"|'[^'\n]*data:[^'\n]*'/g, '""');
}

/** 递归收集源码文件。 */
function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(ts|js|css)$/.test(name)) out.push(p);
  }
  return out;
}

const SRC = walk(join(ROOT, 'src'));
const HTML = readFileSync(join(ROOT, 'index.html'), 'utf8');

test('离线：src 与 index.html 里没有任何网络请求 API', () => {
  const NET_APIS = /\bfetch\s*\(|XMLHttpRequest|WebSocket|EventSource|navigator\.sendBeacon|importScripts\s*\(/;
  assert.ok(SRC.length >= 15, `应扫描到整个 src 目录，实际 ${SRC.length} 个文件`);
  for (const f of [...SRC, 'index.html']) {
    const text = f === 'index.html' ? HTML : readFileSync(f, 'utf8');
    assert.ok(!NET_APIS.test(text), `${f} 出现网络请求 API，沙盘必须完全离线`);
  }
});

test('离线：没有远程资源与远程依赖', () => {
  const REMOTE = /https?:\/\//;
  for (const f of SRC) {
    const text = readFileSync(f, 'utf8');
    // 注释里允许写参考链接，代码里不允许。
    const code = stripData(text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, ''));
    assert.ok(!REMOTE.test(code), `${f} 的代码里出现远程 URL`);
  }
  const htmlCode = stripData(HTML.replace(/<!--[\s\S]*?-->/g, ''));
  assert.ok(!REMOTE.test(htmlCode), 'index.html 的代码里出现远程 URL');
  for (const m of HTML.matchAll(/<(?:script|link|img|source)[^>]*?(?:src|href)="([^"]+)"/g)) {
    assert.ok(/^(?:\.\/|\/|\?|#|data:)/.test(m[1]), `index.html 的资源 ${m[1]} 不是本地路径`);
  }
  const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));
  assert.deepEqual(Object.keys(pkg.dependencies ?? {}), ['three'], '运行时依赖只允许 three');
});

test('离线：three 由 Vite 从 node_modules 打包，不引用 CDN', () => {
  const main = readFileSync(join(ROOT, 'src', 'main.ts'), 'utf8');
  assert.match(main, /from\s+'three'/, '应使用裸模块名，由 Vite 从 node_modules 解析');
  assert.ok(!/unpkg|jsdelivr|cdn\./i.test(`${main}${HTML}`), '不允许 CDN 兜底');
});

test('离线：材质全部程序生成，不加载任何贴图文件', () => {
  // three 的 Loader 家族内部会发起请求；只要不调用它们，就不会有外部依赖。
  const LOADER_APIS = /\b(?:Texture|Cube|File|ImageBitmap|Audio|FBX|GLTF|OBJ|MTL)Loader\b/;
  const ASSET_EXT = /\.(png|jpe?g|webp|gif|hdr|exr|ktx2|basis|ttf|woff2?)\b/i;
  for (const f of SRC) {
    const text = readFileSync(f, 'utf8');
    assert.ok(!LOADER_APIS.test(text), `${f} 使用了资源加载器`);
    assert.ok(!ASSET_EXT.test(text), `${f} 引用了外部贴图或字体`);
  }
  const procedural = SRC.filter((f) => /onBeforeCompile|ShaderMaterial/.test(readFileSync(f, 'utf8')));
  assert.ok(procedural.length >= 3, `细节应由 GLSL 程序生成，实际只有 ${procedural.length} 个文件参与`);
});

// 构建产物存在时才校验，保证 npm test 在未 build 的仓库里也能跑。
if (existsSync(join(ROOT, 'dist', 'index.html'))) {
  test('离线：dist 产物不含远程引用', () => {
    const jsDir = join(ROOT, 'dist', 'assets');
    const distHtml = readFileSync(join(ROOT, 'dist', 'index.html'), 'utf8');
    assert.ok(!/https?:\/\//.test(stripData(distHtml.replace(/<!--[\s\S]*?-->/g, ''))), 'dist/index.html 出现远程 URL');
    const chunks = readdirSync(jsDir);
    assert.ok(chunks.length >= 2, 'dist/assets 应包含 html 与 js 产物');
    const offender = chunks.findIndex((n) => /https?:\/\/(?!www\.w3\.org)/.test(stripData(readFileSync(join(jsDir, n), 'utf8'))));
    assert.equal(offender, -1, `dist/assets/${chunks[offender]} 里出现远程 URL`);
  });
}
