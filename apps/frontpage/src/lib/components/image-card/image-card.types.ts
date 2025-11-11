import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { ColorVariant } from '@agapi/ui/types';
import type { Media } from '@asecs/shared/payload-types';

/**
 * Badge icon types
 */
export type BadgeIconType =
  | 'dot'      // Default colored dot
  | 'clock'    // For time-related badges (e.g., "Open now")
  | 'map-pin'  // For location badges
  | 'tag';     // For category badges

/**
 * Card badge configuration
 */
export interface CardBadge {
  /**
   * Badge label text
   */
  label: string;
  /**
   * Badge color variant (uses design system color variants)
   */
  colorVariant?: ColorVariant;
  /**
   * Icon to display in the badge
   */
  icon?: BadgeIconType;
}

/**
 * ImageCard component props
 */
export interface ImageCardProps {
  /**
   * Image URL (required)
   */
  image: string | Media;
  /**
   * Card title
   */
  title: string;
  /**
   * Alt text for image (defaults to title if not provided)
   */
  alt?: string;
  /**
   * Optional meta information text
   */
  meta?: string;
  /**
   * Array of badges to display
   */
  badges?: CardBadge[];
  /**
   * Link href - if provided, card becomes a link
   */
  href?: string;
  /**
   * Click handler - if href is also provided, calls with preventDefault
   */
  onclick?: (e: MouseEvent) => void;
  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;

  // TODO: Add overlay snippet support for flexible overlay content
  // overlay?: Snippet;
}

