import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/data-list';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Data List',
	tags: ['autodocs'],
	render: ({ compact }) => html`
		<style>
			.list-story {
				width: min(520px, 100%);
			}

			.list-story a,
			.list-story button {
				border: 0;
				font: inherit;
				text-align: start;
				cursor: default;
			}
		</style>
		<div class="list-story">
			<w1c-data-list ?compact=${compact}>
				<strong slot="header">Endpoints</strong>
				<button type="button" aria-selected="true">
					<span>/api/documents</span>
					<span>200 OK</span>
				</button>
				<button type="button">
					<span>/api/search</span>
					<span>304 Cached</span>
				</button>
				<a href="#upload">
					<span>/api/upload</span>
					<span>401 Locked</span>
				</a>
				<span slot="footer">3 routes</span>
			</w1c-data-list>
		</div>
	`,
	argTypes: { compact: { control: 'boolean' }, theme: storyThemeArgType },
	args: { compact: false, theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
