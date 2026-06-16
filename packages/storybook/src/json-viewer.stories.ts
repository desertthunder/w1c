import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/json-viewer';
import '@w1c/components/button';
import { storyThemeArgType } from './story-themes';

const sample = {
	name: 'w1c-window',
	status: 'ready',
	parts: ['chrome', 'titlebar', 'toolbar', 'content', 'statusbar']
};

const meta = {
	title: 'Components/JSON Viewer',
	tags: ['autodocs'],
	render: ({ lineNumbers, indent }) => html`
		<div style="width: min(620px, 100%);">
			<w1c-json-viewer .value=${sample} indent=${indent} ?line-numbers=${lineNumbers}>
				<w1c-button slot="toolbar">Copy</w1c-button>
				<w1c-button slot="toolbar">Save</w1c-button>
			</w1c-json-viewer>
		</div>
	`,
	argTypes: {
		lineNumbers: { control: 'boolean' },
		indent: { control: { type: 'number', min: 0, max: 8, step: 1 } },
		theme: storyThemeArgType
	},
	args: { lineNumbers: true, indent: 2, theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
