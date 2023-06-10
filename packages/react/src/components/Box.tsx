import { ComponentProps, ElementType } from 'react'

import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType // propriedade do Stitches que permite tornar componente em outro tipo de elemento caso necessário (ela não é conhecida por padrão no ComponentProps)
}
