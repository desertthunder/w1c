import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { resolveW1cAssetUrl, setW1cAssetBasePaths } from '@w1c/components/assets';
import '@w1c/components/icon';
import { W1C_ICON_METADATA, W1C_ICON_NAMES } from '@w1c/components/icons';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Icons',
	tags: ['autodocs'],
	render: () => html`
		<style>
			.icon-grid {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
				gap: var(--w1c-space-2, 8px);
				width: min(680px, 100%);
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
		<div class="icon-grid">
			${W1C_ICON_NAMES.map((name) => {
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
	`,
	argTypes: { theme: storyThemeArgType },
	args: { theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Gallery: Story = {};

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
