import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/status-card';
import '@w1c/components/icon';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Status Card',
	tags: ['autodocs'],
	render: ({ title, value, variant }) => html`
		<div style="width: min(260px, 100%);">
			<w1c-status-card title=${title} value=${value} variant=${variant}>
				<w1c-icon slot="icon" name="computer" label=""></w1c-icon>
				<span>Primary region</span>
				<span slot="footer">Checked 42 seconds ago</span>
			</w1c-status-card>
		</div>
	`,
	argTypes: {
		title: { control: 'text' },
		value: { control: 'text' },
		variant: { control: 'select', options: ['neutral', 'good', 'warning', 'danger'] },
		theme: storyThemeArgType
	},
	args: { title: 'Uptime', value: '99.98%', variant: 'good', theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
