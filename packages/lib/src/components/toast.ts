import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './button';

/**
 * Small notification surface for status, warning, and error messages.
 *
 * @slot - Toast body.
 * @slot icon - Optional leading icon.
 * @slot actions - Optional action controls.
 * @csspart chrome - The toast frame.
 * @csspart icon - Icon slot wrapper.
 * @csspart content - Text content wrapper.
 * @csspart title - Title wrapper.
 * @csspart actions - Actions wrapper.
 * @csspart close - Close button.
 */
@customElement('w1c-toast')
export class W1cToast extends LitElement {
	@property({ type: Boolean, reflect: true })
	open = true;

	@property()
	title = '';

	@property({ reflect: true })
	variant: 'status' | 'info' | 'warning' | 'danger' = 'status';

	@property({ type: Boolean, reflect: true })
	closeable = false;

	render() {
		return html`
			<aside
				part="chrome"
				class="chrome"
				role=${this.variant === 'danger' || this.variant === 'warning' ? 'alert' : 'status'}
				aria-hidden=${this.open ? 'false' : 'true'}
				?hidden=${!this.open}>
				<span part="icon" class="icon"><slot name="icon"></slot></span>
				<div part="content" class="content">
					<strong part="title" class="title" ?hidden=${!this.title}>${this.title}</strong>
					<slot></slot>
				</div>
				<div part="actions" class="actions"><slot name="actions"></slot></div>
				<w1c-button part="close" class="close" ?hidden=${!this.closeable} aria-label="Close" @click=${this.close}>
					x
				</w1c-button>
			</aside>
		`;
	}

	private close() {
		this.open = false;
		this.dispatchEvent(new CustomEvent('w1c-toast-close', { bubbles: true, composed: true }));
	}

	static styles = css`
		:host {
			display: block;
			width: min(var(--w1c-toast-width, 360px), 100%);
			color: var(--w1c-toast-text, var(--w1c-control-text, #111111));
			font: var(--w1c-body-font, 13px/1.35 'MS Sans Serif', Tahoma, sans-serif);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			grid-template-columns: auto minmax(0, 1fr) auto auto;
			align-items: start;
			gap: var(--w1c-toast-gap, var(--w1c-space-2, 8px));
			padding: var(--w1c-toast-padding, var(--w1c-space-3, 12px));
			border: var(--w1c-toast-border, 1px solid var(--w1c-control-dark-shadow, #404040));
			border-block-start-color: var(--w1c-toast-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-start-color: var(--w1c-toast-highlight, var(--w1c-control-highlight, #ffffff));
			border-radius: var(--w1c-toast-radius, var(--w1c-radius-1, 0));
			background: var(--w1c-toast-background, var(--w1c-surface, #c0c0c0));
			box-shadow: var(--w1c-toast-shadow, var(--w1c-shadow-window, 2px 2px 0 rgb(0 0 0 / 0.35)));
		}

		:host([variant='info']) .chrome {
			border-inline-start-color: var(--w1c-toast-info, var(--w1c-color-blue-4, #064db0));
		}

		:host([variant='warning']) .chrome {
			border-inline-start-color: var(--w1c-toast-warning, var(--w1c-color-yellow-3, #8a6710));
		}

		:host([variant='danger']) .chrome {
			border-inline-start-color: var(--w1c-toast-danger, var(--w1c-color-red-3, #c33b2b));
		}

		.icon,
		.actions {
			display: inline-flex;
			align-items: center;
			min-width: 0;
		}

		.content {
			min-width: 0;
		}

		.title {
			display: block;
			margin-block-end: var(--w1c-space-1, 4px);
			font: var(--w1c-toast-title-font, var(--w1c-titlebar-font, inherit));
		}

		.close {
			--w1c-button-padding: 1px 6px;
		}

		[hidden] {
			display: none;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-toast': W1cToast;
	}
}
