import type { SystemStyleObject } from '@agapi/ui/panda/types';

export interface FilterOption {
  /**
   * Unique identifier for the filter option
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

export interface StoreFilterProps {
  /**
   * Section title for the filter group
   */
  title: string;
  /**
   * Array of filter options to display
   */
  options: FilterOption[];
  /**
   * Callback fired when a filter option is toggled
   */
  onFilterChange?: (optionId: string, checked: boolean) => void;
  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;
}


