import type { CollectionConfig } from 'payload';

export const ShoppingQueries: CollectionConfig = {
  slug: 'shopping-queries',
  admin: {
    useAsTitle: 'query',
    defaultColumns: ['query', 'resultCount', 'timestamp', 'responseTime'],
    group: 'Analytics'
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: () => true, // Allow API to create
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user)
  },
  fields: [
    {
      name: 'query',
      type: 'text',
      required: true,
      admin: {
        description: 'The natural language search query'
      }
    },
    {
      name: 'filters',
      type: 'json',
      admin: {
        description: 'Search filters applied'
      }
    },
    {
      name: 'resultCount',
      type: 'number',
      required: true,
      admin: {
        description: 'Number of venues returned'
      }
    },
    {
      name: 'reasoning',
      type: 'textarea',
      admin: {
        description: 'Agent reasoning for the search results'
      }
    },
    {
      name: 'userPreferences',
      type: 'json',
      admin: {
        description: 'User preferences if available'
      }
    },
    {
      name: 'responseTime',
      type: 'number',
      required: true,
      admin: {
        description: 'Response time in milliseconds'
      }
    },
    {
      name: 'timestamp',
      type: 'date',
      required: true,
      admin: {
        description: 'When the query was executed',
        date: {
          displayFormat: 'yyyy-MM-dd HH:mm:ss'
        }
      }
    }
  ],
  timestamps: true
};










