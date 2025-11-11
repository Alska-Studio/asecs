declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PAYLOAD_SECRET: string;
      DATABASE_URI: string;
      MEDIA_BUCKET: string;
    }
  }

  var PARAMETERS: Record<string, string>;
  var BUCKETS_EXISTS: Record<string, boolean>;
}

export {};
