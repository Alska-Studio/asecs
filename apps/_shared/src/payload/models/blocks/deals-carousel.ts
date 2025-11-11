import type { Block } from 'payload';

/**
 * Deals Carousel Block
 * Displays deals in a carousel format
 * Automatically reads deals from the parent document (store/restaurant)
 * Reusable across stores, restaurants, and other content types
 */
export const DealsCarousel: Block = {
  slug: 'dealsCarousel',
  interfaceName: 'DealsCarouselBlock',
  labels: {
    singular: 'Deals Carousel',
    plural: 'Deals Carousels'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      defaultValue: 'Våra deals',
      admin: {
        description: 'Section title (optional - defaults to "Våra deals")',
        placeholder: 'Våra deals'
      }
    },
    {
      type: 'row',
      fields: [
        {
          name: 'showOnlyActive',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Only show active deals'
          }
        }
      ]
    }
  ],
  admin: {
    // description: '💡 Displays deals from this store or restaurant. Best placed before the contact section for optimal layout.'
  }
};

