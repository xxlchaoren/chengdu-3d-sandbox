import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig, type Plugin } from 'vite';

/**
 * 开发期截图落盘。
 *
 * 视觉验证要在隐藏标签页里做：那里 rAF 被节流、浏览器截图接口不可用，
 * 所以页面自己推帧、readPixels、编码 PNG，再 POST 回同源的一个临时路径，
 * 由 dev server 写进 shots/。只在 dev server 上存在，不进构建产物，
 * 应用运行时依旧零外部请求。
 */
function shotSink(outDir: string): Plugin {
  return {
    name: 'cd-shot-sink',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/__shot', (req, res) => {
        if (req.method !== 'POST') {
          res.writeHead(405).end();
          return;
        }
        const name = (new URL(req.url ?? '/', 'http://x').searchParams.get('name') ?? 'shot').replace(/[^\w.-]/g, '_');
        const chunks: Buffer[] = [];
        req.on('data', (c: Buffer) => chunks.push(c));
        req.on('end', () => {
          const buf = Buffer.concat(chunks);
          mkdirSync(outDir, { recursive: true });
          const file = join(outDir, `${name}.png`);
          writeFileSync(file, buf);
          const png = buf.subarray(0, 8).toString('hex') === '89504e470d0a1a0a';
          server.config.logger.info(`shot ${file} ${buf.length}B png=${png}`);
          res.writeHead(200, { 'content-type': 'text/plain' }).end('ok');
        });
      });
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [shotSink('shots')],
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 1600,
  },
  server: {
    port: 4420,
    strictPort: true,
  },
});
