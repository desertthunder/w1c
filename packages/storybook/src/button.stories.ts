import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components-vite'
import '@w1c/components/components/button.js'

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: ({ disabled, variant }) => html`
    <w1c-button ?disabled=${disabled} variant=${variant}>Open</w1c-button>
  `,
  argTypes: {
    disabled: { control: 'boolean' },
    variant: { control: 'select', options: ['raised', 'sunken', 'flat'] }
  },
  args: {
    disabled: false,
    variant: 'raised'
  }
} satisfies Meta

export default meta

type Story = StoryObj

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}
