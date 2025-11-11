import type { CollectionConfig } from 'payload';
import { DEFAULT_LOCALE } from '../../config/locales';

export const Blog: CollectionConfig = {
  slug: 'blog',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'publishedDate', 'updatedAt'],
    livePreview: {
      url: ({ data, locale }) => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:5174';
        const slug = data?.slug || 'post';
        const localeCode = locale?.code || DEFAULT_LOCALE;
        const localePath = localeCode === DEFAULT_LOCALE ? '' : `/${localeCode}`;
        return `${baseUrl}${localePath}/blog/${slug}?preview=true`;
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
    // BASIC FIELDS
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
      unique: true,
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
      name: 'author',
      type: 'text',
      required: false,
      localized: true,
      defaultValue: 'Asecs',
      admin: {
        description: 'Author name'
      }
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime'
        },
        description: 'Publication date and time'
      }
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Main blog post image (optional - can be added later)'
      }
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      admin: {
        description: 'Tags for categorizing the blog post'
      }
    },
    // CONTENT GROUP
    {
      name: 'content',
      type: 'group',
      label: 'Content',
      fields: [
        {
          name: 'excerpt',
          type: 'textarea',
          required: true,
          localized: true,
          admin: {
            description: 'Short excerpt for listing pages and SEO'
          }
        },
        {
          name: 'body',
          type: 'richText',
          required: true,
          localized: true,
          admin: {
            description: 'Full blog post content'
          }
        },
        {
          name: 'gallery',
          type: 'array',
          label: 'Gallery Images',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true
            },
            {
              name: 'caption',
              type: 'text',
              localized: true,
              admin: {
                description: 'Image caption (optional)'
              }
            }
          ],
          admin: {
            description: 'Additional images for the blog post'
          }
        }
      ]
    },
    // RELATIONSHIPS GROUP
    {
      name: 'relationships',
      type: 'group',
      label: 'Relationships',
      fields: [
        {
          name: 'relatedPosts',
          type: 'relationship',
          relationTo: 'blog',
          hasMany: true,
          admin: {
            description: 'Related blog posts'
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
            description: 'SEO meta title (defaults to post title)'
          }
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          localized: true,
          admin: {
            description: 'SEO meta description (defaults to excerpt)'
          }
        },
        {
          name: 'metaImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'SEO/social media image (defaults to hero image)'
          }
        }
      ]
    }
  ]
};


