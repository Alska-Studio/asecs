import type { Block } from 'payload';
import { colorVariantField } from './utils/color-variant-options';

/**
 * Blockquote Block
 * Displays a styled quote with optional author attribution
 */
export const Blockquote: Block = {
  slug: 'blockquote',
  interfaceName: 'BlockquoteBlock',
  labels: {
    singular: 'Blockquote',
    plural: 'Blockquotes'
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      localized: true,
      admin: {
        description: 'Quote text',
        rows: 4
      }
    },
    {
      name: 'author',
      type: 'text',
      localized: true,
      admin: {
        description: 'Quote author/attribution (e.g., "Butikschefen", "Store Manager")'
      }
    },
    colorVariantField
  ]
};
