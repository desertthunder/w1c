import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

/**
 * Native text input with W1C control chrome.
 *
 * @csspart control - The native input element.
 * @csspart input - Alias for the native input element.
 */
@customElement('w1c-input')
export class W1cInput extends LitElement {
	@property()
	type = 'text';

	@property()
	name = '';

	@property()
	value = '';

	@property()
	placeholder = '';

	@property()
	autocomplete = '';

	@property({ type: Boolean, reflect: true })
	disabled = false;

	@property({ type: Boolean, reflect: true })
	readonly = false;

	@property({ type: Boolean, reflect: true })
	required = false;

	@property({ type: Boolean, reflect: true })
	invalid = false;

	@query('input')
	private input?: HTMLInputElement;

	focus(options?: FocusOptions) {
		this.input?.focus(options);
	}

	render() {
		return html`
			<input
				part="control input"
				.type=${this.type}
				.name=${this.name}
				.value=${this.value}
				placeholder=${this.placeholder}
				autocomplete=${this.autocomplete}
				?disabled=${this.disabled}
				?readonly=${this.readonly}
				?required=${this.required}
				aria-invalid=${this.invalid ? 'true' : 'false'}
				@input=${this.handleInput}
				@change=${this.handleChange} />
		`;
	}

	private handleInput(event: Event) {
		this.value = (event.currentTarget as HTMLInputElement).value;
		this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
	}

	private handleChange() {
		this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
	}

	static styles = css`
		:host {
			display: inline-block;
			min-width: min(100%, 180px);
			color: var(--w1c-input-text, var(--w1c-control-text, #111111));
			font: var(
				--w1c-control-font,
				var(--w1c-font-size-2, 13px) / var(--w1c-line-tight, 1.2)
					var(--w1c-font-ui, 'MS Sans Serif', Tahoma, sans-serif)
			);
		}

		input {
			box-sizing: border-box;
			width: 100%;
			min-height: var(--w1c-input-min-height, 24px);
			padding: var(--w1c-input-padding, 3px 5px);
			border: var(--w1c-input-border, 1px solid var(--w1c-control-shadow, #808080));
			border-block-end-color: var(--w1c-input-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-end-color: var(--w1c-input-highlight, var(--w1c-control-highlight, #ffffff));
			border-radius: var(--w1c-input-radius, var(--w1c-radius-1, 0));
			color: inherit;
			background: var(--w1c-input-background, var(--w1c-window-content-background, #ffffff));
			box-shadow: var(
				--w1c-input-shadow,
				inset 1px 1px 0 var(--w1c-control-dark-shadow, #404040),
				inset -1px -1px 0 var(--w1c-control-highlight, #ffffff)
			);
			font: inherit;
		}

		input:focus-visible {
			outline: var(--w1c-input-focus-outline, 1px dotted var(--w1c-focus-ring, #000000));
			outline-offset: -3px;
		}

		input::placeholder {
			color: var(--w1c-input-placeholder, var(--w1c-disabled-text, #808080));
		}

		:host([invalid]) input {
			border-color: var(--w1c-input-invalid-border, var(--w1c-danger-text, #990000));
		}

		:host([disabled]) {
			color: var(--w1c-disabled-text, #808080);
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-input': W1cInput;
	}
}
