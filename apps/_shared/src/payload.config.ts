import { fileURLToPath } from 'node:url';
import path from 'node:path';

import sharp from 'sharp';
import { buildConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { mongooseAdapter } from '@payloadcms/db-mongodb';

import { collections, blocks, globals } from './models';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET!;
const DATABASE_URI = process.env.DATABASE_URI!;

export default buildConfig({
  secret: PAYLOAD_SECRET,
  db: mongooseAdapter({
    url: DATABASE_URI
  }),
  editor: lexicalEditor(),
  typescript: {
    outputFile: path.resolve(dirname, 'payload.types.ts')
  },
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
  sharp
});

import type { Config } from './payload-types';

declare module 'payload' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
  export interface GeneratedTypes extends Config {}
}
