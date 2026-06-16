import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/label';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Label',
	tags: ['autodocs'],
	render: ({ text, required, disabled }) =>
		html`<w1c-label for="server-name" text=${text} ?required=${required} ?disabled=${disabled}></w1c-label>`,
	argTypes: {
		text: { control: 'text' },
		required: { control: 'boolean' },
		disabled: { control: 'boolean' },
		theme: storyThemeArgType
	},
	args: { text: 'Server name', required: true, disabled: false, theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
