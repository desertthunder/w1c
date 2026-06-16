import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/tiled-background';
import '@w1c/components/marquee';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Tiled Background',
	tags: ['autodocs'],
	render: ({ color, tileSize }) => html`
		<w1c-tiled-background color=${color} tile-size=${tileSize}>
			<div style="display: grid; gap: var(--w1c-space-3, 12px);">
				<w1c-marquee pause-on-hover>Welcome to my homepage.</w1c-marquee>
				<p style="margin: 0; padding: var(--w1c-space-3, 12px); background: #ffffcc; border: 3px ridge #ff66cc;">
					This section sits on a repeated background.
				</p>
			</div>
		</w1c-tiled-background>
	`,
	argTypes: { color: { control: 'color' }, tileSize: { control: 'text' }, theme: storyThemeArgType },
	args: { color: '#000066', tileSize: '16px 16px', theme: 'geocities' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
