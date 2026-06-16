import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Guestbook surface for entries, sign prompts, and small static forms.
 *
 * @slot - Guestbook entries.
 * @slot actions - Sign/read links or controls.
 * @slot footer - Footer note.
 * @csspart chrome - The outer guestbook frame.
 * @csspart header - The header region.
 * @csspart content - Entry content wrapper.
 * @csspart actions - Actions wrapper.
 * @csspart footer - Footer wrapper.
 */
@customElement('w1c-guestbook-panel')
export class W1cGuestbookPanel extends LitElement {
	@property()
	heading = 'Guestbook';

	@property()
	subheading = 'Thanks for stopping by.';

	@state()
	private hasActions = false;

	@state()
	private hasFooter = false;

	render() {
		return html`
			<section part="chrome" class="chrome">
				<header part="header" class="header">
					<strong>${this.heading}</strong>
					<span>${this.subheading}</span>
				</header>
				<div part="content" class="content"><slot></slot></div>
				<div part="actions" class="actions" ?hidden=${!this.hasActions}>
					<slot name="actions" @slotchange=${this.handleActionsSlotChange}></slot>
				</div>
				<footer part="footer" class="footer" ?hidden=${!this.hasFooter}>
					<slot name="footer" @slotchange=${this.handleFooterSlotChange}></slot>
				</footer>
			</section>
		`;
	}

	private handleActionsSlotChange(event: Event) {
		this.hasActions = this.hasAssignedContent(event);
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
			color: var(--w1c-guestbook-text, var(--w1c-control-text, #000000));
			font: var(--w1c-body-font, 14px/1.25 Arial, sans-serif);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			gap: var(--w1c-guestbook-gap, var(--w1c-space-2, 8px));
			border: var(--w1c-guestbook-border, 4px ridge #ff66cc);
			background: var(--w1c-guestbook-background, #ffffff);
			box-shadow: var(--w1c-guestbook-shadow, 5px 5px 0 #00ffff);
		}

		.header {
			box-sizing: border-box;
			display: grid;
			gap: 2px;
			padding: var(--w1c-guestbook-header-padding, 6px 8px);
			border-block-end: var(--w1c-guestbook-header-border, 3px groove #660066);
			background: var(
				--w1c-guestbook-header-background,
				repeating-linear-gradient(90deg, #ffff00 0 12px, #ff66cc 12px 24px)
			);
			color: var(--w1c-guestbook-header-text, #000000);
			text-align: center;
		}

		.header strong {
			font: var(--w1c-guestbook-heading-font, 700 18px/1.1 var(--w1c-font-heading, cursive));
		}

		.header span {
			font-size: 12px;
		}

		.content {
			box-sizing: border-box;
			display: grid;
			gap: var(--w1c-guestbook-entry-gap, var(--w1c-space-2, 8px));
			padding: var(--w1c-guestbook-content-padding, var(--w1c-space-3, 12px));
		}

		::slotted(article),
		::slotted(blockquote) {
			margin: 0;
			padding: var(--w1c-guestbook-entry-padding, var(--w1c-space-2, 8px));
			border: var(--w1c-guestbook-entry-border, 2px dashed #660099);
			background: var(--w1c-guestbook-entry-background, #ffffcc);
		}

		.actions,
		.footer {
			box-sizing: border-box;
			padding: var(--w1c-guestbook-footer-padding, 6px 8px);
			border-block-start: var(--w1c-guestbook-footer-border, 2px dotted #cc6600);
			background: var(--w1c-guestbook-footer-background, #ffffcc);
			text-align: center;
		}

		.actions {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: var(--w1c-space-2, 8px);
		}

		[hidden] {
			display: none;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-guestbook-panel': W1cGuestbookPanel;
	}
}
