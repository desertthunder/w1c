import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './statusbar.js';
import './toolbar.js';

/**
 * Word processor shell with toolbar, ruler, page, details, and statusbar regions.
 *
 * @slot toolbar - Formatting controls.
 * @slot ruler - Optional ruler marks.
 * @slot - Document page content.
 * @slot details - Optional source, notes, or properties pane.
 * @slot statusbar - Footer status content.
 * @csspart chrome - The outer editor frame.
 * @csspart toolbar - Default toolbar.
 * @csspart ruler - Ruler wrapper.
 * @csspart workspace - Scrollable page workspace.
 * @csspart page - Paper page.
 * @csspart details - Details pane.
 * @csspart statusbar - Default statusbar.
 */
@customElement('w1c-word-processor')
export class W1cWordProcessor extends LitElement {
	@property()
	label = 'Word processor';

	@property({ type: Boolean, reflect: true, attribute: 'show-details' })
	showDetails = false;

	render() {
		return html`
			<section part="chrome" class="chrome" role="group" aria-label=${this.label}>
				<slot name="toolbar">
					<w1c-toolbar
						part="toolbar"
						exportparts="chrome: toolbar-chrome, toolbar, controls: toolbar-controls"></w1c-toolbar>
				</slot>
				<div part="ruler" class="ruler">
					<slot name="ruler">${this.renderDefaultRuler()}</slot>
				</div>
				<div part="workspace" class="workspace">
					<article part="page" class="page">
						<slot></slot>
					</article>
					<aside part="details" class="details" ?hidden=${!this.showDetails}>
						<slot name="details"></slot>
					</aside>
				</div>
				<slot name="statusbar">
					<w1c-statusbar part="statusbar" exportparts="chrome: statusbar-chrome, statusbar, content: statusbar-content">
						Page 1
					</w1c-statusbar>
				</slot>
			</section>
		`;
	}

	private renderDefaultRuler() {
		return html`<span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span>`;
	}

	static styles = css`
		:host {
			display: block;
			min-width: min(100%, 280px);
			color: var(--w1c-word-processor-text, var(--w1c-control-text, #111111));
			font: var(
				--w1c-body-font,
				var(--w1c-font-size-2, 13px) / var(--w1c-line-normal, 1.35)
					var(--w1c-font-ui, 'MS Sans Serif', Tahoma, sans-serif)
			);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			grid-template-rows: auto auto minmax(0, 1fr) auto;
			min-height: var(--w1c-word-processor-min-height, 320px);
			border: var(--w1c-word-processor-border, 1px solid var(--w1c-control-dark-shadow, #404040));
			border-block-start-color: var(--w1c-word-processor-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-start-color: var(--w1c-word-processor-highlight, var(--w1c-control-highlight, #ffffff));
			background: var(--w1c-word-processor-frame, var(--w1c-surface, #c0c0c0));
			box-shadow: var(--w1c-word-processor-shadow, var(--w1c-window-shadow, none));
			overflow: hidden;
		}

		.ruler {
			box-sizing: border-box;
			display: grid;
			grid-template-columns: repeat(7, minmax(32px, 1fr));
			gap: 0;
			padding: var(--w1c-word-processor-ruler-padding, 2px 8px);
			border-block-start: var(--w1c-word-processor-ruler-highlight, 1px solid var(--w1c-control-highlight, #ffffff));
			border-block-end: var(--w1c-word-processor-ruler-border, 1px solid var(--w1c-control-shadow, #808080));
			background:
				linear-gradient(to right, var(--w1c-control-shadow, #808080) 1px, transparent 1px) 0 100% / 16px 5px repeat-x,
				var(--w1c-word-processor-ruler-background, var(--w1c-surface, #c0c0c0));
			color: var(--w1c-word-processor-ruler-text, var(--w1c-disabled-text, #808080));
			font-size: 11px;
		}

		.workspace {
			box-sizing: border-box;
			display: grid;
			grid-template-columns: minmax(0, 1fr) auto;
			gap: var(--w1c-word-processor-workspace-gap, var(--w1c-space-3, 12px));
			min-width: 0;
			min-height: 0;
			padding: var(--w1c-word-processor-workspace-padding, var(--w1c-space-4, 16px));
			overflow: auto;
			background: var(--w1c-word-processor-workspace-background, #808080);
		}

		.page {
			box-sizing: border-box;
			width: min(100%, var(--w1c-word-processor-page-width, 680px));
			min-height: var(--w1c-word-processor-page-min-height, 420px);
			margin-inline: auto;
			padding: var(--w1c-word-processor-page-padding, 36px 44px);
			border: var(--w1c-word-processor-page-border, 1px solid var(--w1c-control-dark-shadow, #404040));
			color: var(--w1c-word-processor-page-text, #111111);
			background: var(--w1c-word-processor-page-background, #ffffff);
			box-shadow: var(--w1c-word-processor-page-shadow, 3px 3px 0 rgb(0 0 0 / 0.3));
			font: var(--w1c-word-processor-page-font, 15px/1.55 Georgia, 'Times New Roman', serif);
		}

		.details {
			box-sizing: border-box;
			width: var(--w1c-word-processor-details-width, 220px);
			min-height: 0;
			padding: var(--w1c-word-processor-details-padding, var(--w1c-space-2, 8px));
			overflow: auto;
			border: var(--w1c-word-processor-details-border, 1px solid var(--w1c-control-shadow, #808080));
			background: var(--w1c-word-processor-details-background, var(--w1c-window-content-background, #ffffff));
		}

		[hidden] {
			display: none;
		}

		@media (max-width: 680px) {
			.workspace {
				grid-template-columns: 1fr;
			}

			.details {
				width: auto;
			}
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-word-processor': W1cWordProcessor;
	}
}
