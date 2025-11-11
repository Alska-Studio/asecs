import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { DaySchedule } from '$lib/components/opening-hours';

export type SocialMediaPlatform = 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'youtube' | 'tiktok';

export interface SocialMediaLink {
  /**
   * Social media platform name
   */
  platform: SocialMediaPlatform;
  /**
   * URL to the social media profile
   */
  url: string;
}

export interface StoreInfoCardProps {
  /**
   * Weekly opening hours schedule
   */
  openingHours?: DaySchedule[];
  /**
   * Phone number
   */
  phone?: string | null;
  /**
   * Website URL
   */
  website?: string | null;
  /**
   * Menu URL (for restaurants - PDF or image)
   */
  menuUrl?: string;
  /**
   * Array of social media links with platform icons
   */
  socialMediaLinks?: SocialMediaLink[];
  /**
   * Link to view all opening hours
   */
  viewAllHoursHref?: string;
  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;
}


