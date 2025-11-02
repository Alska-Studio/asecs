import { defineConfig } from '@pandacss/dev';
import pandaPreset from '@pandacss/preset-panda';
import preset from '@agapi/ui/panda/preset';
import { tokens, semanticTokens } from './src/lib/ds';
import { textStyles } from './src/lib/ds/textStyles';

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: 'svelte',
  presets: [pandaPreset, preset],

  // Where to look for your css declarations
  include: [
   // "./node_modules/@agapi/ui/panda/panda.buildinfo.json",
    './src/**/*.{js,ts,svelte}',
    '../_storefront/src/**/*.{js,ts,svelte}',
    '../../../packages/agapi-ui/src/**/*.{js,ts,svelte}'
  ],

  // Files to exclude
  exclude: [],
  minify: true,

  // Whether to hash classnames (makes debugging harder but improves performance)
  /*   hash: {
      cssVar: false,
      className: process.env.PUBLIC_ENVIRONMENT === 'prod',
    }, */

  theme: {
    extend: {
      tokens,
      semanticTokens,
      textStyles
    }
  },

  staticCss: {
    css: [
      {
        properties: {
          paddingBottom: ['*'],
          paddingTop: ['*']
        }
      }
    ]
  },

  importMap: '@agapi/ui/panda'
});
