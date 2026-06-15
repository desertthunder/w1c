import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/dialog';
import '@w1c/components/icon';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Dialog',
	tags: ['autodocs'],
	render: ({ title, variant }) => html`
		<w1c-dialog title=${title} variant=${variant}>
			<w1c-icon slot="icon" name="info" label="Information"></w1c-icon>
			<p style="margin: 0;">The selected file will be moved to the archive folder.</p>
			<div slot="actions">
				<w1c-button>Cancel</w1c-button>
				<w1c-button>Move</w1c-button>
			</div>
		</w1c-dialog>
	`,
	argTypes: {
		title: { control: 'text' },
		variant: { control: 'select', options: ['window', 'alert'] },
		theme: storyThemeArgType
	},
	args: { title: 'Confirm Move', variant: 'window', theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const Alert: Story = { args: { title: 'Connection Lost', variant: 'alert' } };
