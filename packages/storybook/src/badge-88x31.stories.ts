import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/badge-88x31';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Badge 88x31',
	tags: ['autodocs'],
	render: ({ label, variant, href }) => html`
		<w1c-badge-88x31 href=${href} variant=${variant}>
			<span slot="icon">W1C</span>
			${label}
		</w1c-badge-88x31>
	`,
	argTypes: {
		label: { control: 'text' },
		href: { control: 'text' },
		variant: { control: 'select', options: ['split', 'plain', 'warning'] },
		theme: storyThemeArgType
	},
	args: { label: 'Web 1.0', href: '#', variant: 'split', theme: 'geocities' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};

export const Variants: Story = {
	render: () => html`
		<div style="display: flex; flex-wrap: wrap; gap: var(--w1c-space-2, 8px);">
			<w1c-badge-88x31 href="#">
				<span slot="icon">W1C</span>
				Web 1.0
			</w1c-badge-88x31>
			<w1c-badge-88x31 variant="plain">My Site</w1c-badge-88x31>
			<w1c-badge-88x31 variant="warning">Build Zone</w1c-badge-88x31>
		</div>
	`
};
