import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Statusbar for messages and simple pane metadata.
 *
 * @slot - Status text or panes.
 * @csspart chrome - The statusbar chrome surface.
 * @csspart statusbar - Alias for the statusbar chrome surface.
 * @csspart content - The statusbar content container.
 */
@customElement('w1c-statusbar')
export class W1cStatusbar extends LitElement {
	render() {
		return html`<footer part="chrome statusbar content"><slot></slot></footer>`;
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-control-text, #111111);
			font: var(--w1c-statusbar-font, 12px/1.2 'MS Sans Serif', Tahoma, sans-serif);
		}

		footer {
			box-sizing: border-box;
			min-height: var(--w1c-statusbar-height, 22px);
			display: flex;
			align-items: center;
			gap: var(--w1c-space-2, 8px);
			padding: var(--w1c-statusbar-padding, 3px 4px);
			border-block-start: 1px solid var(--w1c-control-shadow, #808080);
			background: var(--w1c-statusbar-background, var(--w1c-surface, #c0c0c0));
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-statusbar': W1cStatusbar;
	}
}
