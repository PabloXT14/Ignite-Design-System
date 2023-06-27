import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(TooltipPrimitive.Content, {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '$short',
  backgroundColor: '$gray900',
  color: '$gray100',
  padding: '$3 $4',
  borderRadius: '$sm',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
})
