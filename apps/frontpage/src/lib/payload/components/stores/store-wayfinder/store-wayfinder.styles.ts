import { css } from '@agapi/ui/panda/css';

export const wayfinderRoot = css.raw({
  position: 'relative',
  backgroundColor: '#162b1b',
  display: 'flex',
  flexDirection: 'column',
  gap: 'relaxed',
  alignItems: 'center',
  padding: 'loose',
  overflow: 'hidden'
});

export const decorativeShape1 = css.raw({
  position: 'absolute',
  width: '2091px',
  height: '1652px',
  left: '-225px',
  top: '-1081px',
  bottom: '-627px',
  transform: 'rotate(30deg)',
  pointerEvents: 'none'
});

export const decorativeShape2 = css.raw({
  position: 'absolute',
  width: '156px',
  height: '834px',
  left: '-678px',
  top: '-133px',
  bottom: '232px',
  transform: 'rotate(25.276deg)',
  pointerEvents: 'none'
});

export const headingSection = css.raw({
  display: 'flex',
  flexDirection: 'column',
  gap: 'snug',
  alignItems: 'center',
  textAlign: 'center',
  zIndex: 1
});

export const headingText = css.raw({
  fontFamily: 'display',
  textTransform: 'uppercase',
  color: '#edeae1',
  fontSize: 'xl',
  lineHeight: '1.1'
});

export const storeNameText = css.raw({
  fontFamily: 'displayAlt',
  fontSize: 'lg',
  lineHeight: 'none',
  color: '#edeae1'
});

export const descriptionText = css.raw({
  fontFamily: 'body',
  fontSize: 'md',
  lineHeight: '1.05',
  color: 'white',
  maxWidth: '378px'
});

export const mapContainer = css.raw({
  position: 'relative',
  width: '100%',
  maxWidth: '1001px',
  aspectRatio: '1000.8/499.983',
  borderRadius: '27.8px',
  boxShadow: '0px 3.475px 20.85px 0px rgba(0,0,0,0.2)',
  overflow: 'hidden',
  zIndex: 1
});

export const mapImage = css.raw({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
});

export const marqueeContainer = css.raw({
  position: 'absolute',
  bottom: '-103px',
  right: '-78px',
  transform: 'rotate(349.267deg)',
  backgroundColor: 'action.cta.background.default',
  padding: '17.278px 25.917px',
  display: 'flex',
  gap: '13.822px',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap'
});

export const marqueeText = css.raw({
  fontFamily: 'displayAlt',
  fontSize: '41.47px',
  letterSpacing: '1.6588px',
  textTransform: 'uppercase',
  color: 'action.cta.foreground.default'
});

export const marqueeTextAlt = css.raw({
  fontFamily: 'display',
  fontSize: '41.47px',
  textTransform: 'uppercase',
  color: 'action.cta.foreground.default'
});

