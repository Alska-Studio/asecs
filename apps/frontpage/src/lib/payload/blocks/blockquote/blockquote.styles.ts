import { css } from '@agapi/ui/panda/css';

export const blockquoteContainer = css.raw({
  width: '100%'
});

export const blockquoteText = css.raw({
  fontFamily: 'displayAlt',
  fontSize: { base: 'xl', md: '2xl' },
  lineHeight: '1.2',
  color: 'primary.500',
  letterSpacing: '0.6px',
  fontStyle: 'italic'
});

export const authorText = css({
  fontFamily: 'body',
  fontSize: 'md',
  color: 'text.subdued',
  marginTop: 'tight',
  fontStyle: 'normal'
});

