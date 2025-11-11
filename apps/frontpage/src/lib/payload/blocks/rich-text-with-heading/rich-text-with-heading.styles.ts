import { css, cva } from '@agapi/ui/panda/css';

export const headingStyles = css.raw({
  textStyle: 'eyebrow',
  // Note: color is set dynamically via style attribute based on colorVariant
});

export const contentStyles = cva({
  base: {
    textStyle: 'body'
  },
  variants: {
    columns: {
      '1': {},
      '2': {
        // Mobile: single column
        columns: { base: 1, md: 2 },
        columnGap: 'snug',

        // Prevent column breaks inside elements
        '& p, & h2, & h3, & li': {
          breakInside: 'avoid',
        },
      },
      '3': {
        // Mobile: single column, Tablet: 2 columns, Desktop: 3 columns
        columns: { base: 1, md: 2, lg: 3 },
        columnGap: 'snug',

        // Prevent column breaks inside elements
        '& p, & h2, & h3, & li': {
          breakInside: 'avoid',
        },
      },
    },
  },
  defaultVariants: {
    columns: '1',
  },
});

