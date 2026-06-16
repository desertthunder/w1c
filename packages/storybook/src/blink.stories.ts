import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/blink';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Blink',
	tags: ['autodocs'],
	render: ({ speed, text }) => html` <p><w1c-blink speed=${speed}>${text}</w1c-blink> Guestbook entries are open.</p> `,
	argTypes: {
		text: { control: 'text' },
		speed: { control: { type: 'number', min: 0.35, max: 4, step: 0.05 } },
		theme: storyThemeArgType
	},
	args: { text: 'New!', speed: 1, theme: 'geocities' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
