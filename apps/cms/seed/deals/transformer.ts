import type { Deal, Media, Restaurant, Store } from 'apps/_shared/src/payload-types';
import type{ DealData } from './data';

export const transform = (data: DealData, stores: Store[], restaurants: Restaurant[], placeholderMedia: Media | undefined): Omit<Deal, 'id' | 'updatedAt' | 'createdAt'> => {
  // Randomly assign to 1-3 stores
  const numStores = Math.min(Math.floor(Math.random() * 3) + 1, stores.length);
  const randomStores = stores.sort(() => Math.random() - 0.5).slice(0, numStores).map(s => s.id);

  if (randomStores.length > 0) {
    console.log(`[DEALS:INFO] Creating deal: ${data.title} for ${numStores} stores`);
  }

  // Randomly assign to 1-2 stores
  const numRestaurants = Math.min(Math.floor(Math.random() * 2) + 1, restaurants.length);
  const randomRestaurants = restaurants.sort(() => Math.random() - 0.5).slice(0, numRestaurants).map(r => r.id);

  if (randomRestaurants.length > 0) {
    console.log(`[DEALS:INFO] Creating deal: ${data.title} for ${numRestaurants} restaurants`);
  }

  return {
      title: data.title,
      description: data.description,
      ...(placeholderMedia ? { image: placeholderMedia.id } : {}),
      stores: randomStores.length > 0 ? randomStores : undefined,
      restaurants: randomRestaurants.length > 0 ? randomRestaurants : undefined,
      badges: data.badges,
      isActive: true,
      validFrom: new Date().toISOString(),
      validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days from now
  };
};
