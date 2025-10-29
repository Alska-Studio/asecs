import { fileURLToPath } from 'node:url';
import path from 'node:path';
import dotenv from 'dotenv';

import { withPayload } from '@payloadcms/next/withPayload';

const stage = process.env.APP_ENV || 'dev';

// Load the right .env file based on the stage
dotenv.config({ path: `.env.${stage}`, quiet: true });

console.log(`Loaded environment: ${stage} (.env.${stage})`);

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs']
    };
    return webpackConfig;
  },
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/admin',
        permanent: false
      }
    ];
  },
  output: 'standalone',
  outputFileTracingRoot: path.join(__dirname, '../../../')
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
