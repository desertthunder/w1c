import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Desktop taskbar or GNOME-style panel row.
 *
 * @slot start - Start/menu button or launchers.
 * @slot - Window list and main taskbar content.
 * @slot tray - Clock, status icons, and indicators.
 * @csspart chrome - The taskbar surface.
 * @csspart start - Start area wrapper.
 * @csspart content - Main content wrapper.
 * @csspart tray - Tray wrapper.
 */
@customElement('w1c-taskbar')
export class W1cTaskbar extends LitElement {
	render() {
		return html`
			<nav part="chrome" class="chrome" aria-label="Taskbar">
				<div part="start" class="start"><slot name="start"></slot></div>
				<div part="content" class="content"><slot></slot></div>
				<div part="tray" class="tray"><slot name="tray"></slot></div>
			</nav>
		`;
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-taskbar-text, var(--w1c-control-text, #111111));
			font: var(--w1c-control-font, 13px/1.2 'MS Sans Serif', Tahoma, sans-serif);
		}

		.chrome {
			box-sizing: border-box;
			min-height: var(--w1c-taskbar-height, 30px);
			display: grid;
			grid-template-columns: auto minmax(0, 1fr) auto;
			align-items: center;
			gap: var(--w1c-taskbar-gap, var(--w1c-space-1, 4px));
			padding: var(--w1c-taskbar-padding, 3px 4px);
			border-block-start: var(--w1c-taskbar-border-block-start, 1px solid var(--w1c-control-highlight, #ffffff));
			border-block-end: var(--w1c-taskbar-border-block-end, 1px solid var(--w1c-control-shadow, #808080));
			background: var(--w1c-taskbar-background, var(--w1c-surface, #c0c0c0));
			box-shadow: var(--w1c-taskbar-shadow, none);
		}

		.start,
		.content,
		.tray {
			min-width: 0;
			display: flex;
			align-items: center;
			gap: var(--w1c-taskbar-gap, var(--w1c-space-1, 4px));
		}

		.content {
			overflow: hidden;
		}

		.tray {
			justify-content: end;
			padding-inline-start: var(--w1c-taskbar-tray-padding, var(--w1c-space-1, 4px));
			border-inline-start: var(--w1c-taskbar-tray-border, 1px solid var(--w1c-control-shadow, #808080));
		}

		.chrome ::slotted(w1c-button) {
			--w1c-button-background: var(--w1c-taskbar-button-background, var(--w1c-control-background, #c0c0c0));
			--w1c-button-active-background: var(
				--w1c-taskbar-button-active-background,
				var(--w1c-button-background, var(--w1c-control-background, #c0c0c0))
			);
			--w1c-button-text: var(--w1c-taskbar-button-text, var(--w1c-control-text, #111111));
			--w1c-button-radius: var(--w1c-taskbar-button-radius, var(--w1c-radius-1, 0));
			--w1c-button-padding: var(--w1c-taskbar-button-padding, 2px 10px);
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-taskbar': W1cTaskbar;
	}
}
