import { LitElement, css, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Dense titlebar for retro windows and dialogs.
 *
 * @slot - Title text.
 * @slot icon - Optional leading icon.
 * @slot controls - Optional window control buttons.
 * @csspart chrome - The titlebar chrome surface.
 * @csspart titlebar - Alias for the titlebar chrome surface.
 * @csspart icon - The icon slot wrapper.
 * @csspart title - The title text wrapper.
 * @csspart controls - The controls slot wrapper.
 */
@customElement('w1c-titlebar')
export class W1cTitlebar extends LitElement {
	@property()
	title = '';

	@state()
	private hasTitleSlotContent = false;

	render() {
		return html`
			<header part="chrome titlebar">
				<span part="icon" class="icon"><slot name="icon"></slot></span>
				<span part="title" class="title">
					<slot @slotchange=${this.handleTitleSlotChange}></slot>${this.hasTitleSlotContent ? nothing : this.title}
				</span>
				<span part="controls" class="controls"><slot name="controls"></slot></span>
			</header>
		`;
	}

	private handleTitleSlotChange(event: Event) {
		const slot = event.currentTarget as HTMLSlotElement;
		this.hasTitleSlotContent = slot.assignedNodes({ flatten: true }).some((node) => {
			if (node.nodeType === Node.TEXT_NODE) {
				return Boolean(node.textContent?.trim());
			}

			return node instanceof HTMLElement || node instanceof SVGElement;
		});
	}

	static styles = css`
		:host {
			display: block;
			min-width: 0;
			color: var(--w1c-titlebar-text, var(--w1c-active-titlebar-text, #ffffff));
			font: var(--w1c-titlebar-font, 700 13px/1.2 'MS Sans Serif', Tahoma, sans-serif);
		}

		header {
			box-sizing: border-box;
			min-height: var(--w1c-titlebar-height, 22px);
			display: grid;
			grid-template-columns: var(--w1c-titlebar-columns, auto minmax(0, 1fr) auto);
			align-items: center;
			gap: var(--w1c-space-1, 4px);
			padding: var(--w1c-titlebar-padding, 2px 3px);
			border-block-end: var(--w1c-titlebar-border-block-end, 0);
			background: var(--w1c-titlebar-background, var(--w1c-active-titlebar, #000080));
			text-shadow: var(--w1c-titlebar-text-shadow, none);
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
			padding: var(--w1c-titlebar-title-padding, 0);
			background: var(--w1c-titlebar-title-background, transparent);
			text-align: var(--w1c-titlebar-title-align, start);
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-titlebar': W1cTitlebar;
	}
}
