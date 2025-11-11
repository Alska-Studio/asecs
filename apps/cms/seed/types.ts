import { BlockquoteBlock, DealsCarouselBlock, ImageGalleryBlock, IngressBlock, RichTextBlock, RichTextWithHeadingBlock } from '@asecs/shared/payload-types';

export type OmittedRichTextWithHeadingBlock = NestedOmit<RichTextWithHeadingBlock, 'content.root.direction' | 'content.root.format' | 'content.root.indent' | 'content.root.version' | 'content.root.children.version'>;
export type OmittedRichTextBlock = NestedOmit<RichTextBlock, 'content.root.direction' | 'content.root.format' | 'content.root.indent' | 'content.root.version' | 'content.root.children.version'>;
export type OmittedContentBlocks = (OmittedRichTextWithHeadingBlock | BlockquoteBlock | IngressBlock | OmittedRichTextBlock | ImageGalleryBlock | DealsCarouselBlock)[] | null | undefined;

export type MediaData = { details: Record<string, string>; people: Record<string, string> };

export type NestedOmit<T, K extends PropertyKey> = T extends Array<infer U>
  ? Array<NestedOmit<U, K>>
  : T extends object
    ? {
        [P in keyof T as P extends K ? never : P]:
          NestedOmit<T[P], K extends `${Exclude<P, symbol>}.${infer R}` ? R : never>
      }
    : T;
