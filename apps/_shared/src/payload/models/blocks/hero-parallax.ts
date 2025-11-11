import type { Block, CollectionSlug } from 'payload';
import { colorVariantField } from './utils/color-variant-options';

/**
 * HeroParallax Block
 * Full-width hero section with parallax effects, opening hours, quick links, and diagonal marquee
 */
export const HeroParallax: Block = {
  slug: 'heroParallax',
  interfaceName: 'HeroParallaxBlock',
  labels: {
    singular: 'Hero with Parallax',
    plural: 'Hero with Parallax'
  },
  fields: [
    {
      name: 'headingUpper',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description: 'Main heading text (uppercase)'
      },
      defaultValue: 'HELA VÄRLDEN'
    },
    {
      name: 'headingLower',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description: 'Secondary heading text (serif font)'
      },
      defaultValue: 'Under ett tak'
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
      admin: {
        description: 'Hero description text'
      },
      defaultValue: 'På Asecs hittar du i Jönköping hittar du XX butiker, XX restauranger, upplevelser. Hela världen under ett tak.'
    },
    {
      name: 'imageUrl',
      type: 'upload',
      relationTo: 'media' as CollectionSlug,
      admin: {
        description: 'Hero image with parallax effect (optional, defaults to placeholder)'
      }
    },
    {
      name: 'showOpeningHours',
      type: 'checkbox',
      label: 'Show Opening Hours',
      admin: {
        description: 'Display opening hours badges (automatically calculated from current time)'
      },
      defaultValue: true
    },
    {
      name: 'locationId',
      type: 'text',
      admin: {
        description: 'Location ID for opening hours (future: will fetch from collection)'
      },
      defaultValue: 'asecs-main'
    },
    {
      name: 'quickLinks',
      type: 'array',
      label: 'Quick Action Links',
      admin: {
        description: 'Quick navigation buttons (leave empty for default links)'
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true
        },
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            { label: 'Compass (Hitta hit)', value: 'compass' },
            { label: 'Shopping Bag (Butiker)', value: 'shopping' },
            { label: 'Food (Äta & Fika)', value: 'food' },
            { label: 'Confetti (Event)', value: 'confetti' }
          ]
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          admin: {
            description: 'Link URL'
          }
        }
      ]
    },
    {
      name: 'marqueeText',
      type: 'text',
      localized: true,
      admin: {
        description: 'Text for diagonal scrolling marquee'
      },
      defaultValue: 'Allt under samma tak'
    },
    colorVariantField
  ]
};
