import { css } from '@agapi/ui/panda/css';

/**
 * Image container with 4:5 aspect ratio
 */
export const imageContainer = css({
  position: 'relative',
  width: '100%',
  aspectRatio: '4/5',
  overflow: 'hidden',
  borderRadius: 'surface.sm'
});

/**
 * Badge container positioned at bottom of image
 */
export const badgeContainer = css({
  display: 'flex',
  gap: 'tight',
  position: 'absolute',
  bottom: 'tight',
  left: 'tight',
  zIndex: 2,
  flexWrap: 'wrap',
  pointerEvents: 'none'
});

/**
 * Dot indicator icon for badges
 */
export const badgeIconDot = css.raw({
  width: '8px',
  height: '8px',
  borderRadius: 'full',
  backgroundColor: 'currentColor',
  flexShrink: 0
});

/**
 * Card title styling (H5)
 */
export const cardTitle = css({
  textStyle: 'h5',
  color: 'text.heading',
  textTransform: 'uppercase',
  lineHeight: '1.1'
});

/**
 * Card meta text styling
 */
export const cardMeta = css({
  fontSize: 'md',
  color: 'text.subdued',
  lineHeight: '1.05'
});

/**
 * Card wrapper overrides
 */
export const cardOverrides = css.raw({
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  borderRadius: '0!',
  boxShadow: 'none',

  _hover: {
    transform: 'translateY(-4px)',
    '& img': {
      transform: 'translateY(4px)'
    }
  }
});

/**
 * Link wrapper styles (when href is provided)
 */
export const linkWrapper = css({
  textDecoration: 'none',
  color: 'inherit',
  display: 'block'
});

/**
 * Text container with consistent gap
 */
export const textContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 'tight',
  width: '100%'
});

