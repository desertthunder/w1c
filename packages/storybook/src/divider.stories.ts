import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/divider';
import '@w1c/components/button';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Divider',
	tags: ['autodocs'],
	render: ({ orientation, label }) => html`
		<style>
			.divider-story {
				display: flex;
				align-items: stretch;
				gap: var(--w1c-space-2, 8px);
				width: min(460px, 100%);
				min-height: 80px;
			}

			.divider-stack {
				display: grid;
				gap: var(--w1c-space-2, 8px);
				width: min(460px, 100%);
			}
		</style>
		${orientation === 'vertical'
			? html`
					<div class="divider-story">
						<w1c-button>Cut</w1c-button>
						<w1c-divider orientation="vertical">${label}</w1c-divider>
						<w1c-button>Copy</w1c-button>
						<w1c-button>Paste</w1c-button>
					</div>
				`
			: html`
					<div class="divider-stack">
						<w1c-button>General</w1c-button>
						<w1c-divider>${label}</w1c-divider>
						<w1c-button>Advanced</w1c-button>
					</div>
				`}
	`,
	argTypes: {
		orientation: { control: 'select', options: ['horizontal', 'vertical'] },
		label: { control: 'text' },
		theme: storyThemeArgType
	},
	args: { orientation: 'horizontal', label: 'Options', theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
