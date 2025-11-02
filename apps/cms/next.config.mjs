import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { withPayload } from '@payloadcms/next/withPayload';
import dotenv from 'dotenv';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

const stage = process.env.APP_ENV || 'dev';

// Load the right .env file based on the stage
dotenv.config({ path: `.env.${stage}`, quiet: true });
console.log(`Loaded environment: ${stage} (.env.${stage})`);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  outputFileTracingIncludes: {
    '/*': [
      'node_modules/serverless-http/**/*',
      'node_modules/lambda-warmer/**/*',
    ]
  },
  outputFileTracingRoot: path.join(__dirname, '../..'),
}

export default withPayload(nextConfig);
