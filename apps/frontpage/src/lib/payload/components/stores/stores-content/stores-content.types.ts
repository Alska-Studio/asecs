import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { StoreData } from '../types';

export interface StoresContentProps {
  /**
   * Array of store data to display and filter
   */
  stores: StoreData[];
  /**
   * Initial filter configuration for store types
   * If not provided, default filters will be used
   */
  initialStoreTypeFilters?: FilterOption[];
  /**
   * Initial filter configuration for locations
   * If not provided, default filters will be used
   */
  initialLocationFilters?: FilterOption[];
  /**
   * Callback fired when stores are filtered
   * Useful for analytics or external state management
   */
  onFilterChange?: (filteredStores: StoreData[]) => void;
  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;
}

export interface FilterOption {
  /**
   * Unique identifier for the filter option
   * Should match store category or location identifiers
   */
  id: string;
  /**
   * Display label for the filter option
   */
  label: string;
  /**
   * Whether the filter is currently active
   */
  checked: boolean;
}

export interface StoreTypeMapping {
  /**
   * Filter ID to match against
   */
  filterId: string;
  /**
   * Category keywords to search for in store data
   */
  keywords: string[];
}







