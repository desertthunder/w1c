import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/toast';
import '@w1c/components/button';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Toast',
	tags: ['autodocs'],
	render: ({ title, variant, closeable }) => html`
		<w1c-toast title=${title} variant=${variant} ?closeable=${closeable}>
			<span slot="icon" aria-hidden="true">!</span>
			File transfer completed.
			<w1c-button slot="actions">Open</w1c-button>
		</w1c-toast>
	`,
	argTypes: {
		title: { control: 'text' },
		variant: { control: 'select', options: ['status', 'info', 'warning', 'danger'] },
		closeable: { control: 'boolean' },
		theme: storyThemeArgType
	},
	args: { title: 'Upload', variant: 'status', closeable: true, theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
