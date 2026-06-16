import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/link-cluster';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Link Cluster',
	tags: ['autodocs'],
	render: ({ heading, columns }) => html`
		<w1c-link-cluster heading=${heading} columns=${columns}>
			<ul>
				<li><a href="#">HTML Tricks</a></li>
				<li><a href="#">Button Wall</a></li>
				<li><a href="#">Zine Archive</a></li>
				<li><a href="#">Midi Shrine</a></li>
			</ul>
		</w1c-link-cluster>
	`,
	argTypes: {
		heading: { control: 'text' },
		columns: { control: 'select', options: ['auto', 'one', 'two'] },
		theme: storyThemeArgType
	},
	args: { heading: 'Neighborhood Links', columns: 'two', theme: 'geocities' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
