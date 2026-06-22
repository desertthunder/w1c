import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { resolveW1cAssetUrl, setW1cAssetBasePaths } from '@w1c/components/assets';
import '@w1c/components/icon';
import { W1C_ICON_METADATA, W1C_ICON_NAMES, W1C_ICONS, type IconData } from '@w1c/components/icons';
import { storyThemeArgType } from './story-themes';

const iconCategories = [...new Set(W1C_ICON_NAMES.map((name) => W1C_ICON_METADATA[name].category))].sort();

const renderIconData = (icon: IconData, label: string) => {
	const width = icon.width ?? 16;
	const height = icon.height ?? 16;
	const left = icon.left ?? 0;
	const top = icon.top ?? 0;

	return html`
		<svg
			viewBox=${`${left} ${top} ${width} ${height}`}
			width=${width}
			height=${height}
			role="img"
			aria-label=${label}
			fill="currentColor"
			focusable="false">
			${unsafeSVG(icon.body)}
		</svg>
	`;
};

const meta = {
	title: 'Components/Icons',
	tags: ['autodocs'],
	render: () => html`
		<style>
			.icon-catalog {
				display: grid;
				gap: var(--w1c-space-4, 16px);
				width: min(980px, 100%);
			}

			.icon-category {
				display: grid;
				gap: var(--w1c-space-2, 8px);
				min-width: 0;
			}

			.icon-category h3 {
				margin: 0;
				padding: var(--w1c-space-1, 4px) var(--w1c-space-2, 8px);
				color: var(--w1c-active-titlebar-text, #ffffff);
				background: var(--w1c-active-titlebar, #000080);
				font: var(--w1c-titlebar-font, 700 13px/1.2 'MS Sans Serif', Tahoma, sans-serif);
			}

			.icon-grid {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
				gap: var(--w1c-space-2, 8px);
				width: 100%;
			}

			.icon-swatch {
				display: grid;
				grid-template-columns: auto minmax(0, 1fr);
				align-items: start;
				gap: var(--w1c-space-2, 8px);
				padding: var(--w1c-space-2, 8px);
				border: 1px solid var(--w1c-control-shadow, #808080);
				color: var(--w1c-control-text, #111111);
				background: var(--w1c-window-content-background, #ffffff);
				font: var(--w1c-control-font, 13px/1.2 'MS Sans Serif', Tahoma, sans-serif);
			}

			.icon-swatch w1c-icon {
				--w1c-icon-size: 24px;
			}

			.icon-swatch strong,
			.icon-swatch small {
				min-width: 0;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.icon-swatch span {
				display: grid;
				min-width: 0;
				gap: 2px;
			}

			.icon-swatch small {
				color: color-mix(in srgb, var(--w1c-control-text, #111111), transparent 24%);
			}
		</style>
		<div class="icon-catalog">
			${iconCategories.map(
				(category) => html`
					<section class="icon-category">
						<h3>${category}</h3>
						<div class="icon-grid">
							${W1C_ICON_NAMES.filter((name) => W1C_ICON_METADATA[name].category === category).map((name) => {
								const metadata = W1C_ICON_METADATA[name];

								return html`
									<div class="icon-swatch" title=${`${metadata.category}: ${metadata.name}`}>
										<w1c-icon name=${name} label=${metadata.name}></w1c-icon>
										<span>
											<strong>${metadata.name}</strong>
											<small>${metadata.sourceReferenceProject}</small>
											<small>${metadata.license}</small>
										</span>
									</div>
								`;
							})}
						</div>
					</section>
				`
			)}
		</div>
	`,
	argTypes: { theme: storyThemeArgType },
	args: { theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Gallery: Story = {};

export const IconDataRendering: Story = {
	render: () => {
		const examples = ['folder', 'warning', 'web-browser', 'bold'] as const;
		const customIcon: IconData = {
			width: 16,
			height: 16,
			body: '<path d="M2 2h12v12H2z"/><path d="M4 4h8v8H4z" fill="var(--w1c-window-content-background, #fff)"/><path d="M6 6h4v4H6z"/>'
		};

		return html`
			<style>
				.icon-data-story {
					display: grid;
					gap: var(--w1c-space-3, 12px);
					width: min(760px, 100%);
					color: var(--w1c-control-text, #111111);
					font: var(--w1c-control-font, 13px/1.2 'MS Sans Serif', Tahoma, sans-serif);
				}

				.icon-data-grid {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
					gap: var(--w1c-space-2, 8px);
				}

				.icon-data-card {
					display: grid;
					grid-template-columns: auto minmax(0, 1fr);
					gap: var(--w1c-space-2, 8px);
					align-items: center;
					padding: var(--w1c-space-2, 8px);
					border: 1px solid var(--w1c-control-shadow, #808080);
					background: var(--w1c-window-content-background, #ffffff);
				}

				.icon-data-card svg,
				.icon-data-card w1c-icon {
					--w1c-icon-size: 32px;
					width: 32px;
					height: 32px;
				}

				.icon-data-card code {
					min-width: 0;
					overflow-wrap: anywhere;
					font: var(--w1c-font-size-1, 12px) / var(--w1c-line-normal, 1.35) var(--w1c-font-mono, monospace);
				}
			</style>
			<div class="icon-data-story">
				<div class="icon-data-grid">
					${examples.map(
						(name) => html`
							<div class="icon-data-card">
								${renderIconData(W1C_ICONS[name], `${name} IconData`)}
								<code>renderIconData(W1C_ICONS['${name}'])</code>
							</div>
						`
					)}
					<div class="icon-data-card">
						<w1c-icon .icon=${customIcon} label="Custom IconData"></w1c-icon>
						<code>&lt;w1c-icon .icon=$&#123;customIcon&#125;&gt;</code>
					</div>
				</div>
			</div>
		`;
	}
};

export const AssetBasePaths: Story = {
	render: () => {
		setW1cAssetBasePaths({ icons: '/assets/w1c/icons', sprites: '/assets/w1c/sprites', images: '/assets/w1c/images' });

		const rows = [
			['icons', 'folder.svg', resolveW1cAssetUrl('icons', 'folder.svg')],
			['sprites', 'system.svg#close', resolveW1cAssetUrl('sprites', 'system.svg#close')],
			['images', 'tiles/stars.gif', resolveW1cAssetUrl('images', 'tiles/stars.gif')]
		];

		return html`
			<style>
				.asset-paths {
					display: grid;
					gap: var(--w1c-space-2, 8px);
					width: min(720px, 100%);
					color: var(--w1c-control-text, #111111);
					font: var(--w1c-control-font, 13px/1.2 'MS Sans Serif', Tahoma, sans-serif);
				}

				.asset-path-row {
					display: grid;
					grid-template-columns: 96px minmax(0, 1fr);
					gap: var(--w1c-space-2, 8px);
					align-items: start;
					padding: var(--w1c-space-2, 8px);
					border: 1px solid var(--w1c-control-shadow, #808080);
					background: var(--w1c-window-content-background, #ffffff);
				}

				.asset-path-row code {
					overflow-wrap: anywhere;
					font: var(--w1c-font-size-1, 12px) / var(--w1c-line-normal, 1.35) var(--w1c-font-mono, monospace);
				}
			</style>
			<div class="asset-paths">
				${rows.map(
					([kind, source, resolved]) => html`
						<div class="asset-path-row">
							<strong>${kind}</strong>
							<code>${source} -> ${resolved}</code>
						</div>
					`
				)}
			</div>
		`;
	}
};
