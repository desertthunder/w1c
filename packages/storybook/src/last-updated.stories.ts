import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/last-updated';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Last Updated',
	tags: ['autodocs'],
	render: ({ label, datetime, text }) => html`
		<w1c-last-updated label=${label} datetime=${datetime}>${text}</w1c-last-updated>
	`,
	argTypes: {
		label: { control: 'text' },
		datetime: { control: 'text' },
		text: { control: 'text' },
		theme: storyThemeArgType
	},
	args: { label: 'Last updated', datetime: '1999-08-24', text: 'August 24, 1999', theme: 'geocities' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
