import type {
  IngressBlock,
  RichTextWithHeadingBlock,
  BlockquoteBlock,
  Restaurant,
  ImageGalleryBlock,
  DealsCarouselBlock
} from 'apps/_shared/src/payload-types';
import type { MediaData } from '../types';
import type { RestaurantData } from './data';
import { getRandomImage, getRandomImages } from '../_utils/images';

const transformIngressBlock = (data: RestaurantData): IngressBlock => {
  return {
    blockType: 'ingress',
    heading: `Välkommen till ${data.name}`,
    content: data.description
  };
};

const transformRichTextWithHeadingBlock = (data: RestaurantData): RichTextWithHeadingBlock => {
  return {
    blockType: 'richTextWithHeading',
    heading: 'Om vår restaurang',
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
                text: `Hos ${data.name} serverar vi ${data.cuisine.toLowerCase()} mat med fokus på kvalitet och smak. Vi erbjuder en välkomnande atmosfär där du kan njuta av god mat tillsammans med vänner och familj.`
              }
            ]
          },
          {
            version: 1,
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Besök oss i Asecs för en minnesvärd måltidsupplevelse. Vårt team ser fram emot att välkomna dig!'
              }
            ]
          }
        ]
      }
    },
    columns: '2'
  };
};

const transformBlockQuote = (data: RestaurantData): BlockquoteBlock => {
  return {
    blockType: 'blockquote',
    quote: `"${data.description} Vi brinner för god mat och nöjda gäster!"`,
    author: 'Kökschefen'
  };
};

const transformImageGallery = (galleryImages: string[]): ImageGalleryBlock => {
  return {
    blockType: 'imageGallery',
    images: galleryImages.map((image) => ({ image }))
  };
};

const transformDealsCarousel = (): DealsCarouselBlock => {
  return {
    blockType: 'dealsCarousel',
    title: 'Våra erbjudanden',
    showOnlyActive: true
  };
};

export const transform = async (params: {
  tags: Record<string, string>;
  media?: MediaData;
  data: RestaurantData;
}): Promise<Omit<Restaurant, 'id' | 'updatedAt' | 'createdAt'>> => {
  const { tags, media, data } = params;

  const tagId = tags[data.category];
  const heroImageId = getRandomImage(media?.people);
  const logoId = getRandomImage(media?.details);
  const galleryImages = getRandomImages(media?.details, 4);

  console.log(`[RESTAURANTS:INFO] 📸 Restaurant "${data.name}": heroImage=${heroImageId}, logo=${logoId}, gallery=${galleryImages.length} images`);

  return {
    name: data.name,
    slug: data.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim(),
    isExternal: false,
    heroImage: heroImageId,
    logo: logoId,
    tags: tagId ? [tagId] : [],
    contentBlocks: [
      // Ingress Block (now using simple text)
      transformIngressBlock(data),
      // Rich Text with Heading Block,
      transformRichTextWithHeadingBlock(data),
      // Blockquote Block
      transformBlockQuote(data),
      ...(galleryImages.length ? [transformImageGallery(galleryImages)] : []),
      transformDealsCarousel()
    ],
    contact: {
      phoneNumber: '036-10 50 00',
      links: {
        website: `https://${data.name.toLowerCase().replace(/[^\w]/g, '')}.se`,
        instagram: `https://instagram.com/${data.name.toLowerCase().replace(/[^\w]/g, '')}`
      }
    },
    businessData: {
      priceRange: data.priceRange,
      dishesServed: data.dishesServed,
      dietaryOptions: data.dietaryOptions
    },
    metaTitle: `${data.name} - Asecs Jönköping`,
    metaDescription: data.description
  };
};
