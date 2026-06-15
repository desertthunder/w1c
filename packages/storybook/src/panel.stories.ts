import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/panel';
import '@w1c/components/button';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Panel',
	tags: ['autodocs'],
	render: ({ variant }) => html`
		<div style="width: min(520px, 100%);">
			<w1c-panel variant=${variant}>
				<strong slot="header">System Properties</strong>
				<p style="margin: 0;">Grouped content with optional header and footer regions.</p>
				<div slot="footer" style="margin-inline-start: auto;">
					<w1c-button>Apply</w1c-button>
				</div>
			</w1c-panel>
		</div>
	`,
	argTypes: { variant: { control: 'select', options: ['raised', 'sunken', 'flat'] }, theme: storyThemeArgType },
	args: { variant: 'raised', theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
