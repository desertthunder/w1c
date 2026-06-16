import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Vertical menu surface for commands and submenus.
 *
 * @slot - Menu items and separators.
 * @csspart chrome - The menu surface.
 * @csspart menu - Alias for the menu surface.
 */
@customElement('w1c-menu')
export class W1cMenu extends LitElement {
	@property()
	label = 'Menu';

	render() {
		return html`
			<div part="chrome menu" role="menu" aria-label=${this.label}>
				<slot></slot>
			</div>
		`;
	}

	static styles = css`
		:host {
			display: block;
			width: max-content;
			max-width: 100%;
			color: var(--w1c-menu-text, var(--w1c-control-text, #111111));
			font: var(
				--w1c-control-font,
				var(--w1c-font-size-2, 13px) / var(--w1c-line-tight, 1.2)
					var(--w1c-font-ui, 'MS Sans Serif', Tahoma, sans-serif)
			);
		}

		div {
			box-sizing: border-box;
			min-width: var(--w1c-menu-min-width, 160px);
			display: grid;
			gap: var(--w1c-menu-gap, 0);
			padding: var(--w1c-menu-padding, 2px);
			border: var(--w1c-menu-border, 1px solid var(--w1c-control-dark-shadow, #404040));
			border-block-start-color: var(--w1c-menu-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-start-color: var(--w1c-menu-highlight, var(--w1c-control-highlight, #ffffff));
			background: var(--w1c-menu-background, var(--w1c-surface, #c0c0c0));
			box-shadow: var(--w1c-menu-shadow, var(--w1c-shadow-window, 2px 2px 0 rgb(0 0 0 / 0.35)));
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-menu': W1cMenu;
	}
}
