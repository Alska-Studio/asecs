import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { StoreData } from '../types';

export interface StoresGridProps {
  /**
   * Array of store data to display in the grid
   */
  stores: StoreData[];
  /**
   * Whether to show list view instead of grid view
   */
  showListView?: boolean;
  /**
   * Callback fired when the view toggle button is clicked
   */
  onToggleView?: () => void;
  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;
}

