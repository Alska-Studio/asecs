import { css } from '@agapi/ui/panda/css'

export const contentRootStyles = css.raw({
  pt: 'relaxed',
  pb: 'relaxed',
  bgColor: 'surface.default.background',
  zIndex: 1,
  borderTopRadius: 'surface.md',
  mt: '-8'
})

export const contentContainerStyles = css.raw({
  position: 'static'
})

export const filterSidebar = css({
  position: 'sticky',
  display: 'flex',
  top: '0',
  flexDirection: 'column',
  gap: 'normal'
})

