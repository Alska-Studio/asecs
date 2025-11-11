import type { SystemStyleObject } from '@agapi/ui/panda/types';

/**
 * Day of week enum for type safety
 */
export enum DayOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6
}

/**
 * Time range for opening hours
 */
export interface TimeRange {
  /**
   * Opening time in 24h format (e.g., "08:00")
   */
  open: string;
  /**
   * Closing time in 24h format (e.g., "20:00")
   */
  close: string;
}

/**
 * Regular weekly schedule
 */
export interface DaySchedule extends TimeRange {
  /**
   * Day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
   */
  day: number;
}

/**
 * Special date override (holidays, events, etc.)
 * TODO: This will be fetched from a collection in the future
 */
export interface SpecialHoursOverride {
  /**
   * Specific date for the override (ISO format: YYYY-MM-DD)
   */
  date: string;
  /**
   * Opening hours for this day (null = closed)
   */
  hours: TimeRange | null;
  /**
   * Reason for special hours (e.g., "Julafton", "Midsommar")
   */
  reason?: string;
}

/**
 * Default opening hours configuration
 * TODO: This will be fetched from a collection/global in Payload CMS
 */
export interface DefaultOpeningHours {
  /**
   * Store/location ID or name
   */
  locationId?: string;
  /**
   * Regular weekly schedule
   */
  weeklySchedule: DaySchedule[];
  /**
   * Special date overrides (holidays, etc.)
   */
  overrides?: SpecialHoursOverride[];
}

/**
 * Component props
 */
export interface OpeningHoursProps {
  /**
   * Store/location identifier (for fetching hours)
   * TODO: Will be used to fetch from collection
   */
  locationId?: string;
  /**
   * Manual schedule override (for testing or specific use cases)
   * If provided, bypasses the default hours system
   */
  schedule?: DaySchedule[];
  /**
   * Current date/time (optional, defaults to now)
   * Useful for testing and SSR
   */
  currentTime?: Date;
  /**
   * URL for "See all opening hours" link
   */
  viewAllHref?: string;
  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;
}

/**
 * Calculated opening status
 */
export interface OpeningStatus {
  /**
   * Current status (open/closed now)
   */
  currentStatus: {
    isOpen: boolean;
    message: string;
  };
  /**
   * Next status change (when opens/closes next)
   */
  nextStatus?: {
    message: string;
  };
  /**
   * Special hours reason (if applicable)
   */
  specialReason?: string;
}
