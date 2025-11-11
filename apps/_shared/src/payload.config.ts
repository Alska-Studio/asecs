import { getPayloadConfig } from './payload';

export default getPayloadConfig({ secret: process.env.PAYLOAD_SECRET, databaseUri: process.env.DATABASE_URI });
