import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Inline alert or flash notice.
 *
 * @slot - Alert content.
 * @slot icon - Optional leading icon.
 * @slot actions - Optional trailing actions.
 * @csspart chrome - Alert frame.
 * @csspart icon - Icon slot wrapper.
 * @csspart content - Content wrapper.
 * @csspart title - Title text.
 * @csspart actions - Actions slot wrapper.
 */
@customElement('w1c-alert')
export class W1cAlert extends LitElement {
	@property()
	title = '';

	@property({ reflect: true })
	variant: 'status' | 'info' | 'success' | 'warning' | 'danger' = 'status';

	render() {
		return html`
			<section
				part="chrome"
				class="chrome"
				role=${this.variant === 'danger' ? 'alert' : 'status'}
				data-variant=${this.variant}>
				<span part="icon" class="icon"><slot name="icon"></slot></span>
				<div part="content" class="content">
					<strong part="title" class="title" ?hidden=${!this.title}>${this.title}</strong>
					<slot></slot>
				</div>
				<span part="actions" class="actions"><slot name="actions"></slot></span>
			</section>
		`;
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-alert-text, var(--w1c-control-text, #111111));
			font: var(--w1c-control-font, 13px/1.2 'MS Sans Serif', Tahoma, sans-serif);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			grid-template-columns: auto minmax(0, 1fr) auto;
			align-items: start;
			gap: var(--w1c-alert-gap, var(--w1c-space-2, 8px));
			padding: var(--w1c-alert-padding, 8px);
			border: var(--w1c-alert-border, 1px solid var(--w1c-control-dark-shadow, #404040));
			border-block-start-color: var(--w1c-alert-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-start-color: var(--w1c-alert-highlight, var(--w1c-control-highlight, #ffffff));
			background: var(--w1c-alert-background, var(--w1c-control-background, #c0c0c0));
			box-shadow: var(
				--w1c-alert-shadow,
				inset -1px -1px 0 var(--w1c-control-shadow, #808080),
				inset 1px 1px 0 var(--w1c-control-highlight, #ffffff)
			);
		}

		.chrome[data-variant='info'] {
			border-color: var(--w1c-alert-info-border, var(--w1c-info-text, #003c8f));
		}

		.chrome[data-variant='success'] {
			border-color: var(--w1c-alert-success-border, var(--w1c-success-text, #0d5c1f));
		}

		.chrome[data-variant='warning'] {
			border-color: var(--w1c-alert-warning-border, var(--w1c-warning-text, #6f4a00));
		}

		.chrome[data-variant='danger'] {
			border-color: var(--w1c-alert-danger-border, var(--w1c-danger-text, #990000));
		}

		.icon,
		.actions {
			display: inline-flex;
			align-items: center;
			min-width: 0;
		}

		.icon:empty,
		.actions:empty {
			display: none;
		}

		.content {
			display: grid;
			gap: var(--w1c-alert-content-gap, 2px);
			min-width: 0;
		}

		.title {
			font-weight: 700;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-alert': W1cAlert;
	}
}
