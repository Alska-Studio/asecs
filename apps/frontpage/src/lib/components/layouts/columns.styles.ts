import { sva } from '@agapi/ui/panda/css';

/**
 * Columns layout styles using Slot Variants (sva)
 * Provides separate styling for the grid container and grid items
 */
export const columnsStyles = sva({
  slots: ['container', 'item'],
  base: {
    container: {
      display: 'grid',
      width: '100%'
    },
    item: {
      // Base item styles - can be extended per item
    }
  },
  variants: {
    align: {
      start: {
        container: {
          alignItems: 'start'
        }
      },
      center: {
        container: {
          alignItems: 'center'
        }
      },
      end: {
        container: {
          alignItems: 'end'
        }
      },
      stretch: {
        container: {
          alignItems: 'stretch'
        }
      }
    },
    justify: {
      start: {
        container: {
          justifyItems: 'start'
        }
      },
      center: {
        container: {
          justifyItems: 'center'
        }
      },
      end: {
        container: {
          justifyItems: 'end'
        }
      },
      stretch: {
        container: {
          justifyItems: 'stretch'
        }
      }
    }
  },
  defaultVariants: {
    align: 'stretch',
    justify: 'stretch'
  }
});

