import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

/**
 * Location/address field for browser and file-manager toolbars.
 *
 * @slot label - Optional visible label.
 * @slot prefix - Optional leading icon.
 * @slot actions - Optional trailing controls.
 * @csspart chrome - Field frame.
 * @csspart label - Label slot wrapper.
 * @csspart prefix - Prefix slot wrapper.
 * @csspart input - Native input element.
 * @csspart actions - Actions slot wrapper.
 */
@customElement('w1c-address-field')
export class W1cAddressField extends LitElement {
	@property()
	label = 'Address';

	@property()
	value = '';

	@property()
	placeholder = '';

	@property({ type: Boolean, reflect: true })
	disabled = false;

	@property({ type: Boolean, reflect: true })
	readonly = false;

	@query('input')
	private input?: HTMLInputElement;

	focus(options?: FocusOptions) {
		this.input?.focus(options);
	}

	render() {
		return html`
			<label part="chrome" class="chrome">
				<span part="label" class="label"><slot name="label">${this.label}</slot></span>
				<span part="prefix" class="prefix"><slot name="prefix"></slot></span>
				<input
					part="input"
					type="text"
					.value=${this.value}
					placeholder=${this.placeholder}
					?disabled=${this.disabled}
					?readonly=${this.readonly}
					aria-label=${this.label}
					@input=${this.handleInput}
					@change=${this.handleChange} />
				<span part="actions" class="actions"><slot name="actions"></slot></span>
			</label>
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
			min-width: min(100%, 220px);
			color: var(--w1c-address-field-text, var(--w1c-control-text, #111111));
			font: var(--w1c-control-font, 13px/1.2 'MS Sans Serif', Tahoma, sans-serif);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			grid-template-columns: auto auto minmax(0, 1fr) auto;
			align-items: center;
			gap: var(--w1c-address-field-gap, var(--w1c-space-1, 4px));
			width: 100%;
			padding: var(--w1c-address-field-padding, 2px);
			border: var(--w1c-address-field-border, 1px solid var(--w1c-control-shadow, #808080));
			border-block-end-color: var(--w1c-address-field-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-end-color: var(--w1c-address-field-highlight, var(--w1c-control-highlight, #ffffff));
			background: var(--w1c-address-field-background, var(--w1c-window-content-background, #ffffff));
		}

		.label {
			padding-inline: var(--w1c-address-field-label-padding, 2px 4px);
			white-space: nowrap;
			background: var(--w1c-address-field-label-background, transparent);
		}

		.prefix,
		.actions {
			display: inline-flex;
			align-items: center;
			min-width: 0;
		}

		input {
			box-sizing: border-box;
			min-width: 0;
			width: 100%;
			border: 0;
			color: inherit;
			background: transparent;
			font: inherit;
			outline: none;
		}

		input::placeholder {
			color: var(--w1c-address-field-placeholder, var(--w1c-disabled-text, #808080));
		}

		:host([disabled]) {
			color: var(--w1c-disabled-text, #808080);
		}

		.actions ::slotted(w1c-button) {
			--w1c-button-padding: var(--w1c-address-field-button-padding, 1px 8px);
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-address-field': W1cAddressField;
	}
}
