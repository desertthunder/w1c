import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/badge-88x31';
import '@w1c/components/visitor-counter';
import '@w1c/components/guestbook-panel';
import '@w1c/components/webring';
import '@w1c/components/under-construction';
import '@w1c/components/marquee';
import '@w1c/components/blink';
import '@w1c/components/tiled-background';
import '@w1c/components/link-cluster';
import '@w1c/components/last-updated';
import '@w1c/components/image-map';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Showcases/Geocities Page',
	tags: ['autodocs'],
	render: () => html`
		<style>
			.geocities-page {
				display: grid;
				gap: var(--w1c-space-4, 16px);
				max-width: 860px;
			}

			.geocities-row {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				gap: var(--w1c-space-2, 8px);
			}

			.geocities-grid {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
				gap: var(--w1c-space-4, 16px);
			}

			.geocities-stack {
				display: grid;
				gap: var(--w1c-space-3, 12px);
			}

			.geocities-map-hotspot {
				display: grid;
				place-items: center;
				padding: 2px;
			}
		</style>
		<div class="geocities-page">
			<w1c-tiled-background>
				<div class="geocities-stack">
					<w1c-marquee pause-on-hover>Welcome to the W1C Geocities component room.</w1c-marquee>
					<div class="geocities-row">
						<w1c-badge-88x31 href="#">
							<span slot="icon">W1C</span>
							Web 1.0
						</w1c-badge-88x31>
						<w1c-badge-88x31 variant="warning">Build Zone</w1c-badge-88x31>
						<w1c-visitor-counter value="1337" digits="6"></w1c-visitor-counter>
						<w1c-last-updated datetime="1999-08-24">August 24, 1999</w1c-last-updated>
					</div>
				</div>
			</w1c-tiled-background>

			<div class="geocities-grid">
				<w1c-guestbook-panel heading="Guestbook" subheading="Leave a note before you go.">
					<article><strong>Casey:</strong> Your button wall is excellent.</article>
					<article><strong>Rina:</strong> Added you to my links page.</article>
					<a slot="actions" href="mailto:webmaster@example.com">Sign Guestbook</a>
					<a slot="actions" href="#">Read Archive</a>
					<span slot="footer">No spam, no frames, no popups.</span>
				</w1c-guestbook-panel>

				<div class="geocities-stack">
					<w1c-under-construction message="Under Construction">
						The downloads area will return after the next update.
					</w1c-under-construction>
					<w1c-webring name="Pixel Gardens Webring">
						Personal sites with small files and loud links.
						<a slot="previous" href="#">Previous</a>
						<a slot="home" href="#">Ring Home</a>
						<a slot="random" href="#">Random</a>
						<a slot="next" href="#">Next</a>
					</w1c-webring>
				</div>
			</div>

			<div class="geocities-grid">
				<w1c-link-cluster heading="Neighborhood Links" columns="two">
					<ul>
						<li><a href="#">HTML Tricks</a></li>
						<li><a href="#">Button Wall</a></li>
						<li><a href="#">Zine Archive</a></li>
						<li><a href="#">Midi Shrine</a></li>
					</ul>
				</w1c-link-cluster>

				<w1c-image-map alt="Sticker sheet" caption="Click a district.">
					<a class="geocities-map-hotspot" href="#" style="--x: 8%; --y: 14%; --w: 30%; --h: 18%;">Music</a>
					<a class="geocities-map-hotspot" href="#" style="--x: 54%; --y: 48%; --w: 34%; --h: 22%;">Links</a>
				</w1c-image-map>
			</div>

			<p><w1c-blink>New!</w1c-blink> The webring list was updated today.</p>
		</div>
	`,
	argTypes: { theme: storyThemeArgType },
	args: { theme: 'geocities' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Components: Story = {};
