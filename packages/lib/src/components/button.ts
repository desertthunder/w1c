import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Retro push button primitive.
 *
 * @slot - Button label and inline content.
 * @csspart control - The native button control.
 * @csspart button - Alias for the native button control.
 */
@customElement('w1c-button')
export class W1cButton extends LitElement {
	@property({ type: Boolean, reflect: true })
	disabled = false;

	@property({ reflect: true })
	variant: 'raised' | 'sunken' | 'flat' = 'raised';

	render() {
		return html`
			<button part="control button" type="button" ?disabled=${this.disabled} data-variant=${this.variant}>
				<slot></slot>
			</button>
		`;
	}

	static styles = css`
		:host {
			--w1c-button-background: var(--w1c-control-background, #c0c0c0);
			--w1c-button-text: var(--w1c-control-text, #111111);
			--w1c-button-highlight: var(--w1c-control-highlight, #ffffff);
			--w1c-button-shadow: var(--w1c-control-shadow, #808080);
			--w1c-button-dark-shadow: var(--w1c-control-dark-shadow, #404040);
			--w1c-button-focus: var(--w1c-focus-ring, #000000);

			display: inline-block;
			color: var(--w1c-button-text);
			font: var(--w1c-control-font, 13px/1.2 'MS Sans Serif', Tahoma, sans-serif);
		}

		button {
			box-sizing: border-box;
			min-height: 24px;
			max-width: 100%;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			gap: var(--w1c-space-1, 4px);
			padding: var(--w1c-button-padding, 3px 12px);
			border: 1px solid var(--w1c-button-dark-shadow);
			border-block-start-color: var(--w1c-button-highlight);
			border-inline-start-color: var(--w1c-button-highlight);
			color: inherit;
			background: var(--w1c-button-background);
			box-shadow:
				inset -1px -1px 0 var(--w1c-button-shadow),
				inset 1px 1px 0 var(--w1c-button-highlight);
			font: inherit;
			text-align: center;
			white-space: nowrap;
			cursor: default;
		}

		button[data-variant='sunken'],
		button:active:not(:disabled) {
			border-color: var(--w1c-button-highlight);
			border-block-start-color: var(--w1c-button-dark-shadow);
			border-inline-start-color: var(--w1c-button-dark-shadow);
			box-shadow:
				inset -1px -1px 0 var(--w1c-button-highlight),
				inset 1px 1px 0 var(--w1c-button-shadow);
			padding-block-start: calc(var(--w1c-button-press-offset, 3px) + 1px);
			padding-block-end: calc(var(--w1c-button-press-offset, 3px) - 1px);
		}

		button[data-variant='flat'] {
			border-color: var(--w1c-button-shadow);
			background: var(--w1c-button-background);
			box-shadow: none;
		}

		button:focus-visible {
			outline: 1px dotted var(--w1c-button-focus);
			outline-offset: -4px;
		}

		button:disabled {
			color: var(--w1c-disabled-text, #808080);
			text-shadow: 1px 1px 0 var(--w1c-button-highlight);
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-button': W1cButton;
	}
}
