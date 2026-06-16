import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/input';
import '@w1c/components/validation-message';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Input',
	tags: ['autodocs'],
	render: ({ value, placeholder, disabled, readonly, required, invalid }) => html`
		<div style="display: grid; gap: 4px; width: min(320px, 100%);">
			<w1c-input
				name="hostname"
				value=${value}
				placeholder=${placeholder}
				?disabled=${disabled}
				?readonly=${readonly}
				?required=${required}
				?invalid=${invalid}></w1c-input>
			${invalid ? html`<w1c-validation-message>Hostname is required.</w1c-validation-message>` : null}
		</div>
	`,
	argTypes: {
		value: { control: 'text' },
		placeholder: { control: 'text' },
		disabled: { control: 'boolean' },
		readonly: { control: 'boolean' },
		required: { control: 'boolean' },
		invalid: { control: 'boolean' },
		theme: storyThemeArgType
	},
	args: {
		value: 'mail-01',
		placeholder: 'Hostname',
		disabled: false,
		readonly: false,
		required: true,
		invalid: false,
		theme: 'global'
	}
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
