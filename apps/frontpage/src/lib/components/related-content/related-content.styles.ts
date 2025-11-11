import { css } from '@agapi/ui/panda/css';

export const sectionStyles = css.raw({
  py: 'loose'
});

export const headerStyles = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  pb: 'snug'
});

export const titleStyles = css({
  fontFamily: 'displayAlt',
  fontSize: '2xl',
  textTransform: 'uppercase',
  color: 'text.heading'
});

export const slideWrapper = css.raw({
  flex: '0 0 auto',
  width: {
    base: '85%',
    sm: '45%',
    md: '32%',
    lg: '24%'
  },
  minWidth: '0'
});

