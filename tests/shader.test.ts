import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.ts$/.test(name)) out.push(p);
  }
  return out;
}

const SRC = walk(join(ROOT, 'src'));

/**
 * 本项目所有材质都靠 onBeforeCompile 往 three 的着色器里插代码，
 * 而 three 的成品着色器是 GLSL ES 3.00。下面这些词在 ES 3.00 里是保留字，
 * 拿它们当变量名时 ANGLE 会拒绝编译整个片元着色器——画面里那一层直接消失，
 * 只在控制台留一行「Fragment shader is not compiled」。
 * 这类错误肉眼在截图里看不出来，所以必须静态守住。
 */
const RESERVED = [
  'patch', 'sample', 'filter', 'active', 'input', 'output', 'flat', 'packed', 'cast', 'class', 'union',
  'unsigned', 'goto', 'inline', 'static', 'sizeof', 'namespace', 'using', 'volatile', 'asm', 'vertex',
  'fragment', 'geometry', 'primitive', 'thread', 'signal', 'image', 'buffer', 'shared', 'coherent',
  'restrict', 'readonly', 'writeonly', 'precise', 'superp', 'virtual', 'external', 'interface', 'long',
  'short', 'half', 'double', 'fixed', 'resource', 'common', 'invariant',
];

test('着色器：注入的 GLSL 不用 GLSL ES 3.00 保留字当变量名', () => {
  const decl = new RegExp(String.raw`\b(?:float|vec[234]|mat[234]|bool|int|uniform|varying|attribute)\s+(?:${RESERVED.join('|')})\b`, 'g');
  const bad: string[] = [];
  for (const file of SRC) {
    const lines = readFileSync(file, 'utf8').split('\n');
    lines.forEach((line, i) => {
      const m = line.match(decl);
      if (m) bad.push(`${file.slice(ROOT.length).replace(/\\/g, '/')}:${i + 1} ${m.join(', ')}`);
    });
  }
  assert.ok(SRC.length >= 15, `应扫描到整个 src 目录，实际 ${SRC.length} 个文件`);
  assert.deepEqual(bad, [], '保留字变量名会让整块片元着色器编译失败');
});
