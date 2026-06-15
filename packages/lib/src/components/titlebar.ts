import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Dense titlebar for retro windows and dialogs.
 *
 * @slot - Title text.
 * @slot icon - Optional leading icon.
 * @slot controls - Optional window control buttons.
 * @csspart titlebar - The titlebar container.
 * @csspart icon - The icon slot wrapper.
 * @csspart title - The title text wrapper.
 * @csspart controls - The controls slot wrapper.
 */
@customElement('w1c-titlebar')
export class W1cTitlebar extends LitElement {
	@property()
	title = '';

	render() {
		return html`
			<header part="titlebar">
				<span part="icon" class="icon"><slot name="icon"></slot></span>
				<span part="title" class="title"><slot>${this.title}</slot></span>
				<span part="controls" class="controls"><slot name="controls"></slot></span>
			</header>
		`;
	}

	static styles = css`
		:host {
			--w1c-titlebar-background: var(--w1c-active-titlebar, #000080);
			--w1c-titlebar-text: var(--w1c-active-titlebar-text, #ffffff);

			display: block;
			min-width: 0;
			color: var(--w1c-titlebar-text);
			font: var(--w1c-titlebar-font, 700 13px/1.2 'MS Sans Serif', Tahoma, sans-serif);
		}

		header {
			box-sizing: border-box;
			min-height: var(--w1c-titlebar-height, 22px);
			display: grid;
			grid-template-columns: auto minmax(0, 1fr) auto;
			align-items: center;
			gap: var(--w1c-space-1, 4px);
			padding: var(--w1c-titlebar-padding, 2px 3px);
			background: var(--w1c-titlebar-background);
		}

		.icon,
		.controls {
			display: inline-flex;
			align-items: center;
			min-width: 0;
		}

		.title {
			min-width: 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-titlebar': W1cTitlebar;
	}
}
