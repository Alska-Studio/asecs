import type { Payload } from 'payload';
import path from 'node:path';
import fs from 'node:fs';
import { MediaData } from 'seed/types';
import { uploadMedia } from './utils';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const seedDetailsMedia = async (payload: Payload, mockImagesDir: string) => {
  // Seed Detaljer (Details) images
  const detailsDir = path.join(mockImagesDir, 'details');
  const detailsDirExists = fs.existsSync(detailsDir);
  console.log(`[MEDIA:INFO] 📁 Looking for images in details directory: ${detailsDir}`);
  console.log(`[MEDIA:INFO] ${detailsDirExists ? '✓ Directory exists' : '✗ Directory does not exist'}`);

  const details: Record<string, string> = {};
  if (detailsDirExists) {
    const detailFiles = fs.readdirSync(detailsDir).filter((f) => !f.startsWith('.'));

    for (const file of detailFiles) {
      try {
        const filePath = path.join(detailsDir, file);
        const fileName = `detail-${path.parse(file).name}${path.extname(file)}`;
        const fileData = fs.readFileSync(filePath);
        details[file] = await uploadMedia(payload, { filePath, fileName, fileData });
      } catch (error) {
        console.error(`[MEDIA:ERROR] ✗ Error uploading ${file}:`, error);
      }
    }
  }
  return details;
};

const seedPeopleMedia = async (payload: Payload, mockImagesDir: string) => {
  // Seed Människor (People) images
  const peopleDir = path.join(mockImagesDir, 'people');
  const peopleDirExists = fs.existsSync(peopleDir);
  console.log(`[MEDIA:INFO] 📁 Looking for images in people directory: ${peopleDir}`);
  console.log(`[MEDIA:INFO] ${peopleDirExists ? '✓ Directory exists' : '✗ Directory does not exist'}`);

  const people: Record<string, string> = {};
  if (fs.existsSync(peopleDir)) {
    const peopleFiles = fs.readdirSync(peopleDir).filter((f) => !f.startsWith('.'));

    for (const file of peopleFiles) {
      try {
        const filePath = path.join(peopleDir, file);
        const fileName = `people-${path.parse(file).name}${path.extname(file)}`;
        const fileData = fs.readFileSync(filePath);
        people[file] = await uploadMedia(payload, { filePath, fileName, fileData });
      } catch (error) {
        console.error(`[MEDIA:ERROR] ✗ Error uploading ${file}:`, error);
      }
    }
  }
  return people;
};

/**
 * Seeds media files from mock_images folder
 */
export async function seedMedia(payload: Payload): Promise<MediaData> {
  console.log('[MEDIA:INFO] 🖼️  Starting media seeding...');

  const data: MediaData = { details: {}, people: {} };
  const mockImagesDir = path.join(__dirname, 'images');

  data.details = await seedDetailsMedia(payload, mockImagesDir);
  data.people = await seedPeopleMedia(payload, mockImagesDir);

  console.log(`[MEDIA:INFO] ✅ Media seeding complete: ${Object.keys(data.details).length} detail images, ${Object.keys(data.people).length} people images`);

  console.log('[MEDIA:INFO]', JSON.stringify(data, null, 2));
  return data;
}
