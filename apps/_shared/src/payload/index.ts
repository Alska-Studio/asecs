import type * as Types from './payload-types';

import { fileURLToPath } from 'node:url';
import path from 'node:path';

import sharp from 'sharp';
import { buildConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { s3Storage } from '@payloadcms/storage-s3';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { STSClient, GetCallerIdentityCommand } from '@aws-sdk/client-sts';
import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';

import { collections, blocks, globals as _globals } from './models';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const getPayloadConfig = async (params: { secret: string; databaseUri: string }) => {
  const credentialsProvider = defaultProvider();
  const credentials = await credentialsProvider();

  const ssmClient = new SSMClient();

  const assetsBucketName = await ssmClient.send(new GetParameterCommand({
    Name: '/asecs/resources/assets-bucket-name'
  }));

  if (!assetsBucketName.Parameter?.Value) {
    throw new Error('SSM parameter "/asecs/resources/assets-bucket-name" not found');
  }

  // TODO: Remove?
  // const stsClient = new STSClient();
  // const callerIdentity = await stsClient.send(new GetCallerIdentityCommand({}));
  // const accountId = callerIdentity.Account;

  const s3BucketConfig = s3Storage({
    bucket: assetsBucketName.Parameter.Value,
    collections: {
      media: {
        prefix: 'media',
        generateFileURL: ({ filename }) => `/media/${filename}`,
        disablePayloadAccessControl: true,
        signedDownloads: false,
        // Important as Payload S3 bucket will check if file exists locally, then in S3 bucket and in DB and generate
        // file-name depending on if it already exists adding postfix if needed (detail-10.jpg if detail-1.jpg already exist)
        disableLocalStorage: true
      }
    },
    config: {
      region: 'eu-north-1',
      credentials: {
        // accountId: accountId,
        accessKeyId: credentials.accessKeyId,
        secretAccessKey: credentials.secretAccessKey,
        sessionToken: credentials.sessionToken
      }
    }
  });

  return buildConfig({
    secret: params.secret,
    db: mongooseAdapter({
      url: params.databaseUri
    }),
    editor: lexicalEditor(),
    plugins: [s3BucketConfig],
    typescript: {
      outputFile: path.resolve(__dirname, 'payload-types.ts')
    },
    admin: {
      user: 'users',
      livePreview: {
        url: 'https://localhost:5173'
      }
    },
    localization: {
      locales: ['en', 'sv'],
      defaultLocale: 'en'
    },
    collections: collections,
    blocks: blocks,
    // globals: globals,
    custom: {},
    sharp
  });
};

// export default getPayloadConfig({ secret: process.env.PAYLOAD_SECRET, databaseUri: process.env.DATABASE_URI });

declare module 'payload' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
  export interface GeneratedTypes extends Types.Config {}
}
