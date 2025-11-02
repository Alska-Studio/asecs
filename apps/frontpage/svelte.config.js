import child_process from 'node:child_process';
import awsAdapter from '@agapi-development-tools/sveltekit-aws-adapter';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { preprocessMeltUI, sequence } from '@melt-ui/pp';

const getVersion = () => {
  try {
    return child_process.execSync('git rev-parse HEAD').toString().trim();
  } catch (_e) {
    return 'unknown'; // If no commit has been made, the version will be unknown
  }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: sequence([ vitePreprocess(), preprocessMeltUI()]),
  kit: {
    version: {
      name: getVersion(),
      pollInterval: 30 * 1000
    },
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: awsAdapter({ apiInput: './src/api', lambdasInput: './src/lambdas' }),
    alias: {
      '~': './',
      $storefront: './src',
      $panda: './styled-system',
      $types: './src/types',
      $payload: './src/lib/server/payload.ts',
      '@payload-config': '../_shared/src/payload.config.ts',
      '@payload-types': '../_shared/src/payload.types.ts'
    },
    paths: {
      relative: false
    }
  },
  onwarn: (warning, handler) => {
    // suppress warnings on `vite dev` and `vite build`; but even without this, things still work
    if (warning.message.startsWith('`a11y-')) {
      return;
    }
    handler(warning);
  },
  ssr: {
    noExternal: ['uuid']
  }
};

export default config;
