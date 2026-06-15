import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/button';
import '@w1c/components/titlebar';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Titlebar',
	tags: ['autodocs'],
	render: ({ title }) => html`
		<style>
			.titlebar-story {
				width: min(480px, 100%);
			}

			.titlebar-controls {
				display: inline-flex;
				gap: 2px;
			}

			.titlebar-controls w1c-button {
				--w1c-button-padding: 1px 6px;
			}
		</style>
		<div class="titlebar-story">
			<w1c-titlebar title=${title}>
				<span slot="icon" aria-hidden="true">W</span>
				<div slot="controls" class="titlebar-controls">
					<w1c-button aria-label="Minimize">_</w1c-button>
					<w1c-button aria-label="Maximize">□</w1c-button>
					<w1c-button aria-label="Close">x</w1c-button>
				</div>
			</w1c-titlebar>
		</div>
	`,
	argTypes: { title: { control: 'text' }, theme: storyThemeArgType },
	args: { title: 'Documents', theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
