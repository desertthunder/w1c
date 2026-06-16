import { html } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components';
import { moveResize, createResizeSession } from '@w1c/dnd';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Window',
	tags: ['autodocs'],
	render: () => html`
		<style>
			.story-frame {
				width: min(680px, 100%);
				min-height: 420px;
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

			.window-row {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
				gap: var(--w1c-space-4, 16px);
				align-items: start;
			}

			.window-stage {
				position: relative;
				min-height: 360px;
				padding: var(--w1c-space-3, 12px);
				border: 1px dotted var(--w1c-border-color, #808080);
				background:
					linear-gradient(90deg, rgb(0 0 0 / 0.04) 1px, transparent 1px),
					linear-gradient(rgb(0 0 0 / 0.04) 1px, transparent 1px);
				background-size: 24px 24px;
			}

			.window-stage w1c-window {
				width: 340px;
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

export const DraggableAndResizable: Story = {
	render: () => html`
		<div class="story-frame window-stage">
			<w1c-window
				title="Mailbox"
				movable
				resizable
				x="28"
				y="18"
				width="380"
				height="250"
				min-width="300"
				min-height="210">
				<span slot="icon" aria-hidden="true">M</span>
				<div slot="controls" class="window-controls">
					<w1c-button aria-label="Minimize">_</w1c-button>
					<w1c-button aria-label="Maximize">□</w1c-button>
					<w1c-button aria-label="Close">x</w1c-button>
				</div>
				<w1c-toolbar slot="toolbar">
					<w1c-button>Reply</w1c-button>
					<w1c-button>Forward</w1c-button>
				</w1c-toolbar>
				<h2>Drag the titlebar</h2>
				<p>The resize handle clamps to the configured minimum size.</p>
				<w1c-statusbar slot="statusbar">Touch and mouse input</w1c-statusbar>
			</w1c-window>
		</div>
	`
};

export const StringBackedGeometry: Story = {
	render: () => {
		const windowRef = createRef<
			HTMLElement & { x: unknown; y: unknown; width: unknown; height: unknown; minWidth: unknown; minHeight: unknown }
		>();

		queueMicrotask(() => {
			const element = windowRef.value;

			if (!element) {
				return;
			}

			element.x = '24';
			element.y = '16';
			element.width = '380';
			element.height = '250';
			element.minWidth = '300';
			element.minHeight = '210';
		});

		return html`
			<div class="story-frame window-stage">
				<w1c-window ${ref(windowRef)} title="Framework template" movable resizable>
					<span slot="icon" aria-hidden="true">F</span>
					<h2>String-backed geometry</h2>
					<p>This story simulates framework templates that assign numeric custom-element properties as strings.</p>
					<w1c-statusbar slot="statusbar">Drag and resize should stay proportional</w1c-statusbar>
				</w1c-window>
			</div>
		`;
	}
};

export const DisabledMovement: Story = {
	render: () => html`
		<div class="story-frame window-row">
			<w1c-window title="Pinned note" resizable width="300" height="220">
				<p>This window can resize, but its titlebar does not start a move session.</p>
			</w1c-window>
			<w1c-window title="Fixed dialog" movable="false" width="300">
				<p>No movement or resize attributes are set, so the shell stays static.</p>
			</w1c-window>
		</div>
	`
};

export const ConstrainedSize: Story = {
	render: () => {
		const size = moveResize(
			createResizeSession(1, { x: 0, y: 0 }, { width: 280, height: 190 }),
			{ x: -80, y: 160 },
			{ minWidth: 260, minHeight: 180, maxHeight: 300 }
		);

		return html`
			<div class="story-frame window-row">
				<w1c-window
					title="Constrained"
					resizable
					width=${size.width}
					height=${size.height}
					min-width="260"
					min-height="180"
					max-height="300">
					<p>The story uses the same pure resize helper that the component consumes.</p>
					<w1c-statusbar slot="statusbar">${size.width} x ${size.height}</w1c-statusbar>
				</w1c-window>
			</div>
		`;
	}
};
