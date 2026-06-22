import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { expect } from 'vitest';
import '@w1c/components';
import { storyThemeArgType } from './story-themes';

const waitForUpdate = () => new Promise((resolve) => requestAnimationFrame(resolve));

const stateStyles = html`
	<style>
		.state-frame {
			display: grid;
			gap: var(--w1c-space-3, 12px);
			width: min(780px, 100%);
			color: var(--w1c-control-text, #111111);
			font: var(--w1c-control-font, 13px/1.2 var(--w1c-font-ui, sans-serif));
		}

		.state-panel {
			display: grid;
			gap: var(--w1c-space-2, 8px);
			min-width: 0;
			padding: var(--w1c-space-3, 12px);
			border: 1px solid var(--w1c-control-shadow, #808080);
			background: var(--w1c-window-content-background, #ffffff);
		}

		.state-panel h2,
		.state-panel p {
			margin: 0;
		}

		.state-row {
			display: flex;
			flex-wrap: wrap;
			gap: var(--w1c-space-2, 8px);
			align-items: center;
		}

		.state-narrow {
			width: 232px;
			max-width: 100%;
		}

		.state-dense {
			--w1c-space-1: 2px;
			--w1c-space-2: 4px;
			--w1c-space-3: 6px;
			--w1c-control-font: 12px/1.1 var(--w1c-font-ui, sans-serif);
			--w1c-button-padding: 1px 6px;
			--w1c-toolbar-gap: 2px;
			--w1c-statusbar-padding: 2px 4px;
		}

		.state-motion {
			--w1c-motion-duration-fast: 0ms;
			--w1c-motion-duration-normal: 0ms;
			--w1c-marquee-duration: 1ms;
			--w1c-blink-duration: 1ms;
		}

		.state-button-grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
			gap: var(--w1c-space-2, 8px);
		}
	</style>
`;

const meta = {
	title: 'Foundations/States',
	tags: ['autodocs'],
	argTypes: { theme: storyThemeArgType },
	args: { theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const KeyboardFocus: Story = {
	render: () => html`
		${stateStyles}
		<div class="state-frame">
			<section class="state-panel">
				<h2>Keyboard focus</h2>
				<div class="state-row">
					<w1c-button data-focus-target>Open</w1c-button>
					<w1c-input label="Search" value="theme tokens"></w1c-input>
					<w1c-checkbox checked>Include archived files</w1c-checkbox>
				</div>
			</section>
		</div>
	`,
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		await waitForUpdate();
		const target = canvasElement.querySelector<HTMLElement>('w1c-button[data-focus-target]');
		const button = target?.shadowRoot?.querySelector<HTMLButtonElement>('button');

		button?.focus();
		expect(target?.shadowRoot?.activeElement).toBe(button);
	}
};

export const Disabled: Story = {
	render: () => html`
		${stateStyles}
		<div class="state-frame">
			<section class="state-panel">
				<h2>Disabled</h2>
				<div class="state-button-grid">
					<w1c-button disabled>Install</w1c-button>
					<w1c-input label="Locked path" value="/system" disabled></w1c-input>
					<w1c-select label="Profile" disabled>
						<option>Default</option>
					</w1c-select>
					<w1c-checkbox disabled checked>Read only</w1c-checkbox>
					<w1c-menu-item disabled>Print selected records</w1c-menu-item>
				</div>
			</section>
		</div>
	`
};

export const LongLabel: Story = {
	render: () => html`
		${stateStyles}
		<div class="state-frame">
			<section class="state-panel">
				<h2>Long label</h2>
				<w1c-button
					>This command has a deliberately long label that should wrap without pushing chrome apart</w1c-button
				>
				<w1c-dialog title="Archive every selected document with metadata and thumbnails">
					<p>Dialog titles and actions should stay legible when copy runs long.</p>
					<div slot="actions" class="state-row">
						<w1c-button>Cancel</w1c-button>
						<w1c-button>Archive selected documents</w1c-button>
					</div>
				</w1c-dialog>
			</section>
		</div>
	`
};

export const NarrowViewport: Story = {
	render: () => html`
		${stateStyles}
		<div class="state-frame state-narrow">
			<w1c-document-browser location="/narrow/story">
				<w1c-toolbar slot="toolbar">
					<w1c-button><w1c-icon name="back" label="Back"></w1c-icon></w1c-button>
					<w1c-address-field label="Location" value="/narrow/story"></w1c-address-field>
				</w1c-toolbar>
				<nav slot="sidebar" aria-label="Small screen sections">
					<a href="#one">One</a>
				</nav>
				<p>Content remains usable in a narrow frame.</p>
				<w1c-statusbar slot="statusbar">232px preview</w1c-statusbar>
			</w1c-document-browser>
		</div>
	`
};

export const HighDensity: Story = {
	render: () => html`
		${stateStyles}
		<div class="state-frame state-dense">
			<w1c-window title="Dense admin surface">
				<w1c-toolbar slot="toolbar">
					<w1c-button>New</w1c-button>
					<w1c-button>Edit</w1c-button>
					<w1c-button>Delete</w1c-button>
					<w1c-button>Refresh</w1c-button>
				</w1c-toolbar>
				<w1c-data-table>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Status</th>
								<th>Updated</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Control panel</td>
								<td>Ready</td>
								<td>10:24</td>
							</tr>
							<tr>
								<td>Theme tokens</td>
								<td>Review</td>
								<td>10:28</td>
							</tr>
						</tbody>
					</table>
				</w1c-data-table>
				<w1c-statusbar slot="statusbar">2 rows</w1c-statusbar>
			</w1c-window>
		</div>
	`
};

export const ReducedMotion: Story = {
	render: () => html`
		${stateStyles}
		<div class="state-frame state-motion">
			<section class="state-panel">
				<h2>Reduced motion</h2>
				<w1c-marquee>System message: animation tokens are pinned near zero in this story.</w1c-marquee>
				<w1c-blink>Fallback text remains visible.</w1c-blink>
				<w1c-toast open>Saved without animated entrance.</w1c-toast>
			</section>
		</div>
	`
};
