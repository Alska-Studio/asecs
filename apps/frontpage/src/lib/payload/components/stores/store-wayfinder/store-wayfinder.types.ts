import type { SystemStyleObject } from '@agapi/ui/panda/types';

export interface StoreWayfinderProps {
  /**
   * Store name for the heading
   */
  storeName?: string;
  /**
   * Description text
   */
  description?: string;
  /**
   * Map image URL
   */
  mapImage?: string;
  /**
   * Map alternative text
   */
  mapAlt?: string;
  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;
}








