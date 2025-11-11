import type { Payload } from 'payload';
import { USERS } from './data';

/**
 * Seeds default admin user
 */
export async function seedUsers(payload: Payload): Promise<void> {
  console.log('[USER:INFO] Starting seeding...');

  try {
    // Check if user already exists
    for (const user of USERS) {

      const existingUsers = await payload.find({
        collection: 'users',
        where: {
          email: {
            equals: user.email
          }
        },
        limit: 1
      });

      if (existingUsers.docs.length > 0) {
        console.log(`[USER:INFO] ${user.email} already exists, skipping...`);
        continue;
      }

      const createdUser = await payload.create({
        collection: 'users',
        data: {
          email: user.email,
          password: user.password
        }
      });

      console.log('[USER:INFO] User created successfully');
      console.log(`[USER:INFO] Email: ${user.email}`);
      console.log(`[USER:INFO] Password: ${user.password}`);
    }
  } catch (error) {
    console.error('[USER:ERROR] Error creating admin user:', error);
    throw error;
  }
}
