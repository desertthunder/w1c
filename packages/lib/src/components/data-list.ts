import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Dense list frame for files, records, endpoints, and search results.
 *
 * @slot header - Optional list heading or controls.
 * @slot - List rows. Use `li`, `a`, `button`, or row-like elements.
 * @slot footer - Optional status or pagination.
 * @csspart chrome - The outer list frame.
 * @csspart header - Header wrapper.
 * @csspart list - List row container.
 * @csspart footer - Footer wrapper.
 */
@customElement('w1c-data-list')
export class W1cDataList extends LitElement {
	@property({ type: Boolean, reflect: true })
	compact = false;

	@state()
	private hasHeader = false;

	@state()
	private hasFooter = false;

	render() {
		return html`
			<section part="chrome" class="chrome">
				<header part="header" class="header" ?hidden=${!this.hasHeader}>
					<slot name="header" @slotchange=${this.handleHeaderSlotChange}></slot>
				</header>
				<div part="list" class="list" role="list">
					<slot></slot>
				</div>
				<footer part="footer" class="footer" ?hidden=${!this.hasFooter}>
					<slot name="footer" @slotchange=${this.handleFooterSlotChange}></slot>
				</footer>
			</section>
		`;
	}

	private handleHeaderSlotChange(event: Event) {
		this.hasHeader = this.hasAssignedContent(event);
	}

	private handleFooterSlotChange(event: Event) {
		this.hasFooter = this.hasAssignedContent(event);
	}

	private hasAssignedContent(event: Event) {
		const slot = event.currentTarget as HTMLSlotElement;
		return slot.assignedNodes({ flatten: true }).some((node) => {
			return node.nodeType === Node.ELEMENT_NODE || Boolean(node.textContent?.trim());
		});
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-data-list-text, var(--w1c-control-text, #111111));
			font: var(
				--w1c-data-list-font,
				var(
					--w1c-control-font,
					var(--w1c-font-size-2, 13px) / var(--w1c-line-normal, 1.25)
						var(--w1c-font-ui, 'MS Sans Serif', Tahoma, sans-serif)
				)
			);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			min-width: 0;
			border: var(--w1c-data-list-border, 1px solid var(--w1c-control-shadow, #808080));
			border-block-end-color: var(--w1c-data-list-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-end-color: var(--w1c-data-list-highlight, var(--w1c-control-highlight, #ffffff));
			background: var(--w1c-data-list-background, var(--w1c-window-content-background, #ffffff));
			box-shadow: var(
				--w1c-data-list-right-edge,
				inset -1px 0 0 var(--w1c-data-list-right-edge-color, var(--w1c-control-shadow, #808080))
			);
			overflow: hidden;
		}

		.header,
		.footer {
			box-sizing: border-box;
			display: flex;
			align-items: center;
			gap: var(--w1c-space-2, 8px);
			padding: var(--w1c-data-list-header-padding, 4px 6px);
			background: var(--w1c-data-list-chrome-background, var(--w1c-surface, #c0c0c0));
		}

		.header {
			border-block-end: var(--w1c-data-list-divider, 1px solid var(--w1c-control-shadow, #808080));
			font-weight: 700;
		}

		.footer {
			border-block-start: var(--w1c-data-list-divider, 1px solid var(--w1c-control-shadow, #808080));
		}

		.list {
			display: grid;
			min-width: 0;
		}

		::slotted(*) {
			box-sizing: border-box;
			display: grid;
			grid-template-columns: var(--w1c-data-list-row-columns, minmax(0, 1fr) auto);
			align-items: center;
			gap: var(--w1c-data-list-row-gap, var(--w1c-space-2, 8px));
			min-width: 0;
			padding: var(--w1c-data-list-row-padding, 5px 6px);
			border-block-end: var(--w1c-data-list-row-border, 1px solid rgb(0 0 0 / 0.12));
			border-inline-end: var(--w1c-data-list-row-right-border, 1px solid var(--w1c-control-shadow, #808080));
			color: inherit;
			text-decoration: none;
			background: var(--w1c-data-list-row-background, transparent);
		}

		:host([compact]) ::slotted(*) {
			padding: var(--w1c-data-list-compact-row-padding, 2px 4px);
		}

		::slotted(:hover) {
			background: var(--w1c-data-list-row-hover-background, rgb(0 0 0 / 0.05));
		}

		::slotted([aria-selected='true']),
		::slotted([selected]) {
			color: var(--w1c-data-list-selected-text, var(--w1c-active-titlebar-text, #ffffff));
			background: var(--w1c-data-list-selected-background, var(--w1c-active-titlebar, #000080));
		}

		[hidden] {
			display: none;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-data-list': W1cDataList;
	}
}
