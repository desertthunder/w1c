import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components';
import '@w1c/components/word-processor';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Word Processor',
	tags: ['autodocs'],
	render: ({ showDetails }) => html`
		<style>
			.processor-story {
				width: min(820px, 100%);
			}

			.processor-story h2 {
				margin-block-start: 0;
			}
		</style>
		<div class="processor-story">
			<w1c-word-processor ?show-details=${showDetails}>
				<w1c-toolbar slot="toolbar">
					<w1c-button>B</w1c-button>
					<w1c-button><i>I</i></w1c-button>
					<w1c-button><u>U</u></w1c-button>
					<w1c-divider orientation="vertical"></w1c-divider>
					<w1c-button>Print</w1c-button>
				</w1c-toolbar>
				<h2>Quarterly Notes</h2>
				<p>
					This shell gives document apps a toolbar, ruler, paper page, optional details pane, and statusbar without
					owning the editor state.
				</p>
				<pre slot="details">
words: 24
mode: draft
encoding: utf-8</pre
				>
				<w1c-statusbar slot="statusbar">Page 1, section 1</w1c-statusbar>
			</w1c-word-processor>
		</div>
	`,
	argTypes: { showDetails: { control: 'boolean' }, theme: storyThemeArgType },
	args: { showDetails: true, theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
