import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/checkbox';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Checkbox',
	tags: ['autodocs'],
	render: ({ checked, disabled, required, invalid }) => html`
		<w1c-checkbox name="enabled" ?checked=${checked} ?disabled=${disabled} ?required=${required} ?invalid=${invalid}>
			Enable monitoring
		</w1c-checkbox>
	`,
	argTypes: {
		checked: { control: 'boolean' },
		disabled: { control: 'boolean' },
		required: { control: 'boolean' },
		invalid: { control: 'boolean' },
		theme: storyThemeArgType
	},
	args: { checked: true, disabled: false, required: false, invalid: false, theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
