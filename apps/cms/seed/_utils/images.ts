/**
 * Helper to get random image ID from a map
 * @param imageMap - Map of image IDs
 * @returns Random image ID
 */
export const getRandomImage = (imageMap: Record<string, string> | undefined): string | undefined => {
  if (!imageMap || Object.keys(imageMap).length === 0) {
    console.log('[RESTAURANTS:INFO] ⚠️ No images available in map');
    return undefined;
  }

  const ids = Object.values(imageMap);
  const randomId = ids[Math.floor(Math.random() * ids.length)];
  console.log(`[RESTAURANTS:INFO] 🖼️ Selected random image ID: ${randomId}`);

  return randomId;
};

/**
 * Helper to get multiple random images formatted for ImageGallery block
 * @param imageMap - Map of image IDs
 * @param count - Number of images to select
 * @returns Array of image objects with 'image' property
 */
export const getRandomImages = (imageMap: Record<string, string> | undefined, count: number): Array<string> => {
  if (!imageMap || Object.keys(imageMap).length === 0) {
    console.log('[RESTAURANTS:INFO] ⚠️ No images available for gallery');
    return [];
  }

  const ids = Object.values(imageMap);
  const shuffled = ids.sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, ids.length));
  console.log(`[RESTAURANTS:INFO] 🖼️ Selected ${selected.length} gallery images`);

  // Transform IDs into objects with 'image' property
  return selected;
};
