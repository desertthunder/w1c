import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Compact status summary card for admin and setup surfaces.
 *
 * @slot - Card body.
 * @slot icon - Optional leading icon.
 * @slot footer - Optional footer details.
 * @csspart chrome - Card frame.
 * @csspart icon - Icon slot wrapper.
 * @csspart content - Content wrapper.
 * @csspart title - Title text.
 * @csspart value - Value text.
 * @csspart footer - Footer slot wrapper.
 */
@customElement('w1c-status-card')
export class W1cStatusCard extends LitElement {
	@property()
	title = 'Status';

	@property()
	value = '';

	@property({ reflect: true })
	variant: 'neutral' | 'good' | 'warning' | 'danger' = 'neutral';

	render() {
		return html`
			<section part="chrome" class="chrome" data-variant=${this.variant}>
				<span part="icon" class="icon"><slot name="icon"></slot></span>
				<div part="content" class="content">
					<strong part="title" class="title">${this.title}</strong>
					<span part="value" class="value" ?hidden=${!this.value}>${this.value}</span>
					<slot></slot>
				</div>
				<div part="footer" class="footer"><slot name="footer"></slot></div>
			</section>
		`;
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-status-card-text, var(--w1c-control-text, #111111));
			font: var(--w1c-control-font, 13px/1.2 'MS Sans Serif', Tahoma, sans-serif);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			grid-template-columns: auto minmax(0, 1fr);
			grid-template-areas:
				'icon content'
				'footer footer';
			gap: var(--w1c-status-card-gap, var(--w1c-space-2, 8px));
			padding: var(--w1c-status-card-padding, 10px);
			border: var(--w1c-status-card-border, 1px solid var(--w1c-control-dark-shadow, #404040));
			border-block-start-color: var(--w1c-status-card-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-start-color: var(--w1c-status-card-highlight, var(--w1c-control-highlight, #ffffff));
			background: var(--w1c-status-card-background, var(--w1c-control-background, #c0c0c0));
			box-shadow: var(
				--w1c-status-card-shadow,
				inset -1px -1px 0 var(--w1c-control-shadow, #808080),
				inset 1px 1px 0 var(--w1c-control-highlight, #ffffff)
			);
		}

		.chrome[data-variant='good'] {
			border-color: var(--w1c-status-card-good-border, var(--w1c-success-text, #0d5c1f));
		}

		.chrome[data-variant='warning'] {
			border-color: var(--w1c-status-card-warning-border, var(--w1c-warning-text, #6f4a00));
		}

		.chrome[data-variant='danger'] {
			border-color: var(--w1c-status-card-danger-border, var(--w1c-danger-text, #990000));
		}

		.icon {
			grid-area: icon;
			display: inline-flex;
			align-items: center;
			min-width: 0;
		}

		.icon:empty {
			display: none;
		}

		.content {
			grid-area: content;
			display: grid;
			gap: var(--w1c-status-card-content-gap, 2px);
			min-width: 0;
		}

		.title {
			font-weight: 700;
		}

		.value {
			font-size: var(--w1c-status-card-value-size, 18px);
			line-height: 1.1;
		}

		.footer {
			grid-area: footer;
			color: var(--w1c-status-card-footer-text, var(--w1c-muted-text, #404040));
		}

		.footer:empty {
			display: none;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-status-card': W1cStatusCard;
	}
}
