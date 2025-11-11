import { css } from '@agapi/ui/panda/css';

/**
 * Rich text content styles using design system tokens
 */
export const contentStyles = css.raw({
  // Headings
  '& h1': {
    textStyle: 'h1',
  },
  '& h2': {
    textStyle: 'h2',
  },
  '& h3': {
    textStyle: 'h3',
  },
  '& h4': {
    textStyle: 'h4',
  },
  '& h5': {
    textStyle: 'h5',
  },
  '& h6': {
    textStyle: 'h6',
  },

  // Paragraphs
  '& p': {
    textStyle: 'body',
  },

  // Lists
  '& ul, & ol': {
    textStyle: 'body',
  },
  '& ul': {
    listStyleType: 'disc',
  },
  '& ol': {
    listStyleType: 'decimal',
  },
  '& li': {
    mb: 'snug',
  },

  // Links
  '& a': {
    color: 'text.vibrant',
    textDecoration: 'underline',
    transition: 'color 0.2s',
    '&:hover': {
      color: 'text.heading',
    },
  },

  // Text formatting
  '& strong, & b': {
    fontWeight: '700',
    color: 'text.heading',
  },
  '& em, & i': {
    fontStyle: 'italic',
  },

  // Blockquotes
  '& blockquote': {
    borderLeft: '4px solid',
    borderColor: 'surface.primary.vibrant.border',
    pl: 'tight',
    ml: '0',
    mb: 'tight',
    fontStyle: 'italic',
    color: 'text.subdued',
  },

  // Code
  '& code': {
    backgroundColor: 'surface.secondary.tonal.background',
    px: 'snug',
    py: '1',
    borderRadius: 'sm',
    fontSize: 'sm',
    fontFamily: 'mono',
  },
  '& pre': {
    backgroundColor: 'surface.secondary.tonal.background',
    color: 'text.body',
    p: 'tight',
    borderRadius: 'md',
    overflowX: 'auto',
    mb: 'tight',
    fontSize: 'sm',
  },
  '& pre code': {
    backgroundColor: 'transparent',
    p: '0',
  },
});


