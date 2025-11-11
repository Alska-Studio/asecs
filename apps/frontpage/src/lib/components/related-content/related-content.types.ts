import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { Config } from '@asecs/shared/payload-types';

type Collections = Config['collections'];

/** Polymorphic content item that has the relatedContent property */
export type PolymorphicContentItem = {
  [K in keyof Collections]: Collections[K] extends { relatedContent?: unknown }
    ? Collections[K]['relatedContent']
    : never;
}[keyof Collections];

/**
 * RelatedContent component props
 */
export interface RelatedContentProps {
  /**
   * Array of polymorphic content items to display
   */
  items: PolymorphicContentItem;
  /**
   * Section title
   */
  title?: string;
  /**
   * Maximum number of items to display
   */
  limit?: number;
  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;
}
