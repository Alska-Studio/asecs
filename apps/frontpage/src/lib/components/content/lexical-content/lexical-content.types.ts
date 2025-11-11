import type { SystemStyleObject } from '@agapi/ui/panda/types';
import type { HTMLAttributes } from 'svelte/elements';

/**
 * Lexical node types from Payload CMS
 */
export type LexicalNode =
  | LexicalRootNode
  | LexicalTextNode
  | LexicalParagraphNode
  | LexicalHeadingNode
  | LexicalListNode
  | LexicalListItemNode
  | LexicalLinkNode
  | LexicalQuoteNode;

export interface LexicalRootNode {
  type: 'root';
  children?: LexicalNode[];
  direction?: 'ltr' | 'rtl';
  format?: string;
  indent?: number;
  version?: number;
}

export interface LexicalTextNode {
  type: 'text';
  text: string;
  format?: number | string;
  detail?: number;
  mode?: string;
  style?: string;
}

export interface LexicalParagraphNode {
  type: 'paragraph';
  children?: LexicalNode[];
  direction?: 'ltr' | 'rtl';
  format?: string;
  indent?: number;
  textFormat?: number;
}

export interface LexicalHeadingNode {
  type: 'heading';
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: LexicalNode[];
  direction?: 'ltr' | 'rtl';
  format?: string;
  indent?: number;
}

export interface LexicalListNode {
  type: 'list';
  listType: 'bullet' | 'number' | 'check';
  children?: LexicalNode[];
  start?: number;
  tag?: 'ul' | 'ol';
}

export interface LexicalListItemNode {
  type: 'listitem';
  children?: LexicalNode[];
  value?: number;
  checked?: boolean;
}

export interface LexicalLinkNode {
  type: 'link';
  url: string;
  children?: LexicalNode[];
  newTab?: boolean;
  rel?: string;
}

export interface LexicalQuoteNode {
  type: 'quote';
  children?: LexicalNode[];
}

/**
 * Lexical rich text content structure
 */
export interface LexicalContent {
  root?: LexicalRootNode;
}

export interface LexicalContentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
  /**
   * Lexical rich text content from Payload CMS
   */
  content?: LexicalContent | LexicalRootNode;
  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject;
  /**
   * Enable line-by-line animations for paragraphs
   */
  animate?: boolean;
  /**
   * Animation stagger delay (only when animate is true)
   */
  animationStagger?: number;
  /**
   * Animation duration (only when animate is true)
   */
  animationDuration?: number;
  /**
   * Animation delay before starting (only when animate is true)
   */
  animationDelay?: number;
}


