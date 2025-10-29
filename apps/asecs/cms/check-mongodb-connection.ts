import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.DATABASE_URI!);

async function test() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');
    const db = client.db();
    const collections = await db.collections();
    console.log('Collections:', collections.map(c => c.collectionName));
  } catch (err) {
    console.error('❌ Connection failed:', err);
  } finally {
    await client.close();
  }
}

test();
