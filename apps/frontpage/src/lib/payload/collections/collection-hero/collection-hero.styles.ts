import { css } from '@agapi/ui/panda/css';

export const heroRootStyles = css.raw({
  position: 'sticky',
  top: '0',
});

export const heroContainer = css.raw({
  pt: 'xx-loose',
  pb: 'xx-loose',
  position: 'static'
});

export const heroContent = css.raw({
  zIndex: '2',
  gridGap: 'normal!',
});

export const titleText = css({
  fontFamily: 'display',
  textStyle: 'h1',
  wordBreak: 'break-word',
});

export const titleAlternateText = css.raw({
  fontFamily: 'displayAlt',
});

export const bgOverlay = css({
  position: 'absolute',
  inset: 0,
  background: 'rgba(32, 61, 38, 0.7)',
  zIndex: 1
});

export const bgImage = css({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 0
});

export const openingHoursContainer = css({
  mb: 'snug'
});

export const actionsContainer = css({
  display: 'flex',
  gap: 'snug',
  mt: 'normal',
  flexWrap: 'wrap'
});

export const heroButton = css.raw({
  // Brand-specific button styling based on Figma design (GT America Extended Medium)
  textTransform: 'uppercase',
  borderRadius: '8px',
  fontWeight: '500',  // Medium weight
  fontVariationSettings: '"wdth" 125',  // Extended width
  gap: '6px',  // Gap between icon and text (from Figma)
  lineHeight: '0',  // From Figma: leading-[0],
  py: '6',

  // Text variant overrides for hero context
  '&[data-variant="text"]': {
    color: 'white',
    padding: '0',
    borderRadius: '2px',
    fontWeight: '500',
    fontVariationSettings: '"wdth" 125',
    letterSpacing: '1.28px',  // From Figma: tracking-[1.28px] (only for text variant)
    gap: '6px',
    _hover: {
      color: 'action.cta.background.default',
      scale: 1
    },
    _active: {
      scale: 1
    }
  }
});

