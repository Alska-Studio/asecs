import type { LogOptions } from 'vite';

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, createLogger } from 'vite';
import mkcert from 'vite-plugin-mkcert';

import { sveltePhosphorOptimize } from 'phosphor-svelte/vite';
import parachutePlugin from '@agapi-development-tools/parachute/vite';
import { viteEnvExport } from '@agapi-development-tools/vite-sveltekit-env';

import { colors as Colors } from '@agapi-development-tools/common-utilities';

const PREFIX = Colors.red('♥');
const LOGGER = createLogger();

const capitalize = (text: string) => text && text.charAt(0).toUpperCase() + text.slice(1);

export default defineConfig(({ mode, command }) => {
  return {
    plugins: [
      parachutePlugin({ watch: true }),
      sveltePhosphorOptimize(),
      sveltekit(),
      viteEnvExport(),
      mkcert() as any
    ],
    optimizeDeps: {
      exclude: ['phosphor-svelte', 'agapi-ui']
    },
    test: {
      include: ['src/**/*.{test,spec}.{js,ts}']
    },
    build: {
      minify: 'esbuild',
      sourcemap: true,
      rollupOptions: {
        external: ['@agapi/ui', 'phosphor-svelte']
      }
    },
    esbuild: {
      sourcemap: true,
      pure: mode === 'production' ? ['console.log', 'console.warn', 'console.info', 'console.debug'] : [],
      drop: mode === 'production' ? ['console'] : []
    },
    customLogger: {
      ...LOGGER,
      info: (msg: string, options?: LogOptions) => LOGGER.info(`${PREFIX} ${Colors.summerSky('info')} ${capitalize(msg)}`, options),
      warn: (msg: string, options?: LogOptions) => LOGGER.warn(`${PREFIX} ${Colors.orange('warn')} ${capitalize(msg)}`, options),
      error: (msg: string, options?: LogOptions) => LOGGER.error(`${PREFIX} ${Colors.red('error')} ${capitalize(msg)}`, options)
    },
    resolve: {
      alias: {
        'node-fetch': 'node-fetch-polyfill'
      }
    },
    server: command === 'serve'
      ? {
          proxy: {
            '/apiv2': {
              target: 'http://localhost:3000/api',
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/apiv2/, '')
            }
          },
          port: 5173
        }
      : undefined
  };
});
