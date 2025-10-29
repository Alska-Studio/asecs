import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { buildConfig } from 'payload';
import sharp from 'sharp';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import dotenv from 'dotenv';

import { collections, blocks, globals } from './models';

const env = dotenv.config();
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  secret: env.parsed!.PAYLOAD_SECRET! ?? process.env.PAYLOAD_SECRET!,
  db: mongooseAdapter({
    url: env.parsed!.DATABASE_URI! ?? process.env.DATABASE_URI!
  }),
  editor: lexicalEditor(),
  /*
  email: nodemailerAdapter({
    defaultFromAddress: 'info@asecs.com',
    defaultFromName: 'ASECS',
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  */
  admin: {
    user: 'users',
    livePreview: {
      url: 'https://localhost:5173',
      collections: ['pages']
    },
    components: {

    }
  },
  localization: {
    locales: ['en', 'sv'],
    defaultLocale: 'en'
  },
  collections: collections,
  blocks: blocks,
  globals: globals,
  custom: {},
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts')
  },
  sharp
});
