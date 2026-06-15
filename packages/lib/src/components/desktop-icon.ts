import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Desktop shortcut primitive with an icon slot and wrapped label.
 *
 * @slot icon - Icon image or `w1c-icon`.
 * @slot - Desktop icon label.
 * @csspart control - The clickable shortcut control.
 * @csspart icon - The icon slot wrapper.
 * @csspart label - The label wrapper.
 */
@customElement('w1c-desktop-icon')
export class W1cDesktopIcon extends LitElement {
	@property()
	href = '';

	@property()
	label = '';

	@property({ type: Boolean, reflect: true })
	selected = false;

	render() {
		const content = html`
			<span part="icon" class="icon"><slot name="icon"></slot></span>
			<span part="label" class="label"><slot>${this.label}</slot></span>
		`;

		if (this.href) {
			return html`
				<a
					part="control"
					class="control"
					href=${this.href}
					aria-label=${this.label || undefined}
					aria-current=${this.selected ? 'true' : undefined}>
					${content}
				</a>
			`;
		}

		return html`
			<button
				part="control"
				class="control"
				type="button"
				aria-label=${this.label || undefined}
				aria-pressed=${this.selected ? 'true' : 'false'}>
				${content}
			</button>
		`;
	}

	static styles = css`
		:host {
			display: inline-block;
			color: var(--w1c-desktop-icon-text, #ffffff);
			font: var(
				--w1c-desktop-icon-font,
				var(--w1c-font-size-1, 12px) / var(--w1c-line-tight, 1.2) var(--w1c-font-ui, sans-serif)
			);
		}

		.control {
			box-sizing: border-box;
			width: var(--w1c-desktop-icon-width);
			min-height: 64px;
			display: grid;
			justify-items: center;
			align-content: start;
			gap: var(--w1c-space-1, 4px);
			padding: var(--w1c-desktop-icon-padding, 6px 4px);
			border: 1px solid transparent;
			color: inherit;
			background: transparent;
			border-radius: var(--w1c-desktop-icon-radius, 0);
			font: inherit;
			text-align: center;
			text-decoration: none;
			text-shadow: var(--w1c-desktop-icon-text-shadow, 1px 1px 0 var(--w1c-desktop-icon-shadow, rgb(0 0 0 / 0.8)));
			cursor: default;
		}

		.icon {
			display: inline-grid;
			place-items: center;
			width: var(--w1c-desktop-icon-size);
			height: var(--w1c-desktop-icon-size);
			color: var(--w1c-desktop-icon-text);
		}

		.icon ::slotted(img),
		.icon ::slotted(svg),
		.icon ::slotted(w1c-icon) {
			width: 100%;
			height: 100%;
			image-rendering: var(--w1c-desktop-icon-rendering, auto);
		}

		.label {
			max-width: 100%;
			padding: var(--w1c-desktop-icon-label-padding, 1px 2px);
			overflow-wrap: anywhere;
		}

		.control:hover,
		.control:focus-visible,
		:host([selected]) .control {
			color: var(--w1c-desktop-icon-selection-text, var(--w1c-active-titlebar-text, #ffffff));
			background: color-mix(
				in srgb,
				var(--w1c-desktop-icon-selection, var(--w1c-active-titlebar, #000080)) 72%,
				transparent
			);
			outline: var(
				--w1c-desktop-icon-outline,
				1px dotted var(--w1c-desktop-icon-selection-text, var(--w1c-active-titlebar-text, #ffffff))
			);
			outline-offset: -2px;
		}

		.control:focus-visible {
			outline-style: solid;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-desktop-icon': W1cDesktopIcon;
	}
}
