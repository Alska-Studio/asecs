import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { ColorVariant } from '@agapi/ui/types';

export interface BlockquoteProps {
  /**
   * Quote text
   */
  quote: string;

  /**
   * Quote author/attribution
   */
  author?: string;

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

