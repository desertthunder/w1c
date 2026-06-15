import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/statusbar';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Statusbar',
	tags: ['autodocs'],
	render: () => html`
		<div style="width: min(560px, 100%);">
			<w1c-statusbar>3 objects selected</w1c-statusbar>
		</div>
	`,
	argTypes: { theme: storyThemeArgType },
	args: { theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const Panes: Story = {
	render: () => html`
		<style>
			.status-panes {
				width: min(560px, 100%);
			}

			.status-panes span + span {
				margin-inline-start: auto;
			}
		</style>
		<div class="status-panes">
			<w1c-statusbar>
				<span>Ready</span>
				<span>Line 12</span>
			</w1c-statusbar>
		</div>
	`
};
