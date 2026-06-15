import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/menu-item';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Menu Item',
	tags: ['autodocs'],
	render: ({ checked, disabled }) => html`
		<div style="width: 220px;">
			<w1c-menu-item ?checked=${checked} ?disabled=${disabled}>
				Show hidden files
				<span slot="suffix">Ctrl+H</span>
			</w1c-menu-item>
		</div>
	`,
	argTypes: { checked: { control: 'boolean' }, disabled: { control: 'boolean' }, theme: storyThemeArgType },
	args: { checked: true, disabled: false, theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const Disabled: Story = { args: { disabled: true } };
