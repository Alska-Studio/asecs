import type { SystemStyleObject } from '@agapi/ui/panda/types'
import type { ColorVariant } from '@agapi/ui/types'

/**
 * Generic collection item data structure
 * Works for stores, restaurants, events, etc.
 */
export interface CollectionItemData {
  id: string | number
  name: string
  slug: string
  heroImage?: {
    url: string
    alt?: string
  }
  logo?: {
    url: string
    alt?: string
  }
  tags?: Array<{
    id: string
    name: string
  }>
  businessData?: {
    priceRange?: string
    dietaryOptions?: string[]
    menu?: {
      url: string
      filename?: string
      alt?: string
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
}

/**
 * Badge icon types
 */
export type BadgeIconType =
  | 'dot'
  | 'clock'
  | 'map-pin'
  | 'tag'

export interface CollectionBadge {
  /**
   * Badge text
   */
  label: string
  /**
   * Color variant for the badge
   */
  colorVariant?: ColorVariant
  /**
   * Optional icon
   */
  icon?: BadgeIconType
}

export interface CollectionCardProps {
  /**
   * Collection item data to display
   */
  item: CollectionItemData
  /**
   * Collection type (for URL generation)
   */
  collectionType: 'stores' | 'restaurants' | 'events'
  /**
   * Badges to display on the card
   */
  badges?: CollectionBadge[]
  /**
   * Whether to show logo overlay
   */
  logoOverlay?: boolean
  /**
   * Click handler
   */
  onClick?: () => void
  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject
}

