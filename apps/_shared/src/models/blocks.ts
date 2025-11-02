// import { slateEditor } from '@payloadcms/richtext-slate';
import type { Block, BlockSlug } from 'payload';

export const blocks: Block[] = [
  {
    slug: 'section',
    fields: [{
      name: 'content_blocks',
      type: 'blocks',
      blockReferences: ['content'] as BlockSlug[],
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
