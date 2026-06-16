import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

/**
 * Native textarea with W1C control chrome.
 *
 * @csspart control - The native textarea element.
 * @csspart textarea - Alias for the native textarea element.
 */
@customElement('w1c-textarea')
export class W1cTextarea extends LitElement {
	@property()
	name = '';

	@property()
	value = '';

	@property()
	placeholder = '';

	@property({ type: Number })
	rows = 4;

	@property({ type: Boolean, reflect: true })
	disabled = false;

	@property({ type: Boolean, reflect: true })
	readonly = false;

	@property({ type: Boolean, reflect: true })
	required = false;

	@property({ type: Boolean, reflect: true })
	invalid = false;

	@query('textarea')
	private textarea?: HTMLTextAreaElement;

	focus(options?: FocusOptions) {
		this.textarea?.focus(options);
	}

	render() {
		return html`
			<textarea
				part="control textarea"
				.name=${this.name}
				.value=${this.value}
				placeholder=${this.placeholder}
				rows=${this.rows}
				?disabled=${this.disabled}
				?readonly=${this.readonly}
				?required=${this.required}
				aria-invalid=${this.invalid ? 'true' : 'false'}
				@input=${this.handleInput}
				@change=${this.handleChange}></textarea>
		`;
	}

	private handleInput(event: Event) {
		this.value = (event.currentTarget as HTMLTextAreaElement).value;
		this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
	}

	private handleChange() {
		this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
	}

	static styles = css`
		:host {
			display: inline-block;
			min-width: min(100%, 220px);
			color: var(--w1c-textarea-text, var(--w1c-control-text, #111111));
			font: var(--w1c-control-font, 13px/1.2 'MS Sans Serif', Tahoma, sans-serif);
		}

		textarea {
			box-sizing: border-box;
			width: 100%;
			min-height: var(--w1c-textarea-min-height, 72px);
			padding: var(--w1c-textarea-padding, 5px);
			border: var(--w1c-textarea-border, 1px solid var(--w1c-control-shadow, #808080));
			border-block-end-color: var(--w1c-textarea-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-end-color: var(--w1c-textarea-highlight, var(--w1c-control-highlight, #ffffff));
			border-radius: var(--w1c-textarea-radius, var(--w1c-radius-1, 0));
			color: inherit;
			background: var(--w1c-textarea-background, var(--w1c-window-content-background, #ffffff));
			box-shadow: var(
				--w1c-textarea-shadow,
				inset 1px 1px 0 var(--w1c-control-dark-shadow, #404040),
				inset -1px -1px 0 var(--w1c-control-highlight, #ffffff)
			);
			font: inherit;
			resize: var(--w1c-textarea-resize, vertical);
		}

		textarea:focus-visible {
			outline: var(--w1c-textarea-focus-outline, 1px dotted var(--w1c-focus-ring, #000000));
			outline-offset: -3px;
		}

		textarea::placeholder {
			color: var(--w1c-textarea-placeholder, var(--w1c-disabled-text, #808080));
		}

		:host([invalid]) textarea {
			border-color: var(--w1c-textarea-invalid-border, var(--w1c-danger-text, #990000));
		}

		:host([disabled]) {
			color: var(--w1c-disabled-text, #808080);
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-textarea': W1cTextarea;
	}
}
