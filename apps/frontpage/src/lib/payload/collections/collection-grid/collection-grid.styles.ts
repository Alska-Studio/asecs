import { css } from '@agapi/ui/panda/css'

export const sectionContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 'tight',
  flexGrow: 1,
  width: '100%'
})

export const headerContainer = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '24px',
  width: '100%',
  mb: 'tight'
})

export const itemCount = css({
  textStyle: 'h5',
  color: 'text.heading',
  textTransform: 'uppercase',
  fontWeight: '600',
  lineHeight: '1.1'
})

export const itemsGrid = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(264px, 1fr))',
  gap: 'snug',
  width: '100%'
})

export const emptyState = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'normal',
  py: 'xx-loose',
  textAlign: 'center'
})

export const emptyStateTitle = css({
  textStyle: 'h4',
  color: 'text.heading'
})

export const emptyStateMessage = css({
  textStyle: 'body-lg',
  color: 'text.subdued',
  maxWidth: '480px'
})

