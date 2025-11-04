import type { NextConfig } from 'next';

import withBundleAnalyzer from '@next/bundle-analyzer';

// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import dotenv from 'dotenv';
import { colors as Colors } from '@agapi-development-tools/common-utilities';

import { withPayloadTurboPack } from './nextjs-extras/withPayloadTurboPack.mts';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

const stage = process.env.APP_ENV || 'dev';

const withEnv = (nextConfig: NextConfig): NextConfig => {
  // Load the right .env file based on the stage
  dotenv.config({ path: `.env.${stage}` });

  return {
    ...nextConfig,
    env: {
      ...nextConfig.env,
    },
    compiler: {
      runAfterProductionCompile: async (metadata: { projectDir: string; distDir: string; }) => {
        console.log(Colors.styledText()` <softGreen>✓</softGreen> Used environment: ${stage} (.env.${stage})`);
        nextConfig?.compiler?.runAfterProductionCompile?.(metadata);
      }
    }
  }
}
/**
 * NOTICE: Using Next v16 with turbopack and typescript, payload is not fully supported but works with some workarounds.
 * See: https://github.com/payloadcms/payload/pull/14218
 */
export default function nextConfig(phase: string, config: NextConfig): NextConfig {
  return withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  })(withPayloadTurboPack(withEnv({
    output: 'standalone',
    outputFileTracingRoot: path.join(__dirname, '../..'),
    experimental: {
      // adapterPath: require.resolve('./nextjs-extras/adapter.mts')
    },
  } satisfies NextConfig)));
};
