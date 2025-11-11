import type { SystemStyleObject } from '@agapi/ui/panda/types'
import type { CollectionItemData } from '../collection-card'

export interface CollectionGridProps {
  /**
   * Array of collection items to display
   */
  items?: CollectionItemData[]
  /**
   * Collection type (for URL generation and labels)
   */
  collectionType: 'stores' | 'restaurants' | 'events'
  /**
   * Plural label for count text
   */
  collectionLabel: string
  /**
   * Empty state title
   */
  emptyStateTitle?: string
  /**
   * Empty state message
   */
  emptyStateMessage?: string
  /**
   * Whether to show list view
   */
  showListView?: boolean
  /**
   * Toggle view handler
   */
  onToggleView?: () => void
  /**
   * Custom CSS properties
   */
  css?: SystemStyleObject
}

