import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/marquee';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Marquee',
	tags: ['autodocs'],
	render: ({ direction, speed, pauseOnHover, text }) => html`
		<w1c-marquee direction=${direction} speed=${speed} ?pause-on-hover=${pauseOnHover}>${text}</w1c-marquee>
	`,
	argTypes: {
		text: { control: 'text' },
		direction: { control: 'select', options: ['left', 'right'] },
		speed: { control: { type: 'number', min: 4, max: 30, step: 1 } },
		pauseOnHover: { control: 'boolean' },
		theme: storyThemeArgType
	},
	args: {
		text: 'Welcome to the W1C Geocities component room.',
		direction: 'left',
		speed: 12,
		pauseOnHover: true,
		theme: 'geocities'
	}
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
