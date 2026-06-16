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
			display: inline-block;
			color: var(--w1c-button-text, var(--w1c-control-text, #111111));
			font: var(
				--w1c-control-font,
				var(--w1c-font-size-2, 13px) / var(--w1c-line-tight, 1.2)
					var(--w1c-font-ui, 'MS Sans Serif', Tahoma, sans-serif)
			);
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
			border-width: var(--w1c-button-border-width, 1px);
			border-style: solid;
			border-color: var(--w1c-button-dark-shadow, var(--w1c-control-dark-shadow, #404040));
			border-block-start-color: var(--w1c-button-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-start-color: var(--w1c-button-highlight, var(--w1c-control-highlight, #ffffff));
			border-radius: var(--w1c-button-radius, var(--w1c-radius-1, 0));
			color: inherit;
			background: var(--w1c-button-background, var(--w1c-control-background, #c0c0c0));
			box-shadow: var(
				--w1c-button-shadow-raised,
				inset -1px -1px 0 var(--w1c-button-shadow, var(--w1c-control-shadow, #808080)),
				inset 1px 1px 0 var(--w1c-button-highlight, var(--w1c-control-highlight, #ffffff))
			);
			font: inherit;
			text-align: center;
			white-space: nowrap;
			cursor: default;
		}

		button[data-variant='sunken'],
		button:active:not(:disabled) {
			border-color: var(--w1c-button-highlight, var(--w1c-control-highlight, #ffffff));
			border-block-start-color: var(--w1c-button-dark-shadow, var(--w1c-control-dark-shadow, #404040));
			border-inline-start-color: var(--w1c-button-dark-shadow, var(--w1c-control-dark-shadow, #404040));
			color: var(--w1c-button-active-text, inherit);
			background: var(
				--w1c-button-active-background,
				var(--w1c-button-background, var(--w1c-control-background, #c0c0c0))
			);
			box-shadow: var(
				--w1c-button-shadow-sunken,
				inset -1px -1px 0 var(--w1c-button-highlight, var(--w1c-control-highlight, #ffffff)),
				inset 1px 1px 0 var(--w1c-button-shadow, var(--w1c-control-shadow, #808080))
			);
			padding-block-start: calc(var(--w1c-button-press-offset, 3px) + 1px);
			padding-block-end: calc(var(--w1c-button-press-offset, 3px) - 1px);
		}

		button[data-variant='flat'] {
			border-color: var(--w1c-button-flat-border, var(--w1c-button-shadow, var(--w1c-control-shadow, #808080)));
			background: var(
				--w1c-button-flat-background,
				var(--w1c-button-background, var(--w1c-control-background, #c0c0c0))
			);
			box-shadow: var(--w1c-button-shadow-flat, none);
		}

		button:focus-visible {
			outline: var(--w1c-button-focus-outline, 1px dotted var(--w1c-button-focus, var(--w1c-focus-ring, #000000)));
			outline-offset: -4px;
		}

		button:disabled {
			color: var(--w1c-disabled-text, #808080);
			text-shadow: var(
				--w1c-button-disabled-text-shadow,
				1px 1px 0 var(--w1c-button-highlight, var(--w1c-control-highlight, #ffffff))
			);
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-button': W1cButton;
	}
}
