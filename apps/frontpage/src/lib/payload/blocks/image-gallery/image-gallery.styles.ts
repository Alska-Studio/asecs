import { css } from '@agapi/ui/panda/css';

export const imageStyles = css({
  width: 'auto',
  maxWidth: '100%',
  height: { base: '400px', md: '500px', lg: '600px' },
  objectFit: 'contain',
  borderRadius: 'surface.md',
  boxShadow: '0px 4px 24px 0px rgba(0,0,0,0.2)'
});

export const captionStyles = css({
  fontFamily: 'body',
  fontSize: 'sm',
  lineHeight: '1.4',
  color: 'text.subdued',
  textAlign: 'center',
  mt: 'snug'
});

