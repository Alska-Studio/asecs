import type { Payload } from 'payload';

import { building } from '$app/environment';
import { PAYLOAD_SECRET, DATABASE_URI } from '$env/static/private';

import { getPayload } from 'payload';
import { getPayloadConfig } from '@asecs/shared/payload-config';

const config = getPayloadConfig({ secret: PAYLOAD_SECRET, databaseUri: DATABASE_URI });
let instance: Payload | null = null; // In memory singleton

const initPayload = async () => {
  if (!building && !instance) { // Do not initialize when building
    // const { getPayloadConfig } = await import('@asecs/shared/payload-config');
    return instance = await getPayload({ config });
  }
};

export const payload = (instance ? instance : await initPayload()) as Payload;
export type * from 'payload';
