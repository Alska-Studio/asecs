import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { DaySchedule } from '$lib/components/opening-hours';
import type { Media } from '@asecs/shared/payload-types';

export interface HeroAction {
  /**
   * Button label text
   */
  label: string;
  /**
   * Button click handler or navigation href
   */
  href?: string;
  /**
   * Button click handler function
   */
  onClick?: () => void;
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'text' | 'cta';
  /**
   * Optional icon name (e.g., 'storefront', 'map-pin', 'clock')
   */
  icon?: string;
}

export interface CollectionHeroProps {
  /**
   * Main title text
   */
  title?: string;
  /**
   * Secondary title text (subtitle)
   */
  titleAlternate?: string;
  /**
   * Background image URL
   */
  backgroundImage?: string | Media | null;
  /**
   * Rich text content
   */
  richText?: string;
  /**
   * Weekly opening hours schedule
   */
  openingHours?: DaySchedule[];
  /**
   * Array of action buttons
   */
  actions?: HeroAction[];
  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;
}

