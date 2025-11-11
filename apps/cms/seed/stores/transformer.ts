import type { BlockquoteBlock, IngressBlock, RichTextWithHeadingBlock, Store } from '@asecs/shared/payload-types';
import type { MediaData } from '../types';

import { StoreData } from './data';
import { getRandomImage } from '../_utils/images';

const transformIngressBlock = (data: StoreData): IngressBlock => {
  return {
    blockType: 'ingress',
    heading: `Välkommen till ${data.name}`,
    content: data.description
  };
};

const transformRichTextWithHeadingBlock = (data: StoreData): RichTextWithHeadingBlock => {
  return {
    blockType: 'richTextWithHeading',
    heading: 'Om vår butik',
    content: {
      root: {
        type: 'root',
        version: 1,
        direction: null,
        format: '',
        indent: 0,
        children: [
          {
            version: 1,
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: `Hos ${data.name} hittar du ett brett sortiment av produkter och tjänster. Vi strävar efter att ge våra kunder den bästa shoppingupplevelsen med personlig service och högkvalitativa produkter.`
              }
            ]
          },
          {
            version: 1,
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Vårt erfarna team är här för att hjälpa dig hitta precis det du söker. Välkommen in till oss så guidar vi dig genom vårt sortiment!'
              }
            ]
          }
        ]
      }
    },
    columns: '2'
  };
};

const transformBlockquoteBlock = (data: StoreData): BlockquoteBlock => {
  return {
    blockType: 'blockquote',
    quote: `"${data.description} Vi älskar att hjälpa våra kunder hitta det perfekta!"`,
    author: 'Butikschefen'
  };
};

export const transform = (tags: Record<string, string>, data: StoreData, media?: MediaData): Omit<Store, 'id' | 'updatedAt' | 'createdAt'> => {
  const tagId = tags[data.category];

  const heroImageId = getRandomImage(media?.details);
  const logoId = getRandomImage(media?.people);

  console.log(`[STORES:INFO] 📸 Store "${data.name}": heroImage=${heroImageId}, logo=${logoId}`);

  return {
    name: data.name,
    slug: data.name
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim(),
    isExternal: false,
    heroImage: heroImageId,
    logo: logoId,
    tags: tagId ? [tagId] : [],
    contentBlocks: [
      // Ingress Block (now using simple text)
      transformIngressBlock(data),
      // Rich Text with Heading Block
      transformRichTextWithHeadingBlock(data),
      // Blockquote Block
      transformBlockquoteBlock(data),
      // Deals Carousel Block (uses new generic name)
      {
        blockType: 'dealsCarousel',
        title: 'Våra deals',
        showOnlyActive: true
      }
    ],
    contact: {
      phoneNumber: '036-10 50 00',
      links: {
        website: `https://${data.name.toLowerCase().replace(/\s+/g, '')}.se`,
        instagram: `https://instagram.com/${data.name.toLowerCase().replace(/\s+/g, '')}`,
        facebook: `https://facebook.com/${data.name.toLowerCase().replace(/\s+/g, '')}`
      }
    },
    businessData: {
      priceRange: '$$',
      productsSold: data.products
    },
    metaTitle: `${data.name} - Asecs Jönköping`,
    metaDescription: data.description
  };
};
