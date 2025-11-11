import type { CollectionConfig } from 'payload';
import { DEFAULT_LOCALE } from '../../config/locales';
import {
  Ingress,
  RichText,
  RichTextWithHeading,
  Blockquote,
  ImageGallery,
  DealsCarousel
} from '../blocks';

export const Restaurants: CollectionConfig = {
  slug: 'restaurants',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'updatedAt'],
    livePreview: {
      url: ({ data, locale }) => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:5001';
        const slug = data?.slug || 'restaurant';
        const localeCode = locale?.code || DEFAULT_LOCALE;
        const localePath = localeCode === DEFAULT_LOCALE ? '' : `/${localeCode}`;
        return `${baseUrl}${localePath}/restaurants/${slug}?preview=true`;
      },
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900
        }
      ]
    }
  },
  versions: {
    drafts: true
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user)
  },
  fields: [
    // BASIC FIELDS (no group)
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar'
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.name) {
              return data.name
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-');
            }
            return value;
          }
        ]
      }
    },
    {
      name: 'isExternal',
      type: 'checkbox',
      label: 'External Restaurant',
      admin: {
        description: 'Check if this restaurant is located outside the main shopping center'
      }
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Main restaurant image for header'
      }
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Restaurant logo (SVG or PNG)'
      }
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      filterOptions: () => ({
        category: {
          in: ['restaurant', 'both']
        }
      }),
      admin: {
        description: 'Tags for categorizing the restaurant (e.g., cuisine types)'
      }
    },
    {
      name: 'deals',
      type: 'relationship',
      relationTo: 'deals',
      hasMany: true,
      admin: {
        description: 'Active deals for this restaurant'
      }
    },
    // CONTENT BLOCKS
    {
      name: 'contentBlocks',
      type: 'blocks',
      label: 'Content Blocks',
      blocks: [
        Ingress,
        RichText,
        RichTextWithHeading,
        Blockquote,
        ImageGallery,
        DealsCarousel
      ],
      admin: {
        description: 'Add content blocks to build your restaurant page. The hero section is automatically generated from the restaurant name and hero image.'
      }
    },
    // CONTACT GROUP
    {
      name: 'contact',
      type: 'group',
      label: 'Contact',
      fields: [
        {
          name: 'phoneNumber',
          type: 'text',
          admin: {
            description: 'Phone number for "Ring oss" button'
          }
        },
        {
          name: 'links',
          type: 'group',
          label: 'Links',
          fields: [
            {
              name: 'website',
              type: 'text',
              admin: {
                description: 'Restaurant website URL'
              }
            },
            {
              name: 'instagram',
              type: 'text',
              admin: {
                description: 'Instagram profile URL'
              }
            },
            {
              name: 'facebook',
              type: 'text',
              admin: {
                description: 'Facebook page URL'
              }
            },
            {
              name: 'tiktok',
              type: 'text',
              admin: {
                description: 'TikTok profile URL'
              }
            }
          ]
        },
        {
          name: 'address',
          type: 'text',
          required: false,
          localized: true,
          admin: {
            description: 'Restaurant address',
            condition: (data?: { isExternal?: boolean }) => Boolean(data?.isExternal)
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          validate: (val: unknown, { data }: any) => {
            // Only validate as required if isExternal is true
            if (data?.isExternal && (!val || (typeof val === 'string' && val.trim() === ''))) {
              return 'Address is required for external restaurants';
            }
            return true;
          }
        },
        {
          name: 'coordinates',
          type: 'group',
          label: 'Coordinates',
          admin: {
            condition: (data) => Boolean(data.isExternal)
          },
          fields: [
            {
              name: 'lat',
              type: 'number',
              admin: {
                description: 'Latitude for map integration'
              }
            },
            {
              name: 'lng',
              type: 'number',
              admin: {
                description: 'Longitude for map integration'
              }
            }
          ]
        }
      ]
    },
    // BUSINESS DATA GROUP
    {
      name: 'businessData',
      type: 'group',
      label: 'Business Data',
      fields: [
        {
          name: 'menu',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Menu file (PDF or image)'
          }
        },
        {
          name: 'priceRange',
          type: 'select',
          options: [
            { label: '$', value: '$' },
            { label: '$$', value: '$$' },
            { label: '$$$', value: '$$$' },
            { label: '$$$$', value: '$$$$' }
          ],
          admin: {
            description: 'Price range indicator'
          }
        },
        {
          name: 'dishesServed',
          type: 'textarea',
          localized: true,
          admin: {
            description: 'Comma-separated list of dishes served (e.g., "pizza, pasta, salads") - AI metadata'
          }
        },
        {
          name: 'dietaryOptions',
          type: 'select',
          hasMany: true,
          options: [
            { label: 'Vegetarian', value: 'vegetarian' },
            { label: 'Vegan', value: 'vegan' },
            { label: 'Gluten-Free', value: 'gluten-free' },
            { label: 'Halal', value: 'halal' },
            { label: 'Kosher', value: 'kosher' },
            { label: 'Dairy-Free', value: 'dairy-free' }
          ],
          admin: {
            description: 'Available dietary options (indicates availability, not exclusivity)'
          }
        }
      ]
    },
    {
      type: 'collapsible',
      label: 'SEO',
      admin: {
        position: 'sidebar'
      },
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          localized: true,
          admin: {
            description: 'SEO meta title'
          }
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          localized: true,
          admin: {
            description: 'SEO meta description'
          }
        },
        {
          name: 'metaImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'SEO/social media image'
          }
        }
      ]
    },
    // RELATED CONTENT
    {
      name: 'relatedContent',
      type: 'relationship',
      relationTo: ['stores', 'events', 'restaurants'],
      hasMany: true,
      maxDepth: 2,
      label: 'Related Content',
      admin: {
        position: 'sidebar',
        description: 'Select related stores, events, or restaurants to display on this restaurant page'
      },
      filterOptions: ({ id }) => {
        // Exclude the current restaurant from the selection
        return {
          id: {
            not_equals: id
          }
        };
      }
    }
  ]
};
