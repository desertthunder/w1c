import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import './button.js';
import './titlebar.js';

/**
 * Retro dialog shell for alerts, confirmations, and small forms.
 *
 * @slot - Dialog body.
 * @slot icon - Optional leading icon.
 * @slot titlebar - Custom titlebar replacement.
 * @slot actions - Dialog actions.
 * @csspart chrome - The outer dialog frame.
 * @csspart titlebar - The default titlebar.
 * @csspart body - The dialog body layout.
 * @csspart icon - The icon slot wrapper.
 * @csspart content - The content wrapper.
 * @csspart actions - The action row.
 */
@customElement('w1c-dialog')
export class W1cDialog extends LitElement {
	@property()
	title = 'Dialog';

	@property({ reflect: true })
	variant: 'window' | 'alert' = 'window';

	@state()
	private hasIcon = false;

	render() {
		return html`
			<section
				part="chrome"
				class="chrome"
				role=${this.variant === 'alert' ? 'alertdialog' : 'dialog'}
				aria-label=${this.title}>
				<slot name="titlebar">
					<w1c-titlebar
						part="titlebar"
						exportparts="chrome: titlebar-chrome, titlebar, icon, title, controls"
						.title=${this.title}></w1c-titlebar>
				</slot>
				<div part="body" class="body" data-has-icon=${this.hasIcon ? 'true' : 'false'}>
					<span part="icon" class="icon"><slot name="icon" @slotchange=${this.handleIconSlotChange}></slot></span>
					<div part="content" class="content"><slot></slot></div>
				</div>
				<footer part="actions" class="actions">
					<slot name="actions">
						<w1c-button>OK</w1c-button>
					</slot>
				</footer>
			</section>
		`;
	}

	private handleIconSlotChange(event: Event) {
		const slot = event.currentTarget as HTMLSlotElement;
		this.hasIcon = slot.assignedNodes({ flatten: true }).some((node) => {
			return node.nodeType === Node.ELEMENT_NODE || Boolean(node.textContent?.trim());
		});
	}

	static styles = css`
		:host {
			display: block;
			width: min(var(--w1c-dialog-width, 420px), 100%);
			color: var(--w1c-dialog-text, var(--w1c-control-text, #111111));
			font: var(
				--w1c-body-font,
				var(--w1c-font-size-2, 13px) / var(--w1c-line-normal, 1.35)
					var(--w1c-font-ui, 'MS Sans Serif', Tahoma, sans-serif)
			);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			grid-template-rows: auto minmax(0, 1fr) auto;
			border: var(
				--w1c-dialog-border,
				1px solid var(--w1c-dialog-dark-shadow, var(--w1c-control-dark-shadow, #404040))
			);
			border-block-start-color: var(--w1c-dialog-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-start-color: var(--w1c-dialog-highlight, var(--w1c-control-highlight, #ffffff));
			border-radius: var(--w1c-dialog-radius, var(--w1c-window-radius, var(--w1c-radius-1, 0)));
			background: var(--w1c-dialog-frame, var(--w1c-surface, #c0c0c0));
			box-shadow: var(
				--w1c-dialog-shadow,
				inset -1px -1px 0 var(--w1c-dialog-shadow-color, var(--w1c-control-shadow, #808080)),
				inset 1px 1px 0 var(--w1c-dialog-highlight, var(--w1c-control-highlight, #ffffff)),
				var(--w1c-dialog-shadow-outer, var(--w1c-shadow-window, 2px 2px 0 rgb(0 0 0 / 0.35)))
			);
			overflow: hidden;
		}

		.body {
			box-sizing: border-box;
			display: grid;
			grid-template-columns: auto minmax(0, 1fr);
			gap: var(--w1c-dialog-body-gap, var(--w1c-space-3, 12px));
			padding: var(--w1c-dialog-body-padding, 16px);
			background: var(--w1c-dialog-background, var(--w1c-window-content-background, #ffffff));
		}

		.body[data-has-icon='false'] {
			grid-template-columns: minmax(0, 1fr);
		}

		.icon {
			display: inline-grid;
			place-items: start center;
			min-width: var(--w1c-dialog-icon-column, 32px);
			color: var(--w1c-dialog-icon-color, currentColor);
		}

		.body[data-has-icon='false'] .icon {
			display: none;
		}

		.content {
			min-width: 0;
		}

		.content ::slotted(*) {
			margin-block-start: 0;
		}

		.actions {
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-end;
			gap: var(--w1c-space-2, 8px);
			padding: var(--w1c-dialog-actions-padding, 0 16px 16px);
			background: var(--w1c-dialog-background, var(--w1c-window-content-background, #ffffff));
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-dialog': W1cDialog;
	}
}
