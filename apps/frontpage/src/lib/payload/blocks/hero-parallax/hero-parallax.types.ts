import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { ColorVariant } from '@agapi/ui/types';
import type { HTMLAttributes } from 'svelte/elements';

/**
 * Quick action link
 */
export interface QuickLink {
  /**
   * Link label text
   */
  label: string;
  /**
   * Icon identifier for the link
   */
  icon: 'compass' | 'shopping' | 'food' | 'confetti';
  /**
   * Navigation URL
   */
  href: string;
}

export interface HeroParallaxProps extends Omit<HTMLAttributes<HTMLElement>, 'class' | 'style'> {
  /**
   * Show opening hours badges (automatically calculated)
   */
  showOpeningHours?: boolean;
  /**
   * Location ID for fetching opening hours (future implementation)
   */
  locationId?: string;
  /**
   * Main heading text (uppercase)
   */
  headingUpper?: string;
  /**
   * Secondary heading text (serif font)
   */
  headingLower?: string;
  /**
   * Description text
   */
  description?: string;
  /**
   * Hero image URL or media object
   */
  imageUrl?: string | { url?: string };
  /**
   * Quick action links
   */
  quickLinks?: QuickLink[];
  /**
   * Marquee text displayed diagonally
   */
  marqueeText?: string;
  /**
   * Color variant for background
   */
  colorVariant?: ColorVariant;
  /**
   * Custom CSS properties for Panda styles
   */
  css?: SystemStyleObject;
  /**
   * Inline style attribute for dynamic values
   */
  style?: string;
}
