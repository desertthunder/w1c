import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Compact validation or helper message.
 *
 * @slot - Message content.
 * @csspart chrome - Message wrapper.
 * @csspart icon - Optional icon slot wrapper.
 * @csspart content - Message content wrapper.
 */
@customElement('w1c-validation-message')
export class W1cValidationMessage extends LitElement {
	@property({ reflect: true })
	variant: 'error' | 'warning' | 'info' = 'error';

	render() {
		return html`
			<p
				part="chrome"
				class="chrome"
				role=${this.variant === 'error' ? 'alert' : 'status'}
				data-variant=${this.variant}>
				<span part="icon" class="icon" aria-hidden="true"><slot name="icon">${this.defaultIcon}</slot></span>
				<span part="content" class="content"><slot></slot></span>
			</p>
		`;
	}

	private get defaultIcon() {
		if (this.variant === 'warning') return '!';
		if (this.variant === 'info') return 'i';
		return 'x';
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-validation-message-text, var(--w1c-danger-text, #990000));
			font: var(--w1c-control-font, 13px/1.2 'MS Sans Serif', Tahoma, sans-serif);
		}

		.chrome {
			display: flex;
			align-items: flex-start;
			gap: var(--w1c-validation-message-gap, var(--w1c-space-1, 4px));
			margin: 0;
		}

		.icon {
			display: inline-grid;
			place-items: center;
			width: var(--w1c-validation-message-icon-size, 14px);
			height: var(--w1c-validation-message-icon-size, 14px);
			border: var(--w1c-validation-message-icon-border, 1px solid currentColor);
			border-radius: 50%;
			font-size: 10px;
			line-height: 1;
			text-transform: uppercase;
		}

		.chrome[data-variant='warning'] {
			color: var(--w1c-validation-message-warning-text, var(--w1c-warning-text, #6f4a00));
		}

		.chrome[data-variant='info'] {
			color: var(--w1c-validation-message-info-text, var(--w1c-info-text, #003c8f));
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-validation-message': W1cValidationMessage;
	}
}
