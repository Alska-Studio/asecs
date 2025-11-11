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

export const Stores: CollectionConfig = {
  slug: 'stores',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'updatedAt'],
    livePreview: {
      url: ({ data, locale }) => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:5001';
        const slug = data?.slug || 'store';
        const localeCode = locale?.code || DEFAULT_LOCALE;
        const localePath = localeCode === DEFAULT_LOCALE ? '' : `/${localeCode}`;
        return `${baseUrl}${localePath}/stores/${slug}?preview=true`;
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
      label: 'External Store',
      admin: {
        description: 'Check if this store is located outside the main shopping center'
      }
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Main store image for header'
      }
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Store logo (SVG or PNG)'
      }
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      filterOptions: () => ({
        category: {
          in: ['store', 'both']
        }
      }),
      admin: {
        description: 'Tags for categorizing the store'
      }
    },
    {
      name: 'deals',
      type: 'relationship',
      relationTo: 'deals',
      hasMany: true,
      admin: {
        description: 'Active deals for this store'
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
        description: 'Add content blocks to build your store page. The hero section is automatically generated from the store name and hero image.'
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
                description: 'Store website URL'
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
            description: 'Store address',
            condition: (data?: { isExternal?: boolean }) => Boolean(data?.isExternal)
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          validate: (value: unknown, { data }: any) => {
            // Only validate as required if isExternal is true
            if (data?.isExternal && (!value || (typeof value === 'string' && value.trim() === ''))) {
              return 'Address is required for external stores';
            }
            return true;
          }
        },
        {
          name: 'coordinates',
          type: 'group',
          label: 'Coordinates',
          admin: {
            condition: (data?: { isExternal?: boolean }) => Boolean(data?.isExternal)
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
                 name: 'productsSold',
                 type: 'textarea',
                 localized: true,
                 admin: {
                   description: 'Comma-separated list of products sold (e.g., "pants, scarves, jackets") - AI metadata'
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
      maxDepth: 2, // Increased to 2 so tags are populated
      label: 'Related Content',
      admin: {
        position: 'sidebar',
        description: 'Select related stores, events, or restaurants to display on this store page'
      },
      filterOptions: ({ id }) => {
        // Exclude the current store from the selection
        return {
          id: {
            not_equals: id
          }
        };
      }
    }
  ]
};
