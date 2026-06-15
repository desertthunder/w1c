import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/desktop-icon';
import '@w1c/components/icon';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Desktop Icon',
	tags: ['autodocs'],
	render: ({ label, selected }) => html`
		<style>
			.desktop-story {
				display: inline-grid;
				grid-template-columns: repeat(3, auto);
				gap: var(--w1c-space-3, 12px);
				padding: var(--w1c-space-4, 16px);
				background-color: var(--w1c-desktop-background, #0b7f7f);
				background-image: var(--w1c-desktop-background-image, none);
				background-size: var(--w1c-desktop-background-size, auto);
			}
		</style>
		<div class="desktop-story">
			<w1c-desktop-icon label=${label} ?selected=${selected}>
				<w1c-icon slot="icon" name="folder" label="Folder"></w1c-icon>
				${label}
			</w1c-desktop-icon>
			<w1c-desktop-icon label="Computer">
				<w1c-icon slot="icon" name="computer" label="Computer"></w1c-icon>
				Computer
			</w1c-desktop-icon>
			<w1c-desktop-icon label="Read Me">
				<w1c-icon slot="icon" name="document" label="Document"></w1c-icon>
				Read Me
			</w1c-desktop-icon>
		</div>
	`,
	argTypes: { label: { control: 'text' }, selected: { control: 'boolean' }, theme: storyThemeArgType },
	args: { label: 'Home Folder', selected: false, theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const Selected: Story = { args: { selected: true } };
