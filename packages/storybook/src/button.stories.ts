import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components-vite'
import '@w1c/components/button'

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: ({ disabled, variant }) => html`
    <w1c-button ?disabled=${disabled} variant=${variant}>Open folder</w1c-button>
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

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: var(--w1c-space-2, 8px);">
      <w1c-button>Raised</w1c-button>
      <w1c-button variant="sunken">Sunken</w1c-button>
      <w1c-button variant="flat">Flat</w1c-button>
    </div>
  `
}
