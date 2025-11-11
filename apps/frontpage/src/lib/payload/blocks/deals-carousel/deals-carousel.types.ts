import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { Deal, DealsCarouselBlock } from '@asecs/shared/payload-types';

export interface DealsCarouselProps extends DealsCarouselBlock {
  /** Deals to display (injected by parent component) */
  deals?: Array<Deal>
  /** Custom CSS properties */
  css?: SystemStyleObject
}
