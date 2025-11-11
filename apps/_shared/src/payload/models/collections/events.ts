import type { CollectionConfig } from 'payload';
import { DEFAULT_LOCALE } from '../../config/locales';

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'startDate', 'updatedAt'],
    livePreview: {
      url: ({ data, locale }) => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:5174';
        const slug = data?.slug || 'event';
        const localeCode = locale?.code || DEFAULT_LOCALE;
        const localePath = localeCode === DEFAULT_LOCALE ? '' : `/${localeCode}`;
        return `${baseUrl}${localePath}/events/${slug}?preview=true`;
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
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Main event image for header'
      }
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      admin: {
        description: 'Tags for categorizing the event'
      }
    },
    // EVENT DETAILS GROUP
    {
      name: 'eventDetails',
      type: 'group',
      label: 'Event Details',
      fields: [
        {
          name: 'startDate',
          type: 'date',
          required: true,
          admin: {
            date: {
              pickerAppearance: 'dayAndTime'
            },
            description: 'Event start date and time'
          }
        },
        {
          name: 'endDate',
          type: 'date',
          admin: {
            date: {
              pickerAppearance: 'dayAndTime'
            },
            description: 'Event end date and time (optional)'
          }
        },
        {
          name: 'location',
          type: 'text',
          localized: true,
          admin: {
            description: 'Event location (e.g., "Main Square", "Conference Room A")'
          }
        },
        {
          name: 'organizer',
          type: 'text',
          localized: true,
          admin: {
            description: 'Event organizer name'
          }
        },
        {
          name: 'price',
          type: 'text',
          localized: true,
          admin: {
            description: 'Ticket price or "Free" if free entry'
          }
        }
      ]
    },
    // CONTENT GROUP
    {
      name: 'content',
      type: 'group',
      label: 'Content',
      fields: [
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
            }
          ],
          admin: {
            description: 'Additional event images'
          }
        },
        {
          name: 'description',
          type: 'richText',
          required: true,
          localized: true,
          admin: {
            description: 'Full event description'
          }
        },
        {
          name: 'excerpt',
          type: 'textarea',
          localized: true,
          admin: {
            description: 'Short excerpt for listing pages'
          }
        }
      ]
    },
    // CONTACT GROUP
    {
      name: 'contact',
      type: 'group',
      label: 'Contact',
      fields: [
        {
          name: 'email',
          type: 'email',
          admin: {
            description: 'Contact email for inquiries'
          }
        },
        {
          name: 'phoneNumber',
          type: 'text',
          admin: {
            description: 'Contact phone number'
          }
        },
        {
          name: 'website',
          type: 'text',
          admin: {
            description: 'Event website or registration URL'
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
          name: 'relatedEvents',
          type: 'relationship',
          relationTo: 'events',
          hasMany: true,
          admin: {
            description: 'Related events'
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
    }
  ]
};












