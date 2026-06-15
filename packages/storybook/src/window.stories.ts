import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Window',
	tags: ['autodocs'],
	render: () => html`
		<style>
			.story-frame {
				width: min(680px, 100%);
			}

			.story-frame h2 {
				margin: 0 0 var(--w1c-space-2, 8px);
				font: var(--w1c-titlebar-font, 700 13px/1.2 'MS Sans Serif', Tahoma, sans-serif);
			}

			.story-frame p {
				margin: 0;
			}

			.window-controls {
				display: inline-flex;
				gap: 2px;
			}

			.window-controls w1c-button {
				--w1c-button-padding: 1px 6px;
			}
		</style>
		<div class="story-frame">
			<w1c-window title="Documents">
				<span slot="icon" aria-hidden="true">W</span>
				<div slot="controls" class="window-controls">
					<w1c-button aria-label="Minimize">_</w1c-button>
					<w1c-button aria-label="Maximize">□</w1c-button>
					<w1c-button aria-label="Close">x</w1c-button>
				</div>
				<w1c-toolbar slot="toolbar">
					<w1c-button>Back</w1c-button>
					<w1c-button>Forward</w1c-button>
					<w1c-button>Refresh</w1c-button>
				</w1c-toolbar>
				<h2>Quarterly Notes</h2>
				<p>A portable window primitive with slots for chrome, toolbar, content, and status text.</p>
				<w1c-statusbar slot="statusbar">3 objects</w1c-statusbar>
			</w1c-window>
		</div>
	`,
	argTypes: { theme: storyThemeArgType },
	args: { theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
