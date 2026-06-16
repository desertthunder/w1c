import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/guestbook-panel';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Guestbook Panel',
	tags: ['autodocs'],
	render: ({ heading, subheading }) => html`
		<w1c-guestbook-panel heading=${heading} subheading=${subheading}>
			<article><strong>Casey:</strong> Your button wall is excellent.</article>
			<article><strong>Rina:</strong> Added you to my links page.</article>
			<a slot="actions" href="mailto:webmaster@example.com">Sign Guestbook</a>
			<a slot="actions" href="#">Read Archive</a>
			<span slot="footer">No spam, no frames, no popups.</span>
		</w1c-guestbook-panel>
	`,
	argTypes: { heading: { control: 'text' }, subheading: { control: 'text' }, theme: storyThemeArgType },
	args: { heading: 'Guestbook', subheading: 'Leave a note before you go.', theme: 'geocities' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
