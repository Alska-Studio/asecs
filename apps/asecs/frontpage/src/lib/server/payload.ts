import type { BasePayload } from 'payload';

import { building } from '$app/environment';
import { PAYLOAD_SECRET, DATABASE_URI } from '$env/static/private';

import { buildConfig, getPayload } from 'payload';
import config from '@payload-config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';

// Minimal config for optimization purposes
export default buildConfig({
  secret: PAYLOAD_SECRET,
  db: mongooseAdapter({
    url: DATABASE_URI
  })
});

let payloadInstance: BasePayload | null = null;

const initPayload = async () => {
  if (!building && !payloadInstance) {
    payloadInstance = await getPayload({ config });
    return payloadInstance;
  }
};

export const payload = payloadInstance ? payloadInstance : await initPayload();
