import type { CollectionConfig } from 'payload';
import { HeroParallax } from '../blocks/hero-parallax';
import {
  Ingress,
  RichText,
  RichTextWithHeading,
  Blockquote,
  ImageGallery
} from '../blocks';

import { DEFAULT_LOCALE } from '../../config/locales';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, locale }) => {
        // Generate the preview URL based on the page slug and locale
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:5001';
        const slug = data?.slug || 'home';
        const localeCode = locale?.code || DEFAULT_LOCALE;

        // Use locale path prefix for non-default locale
        const localePath = localeCode === DEFAULT_LOCALE ? '' : `/${localeCode}`;

        // Use root-level routes instead of /cms/
        return `${baseUrl}${localePath}/${slug}?preview=true`;
      },
      // Enable real-time updates as you type
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
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        position: 'sidebar'
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
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
      name: 'content',
      type: 'blocks',
      blocks: [
        HeroParallax,
        Ingress,
        RichText,
        RichTextWithHeading,
        Blockquote,
        ImageGallery
      ],
      localized: true,
      admin: {
        description: 'Build your page with content blocks. Start with a hero, add rich content sections, quotes, and image galleries.'
      }
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
          admin: {
            description: 'SEO meta title'
          }
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
          admin: {
            description: 'SEO meta description'
          }
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'SEO/social media image'
          }
        },
        {
          name: 'canonical',
          type: 'text',
          admin: {
            description: 'Canonical URL'
          }
        },
        {
          name: 'robots',
          type: 'select',
          defaultValue: 'index, follow',
          options: [
            { label: 'Index, Follow', value: 'index, follow' },
            { label: 'Index, No Follow', value: 'index, nofollow' },
            { label: 'No Index, Follow', value: 'noindex, follow' },
            { label: 'No Index, No Follow', value: 'noindex, nofollow' }
          ]
        }
      ]
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime'
        }
      },
      defaultValue: () => new Date().toISOString()
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Archived', value: 'archived' }
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar'
      }
    },
    // AI Tools Group in Sidebar
    {
      type: 'collapsible',
      label: '✨ AI Tools',
      admin: {
        position: 'sidebar',
        initCollapsed: false
      },
      fields: [
        /*
        {
          name: 'aiPageBuilder',
          type: 'ui',
          admin: {
            components: {
              Field: '@/components/AIPageBuilder#AIPageBuilder'
            }
          }
        },
        {
          name: 'translatePage',
          type: 'ui',
          admin: {
            components: {
              Field: '@/components/TranslatePageButton#TranslatePageButton'
            }
          }
        },
        {
          name: 'generateSEO',
          type: 'ui',
          admin: {
            components: {
              Field: '@/components/GenerateSEOButton#GenerateSEOButton'
            }
          }
        }
        */
      ]
    }
  ]
};
