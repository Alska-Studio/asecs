import type { CollectionSlug, GlobalConfig } from 'payload';

export const AISettings: GlobalConfig = {
  slug: 'ai-settings',
  label: 'AI & Brand Settings',
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user)
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Brand Documents',
          description: '📝 Step 1: Upload documents below. Step 2: Click SAVE. Step 3: Click "Synthesize Brand Guide" button.',
          fields: [
            {
              name: 'brandDocuments',
              type: 'array',
              label: 'Brand Documents',
              admin: {
                description: '✅ Supports PDF, Markdown (.md), and text files (.txt). Upload as many as you need!'
              },
              fields: [
                {
                  name: 'document',
                  type: 'upload',
                  relationTo: 'media' as CollectionSlug,
                  required: true
                },
                {
                  name: 'documentType',
                  type: 'select',
                  required: true,
                  defaultValue: 'brand-guidelines',
                  options: [
                    { label: 'Brand Guidelines', value: 'brand-guidelines' },
                    { label: 'Tone of Voice Guide', value: 'tone-guide' },
                    { label: 'Brand Strategy', value: 'brand-strategy' },
                    { label: 'Messaging Framework', value: 'messaging' },
                    { label: 'Content Style Guide', value: 'style-guide' },
                    { label: 'Other', value: 'other' }
                  ]
                },
                {
                  name: 'notes',
                  type: 'textarea',
                  admin: {
                    description: 'Optional notes about this document'
                  }
                }
              ]
            },
            {
              name: 'manualInstructions',
              type: 'textarea',
              label: 'Manual Brand Instructions',
              admin: {
                description: 'Write your brand guidelines directly here if you prefer not to upload documents',
                rows: 10
              }
            },
            {
              type: 'ui',
              name: 'extractButton',
              admin: {
                components: {
                  Field: '@/components/ExtractBrandGuidelinesButton#ExtractBrandGuidelinesButton'
                }
              }
            }
          ]
        },
        {
          label: 'Synthesized Brand Guide',
          fields: [
            {
              name: 'synthesizedGuidelines',
              type: 'json',
              admin: {
                readOnly: true,
                description: 'AI-synthesized brand guide from all uploaded documents and manual instructions'
              },
              label: 'Complete Brand Context (Auto-Generated)'
            },
            {
              name: 'lastExtracted',
              type: 'date',
              admin: {
                readOnly: true,
                description: 'When guidelines were last extracted'
              }
            }
          ]
        },
        {
          label: 'Preview',
          fields: [
            {
              type: 'ui',
              name: 'brandContextPreview',
              admin: {
                components: {
                  Field: '@/components/BrandContextPreview#BrandContextPreview'
                }
              }
            }
          ]
        }
      ]
    }
  ]
};

