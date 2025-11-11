import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { ColorVariant } from '@agapi/ui/types';
import type { BadgeIconType } from '$lib/components/image-card';
import type { StoreData } from '../types';

/**
 * Store badge configuration
 * Compatible with ImageCard's CardBadge interface
 */
export interface StoreBadge {
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

export interface StoreCardProps {
  /**
   * Store data to display
   */
  store: StoreData;
  /**
   * Array of badges to display on the card
   */
  badges?: StoreBadge[];
  /**
   * Whether to show logo overlay on the image
   * @todo Implement overlay snippet support in ImageCard
   */
  logoOverlay?: boolean;
  /**
   * Click handler for the card
   */
  onClick?: () => void;
  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;
}

