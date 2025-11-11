import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  // Headings - GT America Extended Regular
  h1: {
    description: 'Heading 1 - Large display heading',
    value: {
      fontFamily: 'var(--font-display)',
      fontSize: '{fontSizes.4xl}',
      fontWeight: '400',
      fontVariationSettings: '"wdth" 125',
      lineHeight: '1',
      textTransform: 'uppercase'
    }
  },
  h2: {
    description: 'Heading 2 - Section heading',
    value: {
      fontFamily: 'var(--font-display)',
      fontSize: '{fontSizes.3xl}',
      fontWeight: '400',
      fontVariationSettings: '"wdth" 115',
      lineHeight: '1',
      textTransform: 'uppercase'
    }
  },
  h3: {
    description: 'Heading 3 - Subsection heading',
    value: {
      fontFamily: 'var(--font-display)',
      fontSize: '{fontSizes.2xl}',
      fontWeight: '400',
      fontVariationSettings: '"wdth" 110',
      lineHeight: '1.1',
      textTransform: 'uppercase'
    }
  },
  h4: {
    description: 'Heading 4 - Small section heading',
    value: {
      fontFamily: 'var(--font-display)',
      fontSize: '{fontSizes.xl}',
      fontWeight: '500',
      fontVariationSettings: '"wdth" 105',
      lineHeight: '1.1',
      textTransform: 'uppercase'
    }
  },
  h5: {
    description: 'Heading 5 - Minor heading',
    value: {
      fontFamily: 'var(--font-display)',
      fontSize: '{fontSizes.lg}',
      fontWeight: '500',
      fontVariationSettings: '"wdth" 100',
      lineHeight: '1.1',
      textTransform: 'uppercase'
    }
  },

  // Alternative Headings - Romie Medium
  'h1-alt': {
    description: 'Alternative Heading 1 - Romie display',
    value: {
      fontFamily: 'var(--font-display-alt)',
      fontSize: '{fontSizes.4xl}',
      fontWeight: '500',
      lineHeight: '1',
      textTransform: 'uppercase'
    }
  },
  'h2-alt': {
    description: 'Alternative Heading 2 - Romie display',
    value: {
      fontFamily: 'var(--font-display-alt)',
      fontSize: '{fontSizes.3xl}',
      fontWeight: '500',
      lineHeight: '1',
      textTransform: 'uppercase'
    }
  },
  'h3-alt': {
    description: 'Alternative Heading 3 - Romie display',
    value: {
      fontFamily: 'var(--font-display-alt)',
      fontSize: '{fontSizes.2xl}',
      fontWeight: '500',
      lineHeight: '1',
      textTransform: 'uppercase'
    }
  },
  'h4-alt': {
    description: 'Alternative Heading 4 - Romie display',
    value: {
      fontFamily: 'var(--font-display-alt)',
      fontSize: '{fontSizes.xl}',
      fontWeight: '500',
      lineHeight: '1',
      textTransform: 'uppercase'
    }
  },
  'h5-alt': {
    description: 'Alternative Heading 5 - Romie display',
    value: {
      fontFamily: 'var(--font-display-alt)',
      fontSize: '{fontSizes.lg}',
      fontWeight: '500',
      lineHeight: '1',
      textTransform: 'uppercase'
    }
  },

  // Body Text Styles
  ingress: {
    description: 'Ingress - Large introductory text',
    value: {
      fontFamily: 'var(--font-display-alt)',
      fontSize: '{fontSizes.2xl}',
      fontWeight: '500',
      lineHeight: '1.2'
    }
  },
  body: {
    description: 'Body text - Primary content text',
    value: {
      fontFamily: 'var(--font-body)',
      fontSize: '{fontSizes.lg}',
      fontWeight: '400',
      lineHeight: '1.05'
    }
  },
  caption: {
    description: 'Caption - Small descriptive text',
    value: {
      fontFamily: 'var(--font-body)',
      fontSize: '{fontSizes.sm}',
      fontWeight: '400',
      lineHeight: '1.4'
    }
  },
  hint: {
    description: 'Hint - Very small helper text',
    value: {
      fontFamily: 'Helvetica Neue',
      fontSize: '{fontSizes.xs}',
      fontWeight: '400',
      lineHeight: '1.25'
    }
  },
  label: {
    description: 'Label - Form labels and UI text',
    value: {
      fontFamily: 'var(--font-body)',
      fontSize: '{fontSizes.md}',
      fontWeight: '500',
      lineHeight: '1.5'
    }
  },

  // Interactive Elements
  button: {
    description: 'Button text style',
    value: {
      fontFamily: 'var(--font-display)',
      fontWeight: '400!',
      fontVariationSettings: '"wdth" 125',
      lineHeight: '1.2',
      textTransform: 'uppercase'
    }
  },
  link: {
    description: 'Link text style',
    value: {
      fontFamily: 'var(--font-body)',
      fontSize: '{fontSizes.md}',
      fontWeight: '400',
      lineHeight: '1.5',
      textDecoration: 'underline'
    }
  },
  eyebrow: {
    description: 'Eyebrow text style',
    value: {
      fontFamily: 'var(--font-body)',
      fontSize: '{fontSizes.md}',
      fontWeight: '500',
      lineHeight: '1.2',
      textTransform: 'uppercase'
    }
  },

  // Utility Styles
  small: {
    description: 'Small text',
    value: {
      fontFamily: 'var(--font-body)',
      fontSize: '{fontSizes.xs}',
      fontWeight: '400',
      lineHeight: '1.4'
    }
  },
  code: {
    description: 'Code text style',
    value: {
      fontFamily: 'monospace',
      fontSize: '{fontSizes.sm}',
      fontWeight: '400',
      lineHeight: '1.4'
    }
  },
  blockquote: {
    description: 'Blockquote text style',
    value: {
      fontFamily: 'var(--font-display-alt)',
      fontSize: '{fontSizes.xl}',
      fontWeight: '500',
      lineHeight: '1.4'
    }
  }
});