import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/textarea';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Textarea',
	tags: ['autodocs'],
	render: ({ value, placeholder, rows, disabled, readonly, required, invalid }) => html`
		<w1c-textarea
			name="notes"
			value=${value}
			placeholder=${placeholder}
			rows=${rows}
			?disabled=${disabled}
			?readonly=${readonly}
			?required=${required}
			?invalid=${invalid}></w1c-textarea>
	`,
	argTypes: {
		value: { control: 'text' },
		placeholder: { control: 'text' },
		rows: { control: 'number' },
		disabled: { control: 'boolean' },
		readonly: { control: 'boolean' },
		required: { control: 'boolean' },
		invalid: { control: 'boolean' },
		theme: storyThemeArgType
	},
	args: {
		value: 'Investigating packet loss on the primary route.',
		placeholder: 'Incident notes',
		rows: 5,
		disabled: false,
		readonly: false,
		required: false,
		invalid: false,
		theme: 'global'
	}
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
