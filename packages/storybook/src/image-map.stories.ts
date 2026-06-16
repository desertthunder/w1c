import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/image-map';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Image Map',
	tags: ['autodocs'],
	render: ({ caption }) => html`
		<style>
			.image-map-hotspot {
				display: grid;
				place-items: center;
				padding: 2px;
			}
		</style>
		<w1c-image-map alt="Sticker sheet" caption=${caption}>
			<a class="image-map-hotspot" href="#" style="--x: 8%; --y: 14%; --w: 30%; --h: 18%;">Music</a>
			<a class="image-map-hotspot" href="#" style="--x: 54%; --y: 48%; --w: 34%; --h: 22%;">Links</a>
		</w1c-image-map>
	`,
	argTypes: { caption: { control: 'text' }, theme: storyThemeArgType },
	args: { caption: 'Click a district.', theme: 'geocities' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
