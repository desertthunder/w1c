import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Dense table frame for admin lists, file details, and document indexes.
 *
 * @slot caption - Optional table label.
 * @slot head - Header row content.
 * @slot - Body rows.
 * @slot foot - Footer row content.
 * @csspart chrome - The scrollable table frame.
 * @csspart table - Table grid.
 * @csspart caption - Caption wrapper.
 * @csspart head - Table head.
 * @csspart body - Table body.
 * @csspart foot - Table foot.
 */
@customElement('w1c-data-table')
export class W1cDataTable extends LitElement {
	@property({ type: Boolean, reflect: true })
	compact = false;

	@property({ type: Boolean, reflect: true })
	striped = false;

	@state()
	private hasCaption = false;

	@state()
	private hasFoot = false;

	render() {
		return html`
			<div part="chrome" class="chrome">
				<div part="table" class="table" role="table">
					<div part="caption" class="caption" ?hidden=${!this.hasCaption}>
						<slot name="caption" @slotchange=${this.handleCaptionSlotChange}></slot>
					</div>
					<div part="head" class="head" role="rowgroup">
						<slot name="head"></slot>
					</div>
					<div part="body" class="body" role="rowgroup">
						<slot></slot>
					</div>
					<div part="foot" class="foot" role="rowgroup" ?hidden=${!this.hasFoot}>
						<slot name="foot" @slotchange=${this.handleFootSlotChange}></slot>
					</div>
				</div>
			</div>
		`;
	}

	private handleCaptionSlotChange(event: Event) {
		this.hasCaption = this.hasAssignedContent(event);
	}

	private handleFootSlotChange(event: Event) {
		this.hasFoot = this.hasAssignedContent(event);
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
			color: var(--w1c-data-table-text, var(--w1c-control-text, #111111));
			font: var(--w1c-data-table-font, var(--w1c-control-font, 13px/1.25 'MS Sans Serif', Tahoma, sans-serif));
		}

		.chrome {
			box-sizing: border-box;
			overflow: auto;
			border: var(--w1c-data-table-border, 1px solid var(--w1c-control-shadow, #808080));
			border-block-end-color: var(--w1c-data-table-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-end-color: var(--w1c-data-table-highlight, var(--w1c-control-highlight, #ffffff));
			background: var(--w1c-data-table-background, var(--w1c-window-content-background, #ffffff));
		}

		.table {
			width: 100%;
			min-width: var(--w1c-data-table-min-width, 320px);
			color: inherit;
			font: inherit;
			background: transparent;
		}

		.caption {
			padding: var(--w1c-data-table-caption-padding, 4px 6px);
			text-align: start;
			font-weight: 700;
			background: var(--w1c-data-table-caption-background, var(--w1c-surface, #c0c0c0));
			border-block-end: var(--w1c-data-table-divider, 1px solid var(--w1c-control-shadow, #808080));
		}

		.head {
			background: var(--w1c-data-table-head-background, var(--w1c-surface, #c0c0c0));
		}

		.foot {
			background: var(--w1c-data-table-foot-background, var(--w1c-surface, #c0c0c0));
		}

		::slotted(*) {
			box-sizing: border-box;
			display: grid;
			grid-template-columns: var(--w1c-data-table-columns, repeat(3, minmax(0, 1fr)));
			gap: var(--w1c-data-table-cell-gap, var(--w1c-space-2, 8px));
			min-width: 0;
			padding: var(--w1c-data-table-cell-padding, 4px 6px);
			border-block-end: var(--w1c-data-table-cell-border, 1px solid var(--w1c-control-shadow, #808080));
			background: var(--w1c-data-table-row-background, transparent);
			text-align: start;
			vertical-align: top;
		}

		:host([striped]) .body ::slotted(:nth-child(even)) {
			background: var(--w1c-data-table-stripe-background, rgb(0 0 0 / 0.04));
		}

		::slotted([aria-selected='true']),
		::slotted([selected]) {
			color: var(--w1c-data-table-selected-text, var(--w1c-active-titlebar-text, #ffffff));
			background: var(--w1c-data-table-selected-background, var(--w1c-active-titlebar, #000080));
		}

		:host([compact]) ::slotted(*) {
			padding: var(--w1c-data-table-compact-cell-padding, 2px 4px);
		}

		[hidden] {
			display: none;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-data-table': W1cDataTable;
	}
}
