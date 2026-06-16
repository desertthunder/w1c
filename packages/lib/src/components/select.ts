import { LitElement, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

type W1cSelectOption = { value: string; label: string; disabled: boolean };

/**
 * Native select with W1C control chrome.
 *
 * @slot - Option and optgroup elements.
 * @csspart control - The native select element.
 * @csspart select - Alias for the native select element.
 */
@customElement('w1c-select')
export class W1cSelect extends LitElement {
	@property()
	name = '';

	@property()
	value = '';

	@property({ type: Boolean, reflect: true })
	disabled = false;

	@property({ type: Boolean, reflect: true })
	required = false;

	@property({ type: Boolean, reflect: true })
	invalid = false;

	@query('select')
	private select?: HTMLSelectElement;

	@query('slot')
	private optionSlot?: HTMLSlotElement;

	@state()
	private options: W1cSelectOption[] = [];

	focus(options?: FocusOptions) {
		this.select?.focus(options);
	}

	firstUpdated() {
		this.collectOptions();
	}

	render() {
		return html`
			<select
				part="control select"
				.name=${this.name}
				.value=${this.value}
				?disabled=${this.disabled}
				?required=${this.required}
				aria-invalid=${this.invalid ? 'true' : 'false'}
				@change=${this.handleChange}>
				${this.options.map(
					(option) => html`
						<option .value=${option.value} ?selected=${this.value === option.value} ?disabled=${option.disabled}>
							${option.label}
						</option>
					`
				)}
			</select>
			<slot hidden @slotchange=${this.collectOptions}></slot>
		`;
	}

	private collectOptions() {
		const assigned = this.optionSlot?.assignedElements({ flatten: true }) ?? [];
		const options = assigned
			.filter((element): element is HTMLOptionElement => element instanceof HTMLOptionElement)
			.map((option) => ({
				value: option.value,
				label: option.label || option.textContent?.trim() || option.value,
				disabled: option.disabled
			}));

		this.options = options;

		if (!this.value) {
			const selected = assigned.find((element): element is HTMLOptionElement => {
				return element instanceof HTMLOptionElement && element.selected;
			});

			if (selected) this.value = selected.value;
		}
	}

	private handleChange(event: Event) {
		this.value = (event.currentTarget as HTMLSelectElement).value;
		this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
	}

	static styles = css`
		:host {
			display: inline-block;
			min-width: min(100%, 180px);
			color: var(--w1c-select-text, var(--w1c-control-text, #111111));
			font: var(
				--w1c-control-font,
				var(--w1c-font-size-2, 13px) / var(--w1c-line-tight, 1.2)
					var(--w1c-font-ui, 'MS Sans Serif', Tahoma, sans-serif)
			);
		}

		select {
			box-sizing: border-box;
			width: 100%;
			min-height: var(--w1c-select-min-height, 24px);
			padding: var(--w1c-select-padding, 2px 24px 2px 5px);
			border: var(--w1c-select-border, 1px solid var(--w1c-control-shadow, #808080));
			border-block-end-color: var(--w1c-select-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-end-color: var(--w1c-select-highlight, var(--w1c-control-highlight, #ffffff));
			border-radius: var(--w1c-select-radius, var(--w1c-radius-1, 0));
			color: inherit;
			background: var(--w1c-select-background, var(--w1c-window-content-background, #ffffff));
			box-shadow: var(
				--w1c-select-shadow,
				inset 1px 1px 0 var(--w1c-control-dark-shadow, #404040),
				inset -1px -1px 0 var(--w1c-control-highlight, #ffffff)
			);
			font: inherit;
		}

		select:focus-visible {
			outline: var(--w1c-select-focus-outline, 1px dotted var(--w1c-focus-ring, #000000));
			outline-offset: -3px;
		}

		:host([invalid]) select {
			border-color: var(--w1c-select-invalid-border, var(--w1c-danger-text, #990000));
		}

		:host([disabled]) {
			color: var(--w1c-disabled-text, #808080);
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-select': W1cSelect;
	}
}
