import type { Block } from 'payload';
import { colorVariantField } from './utils/color-variant-options';

/**
 * Rich Text with Heading Block
 * Text section with heading and optional two-column layout
 */
export const RichTextWithHeading: Block = {
  slug: 'richTextWithHeading',
  interfaceName: 'RichTextWithHeadingBlock',
  labels: {
    singular: 'Rich Text with Heading',
    plural: 'Rich Texts with Heading'
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description: 'Section heading'
      }
    },
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

