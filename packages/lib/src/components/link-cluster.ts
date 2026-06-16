import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Directory-style cluster of hand-authored links.
 *
 * @slot - Links or lists.
 * @csspart chrome - The outer frame.
 * @csspart heading - Heading wrapper.
 * @csspart content - Link content wrapper.
 */
@customElement('w1c-link-cluster')
export class W1cLinkCluster extends LitElement {
	@property()
	heading = 'Links';

	@property({ reflect: true })
	columns: 'auto' | 'one' | 'two' = 'auto';

	render() {
		return html`
			<section part="chrome" class="chrome" data-columns=${this.columns}>
				<h2 part="heading" class="heading">${this.heading}</h2>
				<div part="content" class="content"><slot></slot></div>
			</section>
		`;
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-link-cluster-text, var(--w1c-control-text, #000000));
			font: var(
				--w1c-body-font,
				var(--w1c-font-size-2, 14px) / var(--w1c-line-normal, 1.25) var(--w1c-font-ui, Arial, sans-serif)
			);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			gap: var(--w1c-link-cluster-gap, var(--w1c-space-2, 8px));
			padding: var(--w1c-link-cluster-padding, var(--w1c-space-3, 12px));
			border: var(--w1c-link-cluster-border, 3px ridge #00ffff);
			background: var(--w1c-link-cluster-background, #ffffcc);
		}

		.heading {
			margin: 0;
			padding: var(--w1c-link-cluster-heading-padding, 4px 6px);
			background: var(--w1c-link-cluster-heading-background, #ff66cc);
			color: var(--w1c-link-cluster-heading-text, #000000);
			font: var(--w1c-link-cluster-heading-font, 700 17px/1.1 var(--w1c-font-heading, cursive));
			text-align: center;
		}

		.content {
			min-width: 0;
			columns: var(--w1c-link-cluster-columns, 12rem);
		}

		.chrome[data-columns='one'] .content {
			columns: 1;
		}

		.chrome[data-columns='two'] .content {
			columns: 2 10rem;
		}

		::slotted(ul),
		::slotted(ol) {
			margin-block: 0;
			padding-inline-start: 1.25rem;
		}

		::slotted(a) {
			color: var(--w1c-link-cluster-link, #0000ee);
			font-weight: 700;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-link-cluster': W1cLinkCluster;
	}
}
