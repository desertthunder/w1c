import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Native-size 88x31 badge button for links, affiliations, validators, and project stamps.
 *
 * @slot - Badge label.
 * @slot icon - Optional small icon.
 * @csspart chrome - The badge frame.
 * @csspart icon - Optional icon wrapper.
 * @csspart label - Badge label wrapper.
 */
@customElement('w1c-badge-88x31')
export class W1cBadge88x31 extends LitElement {
	@property()
	href = '';

	@property()
	target = '';

	@property()
	rel = '';

	@property({ reflect: true })
	variant: 'plain' | 'split' | 'warning' = 'split';

	@property()
	label = '';

	@state()
	private hasIcon = false;

	render() {
		const content = html`
			<span part="icon" class="icon" ?hidden=${!this.hasIcon}>
				<slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
			</span>
			<span part="label" class="label"><slot>${this.label}</slot></span>
		`;

		if (this.href) {
			return html`
				<a
					part="chrome"
					class="chrome"
					href=${this.href}
					target=${this.target || undefined}
					rel=${this.rel || undefined}
					data-variant=${this.variant}>
					${content}
				</a>
			`;
		}

		return html`<span part="chrome" class="chrome" data-variant=${this.variant}>${content}</span>`;
	}

	private handleIconSlotChange(event: Event) {
		const slot = event.currentTarget as HTMLSlotElement;
		this.hasIcon = slot.assignedNodes({ flatten: true }).some((node) => {
			return node.nodeType === Node.ELEMENT_NODE || Boolean(node.textContent?.trim());
		});
	}

	static styles = css`
		:host {
			display: inline-block;
			width: var(--w1c-badge-width, 88px);
			height: var(--w1c-badge-height, 31px);
			vertical-align: middle;
			color: var(--w1c-badge-text, #000000);
			font: var(--w1c-badge-font, 700 10px/1 var(--w1c-font-ui, Arial, sans-serif));
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			grid-template-columns: auto minmax(0, 1fr);
			align-items: stretch;
			width: 100%;
			height: 100%;
			overflow: hidden;
			border: var(--w1c-badge-border, 1px solid #000000);
			background: var(--w1c-badge-background, linear-gradient(#ffffff 0 48%, #d8d8d8 48% 100%));
			color: inherit;
			text-decoration: none;
			text-transform: uppercase;
			image-rendering: pixelated;
		}

		.icon {
			box-sizing: border-box;
			display: grid;
			place-items: center;
			min-width: var(--w1c-badge-icon-width, 25px);
			padding: 1px 2px;
			border-inline-end: var(--w1c-badge-divider, 1px solid #000000);
			background: var(--w1c-badge-icon-background, #000000);
			color: var(--w1c-badge-icon-text, #ffffff);
			font-size: 13px;
			line-height: 1;
		}

		.label {
			box-sizing: border-box;
			display: grid;
			place-items: center;
			min-width: 0;
			padding: 1px 3px;
			text-align: center;
			overflow-wrap: anywhere;
			text-shadow: var(--w1c-badge-label-shadow, 1px 1px 0 #ffffff);
		}

		.chrome[data-variant='plain'] {
			grid-template-columns: minmax(0, 1fr);
		}

		.chrome[data-variant='plain'] .icon {
			display: none;
		}

		.chrome[data-variant='warning'] {
			background: var(
				--w1c-badge-warning-background,
				repeating-linear-gradient(45deg, #ffff00 0 5px, #000000 5px 10px)
			);
			color: var(--w1c-badge-warning-text, #000000);
		}

		.chrome[data-variant='warning'] .label {
			margin: 3px;
			background: var(--w1c-badge-warning-label-background, #ffffff);
			text-shadow: none;
		}

		[hidden] {
			display: none;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-badge-88x31': W1cBadge88x31;
	}
}
