import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/webring';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Webring',
	tags: ['autodocs'],
	render: ({ name }) => html`
		<w1c-webring name=${name}>
			Personal sites with small files and loud links.
			<a slot="previous" href="#">Previous</a>
			<a slot="home" href="#">Ring Home</a>
			<a slot="random" href="#">Random</a>
			<a slot="next" href="#">Next</a>
		</w1c-webring>
	`,
	argTypes: { name: { control: 'text' }, theme: storyThemeArgType },
	args: { name: 'Pixel Gardens Webring', theme: 'geocities' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
