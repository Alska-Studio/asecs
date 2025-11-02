import type { Payload } from 'payload';

import { building } from '$app/environment';

import config from '@asecs/shared/payload-config';
import { getPayload } from 'payload';

let instance: Payload | null = null; // In memory singleton

const initPayload = async () => {
  if (!building && !instance) { // Do not initialize when building
    return instance = await getPayload({ config });
  }
};

export const payload = (instance ? instance : await initPayload()) as Payload;
export type * from 'payload';
