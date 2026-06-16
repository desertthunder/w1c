import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Retro separator for menus, toolbars, panels, and document sections.
 *
 * @slot - Optional divider label.
 * @csspart chrome - The separator frame.
 * @csspart line - The separator rule.
 * @csspart label - Optional label wrapper.
 */
@customElement('w1c-divider')
export class W1cDivider extends LitElement {
	@property({ reflect: true })
	orientation: 'horizontal' | 'vertical' = 'horizontal';

	@state()
	private hasLabel = false;

	render() {
		return html`
			<div
				part="chrome"
				class="chrome"
				role="separator"
				aria-orientation=${this.orientation}
				data-orientation=${this.orientation}>
				<span part="line" class="line"></span>
				<span part="label" class="label" ?hidden=${!this.hasLabel}>
					<slot @slotchange=${this.handleSlotChange}></slot>
				</span>
				<span part="line" class="line"></span>
			</div>
		`;
	}

	private handleSlotChange(event: Event) {
		const slot = event.currentTarget as HTMLSlotElement;
		this.hasLabel = slot.assignedNodes({ flatten: true }).some((node) => {
			return node.nodeType === Node.ELEMENT_NODE || Boolean(node.textContent?.trim());
		});
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-divider-text, var(--w1c-control-text, #111111));
			font: var(
				--w1c-control-font,
				var(--w1c-font-size-2, 13px) / var(--w1c-line-tight, 1.2)
					var(--w1c-font-ui, 'MS Sans Serif', Tahoma, sans-serif)
			);
		}

		:host([orientation='vertical']) {
			display: inline-block;
			align-self: stretch;
			min-height: 1.5em;
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
			align-items: center;
			gap: var(--w1c-divider-gap, var(--w1c-space-2, 8px));
			min-width: 0;
			padding: var(--w1c-divider-padding, var(--w1c-space-1, 4px) 0);
		}

		.line {
			display: block;
			min-width: 0;
			border-block-start: var(--w1c-divider-shadow-line, 1px solid var(--w1c-control-shadow, #808080));
			border-block-end: var(--w1c-divider-highlight-line, 1px solid var(--w1c-control-highlight, #ffffff));
		}

		.label {
			white-space: nowrap;
			color: var(--w1c-divider-label-text, var(--w1c-disabled-text, #808080));
		}

		.chrome[data-orientation='vertical'] {
			grid-template-rows: minmax(0, 1fr) auto minmax(0, 1fr);
			grid-template-columns: auto;
			width: var(--w1c-divider-vertical-width, 8px);
			height: 100%;
			min-height: inherit;
			padding: var(--w1c-divider-vertical-padding, 0 var(--w1c-space-1, 4px));
		}

		.chrome[data-orientation='vertical'] .line {
			width: 0;
			height: 100%;
			border-block: 0;
			border-inline-start: var(--w1c-divider-shadow-line, 1px solid var(--w1c-control-shadow, #808080));
			border-inline-end: var(--w1c-divider-highlight-line, 1px solid var(--w1c-control-highlight, #ffffff));
		}

		.chrome[data-orientation='vertical'] .label {
			writing-mode: vertical-rl;
		}

		[hidden] {
			display: none;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-divider': W1cDivider;
	}
}
