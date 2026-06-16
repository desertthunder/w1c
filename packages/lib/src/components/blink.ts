import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Blink-inspired emphasis with reduced-motion fallback.
 *
 * @slot - Text or inline content.
 * @csspart text - Emphasized text wrapper.
 */
@customElement('w1c-blink')
export class W1cBlink extends LitElement {
	@property({ type: Number })
	speed = 1;

	render() {
		return html`<span part="text" class="text" style=${`--w1c-blink-duration: ${Math.max(0.35, this.speed)}s`}>
			<slot></slot>
		</span>`;
	}

	static styles = css`
		:host {
			display: inline;
			color: var(--w1c-blink-text, #ff0000);
			font: inherit;
		}

		.text {
			display: inline;
			font-weight: var(--w1c-blink-font-weight, 700);
			text-decoration: var(--w1c-blink-decoration, underline);
			animation: w1c-blink var(--w1c-blink-duration, 1s) steps(1, end) infinite;
		}

		@keyframes w1c-blink {
			50% {
				opacity: 0;
			}
		}

		@media (prefers-reduced-motion: reduce) {
			.text {
				animation: none;
				outline: var(--w1c-blink-reduced-outline, 2px dotted currentColor);
				outline-offset: 2px;
			}
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-blink': W1cBlink;
	}
}
