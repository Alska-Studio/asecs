import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { CollectionItemData } from '../collection-card';

export interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

export interface FilterGroup {
  /**
   * Filter group title
   */
  title: string;
  /**
   * Filter options in this group
   */
  options: FilterOption[];
  /**
   * Unique ID for this filter group
   */
  id: string;
}

export interface FilterMapping {
  filterId: string;
  keywords: string[];
}

export interface CollectionContentProps {
  /**
   * Array of items to display and filter
   */
  items: CollectionItemData[];
  /**
   * Collection type for URL generation
   */
  collectionType: 'stores' | 'restaurants' | 'events';
  /**
   * Plural label for count display (e.g., "butiker", "restauranger")
   */
  collectionLabel: string;
  /**
   * Filter groups configuration
   */
  filterGroups: FilterGroup[];
  /**
   * Mappings for type-based filtering
   */
  typeMappings?: FilterMapping[];
  /**
   * Callback when items are filtered
   */
  onFilterChange?: (filteredItems: CollectionItemData[]) => void;
  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;
}

