import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Dense endpoint/status row for admin lists.
 *
 * @slot - Row details.
 * @slot actions - Optional row actions.
 * @csspart chrome - Row frame.
 * @csspart method - Method badge.
 * @csspart content - Text content wrapper.
 * @csspart path - Endpoint path.
 * @csspart status - Status text.
 * @csspart actions - Actions slot wrapper.
 */
@customElement('w1c-endpoint-row')
export class W1cEndpointRow extends LitElement {
	@property()
	method = 'GET';

	@property()
	path = '/';

	@property()
	status = 'Ready';

	@property({ reflect: true })
	variant: 'neutral' | 'good' | 'warning' | 'danger' = 'neutral';

	render() {
		return html`
			<div part="chrome" class="chrome" data-variant=${this.variant}>
				<span part="method" class="method">${this.method}</span>
				<span part="content" class="content">
					<strong part="path" class="path">${this.path}</strong>
					<span part="status" class="status">${this.status}</span>
					<slot></slot>
				</span>
				<span part="actions" class="actions"><slot name="actions"></slot></span>
			</div>
		`;
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-endpoint-row-text, var(--w1c-control-text, #111111));
			font: var(
				--w1c-control-font,
				var(--w1c-font-size-2, 13px) / var(--w1c-line-tight, 1.2)
					var(--w1c-font-ui, 'MS Sans Serif', Tahoma, sans-serif)
			);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			grid-template-columns: auto minmax(0, 1fr) auto;
			align-items: center;
			gap: var(--w1c-endpoint-row-gap, var(--w1c-space-2, 8px));
			min-height: var(--w1c-endpoint-row-min-height, 32px);
			padding: var(--w1c-endpoint-row-padding, 5px 6px);
			border-block-end: var(--w1c-endpoint-row-separator, 1px solid var(--w1c-control-shadow, #808080));
			background: var(--w1c-endpoint-row-background, var(--w1c-window-content-background, #ffffff));
		}

		.method {
			min-width: var(--w1c-endpoint-row-method-width, 48px);
			padding: var(--w1c-endpoint-row-method-padding, 2px 5px);
			border: var(--w1c-endpoint-row-method-border, 1px solid var(--w1c-control-shadow, #808080));
			background: var(--w1c-endpoint-row-method-background, var(--w1c-control-background, #c0c0c0));
			font-weight: 700;
			text-align: center;
		}

		.chrome[data-variant='good'] .method {
			color: var(--w1c-endpoint-row-good-text, var(--w1c-success-text, #0d5c1f));
		}

		.chrome[data-variant='warning'] .method {
			color: var(--w1c-endpoint-row-warning-text, var(--w1c-warning-text, #6f4a00));
		}

		.chrome[data-variant='danger'] .method {
			color: var(--w1c-endpoint-row-danger-text, var(--w1c-danger-text, #990000));
		}

		.content {
			display: grid;
			gap: var(--w1c-endpoint-row-content-gap, 1px);
			min-width: 0;
		}

		.path {
			overflow-wrap: anywhere;
			font-family: var(--w1c-mono-font-family, 'Courier New', monospace);
			font-size: var(--w1c-endpoint-row-path-size, 13px);
		}

		.status {
			color: var(--w1c-endpoint-row-status-text, var(--w1c-muted-text, #404040));
		}

		.actions {
			display: inline-flex;
			align-items: center;
			gap: var(--w1c-endpoint-row-actions-gap, var(--w1c-space-1, 4px));
			min-width: 0;
		}

		.actions:empty {
			display: none;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-endpoint-row': W1cEndpointRow;
	}
}
