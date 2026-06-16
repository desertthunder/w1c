import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/validation-message';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Validation Message',
	tags: ['autodocs'],
	render: ({ variant, message }) =>
		html`<w1c-validation-message variant=${variant}>${message}</w1c-validation-message>`,
	argTypes: {
		variant: { control: 'select', options: ['error', 'warning', 'info'] },
		message: { control: 'text' },
		theme: storyThemeArgType
	},
	args: { variant: 'error', message: 'Path must start with a slash.', theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
