import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as='label'
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size='sm'>Notes</Text>
          {Story()}
        </Box>

      )
    }
  ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type...',
  }
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  }
}