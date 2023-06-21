import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@pabloxt14-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Text>Textando elemento Box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null, // para não ter a opção de escolher
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
