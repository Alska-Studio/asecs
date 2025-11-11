import type { Block } from 'payload';
import { colorVariantField } from './utils/color-variant-options';

/**
 * Ingress Block
 * Hero/intro section with heading and simple text content
 * Always full-width (no column settings)
 * Uses textarea for better line-by-line animations
 */
export const Ingress: Block = {
  slug: 'ingress',
  interfaceName: 'IngressBlock',
  labels: {
    singular: 'Ingress',
    plural: 'Ingresses'
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description: 'Main heading'
      }
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      localized: true,
      admin: {
        description: 'Introduction text (simple text, supports line breaks)'
      }
    },
    colorVariantField
  ]
};

