import type { Payload } from 'payload';
import { restaurantDeals, sampleDeals } from './data';
import { transform } from './transformer';

export const seedDeals = async (payload: Payload) => {
  console.log('\n[DEALS:INFO] 🌱 Seeding deals...');

  // Get all stores
  const stores = await payload.find({ collection: 'stores', limit: 100 });

  // Get all restaurants
  const restaurants = await payload.find({ collection: 'restaurants', limit: 100 });

  if (stores.docs.length === 0 && restaurants.docs.length === 0) {
    console.log('[DEALS:INFO] ⚠️  No stores or restaurants found. Please seed them first.');
    return;
  }

  console.log(`[DEALS:INFO] ✓ Found ${stores.docs.length} stores and ${restaurants.docs.length} restaurants`);

  // Get or create a placeholder media for deals
  let placeholderMedia;
  const existingMedia = await payload.find({
    collection: 'media',
    where: { alt: { equals: 'Deal placeholder' } },
    limit: 1
  });

  if (existingMedia.docs.length > 0) {
    placeholderMedia = existingMedia.docs[0];
    console.log('[DEALS:INFO] ✓ Using existing placeholder media');
  } else {
    console.log('[DEALS:INFO] ⚠️  No placeholder media found. Deals will be created without images.');
    console.log('[DEALS:INFO] 💡 Upload images manually in the CMS admin panel.');
  }

  // Create store deals
  const createdStoreDeals = [];
  console.log('\n[DEALS:INFO] 📦 Creating store deals...');
  if (stores.docs.length > 0) {
    for (const data of sampleDeals) {


      try {
        const dealData = transform(data, stores.docs, [], placeholderMedia);
        const deal = await payload.create({ collection: 'deals', data: dealData });
        createdStoreDeals.push(deal);
        console.log(`[DEALS:INFO] ✓ Created: ${data.title}`);
      } catch (error) {
        console.error(`[DEALS:ERROR] ✗ Failed to create deal: ${data.title}`, error instanceof Error ? error.message : error);
      }
    }

    // Update stores with their deals
    console.log('\n[DEALS:INFO] Updating stores with deals...');
    for (const store of stores.docs) {
      const storeDeals = createdStoreDeals.filter(deal => (deal.stores)?.some((s) => (typeof s === 'object' ? s.id : s) === store.id)).map(d => d.id);

      if (storeDeals.length > 0) {
        await payload.update({
          collection: 'stores',
          id: store.id,
          data: { deals: storeDeals }
        });
        console.log(`[DEALS:INFO] ✓ Updated ${store.name} with ${storeDeals.length} deals`);
      }
    }
  }

  // Create restaurant deals
  const createdRestaurantDeals = [];
  if (restaurants.docs.length > 0) {
    console.log('\n[DEALS:INFO] 📦 Creating restaurant deals...');
    for (const data of restaurantDeals) {

      try {
        const dealData = transform(data, [], restaurants.docs, placeholderMedia);
        const deal = await payload.create({ collection: 'deals', data: dealData });

        createdRestaurantDeals.push(deal);
        console.log(`[DEALS:INFO] ✓ Created: ${dealData.title}`);
      } catch (error) {
        console.error(`[DEALS:ERROR] ✗ Failed to create deal: ${data.title}`, error instanceof Error ? error.message : error);
      }
    }

    // Update restaurants with their deals
    console.log('\n[DEALS:INFO] 📝 Updating restaurants with deals...');

    for (const restaurant of restaurants.docs) {
      const restaurantDeals = createdRestaurantDeals
        .filter(deal => ((deal).restaurants)?.some((r) =>
          (typeof r === 'object' ? r.id : r) === restaurant.id
        ))
        .map(d => d.id);

      if (restaurantDeals.length > 0) {
        await payload.update({
          collection: 'restaurants',
          id: restaurant.id,
          data: { deals: restaurantDeals }
        });
        console.log(`[DEALS:INFO] ✓ Updated ${restaurant.name} with ${restaurantDeals.length} deals`);
      }
    }
  }

  const totalDeals = createdStoreDeals.length + createdRestaurantDeals.length;
  console.log(`\n[DEALS:INFO] ✨ Successfully created ${totalDeals} deals (${createdStoreDeals.length} for stores, ${createdRestaurantDeals.length} for restaurants)`);
};
