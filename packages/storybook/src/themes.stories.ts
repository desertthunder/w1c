import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/window';
import '@w1c/components/toolbar';
import '@w1c/components/button';
import '@w1c/components/statusbar';
import '@w1c/components/themes/windows-95.css';
import '@w1c/components/themes/gnome2.css';
import '@w1c/components/themes/ubuntu-810.css';
import '@w1c/components/themes/classic-mac.css';
import '@w1c/components/themes/web-1.css';
import '@w1c/components/themes/geocities.css';

const themes = [
	{ id: 'gnome2', label: 'GNOME 2', importPath: '@w1c/components/themes/gnome2.css' },
	{ id: 'ubuntu-810', label: 'Ubuntu 8.10', importPath: '@w1c/components/themes/ubuntu-810.css' },
	{ id: 'windows-95', label: 'Windows 95', importPath: '@w1c/components/themes/windows-95.css' },
	{ id: 'classic-mac', label: 'Classic Mac', importPath: '@w1c/components/themes/classic-mac.css' },
	{ id: 'web-1', label: 'Web 1.0', importPath: '@w1c/components/themes/web-1.css' },
	{ id: 'geocities', label: 'Geocities', importPath: '@w1c/components/themes/geocities.css' }
] as const;

const meta = {
	title: 'Foundations/Themes',
	tags: ['autodocs'],
	render: () => html`
		<style>
			.theme-grid {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
				gap: 16px;
				width: min(1000px, 100%);
			}

			.theme-swatch {
				display: grid;
				gap: 8px;
				padding: 12px;
				color: var(--w1c-control-text, #111111);
				background:
					var(--w1c-desktop-background-image, none),
					var(--w1c-desktop-background, var(--w1c-window-content-background, #ffffff));
				background-size: var(--w1c-desktop-background-size, auto);
				border: 1px solid var(--w1c-control-shadow, #808080);
				font: var(--w1c-control-font, 13px/1.2 var(--w1c-font-ui, sans-serif));
			}

			.theme-swatch code {
				overflow-wrap: anywhere;
				color: var(--w1c-control-text, #111111);
				background: var(--w1c-window-content-background, #ffffff);
				border: 1px solid var(--w1c-control-shadow, #808080);
				padding: 4px;
				font: 12px/1.3 var(--w1c-font-mono, monospace);
			}
		</style>
		<div class="theme-grid">
			${themes.map(
				(theme) => html`
					<section class="theme-swatch" data-w1c-theme=${theme.id}>
						<w1c-window title=${theme.label}>
							<div slot="controls">
								<w1c-button aria-label="Minimize">_</w1c-button>
								<w1c-button aria-label="Close">x</w1c-button>
							</div>
							<w1c-toolbar slot="toolbar">
								<w1c-button>File</w1c-button>
								<w1c-button>Edit</w1c-button>
							</w1c-toolbar>
							<p>${theme.label} preview</p>
							<w1c-statusbar slot="statusbar">
								<span>${theme.id}</span>
							</w1c-statusbar>
						</w1c-window>
						<code>${theme.importPath}</code>
					</section>
				`
			)}
		</div>
	`
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Catalog: Story = {};
