import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/button';
import '@w1c/components/toolbar';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Toolbar',
	tags: ['autodocs'],
	render: () => html`
		<div style="width: min(620px, 100%);">
			<w1c-toolbar>
				<w1c-button>Back</w1c-button>
				<w1c-button>Forward</w1c-button>
				<w1c-button>Refresh</w1c-button>
			</w1c-toolbar>
		</div>
	`,
	argTypes: { theme: storyThemeArgType },
	args: { theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
