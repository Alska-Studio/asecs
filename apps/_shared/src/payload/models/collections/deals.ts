import type { CollectionConfig } from 'payload';
import { colorVariantOptions } from '../blocks/utils/color-variant-options';

export const Deals: CollectionConfig = {
  slug: 'deals',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'stores', 'restaurants', 'validUntil', 'isActive']
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user)
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description: 'Deal title (e.g., "25% off on beauty products")'
      }
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      admin: {
        description: 'Short description of the deal'
      }
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false, // Changed to false to allow seeding without images
      admin: {
        description: 'Deal image (recommended: 400x480px)'
      }
    },
    {
      name: 'stores',
      type: 'relationship',
      relationTo: 'stores',
      hasMany: true,
      admin: {
        description: 'Stores where this deal is available'
      }
    },
    {
      name: 'restaurants',
      type: 'relationship',
      relationTo: 'restaurants',
      hasMany: true,
      admin: {
        description: 'Restaurants where this deal is available'
      }
    },
    {
      name: 'badges',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true
        },
        {
          name: 'colorVariant',
          type: 'select',
          options: colorVariantOptions,
          defaultValue: 'primary.vibrant'
        }
      ],
      admin: {
        description: 'Badges to display on the deal card (e.g., "25% OFF")'
      }
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this deal is currently active',
        position: 'sidebar'
      }
    },
    {
      name: 'validFrom',
      type: 'date',
      admin: {
        description: 'When the deal becomes active',
        position: 'sidebar'
      }
    },
    {
      name: 'validUntil',
      type: 'date',
      admin: {
        description: 'When the deal expires',
        position: 'sidebar'
      }
    },
    {
      name: 'link',
      type: 'group',
      fields: [
        {
          name: 'url',
          type: 'text',
          admin: {
            description: 'External link (e.g., to product page)'
          }
        },
        {
          name: 'label',
          type: 'text',
          localized: true,
          admin: {
            description: 'Link text (e.g., "Shop now")'
          }
        }
      ]
    }
  ]
};

