import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Framed panel surface for grouped controls, documents, and sidebar content.
 *
 * @slot - Panel content.
 * @slot header - Optional panel heading or controls.
 * @slot footer - Optional panel footer.
 * @csspart chrome - The outer panel frame.
 * @csspart header - The header slot wrapper.
 * @csspart content - The content wrapper.
 * @csspart footer - The footer slot wrapper.
 */
@customElement('w1c-panel')
export class W1cPanel extends LitElement {
	@property({ reflect: true })
	variant: 'raised' | 'sunken' | 'flat' = 'raised';

	@state()
	private hasHeader = false;

	@state()
	private hasFooter = false;

	render() {
		return html`
			<section part="chrome" class="chrome" data-variant=${this.variant}>
				<header part="header" class="header" ?hidden=${!this.hasHeader}>
					<slot name="header" @slotchange=${this.handleHeaderSlotChange}></slot>
				</header>
				<div part="content" class="content"><slot></slot></div>
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
			color: var(--w1c-panel-text, var(--w1c-control-text, #111111));
			font: var(
				--w1c-body-font,
				var(--w1c-font-size-2, 13px) / var(--w1c-line-normal, 1.35)
					var(--w1c-font-ui, 'MS Sans Serif', Tahoma, sans-serif)
			);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			min-width: 0;
			border: var(--w1c-panel-border, 1px solid var(--w1c-control-dark-shadow, #404040));
			border-block-start-color: var(--w1c-panel-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-start-color: var(--w1c-panel-highlight, var(--w1c-control-highlight, #ffffff));
			border-radius: var(--w1c-panel-radius, var(--w1c-radius-1, 0));
			background: var(--w1c-panel-frame, var(--w1c-surface, #c0c0c0));
			box-shadow: var(--w1c-panel-shadow, var(--w1c-shadow-raised, none));
			overflow: hidden;
		}

		.chrome[data-variant='sunken'] {
			border-color: var(--w1c-panel-highlight, var(--w1c-control-highlight, #ffffff));
			border-block-start-color: var(--w1c-panel-shadow-color, var(--w1c-control-shadow, #808080));
			border-inline-start-color: var(--w1c-panel-shadow-color, var(--w1c-control-shadow, #808080));
			box-shadow: var(--w1c-panel-shadow-sunken, var(--w1c-shadow-sunken, none));
		}

		.chrome[data-variant='flat'] {
			border-color: var(--w1c-panel-flat-border, var(--w1c-control-shadow, #808080));
			box-shadow: var(--w1c-panel-shadow-flat, none);
		}

		.header,
		.footer {
			box-sizing: border-box;
			display: flex;
			align-items: center;
			gap: var(--w1c-space-2, 8px);
			padding: var(--w1c-panel-header-padding, 4px 6px);
			background: var(--w1c-panel-chrome-background, var(--w1c-surface, #c0c0c0));
		}

		.header {
			border-block-end: var(--w1c-panel-header-border, 1px solid var(--w1c-control-shadow, #808080));
			font: var(
				--w1c-panel-header-font,
				var(
					--w1c-titlebar-font,
					700 var(--w1c-font-size-2, 13px) / var(--w1c-line-tight, 1.2)
						var(--w1c-font-heading, 'MS Sans Serif', Tahoma, sans-serif)
				)
			);
		}

		.footer {
			border-block-start: var(--w1c-panel-footer-border, 1px solid var(--w1c-control-shadow, #808080));
		}

		.content {
			box-sizing: border-box;
			min-width: 0;
			padding: var(--w1c-panel-content-padding, var(--w1c-space-3, 12px));
			background: var(--w1c-panel-background, var(--w1c-window-content-background, #ffffff));
		}

		[hidden] {
			display: none;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-panel': W1cPanel;
	}
}
