import { Meta, StoryObj } from '@storybook/react'
import { Tooltip, ToastProps, Button, Box } from '@pabloxt14-ignite-ui/react'

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '$20',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
