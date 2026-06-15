import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/button';
import '@w1c/components/taskbar';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Taskbar',
	tags: ['autodocs'],
	render: () => html`
		<div style="width: min(720px, 100%);">
			<w1c-taskbar>
				<w1c-button slot="start">Start</w1c-button>
				<w1c-button variant="sunken">Documents</w1c-button>
				<w1c-button>Mail</w1c-button>
				<span slot="tray">10:24 AM</span>
			</w1c-taskbar>
		</div>
	`,
	argTypes: { theme: storyThemeArgType },
	args: { theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
