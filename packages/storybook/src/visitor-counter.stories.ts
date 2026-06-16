import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/visitor-counter';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Visitor Counter',
	tags: ['autodocs'],
	render: ({ value, digits, label }) =>
		html`<w1c-visitor-counter value=${value} digits=${digits} label=${label}></w1c-visitor-counter>`,
	argTypes: {
		value: { control: 'text' },
		digits: { control: { type: 'number', min: 1, max: 12, step: 1 } },
		label: { control: 'text' },
		theme: storyThemeArgType
	},
	args: { value: '1337', digits: 6, label: 'Visitors', theme: 'geocities' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
