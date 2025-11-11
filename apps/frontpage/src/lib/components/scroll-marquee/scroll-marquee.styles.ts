import { cva } from '@agapi/ui/panda/css';

export const scrollMarquee = cva({
  base: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    minHeight: '3rem'
  },
  variants: {
    background: {
      true: {
        backgroundColor: 'var(--bgColor)',
        color: 'var(--fgColor)',
        padding: '4',
        borderRadius: 'md'
      },
      false: {
        backgroundColor: 'transparent',
        padding: '2'
      }
    },
    tilt: {
      true: {
        transformOrigin: 'center'
      },
      false: {}
    }
  },
  defaultVariants: {
    background: true,
    tilt: false
  }
});

export const marqueeContent = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8',
    minWidth: 'max-content',
    willChange: 'transform',
    whiteSpace: 'nowrap',
    flexShrink: '0'
  },
  variants: {},
  defaultVariants: {}
});