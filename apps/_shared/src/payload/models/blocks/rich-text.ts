import type { Block } from 'payload';
import { colorVariantField } from './utils/color-variant-options';

/**
 * Rich Text Block
 * Pure rich text content with optional two-column layout
 */
export const RichText: Block = {
  slug: 'richText',
  interfaceName: 'RichTextBlock',
  labels: {
    singular: 'Rich Text',
    plural: 'Rich Texts'
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
      localized: true,
      admin: {
        description: 'Rich text content'
      }
    },
    {
      name: 'columns',
      type: 'select',
      defaultValue: '1',
      options: [
        { label: 'Single Column', value: '1' },
        { label: 'Two Columns', value: '2' }
      ],
      admin: {
        description: 'Number of columns for text layout'
      }
    },
    colorVariantField
  ]
};

