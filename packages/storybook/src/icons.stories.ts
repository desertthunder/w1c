import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
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
				grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
				gap: var(--w1c-space-2, 8px);
				width: min(680px, 100%);
			}

			.icon-swatch {
				display: grid;
				grid-template-columns: auto minmax(0, 1fr);
				align-items: center;
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

			.icon-swatch span {
				min-width: 0;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		</style>
		<div class="icon-grid">
			${W1C_ICON_NAMES.map((name) => {
				const metadata = W1C_ICON_METADATA[name];

				return html`
					<div class="icon-swatch" title=${`${metadata.category}: ${metadata.name}`}>
						<w1c-icon name=${name} label=${metadata.name}></w1c-icon>
						<span>${metadata.name}</span>
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
