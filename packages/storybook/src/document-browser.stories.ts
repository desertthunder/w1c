import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components';
import '@w1c/components/document-browser';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Document Browser',
	tags: ['autodocs'],
	render: ({ hideSidebar }) => html`
		<style>
			.browser-story {
				width: min(760px, 100%);
			}

			.browser-story ul {
				margin: 0;
				padding-inline-start: 18px;
			}

			.browser-story h3,
			.browser-story p {
				margin-block-start: 0;
			}
		</style>
		<div class="browser-story">
			<w1c-document-browser location="/docs/reference/" ?hide-sidebar=${hideSidebar}>
				<w1c-toolbar slot="toolbar">
					<w1c-button>Back</w1c-button>
					<w1c-button>Forward</w1c-button>
					<w1c-button>Refresh</w1c-button>
					<w1c-address-field label="Location" value="/docs/reference/"></w1c-address-field>
				</w1c-toolbar>
				<nav slot="sidebar" aria-label="Bookmarks">
					<ul>
						<li><a href="#intro">Introduction</a></li>
						<li><a href="#api">API</a></li>
						<li><a href="#notes">Notes</a></li>
					</ul>
				</nav>
				<h3 id="intro">Reference Manual</h3>
				<p>Document content stays regular HTML inside a framed browser surface.</p>
				<w1c-data-list compact>
					<span>Component catalog</span>
					<span>Theme notes</span>
					<span>Icon metadata</span>
				</w1c-data-list>
				<w1c-statusbar slot="statusbar">3 bookmarks</w1c-statusbar>
			</w1c-document-browser>
		</div>
	`,
	argTypes: { hideSidebar: { control: 'boolean' }, theme: storyThemeArgType },
	args: { hideSidebar: false, theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
