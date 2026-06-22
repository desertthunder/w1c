import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { expect } from 'vitest';
import '@w1c/components';
import '@w1c/components/themes/windows-95.css';
import '@w1c/components/themes/gnome2.css';
import '@w1c/components/themes/ubuntu-810.css';
import '@w1c/components/themes/classic-mac.css';
import '@w1c/components/themes/web-1.css';
import '@w1c/components/themes/geocities.css';

const themes = [
	{ id: 'gnome2', label: 'GNOME 2' },
	{ id: 'ubuntu-810', label: 'Ubuntu 8.10' },
	{ id: 'windows-95', label: 'Windows 95' },
	{ id: 'classic-mac', label: 'Classic Mac' },
	{ id: 'web-1', label: 'Web 1.0' },
	{ id: 'geocities', label: 'Geocities' }
] as const;

const waitForUpdate = () => new Promise((resolve) => requestAnimationFrame(resolve));

const coverageStyles = html`
	<style>
		.coverage-stack {
			display: grid;
			gap: 16px;
			width: min(1040px, 100%);
		}

		.coverage-grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
			gap: 12px;
			align-items: start;
		}

		.coverage-card {
			display: grid;
			gap: 8px;
			min-width: 0;
			padding: 10px;
			color: var(--w1c-control-text, #111111);
			background: var(--w1c-window-content-background, #ffffff);
			border: 1px solid var(--w1c-control-shadow, #808080);
			font: var(--w1c-control-font, 13px/1.2 var(--w1c-font-ui, sans-serif));
		}

		.coverage-card h3,
		.coverage-card p {
			margin: 0;
		}

		.coverage-card h3 {
			font: var(--w1c-titlebar-font, 700 13px/1.2 var(--w1c-font-heading, sans-serif));
		}

		.coverage-row {
			display: flex;
			flex-wrap: wrap;
			gap: 8px;
			align-items: center;
		}

		.coverage-narrow {
			width: 180px;
		}

		.coverage-dense {
			--w1c-space-1: 2px;
			--w1c-space-2: 4px;
			--w1c-space-3: 6px;
			--w1c-button-padding: 1px 8px;
			--w1c-control-font: 12px/1.1 var(--w1c-font-ui, sans-serif);
		}

		.coverage-reduced-motion {
			--w1c-motion-duration-fast: 0ms;
			--w1c-motion-duration-normal: 0ms;
			--w1c-marquee-duration: 1ms;
		}

		.coverage-theme {
			min-height: 100%;
			color: var(--w1c-control-text, #111111);
			background:
				var(--w1c-desktop-background-image, none),
				var(--w1c-desktop-background, var(--w1c-window-content-background, #ffffff));
			background-size: var(--w1c-desktop-background-size, auto);
		}

		.coverage-stage {
			position: relative;
			min-height: 260px;
			padding: 12px;
			border: 1px dotted var(--w1c-control-shadow, #808080);
		}

		.coverage-stage w1c-window {
			width: 320px;
		}
	</style>
`;

const meta = { title: 'Foundations/Component Matrix', tags: ['autodocs'] } satisfies Meta;

export default meta;

type Story = StoryObj;

export const StateCoverage: Story = {
	render: () => html`
		${coverageStyles}
		<div class="coverage-stack" data-coverage="state">
			<div class="coverage-grid">
				<section class="coverage-card" data-state="default">
					<h3>Default</h3>
					<w1c-button>Open folder</w1c-button>
					<w1c-input label="Path" value="/home/w1c"></w1c-input>
				</section>

				<section class="coverage-card" data-state="disabled">
					<h3>Disabled</h3>
					<w1c-button disabled>Save</w1c-button>
					<w1c-checkbox disabled checked>Read-only</w1c-checkbox>
				</section>

				<section class="coverage-card" data-state="focused">
					<h3>Focused</h3>
					<w1c-button data-focus-target>Focused command</w1c-button>
					<w1c-validation-message tone="info">Focus is moved here by the play check.</w1c-validation-message>
				</section>

				<section class="coverage-card" data-state="long-label">
					<h3>Long label</h3>
					<w1c-button>This command has a deliberately long label for wrapping pressure</w1c-button>
					<w1c-menu-item>Export every selected document with metadata</w1c-menu-item>
				</section>

				<section class="coverage-card coverage-narrow" data-state="narrow-viewport">
					<h3>Narrow viewport</h3>
					<w1c-window title="Narrow">
						<p>Content stays readable in a constrained preview.</p>
					</w1c-window>
				</section>

				<section class="coverage-card coverage-dense" data-state="high-density">
					<h3>High density</h3>
					<w1c-toolbar>
						<w1c-button>Cut</w1c-button>
						<w1c-button>Copy</w1c-button>
						<w1c-button>Paste</w1c-button>
					</w1c-toolbar>
					<w1c-statusbar>Compact controls</w1c-statusbar>
				</section>

				<section class="coverage-card coverage-reduced-motion" data-state="reduced-motion">
					<h3>Reduced motion</h3>
					<w1c-marquee>Motion-sensitive previews can pause or slow movement.</w1c-marquee>
					<w1c-blink>Accessible fallback text remains visible.</w1c-blink>
				</section>

				<section class="coverage-card" data-state="slotted-content">
					<h3>Slotted content</h3>
					<w1c-dialog title="Slots">
						<w1c-icon slot="icon" name="info" label="Information"></w1c-icon>
						<p>Body, icon, and actions are slotted.</p>
						<div slot="actions">
							<w1c-button>Cancel</w1c-button>
							<w1c-button>OK</w1c-button>
						</div>
					</w1c-dialog>
				</section>

				<section class="coverage-card" data-state="theme-variants">
					<h3>Theme variants</h3>
					<div class="coverage-row">
						<w1c-badge-88x31 label="W1C">W1C</w1c-badge-88x31>
						<w1c-visitor-counter value="1999"></w1c-visitor-counter>
						<w1c-desktop-icon label="Read Me"></w1c-desktop-icon>
					</div>
				</section>
			</div>
		</div>
	`,
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		await waitForUpdate();
		expect(canvasElement.querySelectorAll('[data-state]').length).toBe(9);
		expect(canvasElement.querySelector('w1c-dialog')).toBeTruthy();

		const target = canvasElement.querySelector<HTMLElement>('w1c-button[data-focus-target]');
		target?.shadowRoot?.querySelector<HTMLButtonElement>('button')?.focus();
		expect(target?.shadowRoot?.activeElement).toBe(target?.shadowRoot?.querySelector('button'));
	}
};

export const InteractionCoverage: Story = {
	render: () => html`
		${coverageStyles}
		<div class="coverage-stack" data-coverage="interaction">
			<div class="coverage-grid">
				<section class="coverage-card" data-interaction="menu">
					<h3>Menu</h3>
					<w1c-menu label="File">
						<w1c-menu-item>Open</w1c-menu-item>
						<w1c-menu-item checked>Autosave</w1c-menu-item>
						<w1c-menu-item disabled>Print</w1c-menu-item>
					</w1c-menu>
				</section>

				<section class="coverage-card" data-interaction="tabs">
					<h3>Tabs</h3>
					<w1c-tabs>
						<button slot="tabs">General</button>
						<button slot="tabs">Advanced</button>
						<button slot="tabs" disabled>Locked</button>
						<div>General settings</div>
						<div>Advanced settings</div>
						<div>Locked settings</div>
					</w1c-tabs>
				</section>

				<section class="coverage-card" data-interaction="dialog">
					<h3>Dialog</h3>
					<w1c-dialog title="Confirm delete" variant="alert">
						<p>Remove the selected shortcut?</p>
						<div slot="actions">
							<w1c-button>Cancel</w1c-button>
							<w1c-button>Delete</w1c-button>
						</div>
					</w1c-dialog>
				</section>

				<section class="coverage-card" data-interaction="window-controls">
					<h3>Window controls</h3>
					<w1c-window title="Controls">
						<div slot="controls" class="coverage-row">
							<w1c-button aria-label="Minimize">_</w1c-button>
							<w1c-button aria-label="Maximize">□</w1c-button>
							<w1c-button aria-label="Close">x</w1c-button>
						</div>
						<p>Control slots stay aligned with the titlebar.</p>
					</w1c-window>
				</section>

				<section class="coverage-card" data-interaction="drag-resize">
					<h3>Drag and resize handles</h3>
					<div class="coverage-stage">
						<w1c-window title="Move me" movable resizable x="12" y="12" width="300" height="190" min-width="260">
							<p>Titlebar drag and resize handle are enabled.</p>
						</w1c-window>
					</div>
				</section>
			</div>
		</div>
	`,
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		await waitForUpdate();

		const tabs = canvasElement.querySelector('w1c-tabs') as HTMLElement & { selected: number };
		const tabButtons = tabs.querySelectorAll<HTMLButtonElement>('[slot="tabs"]');
		tabButtons[1]?.click();
		await waitForUpdate();
		expect(tabs.selected).toBe(1);

		const menuItem = canvasElement.querySelector('w1c-menu-item:not([disabled])');
		expect(menuItem?.shadowRoot?.querySelector('[role="menuitem"]')).toBeTruthy();
		expect(canvasElement.querySelector('w1c-window[resizable]')).toBeTruthy();
	}
};

export const ThemeSmoke: Story = {
	render: () => html`
		${coverageStyles}
		<div class="coverage-stack" data-coverage="theme-smoke">
			<div class="coverage-grid">
				${themes.map(
					(theme) => html`
						<section class="coverage-card coverage-theme" data-w1c-theme=${theme.id} data-theme-smoke=${theme.id}>
							<w1c-window title=${theme.label}>
								<span slot="icon" aria-hidden="true">W</span>
								<div slot="controls" class="coverage-row">
									<w1c-button aria-label="Minimize">_</w1c-button>
									<w1c-button aria-label="Close">x</w1c-button>
								</div>
								<w1c-toolbar slot="toolbar">
									<w1c-button>File</w1c-button>
									<w1c-button>Edit</w1c-button>
								</w1c-toolbar>
								<p>${theme.label} smoke preview</p>
								<w1c-statusbar slot="statusbar">${theme.id}</w1c-statusbar>
							</w1c-window>
						</section>
					`
				)}
			</div>
		</div>
	`,
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		await waitForUpdate();

		for (const theme of themes) {
			const section = canvasElement.querySelector(`[data-theme-smoke="${theme.id}"]`);
			expect(section).toBeTruthy();
			expect(section?.querySelector('w1c-window')?.getAttribute('title')).toBe(theme.label);
			expect(section?.querySelector('w1c-toolbar')).toBeTruthy();
			expect(section?.querySelector('w1c-statusbar')?.textContent?.trim()).toBe(theme.id);
		}
	}
};
