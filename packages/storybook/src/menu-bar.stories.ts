import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/menu-bar';
import '@w1c/components/menu-item';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Menu Bar',
	tags: ['autodocs'],
	render: () => html`
		<div style="width: min(520px, 100%);">
			<w1c-menu-bar>
				<w1c-menu-item>File</w1c-menu-item>
				<w1c-menu-item>Edit</w1c-menu-item>
				<w1c-menu-item>View</w1c-menu-item>
				<w1c-menu-item>Help</w1c-menu-item>
			</w1c-menu-bar>
		</div>
	`,
	argTypes: { theme: storyThemeArgType },
	args: { theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
