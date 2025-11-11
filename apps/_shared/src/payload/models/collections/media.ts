import type { CollectionConfig, GetAdminThumbnail } from 'payload';
import { getParameter } from '../../../ssm';

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Media Asset',
    plural: 'Media Assets'
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'mimeType', 'filesize', 'createdAt'],
    enableRichTextLink: false,
    group: 'Media'
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user)
  },
  upload: {
    // staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 150,
        height: 150,
        position: 'centre'
      },
      {
        name: 'small',
        width: 400,
        height: undefined,
        position: 'centre'
      },
      {
        name: 'medium',
        width: 800,
        height: undefined,
        position: 'centre'
      },
      {
        name: 'large',
        width: 1200,
        height: undefined,
        position: 'centre'
      },
      {
        name: 'xlarge',
        width: 1920,
        height: undefined,
        position: 'centre'
      }
    ],
    adminThumbnail: (async ({ doc }: Parameters<GetAdminThumbnail>[0]) => {
      const bucketName = await getParameter('/asecs/resources/assets-bucket-name'); // Retrieve and cache SSM parameter in Global scope
      return doc.filename ? `https://${bucketName}.s3.amazonaws.com/media/${doc.filename}` : null; // `/media/${doc.filename}` : null;
    }) as unknown as GetAdminThumbnail,
    mimeTypes: [
      'image/*',
      'application/pdf',
      'video/*',
      'audio/*',
      'application/zip',
      'application/x-rar-compressed',
      'text/*',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ]
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description: 'This will be used as the display name for this asset'
      }
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description: 'Alternative text for accessibility and SEO'
      }
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      admin: {
        description: 'Detailed description of the asset'
      }
    },
    {
      name: 'isPublic',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
        description: 'Whether this asset is publicly accessible'
      }
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Mark as featured asset'
      }
    },
    {
      name: 'copyright',
      type: 'text',
      admin: {
        position: 'sidebar',
        description: 'Copyright information'
      }
    },
    {
      name: 'license',
      type: 'select',
      options: [
        { label: 'All Rights Reserved', value: 'all-rights-reserved' },
        { label: 'Creative Commons BY', value: 'cc-by' },
        { label: 'Creative Commons BY-SA', value: 'cc-by-sa' },
        { label: 'Creative Commons BY-NC', value: 'cc-by-nc' },
        { label: 'Creative Commons BY-NC-SA', value: 'cc-by-nc-sa' },
        { label: 'Public Domain', value: 'public-domain' },
        { label: 'Custom License', value: 'custom' }
      ],
      admin: {
        position: 'sidebar'
      }
    },
    {
      name: 'customLicense',
      type: 'textarea',
      admin: {
        position: 'sidebar',
        condition: (data) => data?.license === 'custom',
        description: 'Enter custom license terms'
      }
    },
    {
      name: 'metadata',
      type: 'group',
      admin: {
        condition: (data) => data?.mimeType?.startsWith('image/')
      },
      fields: [
        {
          name: 'camera',
          type: 'text'
        },
        {
          name: 'lens',
          type: 'text'
        },
        {
          name: 'settings',
          type: 'group',
          fields: [
            {
              name: 'iso',
              type: 'number'
            },
            {
              name: 'aperture',
              type: 'text'
            },
            {
              name: 'shutterSpeed',
              type: 'text'
            },
            {
              name: 'focalLength',
              type: 'text'
            }
          ]
        },
        {
          name: 'location',
          type: 'group',
          fields: [
            {
              name: 'name',
              type: 'text'
            },
            {
              name: 'latitude',
              type: 'number'
            },
            {
              name: 'longitude',
              type: 'number'
            }
          ]
        }
      ]
    }
  ],
  timestamps: true,
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create' && !data.title && data.filename) {
          // Auto-generate title from filename if not provided
          data.title = data.filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
        }
        return data;
      }
    ]
    /*
    afterRead: [
      async ({ doc, req }) => {
        if (!doc) return null;

        // If the media object is already populated
        if (typeof doc === 'object' && doc.filename) {
          return `/media/${doc.filename}`;
        }

        // If it's only the ID (not populated), fetch it
        if (typeof doc === 'string') {
          const mediaDoc = await req.payload.findByID({
            collection: 'media',
            id: doc
          });
          return `/media/${mediaDoc.filename}`;
        }
        return doc;
      }
    ]
    */
  }
};
