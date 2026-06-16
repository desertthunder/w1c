import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/alert';
import '@w1c/components/button';
import '@w1c/components/icon';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Alert',
	tags: ['autodocs'],
	render: ({ title, variant }) => html`
		<w1c-alert title=${title} variant=${variant}>
			<w1c-icon slot="icon" name="warning" label=""></w1c-icon>
			Configuration saved, but one endpoint still needs credentials.
			<w1c-button slot="actions">Review</w1c-button>
		</w1c-alert>
	`,
	argTypes: {
		title: { control: 'text' },
		variant: { control: 'select', options: ['status', 'info', 'success', 'warning', 'danger'] },
		theme: storyThemeArgType
	},
	args: { title: 'Deployment', variant: 'warning', theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
