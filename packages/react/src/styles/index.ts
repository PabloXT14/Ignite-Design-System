import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@pabloxt14-ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  // a opção "themeMap" é usada para mapear valores de um tema para uma propriedade CSS específica
  themeMap: {
    ...defaultThemeMap, // mapeamento padrão do stitches
    // especificando que as propriedades width e height devem herdar os valores do token de space
    width: 'space',
    height: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
