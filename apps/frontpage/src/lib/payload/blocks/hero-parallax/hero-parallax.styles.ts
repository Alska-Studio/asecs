import { css } from '@agapi/ui/panda/css';

export const rootStyles = css.raw({
  position: 'relative',
  overflow: 'hidden'
});

// Container styles
export const containerStyles = css.raw({
  position: 'static',
  display: 'flex',
  alignItems: 'center',
  pt: 'xx-loose',
  pb: 'x-loose'
});

export const contentContainerStyles = css.raw({
  display: 'flex',
  flexDirection: 'column',
  gap: 'snug'
});


// Large background logo
export const backgroundLogoStyles = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: '0.08',
  pointerEvents: 'none',
  zIndex: '0'
});

// Content wrapper
export const contentWrapperStyles = css.raw({
  position: 'relative',
  zIndex: '1'
});

// Badges container
export const badgesContainer = css({
  display: 'flex',
  gap: '2',
  marginBottom: '8',
  flexWrap: 'wrap'
});

export const badgeBase = css.raw({
  backdropFilter: 'blur(6px)',
  borderRadius: 'full',
  paddingX: '3',
  paddingY: '2.5',
  display: 'flex',
  alignItems: 'center',
  gap: '2',
  fontSize: 'md',
  color: 'text.contrast',
  fontWeight: 'normal'
});

export const badgeRed = css.raw({
  backgroundColor: 'rgba(52, 81, 58, 0.7)'
});

export const badgeGreen = css.raw({
  backgroundColor: 'rgba(52, 81, 58, 0.7)'
});

export const badgePrimary = css.raw({
  backgroundColor: 'action.primary.background.default'
});

export const iconDotRed = css({
  width: '8px',
  height: '8px',
  borderRadius: 'full',
  backgroundColor: 'feedback.error.background'
});

export const iconDotGreen = css({
  width: '8px',
  height: '8px',
  borderRadius: 'full',
  backgroundColor: 'action.primary.background.default'
});


export const headingLowerStyles = css({
  fontFamily: 'displayAlt'
});


// Quick links
export const quickLinksContainer = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2',
  maxWidth: '400px'
});

export const quickLinkStyles = css({
  backdropFilter: 'blur(6px)',
  backgroundColor: 'rgba(52, 81, 58, 0.7)',
  borderRadius: 'interactive',
  paddingX: '3',
  paddingY: '2',
  display: 'flex',
  alignItems: 'center',
  gap: '1.5',
  fontSize: 'md',
  color: 'text.contrast',
  transition: 'all 0.2s',
  textDecoration: 'none',
  _hover: {
    backgroundColor: 'rgba(52, 81, 58, 0.9)',
    transform: 'translateY(-2px)'
  }
});

// Diagonal marquee (direct use on HTML)
export const marqueeContainerStyles = css({
  position: 'absolute',
  bottom: '8',
  left: '0',
  right: '0',
  transform: 'rotate(-5deg) translateY(50%)',
  transformOrigin: 'center',
  paddingY: '6',
  whiteSpace: 'nowrap',
  overflow: 'visible',
  display: { base: 'none', md: 'block' },
  zIndex: '2',
  pointerEvents: 'none'
});

export const marqueeTextStyles = css({
  textStyle: 'h1',
  fontSize: { base: '3xl', md: '4xl', lg: '56px' },
  color: 'text.contrast',
  textTransform: 'uppercase',
  letterSpacing: '2.23px',
  flexShrink: '0'
});

export const marqueeTextAltStyles = css({
  fontFamily: 'displayAlt',
  fontSize: { base: '3xl', md: '4xl', lg: '56px' },
  color: 'text.contrast',
  textTransform: 'uppercase',
  letterSpacing: '2.23px',
  flexShrink: '0',
  fontWeight: '400'
});

export const marqueeLogoStyles = css({
  flexShrink: '0',
  marginX: '4',
  '& svg': {
    width: '36px',
    height: '36px',
    display: 'block'
  }
});

// Hero image container
export const imageContainerStyles = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  my: '-8'
});

