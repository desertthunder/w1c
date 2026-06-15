import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './statusbar';
import './titlebar';
import './toolbar';

/**
 * Retro window shell with titlebar, toolbar, content, and statusbar slots.
 *
 * @slot - Window content.
 * @slot titlebar - Custom titlebar replacement.
 * @slot icon - Icon forwarded to the default titlebar.
 * @slot controls - Controls forwarded to the default titlebar.
 * @slot toolbar - Optional toolbar content.
 * @slot statusbar - Optional statusbar content.
 * @csspart chrome - The outer window frame.
 * @csspart titlebar - The default titlebar.
 * @csspart toolbar - The default toolbar.
 * @csspart content - The content pane.
 * @csspart statusbar - The default statusbar.
 */
@customElement('w1c-window')
export class W1cWindow extends LitElement {
	@property()
	title = 'Window';

	render() {
		return html`
			<section part="chrome" class="chrome" role="group" aria-label=${this.title}>
				<slot name="titlebar">
					<w1c-titlebar part="titlebar" .title=${this.title}>
						<slot name="icon" slot="icon"></slot>
						<slot name="controls" slot="controls"></slot>
					</w1c-titlebar>
				</slot>
				<slot name="toolbar">
					<w1c-toolbar part="toolbar"></w1c-toolbar>
				</slot>
				<div part="content" class="content">
					<slot></slot>
				</div>
				<slot name="statusbar">
					<w1c-statusbar part="statusbar">Ready</w1c-statusbar>
				</slot>
			</section>
		`;
	}

	static styles = css`
		:host {
			--w1c-window-background: var(--w1c-window-content-background, #ffffff);
			--w1c-window-frame: var(--w1c-surface, #c0c0c0);
			--w1c-window-highlight: var(--w1c-control-highlight, #ffffff);
			--w1c-window-shadow: var(--w1c-control-shadow, #808080);
			--w1c-window-dark-shadow: var(--w1c-control-dark-shadow, #404040);

			display: block;
			min-width: min(100%, 220px);
			color: var(--w1c-window-text, #111111);
			font: var(--w1c-body-font, 13px/1.35 'MS Sans Serif', Tahoma, sans-serif);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			grid-template-rows: auto auto minmax(0, 1fr) auto;
			min-height: var(--w1c-window-min-height, 160px);
			border: 1px solid var(--w1c-window-dark-shadow);
			border-block-start-color: var(--w1c-window-highlight);
			border-inline-start-color: var(--w1c-window-highlight);
			background: var(--w1c-window-frame);
			box-shadow:
				inset -1px -1px 0 var(--w1c-window-shadow),
				inset 1px 1px 0 var(--w1c-window-highlight);
		}

		.content {
			box-sizing: border-box;
			min-width: 0;
			min-height: 0;
			padding: var(--w1c-window-content-padding, 12px);
			border: var(--w1c-window-content-border, 1px solid var(--w1c-window-shadow));
			background: var(--w1c-window-background);
			overflow: auto;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-window': W1cWindow;
	}
}
