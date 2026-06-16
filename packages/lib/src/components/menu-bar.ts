import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Horizontal menu bar for application chrome.
 *
 * @slot - Menu buttons, links, or `w1c-menu-item` elements.
 * @csspart chrome - The menu bar surface.
 * @csspart menubar - Alias for the menu bar surface.
 */
@customElement('w1c-menu-bar')
export class W1cMenuBar extends LitElement {
	render() {
		return html`<div part="chrome menubar" role="menubar"><slot></slot></div>`;
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-menu-bar-text, var(--w1c-control-text, #111111));
			font: var(
				--w1c-control-font,
				var(--w1c-font-size-2, 13px) / var(--w1c-line-tight, 1.2)
					var(--w1c-font-ui, 'MS Sans Serif', Tahoma, sans-serif)
			);
		}

		div {
			box-sizing: border-box;
			min-height: var(--w1c-menu-bar-height, 24px);
			display: flex;
			align-items: center;
			gap: var(--w1c-menu-bar-gap, 0);
			padding: var(--w1c-menu-bar-padding, 2px);
			border-block-start: var(--w1c-menu-bar-border-block-start, 1px solid var(--w1c-control-highlight, #ffffff));
			border-block-end: var(--w1c-menu-bar-border-block-end, 1px solid var(--w1c-control-shadow, #808080));
			background: var(--w1c-menu-bar-background, var(--w1c-surface, #c0c0c0));
		}

		div ::slotted(w1c-menu-item) {
			--w1c-menu-item-height: var(--w1c-menu-bar-item-height, 20px);
			--w1c-menu-item-padding: var(--w1c-menu-bar-item-padding, 2px 8px);
			--w1c-menu-item-gap: var(--w1c-menu-bar-item-gap, var(--w1c-space-1, 4px));
			--w1c-menu-item-active-background: var(
				--w1c-menu-bar-item-active-background,
				var(--w1c-menu-item-active-background, var(--w1c-active-titlebar, #000080))
			);
			--w1c-menu-item-active-text: var(
				--w1c-menu-bar-item-active-text,
				var(--w1c-menu-item-active-text, var(--w1c-active-titlebar-text, #ffffff))
			);
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-menu-bar': W1cMenuBar;
	}
}
