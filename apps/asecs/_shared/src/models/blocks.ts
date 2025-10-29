// import { slateEditor } from '@payloadcms/richtext-slate';
import { Block } from 'payload';

export const blocks: Block[] = [
  {
    slug: 'section',
    fields: [{
      name: 'content_blocks',
      type: 'blocks',
      blockReferences: ['content'],
      blocks: []
    }]
  },
  {
    slug: 'content',
    fields: [{
      name: 'content',
      type: 'richText',
      localized: true
    }]
  }
];
