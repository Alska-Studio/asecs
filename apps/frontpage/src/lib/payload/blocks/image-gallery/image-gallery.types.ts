import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { ColorVariant } from '@agapi/ui/types';

export interface ImageGalleryProps {
  /**
   * Optional gallery title
   */
  title?: string;

  /**
   * Array of images to display
   */
  images?: Array<{
    /**
     * Image object with URL
     */
    image?: { url: string };
    /**
     * Alt text for accessibility
     */
    alt?: string;
    /**
     * Optional image caption
     */
    caption?: string;
  }>;

  /**
   * Display layout for the gallery
   */
  layout?: 'carousel' | 'grid' | 'masonry';

  /**
   * Show navigation arrows for carousel
   */
  showNavigation?: boolean;

  /**
   * Show dot indicators for carousel
   */
  showDots?: boolean;

  /**
   * Color variant for the section wrapper
   */
  colorVariant?: ColorVariant;

  /**
   * Block type identifier
   */
  blockType?: string;

  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;
}

