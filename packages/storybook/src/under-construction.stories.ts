import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/under-construction';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Under Construction',
	tags: ['autodocs'],
	render: ({ message }) => html`
		<w1c-under-construction message=${message}>
			The downloads area will return after the next update.
		</w1c-under-construction>
	`,
	argTypes: { message: { control: 'text' }, theme: storyThemeArgType },
	args: { message: 'Under Construction', theme: 'geocities' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
