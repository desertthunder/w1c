import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/tabs';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Tabs',
	tags: ['autodocs'],
	render: ({ selected }) => html`
		<div style="width: min(560px, 100%);">
			<w1c-tabs selected=${selected}>
				<button slot="tabs" type="button">General</button>
				<button slot="tabs" type="button">Security</button>
				<button slot="tabs" type="button">Advanced</button>
				<section>
					<p style="margin: 0;">General settings and summary details.</p>
				</section>
				<section>
					<p style="margin: 0;">Access controls and trusted sites.</p>
				</section>
				<section>
					<p style="margin: 0;">Connection and cache settings.</p>
				</section>
			</w1c-tabs>
		</div>
	`,
	argTypes: { selected: { control: { type: 'number', min: 0, max: 2 } }, theme: storyThemeArgType },
	args: { selected: 0, theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
