import type { Block, CollectionConfig, GlobalConfig } from 'payload';

import * as c from './collections';
import * as b from './blocks';
import * as g from './globals';

export const collections: CollectionConfig[] = [
  c.Blog,
  c.ColorRecommendations,
  c.Deals,
  c.Events,
  c.Media,
  c.Pages,
  c.Restaurants,
  c.ShoppingQueries,
  c.Stores,
  c.Tags,
  c.Users
];

export const blocks: Block[] = [
  b.Blockquote,
  b.HeroParallax,
  b.Ingress,
  b.RichText,
  b.RichTextWithHeading,
  b.ImageGallery,
  b.DealsCarousel
];

export const globals: GlobalConfig[] = [
  g.AISettings
];
