import { css } from '@agapi/ui/panda/css';

export const contentRootStyles = css.raw({
  pt: 'relaxed',
  pb: 'relaxed',
  bgColor: "surface.default.background",
  zIndex: 1,
  borderTopRadius: 'surface.md',
  mt: '-8'
})

export const notchStyles = css({
  position: 'absolute',
  top: '4',
  left: '50%',
  width: '24px',
  height: '4',
  backgroundColor: 'black',
})

export const contentContainerStyles = css.raw({
  position: 'static'
});

export const filterSidebar = css({
  position: 'sticky',
  display: 'flex',
  top: '0',
  flexDirection: 'column',
  gap: 'normal'
});




