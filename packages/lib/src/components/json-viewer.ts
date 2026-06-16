import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };

/**
 * Read-only JSON/source viewer for admin and developer surfaces.
 *
 * @slot toolbar - Optional controls above the source pane.
 * @csspart chrome - Viewer frame.
 * @csspart toolbar - Optional toolbar wrapper.
 * @csspart gutter - Line number gutter.
 * @csspart code - Formatted JSON code block.
 */
@customElement('w1c-json-viewer')
export class W1cJsonViewer extends LitElement {
	@property({ attribute: false })
	value: unknown = undefined;

	@property()
	text = '';

	@property({ type: Number })
	indent = 2;

	@property({ type: Boolean, reflect: true, attribute: 'line-numbers' })
	lineNumbers = false;

	render() {
		const source = this.getSource();
		const lines = source.split('\n');

		return html`
			<section part="chrome" class="chrome" role="region" aria-label="JSON viewer">
				<div part="toolbar" class="toolbar">
					<slot name="toolbar"></slot>
				</div>
				<div class="source">
					<pre part="gutter" class="gutter" aria-hidden="true" ?hidden=${!this.lineNumbers}>
${lines.map((_, index) => index + 1).join('\n')}</pre
					>
					<pre part="code" class="code"><code>${source}</code></pre>
				</div>
			</section>
		`;
	}

	private getSource() {
		if (this.value !== undefined) return this.stringifyValue(this.value);
		if (this.text.trim()) return this.formatText(this.text);
		return '{\n  "status": "ready"\n}';
	}

	private stringifyValue(value: unknown) {
		try {
			return JSON.stringify(value as JsonValue, null, this.indent) ?? 'null';
		} catch {
			return String(value);
		}
	}

	private formatText(value: string) {
		try {
			return JSON.stringify(JSON.parse(value) as JsonValue, null, this.indent);
		} catch {
			return value;
		}
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-json-viewer-text, var(--w1c-control-text, #111111));
			font: var(
				--w1c-body-font,
				var(--w1c-font-size-2, 13px) / var(--w1c-line-normal, 1.35)
					var(--w1c-font-ui, 'MS Sans Serif', Tahoma, sans-serif)
			);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			grid-template-rows: auto minmax(0, 1fr);
			min-height: var(--w1c-json-viewer-min-height, 180px);
			border: var(--w1c-json-viewer-border, 1px solid var(--w1c-control-shadow, #808080));
			border-block-end-color: var(--w1c-json-viewer-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-end-color: var(--w1c-json-viewer-highlight, var(--w1c-control-highlight, #ffffff));
			background: var(--w1c-json-viewer-background, var(--w1c-window-content-background, #ffffff));
			overflow: hidden;
		}

		.toolbar {
			display: flex;
			align-items: center;
			gap: var(--w1c-space-1, 4px);
			padding: var(--w1c-json-viewer-toolbar-padding, 4px 6px);
			border-block-end: var(--w1c-json-viewer-divider, 1px solid var(--w1c-control-shadow, #808080));
			background: var(--w1c-json-viewer-toolbar-background, var(--w1c-surface, #c0c0c0));
		}

		.toolbar:empty {
			display: none;
		}

		.source {
			display: grid;
			grid-template-columns: auto minmax(0, 1fr);
			min-width: 0;
			min-height: 0;
			overflow: auto;
		}

		.gutter,
		.code {
			box-sizing: border-box;
			min-height: 100%;
			margin: 0;
			padding: var(--w1c-json-viewer-code-padding, 8px);
			font: var(--w1c-json-viewer-font, var(--w1c-code-font, 12px/1.45 'Courier New', monospace));
			tab-size: 2;
			white-space: pre;
		}

		.gutter {
			user-select: none;
			text-align: end;
			color: var(--w1c-json-viewer-gutter-text, var(--w1c-disabled-text, #808080));
			background: var(--w1c-json-viewer-gutter-background, var(--w1c-surface, #c0c0c0));
			border-inline-end: var(--w1c-json-viewer-divider, 1px solid var(--w1c-control-shadow, #808080));
		}

		.code {
			color: var(--w1c-json-viewer-code-text, inherit);
			background: transparent;
		}

		[hidden] {
			display: none;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-json-viewer': W1cJsonViewer;
	}
}
