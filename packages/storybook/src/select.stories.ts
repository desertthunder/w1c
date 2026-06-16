import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/select';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Select',
	tags: ['autodocs'],
	render: ({ value, disabled, required, invalid }) => html`
		<w1c-select name="priority" value=${value} ?disabled=${disabled} ?required=${required} ?invalid=${invalid}>
			<option value="low">Low priority</option>
			<option value="normal">Normal priority</option>
			<option value="high">High priority</option>
		</w1c-select>
	`,
	argTypes: {
		value: { control: 'select', options: ['low', 'normal', 'high'] },
		disabled: { control: 'boolean' },
		required: { control: 'boolean' },
		invalid: { control: 'boolean' },
		theme: storyThemeArgType
	},
	args: { value: 'normal', disabled: false, required: false, invalid: false, theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
