import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Compact toolbar surface for buttons, fields, and menus.
 *
 * @slot - Toolbar controls.
 * @csspart toolbar - The toolbar container.
 */
@customElement('w1c-toolbar')
export class W1cToolbar extends LitElement {
	render() {
		return html`<div part="toolbar"><slot></slot></div>`;
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-control-text, #111111);
			font: var(--w1c-control-font, 13px/1.2 'MS Sans Serif', Tahoma, sans-serif);
		}

		div {
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: var(--w1c-space-1, 4px);
			padding: var(--w1c-toolbar-padding, 4px);
			border-block-start: 1px solid var(--w1c-control-highlight, #ffffff);
			border-block-end: 1px solid var(--w1c-control-shadow, #808080);
			background: var(--w1c-toolbar-background, var(--w1c-surface, #c0c0c0));
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-toolbar': W1cToolbar;
	}
}
