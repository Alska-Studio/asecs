import type { CollectionConfig } from 'payload';

export const ColorRecommendations: CollectionConfig = {
  slug: 'color-recommendations',
  admin: {
    useAsTitle: 'id',
    defaultColumns: ['id', 'skinTone', 'createdAt']
  },
  access: {
    read: () => true,
    create: () => true,
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user)
  },
  fields: [
    {
      name: 'userId',
      type: 'text',
      admin: {
        description: 'User identifier (optional)'
      }
    },
    {
      name: 'uploadedPhoto',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Original uploaded photo for analysis'
      }
    },
    {
      name: 'skinTone',
      type: 'text',
      required: true,
      admin: {
        description: 'Detected skin tone from AI analysis'
      }
    },
    {
      name: 'hairColor',
      type: 'text',
      admin: {
        description: 'Detected hair color (optional)'
      }
    },
    {
      name: 'eyeColor',
      type: 'text',
      admin: {
        description: 'Detected eye color (optional)'
      }
    },
    {
      name: 'recommendations',
      type: 'group',
      label: 'Color Recommendations',
      fields: [
        {
          name: 'colors',
          type: 'array',
          label: 'Recommended Colors',
          minRows: 1,
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              admin: {
                description: 'Color name (e.g., "Emerald Green", "Soft Beige")'
              }
            },
            {
              name: 'hex',
              type: 'text',
              required: true,
              admin: {
                description: 'Hex color code (e.g., #50C878)'
              }
            },
            {
              name: 'category',
              type: 'select',
              required: true,
              options: [
                { label: 'Clothing', value: 'clothing' },
                { label: 'Accessories', value: 'accessories' },
                { label: 'Makeup', value: 'makeup' },
                { label: 'General', value: 'general' }
              ],
              admin: {
                description: 'Category for this color'
              }
            },
            {
              name: 'reasoning',
              type: 'textarea',
              admin: {
                description: 'Why this color works for the person'
              }
            }
          ]
        },
        {
          name: 'reasoning',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Overall reasoning for the color palette'
          }
        },
        {
          name: 'seasonalAnalysis',
          type: 'select',
          required: true,
          options: [
            { label: 'Warm', value: 'warm' },
            { label: 'Cool', value: 'cool' },
            { label: 'Neutral', value: 'neutral' },
            { label: 'Warm-Neutral', value: 'warm-neutral' },
            { label: 'Cool-Neutral', value: 'cool-neutral' }
          ],
          admin: {
            description: 'Seasonal color analysis result'
          }
        },
        {
          name: 'trends',
          type: 'array',
          label: 'Current Fashion Trends',
          fields: [
            {
              name: 'trend',
              type: 'text',
              required: true
            }
          ],
          admin: {
            description: 'Current fashion trends that influenced recommendations'
          }
        },
        {
          name: 'outfits',
          type: 'array',
          label: 'Outfit Recommendations',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true
            },
            {
              name: 'occasion',
              type: 'text',
              required: true
            },
            {
              name: 'season',
              type: 'text',
              required: true
            },
            {
              name: 'styling',
              type: 'textarea',
              required: true
            },
            {
              name: 'confidence',
              type: 'number',
              required: true
            },
            {
              name: 'generatedImageUrl',
              type: 'text'
            },
            {
              name: 'items',
              type: 'array',
              label: 'Outfit Items',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true
                },
                {
                  name: 'type',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Top', value: 'top' },
                    { label: 'Bottom', value: 'bottom' },
                    { label: 'Dress', value: 'dress' },
                    { label: 'Outerwear', value: 'outerwear' },
                    { label: 'Shoes', value: 'shoes' },
                    { label: 'Accessories', value: 'accessories' }
                  ]
                },
                {
                  name: 'color',
                  type: 'text',
                  required: true
                },
                {
                  name: 'hex',
                  type: 'text',
                  required: true
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true
                },
                {
                  name: 'styling',
                  type: 'textarea'
                }
              ]
            }
          ],
          admin: {
            description: 'Complete outfit recommendations with styling tips'
          }
        }
      ]
    },
    {
      name: 'generatedImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'AI-generated visualization of color recommendations'
      }
    }
  ],
  timestamps: true
};

