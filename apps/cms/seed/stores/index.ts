import type { Payload } from 'payload';
import { transform } from './transformer';
import { stores } from './data';
import { MediaData } from 'seed/types';

/** Clean up: Remove stores that aren't in the seed data */
const cleanup = async (payload: Payload): Promise<void> => {
  console.log('[STORES:INFO] 🧹 Cleaning up old stores not in seed data...');
  try {
    const allStores = await payload.find({
      collection: 'stores',
      limit: 1000
    });

    const seedStoreNames = new Set(stores.map((s) => s.name));
    const storesToDelete = allStores.docs.filter((store) => !seedStoreNames.has(store.name));

    if (storesToDelete.length > 0) {
      console.log(`[STORES:INFO] 🔄 Found ${storesToDelete.length} stores to remove:`);
      for (const store of storesToDelete) {
        console.log(`  - ${store.name}`);
      }

      for (const store of storesToDelete) {
        await payload.delete({
          collection: 'stores',
          id: store.id
        });
      }
      console.log(`[STORES:INFO] ✓ Removed ${storesToDelete.length} old stores`);
    } else {
      console.log('[STORES:INFO] ✓ No old stores to remove');
    }
  } catch (error) {
    console.error('[STORES:ERROR] ✗ Error cleaning up stores:', error);
  }
};

const createTags = async (payload: Payload): Promise<Record<string, string>> => {
  const tags: Record<string, string> = {};
  const tagCategories = [...new Set(stores.map((s) => s.category))];

  for (const category of tagCategories) {
    try {
      const existingTag = await payload.find({
        collection: 'tags',
        where: {
          name: {
            equals: category
          }
        },
        limit: 1
      });

      if (existingTag.docs.length > 0) {
        tags[category] = existingTag.docs[0].id;
        console.log(`Tag "${category}" already exists`);
      } else {
        const tag = await payload.create({
          collection: 'tags',
          data: {
            name: category,
            slug: category.toLowerCase().replace(/[^\w-]/g, '-'),
            category: 'store',
            color: 'blue'
          }
        });
        tags[category] = tag.id;
        console.log(`Created tag: ${category} (category: store)`);
      }
    } catch (error) {
      console.error(`Error creating tag ${category}:`, error);
    }
  };

  return tags;
};

const createStores = async (payload: Payload, tags: Record<string, string>,media?: MediaData): Promise<void> => {
  for (const store of stores) {
    try {
      // Check if store already exists
      const existing = await payload.find({
        collection: 'stores',
        where: { name: { equals: store.name } },
        limit: 1
      });

      const storeData = transform(tags, store, media);

      if (existing.docs.length > 0) {
        // Update existing store with new structure
        console.log(`[STORES:INFO] 🔄 Updating store "${store.name}"...`);
        await payload.update({
          collection: 'stores',
          id: existing.docs[0].id,
          data: storeData
        });
        console.log(`[STORES:INFO] ✓ Updated store: ${store.name}`);
      } else {
        // Create new store
        await payload.create({
          collection: 'stores',
          data: storeData
        });
        console.log(`[STORES:INFO] ✓ Created store: ${store.name}`);
      }
    } catch (error) {
      console.error(`[STORES:ERROR] ✗ Error creating/updating store ${store.name}:`, error);
    }
  }
};

/**
 * Seeds the stores collection with real stores from Asecs Jönköping
 * Uses modern content blocks (ImageGallery, DealsCarousel)
 */
export const seedStores = async (
  payload: Payload,
  media?: MediaData
): Promise<void> => {
  console.log('[STORES] Starting seeding...');
  console.log(`[STORES:INFO] 📸 Media available: ${media?.details.size || 0} details, ${media?.people.size || 0} people`);

  const tags = await createTags(payload);
  await cleanup(payload);
  await createStores(payload, tags, media);

  console.log('[STORES:INFO] ✓ Stores seeding completed!');
};
