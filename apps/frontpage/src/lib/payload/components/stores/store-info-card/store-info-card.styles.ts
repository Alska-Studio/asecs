import { css } from '@agapi/ui/panda/css';

export const cardSection = css.raw({
  display: 'flex',
  flexDirection: 'column',
  gap: 'snug'
});

export const cardContentStyles = css.raw({
  gridGap: 'normal!',
});

export const cardStyles = css.raw({
  backgroundColor: 'surface.default.accent!',
  color: 'surface.default.foreground!',
});

export const sectionTitle = css.raw({
  fontFamily: 'body',
  fontWeight: 'medium',
  fontSize: 'md',
  textTransform: 'uppercase',
  color: 'text.heading'
});

export const contactButtons = css.raw({
  display: 'flex',
  flexDirection: 'column',
  gap: 'snug'
});

export const socialMediaButtons = css.raw({
  display: 'flex',
  flexDirection: 'row',
  gap: 'snug',
  alignItems: 'center'
});

