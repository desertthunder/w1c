import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Odometer-style visitor counter with accessible text.
 *
 * @csspart chrome - The counter frame.
 * @csspart label - Optional label.
 * @csspart digits - Digit row.
 * @csspart digit - Individual digit cell.
 */
@customElement('w1c-visitor-counter')
export class W1cVisitorCounter extends LitElement {
	@property()
	value = '0';

	@property({ type: Number })
	digits = 6;

	@property()
	label = 'Visitors';

	render() {
		const rawValue = String(this.value || '0').replace(/\D/g, '') || '0';
		const displayValue = rawValue.padStart(Math.max(0, this.digits), '0');

		return html`
			<div part="chrome" class="chrome" role="group" aria-label=${`${this.label}: ${rawValue}`}>
				<span part="label" class="label">${this.label}</span>
				<span part="digits" class="digits" aria-hidden="true">
					${displayValue.split('').map((digit) => html`<span part="digit" class="digit">${digit}</span>`)}
				</span>
			</div>
		`;
	}

	static styles = css`
		:host {
			display: inline-block;
			color: var(--w1c-counter-text, #00ff66);
			font: var(--w1c-counter-font, 700 13px/1 var(--w1c-font-mono, 'Courier New', monospace));
		}

		.chrome {
			box-sizing: border-box;
			display: inline-grid;
			grid-template-columns: auto auto;
			align-items: center;
			gap: var(--w1c-counter-gap, 5px);
			padding: var(--w1c-counter-padding, 3px 5px);
			border: var(--w1c-counter-border, 2px inset #808080);
			background: var(--w1c-counter-background, #000000);
			box-shadow: var(--w1c-counter-shadow, 1px 1px 0 #ffffff);
		}

		.label {
			color: var(--w1c-counter-label-text, #ffff00);
			font: var(--w1c-counter-label-font, 700 10px/1 var(--w1c-font-ui, Arial, sans-serif));
			text-transform: uppercase;
		}

		.digits {
			display: inline-flex;
			gap: 1px;
		}

		.digit {
			box-sizing: border-box;
			display: grid;
			place-items: center;
			min-width: var(--w1c-counter-digit-width, 1.15em);
			padding: 1px 2px;
			border: var(--w1c-counter-digit-border, 1px solid #333333);
			background: var(--w1c-counter-digit-background, linear-gradient(#222222, #000000 45%, #151515 46%, #000000));
			color: inherit;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-visitor-counter': W1cVisitorCounter;
	}
}
