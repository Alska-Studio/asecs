// Load environment variables FIRST before any imports
import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'node:path';

dotenvConfig({ path: resolve(process.cwd(), '.env') });

// Now import payload after environment variables are loaded
import { getPayload } from 'payload';
import { seedUsers } from './user';
import { seedMedia } from './media';
import { seedStores } from './stores';
import { seedRestaurants } from './restaurants';
import { seedPages } from './pages';
import { seedDeals } from './deals';

/**
 * Main seed script for Payload CMS
 */
const seed = async () => {
  console.log('Starting seed process...');

  // Dynamically import the config after environment variables are loaded
  const { getPayloadConfig } = await import('@asecs/shared/payload-config');
  const config = await getPayloadConfig({
    secret: process.env.PAYLOAD_SECRET!,
    databaseUri: process.env.DATABASE_URI!
  });

  const payload = await getPayload({ config });

  // Seed users first (admin access needed)
  await seedUsers(payload);

  // Seed media (images needed for stores/restaurants)
  const media = await seedMedia(payload);

  // Seed stores
  await seedStores(payload, media);

  // Seed restaurants
  await seedRestaurants(payload, media);

  // Seed deals (requires stores to exist)
  await seedDeals(payload);

  // Seed pages
  await seedPages(payload);

  console.log('Seed process completed successfully!');
  process.exit(0);
};

seed().catch((error) => {
  console.error('Error during seed process:', error);
  process.exit(1);
});
