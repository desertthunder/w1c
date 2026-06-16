import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/endpoint-row';
import '@w1c/components/button';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Endpoint Row',
	tags: ['autodocs'],
	render: ({ method, path, status, variant }) => html`
		<div style="width: min(620px, 100%); border: 1px solid var(--w1c-control-shadow, #808080);">
			<w1c-endpoint-row method=${method} path=${path} status=${status} variant=${variant}>
				<span>Public API</span>
				<w1c-button slot="actions">Open</w1c-button>
			</w1c-endpoint-row>
		</div>
	`,
	argTypes: {
		method: { control: 'text' },
		path: { control: 'text' },
		status: { control: 'text' },
		variant: { control: 'select', options: ['neutral', 'good', 'warning', 'danger'] },
		theme: storyThemeArgType
	},
	args: { method: 'GET', path: '/api/v1/incidents', status: '200 OK', variant: 'good', theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
