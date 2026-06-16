import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Accessible marquee-inspired scrolling banner.
 *
 * @slot - Marquee content.
 * @csspart chrome - The banner frame.
 * @csspart track - Animated track.
 */
@customElement('w1c-marquee')
export class W1cMarquee extends LitElement {
	@property({ reflect: true })
	direction: 'left' | 'right' = 'left';

	@property({ type: Number })
	speed = 12;

	@property({ type: Boolean, attribute: 'pause-on-hover', reflect: true })
	pauseOnHover = false;

	render() {
		const duration = `${Math.max(4, this.speed)}s`;

		return html`
			<div part="chrome" class="chrome" role="marquee" style=${`--w1c-marquee-duration: ${duration}`}>
				<div part="track" class="track" data-direction=${this.direction}><slot></slot></div>
			</div>
		`;
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-marquee-text, #ffff00);
			font: var(--w1c-marquee-font, 700 var(--w1c-font-size-2, 16px) / 1.2 var(--w1c-font-heading, cursive));
		}

		.chrome {
			box-sizing: border-box;
			overflow: hidden;
			min-width: 0;
			padding: var(--w1c-marquee-padding, 4px 0);
			border: var(--w1c-marquee-border, 3px inset #660066);
			background: var(--w1c-marquee-background, #000000);
		}

		.track {
			display: inline-block;
			min-width: 100%;
			padding-inline: 100%;
			white-space: nowrap;
			text-align: center;
			text-shadow: var(--w1c-marquee-shadow, 1px 1px 0 #ff0000);
			animation: w1c-marquee-left var(--w1c-marquee-duration, 12s) linear infinite;
		}

		.track[data-direction='right'] {
			animation-name: w1c-marquee-right;
		}

		:host([pause-on-hover]) .chrome:hover .track {
			animation-play-state: paused;
		}

		@keyframes w1c-marquee-left {
			from {
				transform: translateX(0);
			}
			to {
				transform: translateX(-100%);
			}
		}

		@keyframes w1c-marquee-right {
			from {
				transform: translateX(-100%);
			}
			to {
				transform: translateX(0);
			}
		}

		@media (prefers-reduced-motion: reduce) {
			.track {
				display: block;
				padding-inline: var(--w1c-space-2, 8px);
				white-space: normal;
				animation: none;
			}
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-marquee': W1cMarquee;
	}
}
