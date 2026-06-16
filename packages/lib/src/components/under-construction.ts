import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Under-construction notice with hazard-stripe styling.
 *
 * @slot - Optional extra message.
 * @slot icon - Optional icon.
 * @csspart chrome - The construction frame.
 * @csspart sign - The main sign.
 * @csspart icon - Icon wrapper.
 * @csspart message - Message wrapper.
 * @csspart details - Extra content wrapper.
 */
@customElement('w1c-under-construction')
export class W1cUnderConstruction extends LitElement {
	@property()
	message = 'Under Construction';

	render() {
		return html`
			<section part="chrome" class="chrome" role="status" aria-label=${this.message}>
				<div part="sign" class="sign">
					<span part="icon" class="icon"><slot name="icon">!</slot></span>
					<strong part="message" class="message">${this.message}</strong>
				</div>
				<div part="details" class="details"><slot></slot></div>
			</section>
		`;
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-construction-text, #000000);
			font: var(
				--w1c-body-font,
				var(--w1c-font-size-2, 14px) / var(--w1c-line-normal, 1.25) var(--w1c-font-ui, Arial, sans-serif)
			);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			gap: var(--w1c-construction-gap, var(--w1c-space-2, 8px));
			padding: var(--w1c-construction-padding, var(--w1c-space-2, 8px));
			border: var(--w1c-construction-border, 3px ridge #ff9900);
			background: var(--w1c-construction-background, #ffffcc);
			text-align: center;
		}

		.sign {
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: var(--w1c-space-2, 8px);
			min-width: 0;
			padding: var(--w1c-construction-sign-padding, 8px);
			border: var(--w1c-construction-sign-border, 2px solid #000000);
			background: var(--w1c-construction-stripes, repeating-linear-gradient(45deg, #ffff00 0 10px, #000000 10px 20px));
		}

		.icon,
		.message {
			box-sizing: border-box;
			display: inline-grid;
			place-items: center;
			background: var(--w1c-construction-label-background, #ffffff);
			border: var(--w1c-construction-label-border, 2px outset #ff9900);
		}

		.icon {
			width: 24px;
			height: 24px;
			font-weight: 900;
		}

		.message {
			min-width: 0;
			padding: 3px 8px;
			font: var(--w1c-construction-message-font, 700 18px/1.1 var(--w1c-font-heading, cursive));
			text-transform: uppercase;
			overflow-wrap: anywhere;
		}

		.details {
			min-width: 0;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-under-construction': W1cUnderConstruction;
	}
}
