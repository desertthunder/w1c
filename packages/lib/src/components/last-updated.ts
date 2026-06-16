import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Last-updated stamp for static pages.
 *
 * @slot - Optional replacement date text.
 * @csspart chrome - Stamp wrapper.
 * @csspart label - Label text.
 * @csspart value - Date value.
 */
@customElement('w1c-last-updated')
export class W1cLastUpdated extends LitElement {
	@property()
	datetime = '';

	@property()
	label = 'Last updated';

	render() {
		return html`
			<p part="chrome" class="chrome">
				<span part="label" class="label">${this.label}:</span>
				<time part="value" class="value" datetime=${this.datetime || undefined}><slot>${this.datetime}</slot></time>
			</p>
		`;
	}

	static styles = css`
		:host {
			display: inline-block;
			color: var(--w1c-last-updated-text, var(--w1c-control-text, #000000));
			font: var(--w1c-last-updated-font, 700 12px/1.2 var(--w1c-font-ui, Arial, sans-serif));
		}

		.chrome {
			box-sizing: border-box;
			display: inline-flex;
			flex-wrap: wrap;
			gap: 0.35em;
			align-items: baseline;
			margin: 0;
			padding: var(--w1c-last-updated-padding, 3px 6px);
			border: var(--w1c-last-updated-border, 2px dotted #ff66cc);
			background: var(--w1c-last-updated-background, #ffffcc);
		}

		.label {
			color: var(--w1c-last-updated-label-text, #660099);
			text-transform: uppercase;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-last-updated': W1cLastUpdated;
	}
}
