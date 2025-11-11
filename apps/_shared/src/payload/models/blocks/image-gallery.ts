import type { Block, CollectionSlug } from 'payload';

/**
 * Image gallery block for displaying collections of images with carousel functionality
 * Reusable across stores, restaurants, and other content types
 */
export const ImageGallery: Block = {
  slug: 'imageGallery',
  interfaceName: 'ImageGalleryBlock',
  labels: {
    singular: 'Image Gallery',
    plural: 'Image Galleries'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      admin: {
        description: 'Optional gallery title'
      }
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media' as CollectionSlug,
          required: true
        },
        {
          name: 'alt',
          type: 'text',
          localized: true,
          admin: {
            description: 'Alt text for accessibility'
          }
        },
        {
          name: 'caption',
          type: 'text',
          localized: true,
          admin: {
            description: 'Optional image caption'
          }
        }
      ]
    },
    {
      name: 'layout',
      type: 'select',
      options: [
        {
          label: 'Carousel',
          value: 'carousel'
        },
        {
          label: 'Grid',
          value: 'grid'
        },
        {
          label: 'Masonry',
          value: 'masonry'
        }
      ],
      defaultValue: 'carousel',
      admin: {
        description: 'Display layout for the gallery'
      }
    },
    {
      name: 'showNavigation',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show navigation arrows for carousel'
      }
    },
    {
      name: 'showDots',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show dot indicators for carousel'
      }
    }
  ]
};

