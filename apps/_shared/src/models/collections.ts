import type { CollectionConfig } from 'payload';


export const collections: CollectionConfig[] = [
  {
    slug: 'users',
    auth: true,
    fields: [
      {
        name: 'role',
        type: 'text'
      }
    ]
  },
  {
    slug: 'pages',
    fields: [
      {
        name: 'title',
        type: 'text',
        localized: true
      },
      {
        name: 'slug',
        type: 'text',
        index: true,
        localized: true
      },
      {
        name: 'content',
        type: 'richText',
        localized: true
      }
    ]
  },
  {
    slug: 'navigation_items',
    fields: [
      {
        name: 'label',
        type: 'text',
        localized: true
      },
      {
        name: 'href',
        type: 'text',
        localized: true
      }
    ]
  }
];
