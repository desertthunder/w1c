import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components-vite'
import '@w1c/lib'

const meta = {
  title: 'Components/My Element',
  tags: ['autodocs'],
  render: () => html`
    <my-element>
      <h1>W1C</h1>
    </my-element>
  `
} satisfies Meta

export default meta

type Story = StoryObj

export const Default: Story = {}
