import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { ColorVariant } from '@agapi/ui/types';

export interface IngressProps {
  /**
   * Main heading text
   */
  heading: string;

  /**
   * Simple text content for introduction (supports line breaks)
   */
  content: string;

  /**
   * Color variant for the section background
   */
  colorVariant?: ColorVariant;

  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;

  /**
   * Block type identifier (used by BlockRenderer)
   */
  blockType?: string;
}

