import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './address-field.js';
import './statusbar.js';
import './toolbar.js';

/**
 * Document/browser shell with toolbar, location field, sidebar, content pane, and statusbar.
 *
 * @slot toolbar - Toolbar controls.
 * @slot sidebar - Bookmark, folder, or outline navigation.
 * @slot - Main document content.
 * @slot statusbar - Footer status content.
 * @csspart chrome - The outer browser frame.
 * @csspart toolbar - Default toolbar.
 * @csspart location - Default address field.
 * @csspart body - Sidebar and content grid.
 * @csspart sidebar - Sidebar wrapper.
 * @csspart content - Main content pane.
 * @csspart statusbar - Default statusbar.
 */
@customElement('w1c-document-browser')
export class W1cDocumentBrowser extends LitElement {
	@property()
	label = 'Document browser';

	@property()
	location = '';

	@property({ type: Boolean, reflect: true, attribute: 'hide-sidebar' })
	hideSidebar = false;

	render() {
		return html`
			<section part="chrome" class="chrome" role="group" aria-label=${this.label}>
				<slot name="toolbar">
					<w1c-toolbar part="toolbar" exportparts="chrome: toolbar-chrome, toolbar, controls: toolbar-controls">
						<w1c-address-field
							part="location"
							exportparts="chrome: location-chrome, label: location-label, input: location-input"
							label="Location"
							.value=${this.location}></w1c-address-field>
					</w1c-toolbar>
				</slot>
				<div part="body" class="body">
					<aside part="sidebar" class="sidebar" ?hidden=${this.hideSidebar}>
						<slot name="sidebar"></slot>
					</aside>
					<main part="content" class="content">
						<slot></slot>
					</main>
				</div>
				<slot name="statusbar">
					<w1c-statusbar part="statusbar" exportparts="chrome: statusbar-chrome, statusbar, content: statusbar-content">
						Ready
					</w1c-statusbar>
				</slot>
			</section>
		`;
	}

	static styles = css`
		:host {
			display: block;
			min-width: min(100%, 260px);
			color: var(--w1c-document-browser-text, var(--w1c-control-text, #111111));
			font: var(
				--w1c-body-font,
				var(--w1c-font-size-2, 13px) / var(--w1c-line-normal, 1.35)
					var(--w1c-font-ui, 'MS Sans Serif', Tahoma, sans-serif)
			);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			grid-template-rows: auto minmax(0, 1fr) auto;
			min-height: var(--w1c-document-browser-min-height, 260px);
			border: var(--w1c-document-browser-border, 1px solid var(--w1c-control-dark-shadow, #404040));
			border-block-start-color: var(--w1c-document-browser-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-start-color: var(--w1c-document-browser-highlight, var(--w1c-control-highlight, #ffffff));
			background: var(--w1c-document-browser-frame, var(--w1c-surface, #c0c0c0));
			box-shadow: var(--w1c-document-browser-shadow, var(--w1c-window-shadow, none));
			overflow: hidden;
		}

		.body {
			display: grid;
			grid-template-columns: minmax(120px, var(--w1c-document-browser-sidebar-width, 180px)) minmax(0, 1fr);
			min-width: 0;
			min-height: 0;
		}

		.sidebar,
		.content {
			box-sizing: border-box;
			min-width: 0;
			min-height: 0;
			overflow: auto;
			background: var(--w1c-document-browser-pane-background, var(--w1c-window-content-background, #ffffff));
		}

		.sidebar {
			padding: var(--w1c-document-browser-sidebar-padding, var(--w1c-space-2, 8px));
			border-inline-end: var(--w1c-document-browser-divider, 1px solid var(--w1c-control-shadow, #808080));
		}

		.content {
			padding: var(--w1c-document-browser-content-padding, var(--w1c-space-3, 12px));
		}

		[hidden] {
			display: none;
		}

		@media (max-width: 520px) {
			.body {
				grid-template-columns: 1fr;
			}

			.sidebar {
				border-inline-end: 0;
				border-block-end: var(--w1c-document-browser-divider, 1px solid var(--w1c-control-shadow, #808080));
			}
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-document-browser': W1cDocumentBrowser;
	}
}
