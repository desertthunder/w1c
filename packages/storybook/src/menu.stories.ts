import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/menu';
import '@w1c/components/menu-item';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Menu',
	tags: ['autodocs'],
	render: () => html`
		<w1c-menu label="File">
			<w1c-menu-item>New Window</w1c-menu-item>
			<w1c-menu-item checked>Show Toolbar</w1c-menu-item>
			<w1c-menu-item>
				Print
				<span slot="suffix">Ctrl+P</span>
			</w1c-menu-item>
			<w1c-menu-item disabled>Publish</w1c-menu-item>
		</w1c-menu>
	`,
	argTypes: { theme: storyThemeArgType },
	args: { theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
