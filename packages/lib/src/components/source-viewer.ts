import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './statusbar';
import './toolbar';

/**
 * Full source/code viewer shell with toolbar, pathbar, source pane, and statusbar.
 *
 * @slot toolbar - Source viewer toolbar controls.
 * @slot pathbar - Optional path/location row.
 * @slot - Source content. Used when `text` is empty.
 * @slot statusbar - Footer status content.
 * @csspart chrome - The outer source viewer frame.
 * @csspart toolbar - Default toolbar.
 * @csspart pathbar - Source path/location row.
 * @csspart workspace - Scrollable source workspace.
 * @csspart gutter - Line number gutter.
 * @csspart code - Source code block.
 * @csspart statusbar - Default statusbar.
 */
@customElement('w1c-source-viewer')
export class W1cSourceViewer extends LitElement {
	@property()
	label = 'Source viewer';

	@property()
	filename = 'document.txt';

	@property()
	text = '';

	@property({ type: Boolean, reflect: true, attribute: 'line-numbers' })
	lineNumbers = false;

	render() {
		const source = this.text || '';
		const lines = source ? source.split('\n') : [''];

		return html`
			<section part="chrome" class="chrome" role="group" aria-label=${this.label}>
				<slot name="toolbar">
					<w1c-toolbar
						part="toolbar"
						exportparts="chrome: toolbar-chrome, toolbar, controls: toolbar-controls"></w1c-toolbar>
				</slot>
				<div part="pathbar" class="pathbar">
					<slot name="pathbar">
						<span>${this.filename}</span>
					</slot>
				</div>
				<div part="workspace" class="workspace">
					<pre part="gutter" class="gutter" aria-hidden="true" ?hidden=${!this.lineNumbers}>
${lines.map((_, index) => index + 1).join('\n')}</pre
					>
					<pre part="code" class="code"><code>${source || html`<slot></slot>`}</code></pre>
				</div>
				<slot name="statusbar">
					<w1c-statusbar part="statusbar" exportparts="chrome: statusbar-chrome, statusbar, content: statusbar-content">
						${lines.length} ${lines.length === 1 ? 'line' : 'lines'}
					</w1c-statusbar>
				</slot>
			</section>
		`;
	}

	static styles = css`
		:host {
			display: block;
			min-width: min(100%, 280px);
			color: var(--w1c-source-viewer-text, var(--w1c-control-text, #111111));
			font: var(--w1c-body-font, 13px/1.35 'MS Sans Serif', Tahoma, sans-serif);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			grid-template-rows: auto auto minmax(0, 1fr) auto;
			min-height: var(--w1c-source-viewer-min-height, 300px);
			border: var(--w1c-source-viewer-border, 1px solid var(--w1c-control-dark-shadow, #404040));
			border-block-start-color: var(--w1c-source-viewer-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-start-color: var(--w1c-source-viewer-highlight, var(--w1c-control-highlight, #ffffff));
			background: var(--w1c-source-viewer-frame, var(--w1c-surface, #c0c0c0));
			box-shadow: var(--w1c-source-viewer-shadow, var(--w1c-window-shadow, none));
			overflow: hidden;
		}

		.pathbar {
			box-sizing: border-box;
			display: flex;
			align-items: center;
			min-width: 0;
			min-height: var(--w1c-source-viewer-pathbar-height, 24px);
			padding: var(--w1c-source-viewer-pathbar-padding, 3px 6px);
			border-block-start: var(--w1c-source-viewer-pathbar-highlight, 1px solid var(--w1c-control-highlight, #ffffff));
			border-block-end: var(--w1c-source-viewer-pathbar-border, 1px solid var(--w1c-control-shadow, #808080));
			background: var(--w1c-source-viewer-pathbar-background, var(--w1c-surface, #c0c0c0));
			color: var(--w1c-source-viewer-pathbar-text, var(--w1c-control-text, #111111));
			font: var(--w1c-source-viewer-pathbar-font, var(--w1c-control-font, inherit));
		}

		.pathbar ::slotted(*),
		.pathbar span {
			min-width: 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.workspace {
			box-sizing: border-box;
			display: grid;
			grid-template-columns: auto minmax(0, 1fr);
			min-width: 0;
			min-height: 0;
			overflow: auto;
			border: var(--w1c-source-viewer-workspace-border, 1px solid var(--w1c-control-shadow, #808080));
			border-block-end-color: var(--w1c-source-viewer-workspace-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-end-color: var(--w1c-source-viewer-workspace-highlight, var(--w1c-control-highlight, #ffffff));
			background: var(--w1c-source-viewer-background, var(--w1c-window-content-background, #ffffff));
			box-shadow: var(
				--w1c-source-viewer-right-edge,
				inset -1px 0 0 var(--w1c-source-viewer-right-edge-color, var(--w1c-control-shadow, #808080))
			);
		}

		.gutter,
		.code {
			box-sizing: border-box;
			min-height: 100%;
			margin: 0;
			padding: var(--w1c-source-viewer-code-padding, 8px);
			font: var(--w1c-source-viewer-font, var(--w1c-code-font, 12px/1.45 'Courier New', monospace));
			tab-size: 2;
			white-space: pre;
		}

		.gutter {
			user-select: none;
			text-align: end;
			color: var(--w1c-source-viewer-gutter-text, var(--w1c-disabled-text, #808080));
			background: var(--w1c-source-viewer-gutter-background, var(--w1c-surface, #c0c0c0));
			border-inline-end: var(--w1c-source-viewer-divider, 1px solid var(--w1c-control-shadow, #808080));
		}

		.code {
			min-width: max-content;
			color: var(--w1c-source-viewer-code-text, inherit);
			background: transparent;
		}

		[hidden] {
			display: none;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-source-viewer': W1cSourceViewer;
	}
}
