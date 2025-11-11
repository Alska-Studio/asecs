import type { Payload } from 'payload';

import { restaurants } from './data';
import { transform } from './transformer';
import { MediaData } from '../types';

/** Clean up: Remove restaurants that aren't in the seed data */
const cleanup = async (payload: Payload) => {
  console.log('[RESTAURANTS:INFO] 🧹 Cleaning up old restaurants not in seed data...');

  try {
    const allRestaurants = await payload.find({
      collection: 'restaurants',
      limit: 1000
    });

    const seedRestaurantNames = new Set(restaurants.map((r) => r.name));
    const restaurantsToDelete = allRestaurants.docs.filter((restaurant) => !seedRestaurantNames.has(restaurant.name));

    if (restaurantsToDelete.length > 0) {
      console.log(`[RESTAURANTS:INFO] 🔄 Found ${restaurantsToDelete.length} restaurants to remove:`);
      for (const restaurant of restaurantsToDelete) {
        console.log(`[RESTAURANTS:INFO]   - ${restaurant.name}`);
      }

      for (const restaurant of restaurantsToDelete) {
        await payload.delete({
          collection: 'restaurants',
          id: restaurant.id
        });
      }
      console.log(`[RESTAURANTS:INFO] ✓ Removed ${restaurantsToDelete.length} old restaurants`);
    } else {
      console.log('[RESTAURANTS:INFO] ✓ No old restaurants to remove');
    }
  } catch (error) {
    console.error('[RESTAURANTS:ERROR] ✗ Error cleaning up restaurants:', error);
  }
};

const createTags = async (payload: Payload): Promise<Record<string, string>> => {
  // Create tags for restaurant categories first
  const tags: Record<string, string> = {};
  const tagCategories = [...new Set(restaurants.map((r) => r.category))];

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
        console.log(`[RESTAURANTS:INFO] 🔖 Tag "${category}" already exists`);
      } else {
        const tag = await payload.create({
          collection: 'tags',
          data: {
            name: category,
            slug: category.toLowerCase().replace(/[^\w-]/g, '-'),
            category: 'restaurant',
            color: 'orange'
          }
        });

        tags[category] = tag.id;
        console.log(`[RESTAURANTS:INFO] ✓ Created tag: ${category} (category: restaurant)`);
      }
    } catch (error) {
      console.error(`[RESTAURANTS:ERROR] Error creating tag ${category}:`, error);
    }
  }
  return tags;
};

const createRestaurants = async (
  payload: Payload,
  tags: Record<string, string>,
  media?: MediaData
) => {
  for (const restaurant of restaurants) {
    try {
      // Check if restaurant already exists
      const existing = await payload.find({
        collection: 'restaurants',
        where: { name: { equals: restaurant.name } },
        limit: 1
      });

      const restaurantData = await transform({ tags, media, data: restaurant });

      if (existing.docs.length > 0) {
        // Update existing restaurant
        console.log(`[RESTAURANTS:INFO] 🔄 Updating restaurant "${restaurant.name}"...`);
        await payload.update({
          collection: 'restaurants',
          id: existing.docs[0].id,
          data: restaurantData
        });
        console.log(`[RESTAURANTS:INFO] ✓ Updated restaurant: ${restaurant.name}`);
      } else {
        // Create new restaurant
        await payload.create({
          collection: 'restaurants',
          data: restaurantData
        });
        console.log(`[RESTAURANTS:INFO] ✓ Created restaurant: ${restaurant.name}`);
      }
    } catch (error) {
      console.error(`[RESTAURANTS:ERROR] Error creating/updating restaurant ${restaurant.name}:`, error);
    }
  }
};

/**
 * Seeds the restaurants collection with real restaurants from Asecs Jönköping
 * Uses modern content blocks (Ingress, RichText, ImageGallery, DealsCarousel)
 */
export async function seedRestaurants(
  payload: Payload,
  media?: MediaData
): Promise<void> {
  console.log('[RESTAURANTS] Starting seeding...');
  console.log(`[RESTAURANTS:INFO] 📸 Media available: ${media?.details.size || 0} details, ${media?.people.size || 0} people`);

  await cleanup(payload);
  const tags = await createTags(payload);
  await createRestaurants(payload, tags, media);

  console.log('[RESTAURANTS:INFO] ✓ Restaurants seeding completed!');
}
