import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components';
import '@w1c/components/source-viewer';
import { storyThemeArgType } from './story-themes';

const sample = `{
  "name": "w1c-source-viewer",
  "status": "ready",
  "surface": "full"
}`;

const meta = {
	title: 'Components/Source Viewer',
	tags: ['autodocs'],
	render: ({ lineNumbers }) => html`
		<style>
			.source-story {
				width: min(760px, 100%);
			}
		</style>
		<div class="source-story">
			<w1c-source-viewer filename="record.json" .text=${sample} ?line-numbers=${lineNumbers}>
				<w1c-toolbar slot="toolbar">
					<w1c-button>Copy</w1c-button>
					<w1c-button>Wrap</w1c-button>
					<w1c-divider orientation="vertical"></w1c-divider>
					<w1c-button>Save</w1c-button>
				</w1c-toolbar>
				<w1c-statusbar slot="statusbar">record.json · UTF-8</w1c-statusbar>
			</w1c-source-viewer>
		</div>
	`,
	argTypes: { lineNumbers: { control: 'boolean' }, theme: storyThemeArgType },
	args: { lineNumbers: true, theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
