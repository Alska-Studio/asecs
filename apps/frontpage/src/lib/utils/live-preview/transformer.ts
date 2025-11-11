/**
 * Data Transformer for Payload CMS
 * Transforms Payload data structure to our Page interface
 */

import type { Page } from '@asecs/shared/payload-types';

/**
 * Transform Payload CMS data to our Page interface
 */
export function transformPayloadToPage(data: Partial<Page>): Omit<Page, 'createdAt' | 'updatedAt'> | null {
  if (!data) return null;

  // If already in Page format, return as-is
  if (data.title) {
    return data as Page;
  }

  // Transform Payload format to Page format
  return {
    id: data.id || '0',
    title: data.title || 'Untitled',
    slug: data.slug || '',
    content: transformBlocks(data.content || []),
    meta: {
      title: data.meta?.title || data.title || '',
      description: data.meta?.description || '',
      canonical: data.meta?.canonical || '',
      robots: data.meta?.robots || 'index, follow'
    }
  };
}

/**
 * Transform Payload blocks to our block format
 */
const transformBlocks = (blocks: any[]): any[] => {
  return blocks.map(block => ({
    ...block,
    // Map Payload's blockType to our component field
    component: block.blockType || block.component || 'unknown',
    // Clean up the blockType field to avoid confusion
    blockType: undefined
  }));
};

/**
 * Check if data needs transformation
 */
export const needsTransformation = (data: any): boolean => {
  if (!data) return false;

  // Check for Payload-specific fields
  return (
    data.title !== undefined ||
    data.content !== undefined ||
    (data.content?.[0]?.blockType !== undefined)
  );
};
