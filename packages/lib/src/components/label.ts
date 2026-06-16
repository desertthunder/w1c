import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Form label primitive with retro control typography.
 *
 * @slot - Label text.
 * @csspart label - The native label element.
 * @csspart required - Required marker.
 */
@customElement('w1c-label')
export class W1cLabel extends LitElement {
	@property({ attribute: 'for', reflect: true })
	htmlFor = '';

	@property()
	text = '';

	@property({ type: Boolean, reflect: true })
	required = false;

	@property({ type: Boolean, reflect: true })
	disabled = false;

	render() {
		return html`
			<label part="label" for=${this.htmlFor} aria-disabled=${this.disabled ? 'true' : 'false'}>
				<slot>${this.text}</slot>${this.required ? html`<span part="required" aria-hidden="true">*</span>` : null}
			</label>
		`;
	}

	static styles = css`
		:host {
			display: inline-block;
			color: var(--w1c-label-text, var(--w1c-control-text, #111111));
			font: var(
				--w1c-control-font,
				var(--w1c-font-size-2, 13px) / var(--w1c-line-tight, 1.2)
					var(--w1c-font-ui, 'MS Sans Serif', Tahoma, sans-serif)
			);
		}

		label {
			display: inline-flex;
			align-items: baseline;
			gap: var(--w1c-label-gap, 3px);
		}

		[part='required'] {
			color: var(--w1c-label-required-text, var(--w1c-danger-text, #990000));
		}

		:host([disabled]) {
			color: var(--w1c-disabled-text, #808080);
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-label': W1cLabel;
	}
}
