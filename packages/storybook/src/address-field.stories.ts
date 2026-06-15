import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/address-field';
import '@w1c/components/button';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Address Field',
	tags: ['autodocs'],
	render: ({ value, placeholder, disabled, readonly }) => html`
		<div style="width: min(640px, 100%);">
			<w1c-address-field
				label="Location"
				value=${value}
				placeholder=${placeholder}
				?disabled=${disabled}
				?readonly=${readonly}>
				<span slot="prefix" aria-hidden="true">▸</span>
				<w1c-button slot="actions">Go</w1c-button>
			</w1c-address-field>
		</div>
	`,
	argTypes: {
		value: { control: 'text' },
		placeholder: { control: 'text' },
		disabled: { control: 'boolean' },
		readonly: { control: 'boolean' },
		theme: storyThemeArgType
	},
	args: {
		value: 'https://example.net/docs/',
		placeholder: 'Enter a location',
		disabled: false,
		readonly: false,
		theme: 'global'
	}
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
