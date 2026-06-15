import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Menu command item for menu bars and vertical menus.
 *
 * @slot - Menu item label.
 * @slot prefix - Optional leading icon or checkmark.
 * @slot suffix - Optional shortcut text or submenu marker.
 * @csspart control - The native anchor or button.
 * @csspart prefix - Prefix slot wrapper.
 * @csspart label - Label wrapper.
 * @csspart suffix - Suffix slot wrapper.
 */
@customElement('w1c-menu-item')
export class W1cMenuItem extends LitElement {
	@property()
	href = '';

	@property({ type: Boolean, reflect: true })
	disabled = false;

	@property({ type: Boolean, reflect: true })
	checked = false;

	render() {
		const content = html`
			<span part="prefix" class="prefix"><slot name="prefix">${this.checked ? '✓' : ''}</slot></span>
			<span part="label" class="label"><slot></slot></span>
			<span part="suffix" class="suffix"><slot name="suffix"></slot></span>
		`;

		if (this.href) {
			return html`
				<a
					part="control"
					class="control"
					role=${this.checked ? 'menuitemcheckbox' : 'menuitem'}
					href=${this.disabled ? undefined : this.href}
					aria-disabled=${this.disabled ? 'true' : undefined}
					aria-checked=${this.checked ? 'true' : undefined}
					@click=${this.handleClick}>
					${content}
				</a>
			`;
		}

		return html`
			<button
				part="control"
				class="control"
				type="button"
				role=${this.checked ? 'menuitemcheckbox' : 'menuitem'}
				?disabled=${this.disabled}
				aria-checked=${this.checked ? 'true' : undefined}
				@click=${this.handleClick}>
				${content}
			</button>
		`;
	}

	private handleClick(event: Event) {
		if (this.disabled) {
			event.preventDefault();
			event.stopPropagation();
			return;
		}

		this.dispatchEvent(new CustomEvent('w1c-menu-item-select', { bubbles: true, composed: true }));
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-menu-item-text, var(--w1c-control-text, #111111));
			font: var(--w1c-control-font, 13px/1.2 'MS Sans Serif', Tahoma, sans-serif);
		}

		.control {
			box-sizing: border-box;
			width: 100%;
			min-height: var(--w1c-menu-item-height, 22px);
			display: grid;
			grid-template-columns: minmax(16px, auto) minmax(0, 1fr) auto;
			align-items: center;
			gap: var(--w1c-menu-item-gap, var(--w1c-space-2, 8px));
			padding: var(--w1c-menu-item-padding, 2px 8px 2px 4px);
			border: 1px solid transparent;
			color: inherit;
			background: var(--w1c-menu-item-background, transparent);
			font: inherit;
			text-align: start;
			text-decoration: none;
			white-space: nowrap;
			cursor: default;
		}

		.control:hover,
		.control:focus-visible {
			color: var(--w1c-menu-item-active-text, var(--w1c-active-titlebar-text, #ffffff));
			background: var(--w1c-menu-item-active-background, var(--w1c-active-titlebar, #000080));
			outline: none;
		}

		.control:disabled,
		.control[aria-disabled='true'] {
			color: var(--w1c-disabled-text, #808080);
			text-shadow: var(--w1c-menu-item-disabled-shadow, 1px 1px 0 var(--w1c-control-highlight, #ffffff));
		}

		.control:disabled:hover,
		.control[aria-disabled='true']:hover {
			background: transparent;
		}

		.prefix,
		.suffix {
			min-width: 0;
			display: inline-flex;
			align-items: center;
		}

		.suffix {
			justify-content: end;
			color: var(--w1c-menu-item-shortcut-text, currentColor);
		}

		.label {
			min-width: 0;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-menu-item': W1cMenuItem;
	}
}
