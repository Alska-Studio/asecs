import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { ColorVariant } from '@agapi/ui/types';
import type { LexicalContent } from '../types';

export interface RichTextWithHeadingProps {
  /**
   * Section heading
   */
  heading: string;

  /**
   * Rich text content
   */
  content: LexicalContent;

  /**
   * Number of columns for text layout
   */
  columns?: '1' | '2';

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

