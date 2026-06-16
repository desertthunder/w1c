import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

/**
 * Native checkbox with label slot and W1C control chrome.
 *
 * @slot - Checkbox label.
 * @csspart label - Clickable label wrapper.
 * @csspart control - Native checkbox input.
 * @csspart checkbox - Alias for the native checkbox input.
 * @csspart text - Label text wrapper.
 */
@customElement('w1c-checkbox')
export class W1cCheckbox extends LitElement {
	@property()
	name = '';

	@property()
	value = 'on';

	@property({ type: Boolean, reflect: true })
	checked = false;

	@property({ type: Boolean, reflect: true })
	disabled = false;

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
			<label part="label">
				<input
					part="control checkbox"
					type="checkbox"
					.name=${this.name}
					.value=${this.value}
					?checked=${this.checked}
					?disabled=${this.disabled}
					?required=${this.required}
					aria-invalid=${this.invalid ? 'true' : 'false'}
					@change=${this.handleChange} />
				<span part="text"><slot></slot></span>
			</label>
		`;
	}

	private handleChange(event: Event) {
		this.checked = (event.currentTarget as HTMLInputElement).checked;
		this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
	}

	static styles = css`
		:host {
			display: inline-block;
			color: var(--w1c-checkbox-text, var(--w1c-control-text, #111111));
			font: var(
				--w1c-control-font,
				var(--w1c-font-size-2, 13px) / var(--w1c-line-tight, 1.2)
					var(--w1c-font-ui, 'MS Sans Serif', Tahoma, sans-serif)
			);
		}

		label {
			display: inline-grid;
			grid-template-columns: auto minmax(0, 1fr);
			align-items: start;
			gap: var(--w1c-checkbox-gap, var(--w1c-space-1, 4px));
		}

		input {
			box-sizing: border-box;
			width: var(--w1c-checkbox-size, 13px);
			height: var(--w1c-checkbox-size, 13px);
			margin: var(--w1c-checkbox-margin, 1px 0 0);
			accent-color: var(--w1c-checkbox-accent, var(--w1c-selection-background, #000080));
		}

		input:focus-visible {
			outline: var(--w1c-checkbox-focus-outline, 1px dotted var(--w1c-focus-ring, #000000));
			outline-offset: 2px;
		}

		:host([invalid]) input {
			outline: var(--w1c-checkbox-invalid-outline, 1px solid var(--w1c-danger-text, #990000));
			outline-offset: 1px;
		}

		:host([disabled]) {
			color: var(--w1c-disabled-text, #808080);
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-checkbox': W1cCheckbox;
	}
}
