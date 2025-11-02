import type { Config } from './src/payload-types.js';

declare module 'payload' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
  export interface GeneratedTypes extends Config {}
}

declare namespace NodeJS {
  interface ProcessEnv {
    PAYLOAD_SECRET: string;
    DATABASE_URI: string;
  }
}
