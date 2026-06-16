import { LitElement, css, html } from 'lit';
import { nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
	createDragSession,
	createResizeSession,
	endPointerSession,
	matchesPointerSession,
	moveDrag,
	moveResize,
	pointFromPointerEvent,
	startPointerSession,
	type DragSession,
	type PointerSession,
	type ResizeSession
} from '@w1c/dnd';
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
 * @csspart resize-handle - The resize affordance.
 */
@customElement('w1c-window')
export class W1cWindow extends LitElement {
	@property()
	title = 'Window';

	@property({ type: Boolean, reflect: true })
	movable = false;

	@property({ type: Boolean, reflect: true })
	resizable = false;

	@property({ type: Boolean, reflect: true })
	moving = false;

	@property({ type: Boolean, reflect: true })
	resizing = false;

	@property({ type: Number, reflect: true })
	x = 0;

	@property({ type: Number, reflect: true })
	y = 0;

	@property({ type: Number })
	width: number | null = null;

	@property({ type: Number })
	height: number | null = null;

	@property({ type: Number, attribute: 'min-width' })
	minWidth = 220;

	@property({ type: Number, attribute: 'min-height' })
	minHeight = 160;

	@property({ type: Number, attribute: 'max-width' })
	maxWidth: number | null = null;

	@property({ type: Number, attribute: 'max-height' })
	maxHeight: number | null = null;

	private dragSession: DragSession | null = null;
	private dragPointerSession: PointerSession | null = null;
	private resizeSession: ResizeSession | null = null;
	private resizePointerSession: PointerSession | null = null;

	render() {
		return html`
			<section part="chrome" class="chrome" role="group" aria-label=${this.title} style=${this.geometryStyle()}>
				<slot name="titlebar">
					<w1c-titlebar
						part="titlebar"
						class=${this.movable ? 'move-handle' : ''}
						exportparts="chrome: titlebar-chrome, titlebar, icon, title, controls"
						.title=${this.title}
						@pointerdown=${this.startDrag}
						@pointermove=${this.moveDrag}
						@pointerup=${this.endDrag}
						@pointercancel=${this.endDrag}>
						<slot name="icon" slot="icon"></slot>
						<slot name="controls" slot="controls"></slot>
					</w1c-titlebar>
				</slot>
				<slot name="toolbar">
					<w1c-toolbar
						part="toolbar"
						exportparts="chrome: toolbar-chrome, toolbar, controls: toolbar-controls"></w1c-toolbar>
				</slot>
				<div part="content" class="content">
					<slot></slot>
				</div>
				<slot name="statusbar">
					<w1c-statusbar part="statusbar" exportparts="chrome: statusbar-chrome, statusbar, content: statusbar-content">
						Ready
					</w1c-statusbar>
				</slot>
				${this.resizable
					? html`
							<span
								part="resize-handle"
								class="resize-handle"
								role="separator"
								aria-label="Resize window"
								@pointerdown=${this.startResize}
								@pointermove=${this.moveResize}
								@pointerup=${this.endResize}
								@pointercancel=${this.endResize}></span>
						`
					: nothing}
			</section>
		`;
	}

	private geometryStyle() {
		const declarations = [`transform: translate(${this.x}px, ${this.y}px);`];

		if (this.width !== null) {
			declarations.push(`width: ${this.width}px;`);
		}

		if (this.height !== null) {
			declarations.push(`height: ${this.height}px;`);
		}

		return declarations.join(' ');
	}

	private startDrag(event: PointerEvent) {
		if (!this.movable || this.hasInteractiveTarget(event)) {
			return;
		}

		const result = startPointerSession(event);

		if (!result) {
			return;
		}

		this.dragPointerSession = result.session;
		this.dragSession = createDragSession(event.pointerId, result.point, { x: this.x, y: this.y });
		this.moving = true;
		this.dispatchGeometryEvent('w1c-window-move-start');
	}

	private moveDrag(event: PointerEvent) {
		if (!matchesPointerSession(this.dragSession, event) || !this.dragSession) {
			return;
		}

		const position = moveDrag(this.dragSession, pointFromPointerEvent(event));
		this.x = position.x;
		this.y = position.y;
		this.dispatchGeometryEvent('w1c-window-move');
	}

	private endDrag(event: PointerEvent) {
		if (!endPointerSession(this.dragPointerSession, event)) {
			return;
		}

		this.dragPointerSession = null;
		this.dragSession = null;
		this.moving = false;
		this.dispatchGeometryEvent('w1c-window-move-end');
	}

	private startResize(event: PointerEvent) {
		const result = startPointerSession(event);

		if (!result) {
			return;
		}

		const bounds = this.getBoundingClientRect();
		this.resizePointerSession = result.session;
		this.resizeSession = createResizeSession(event.pointerId, result.point, {
			width: this.width ?? bounds.width,
			height: this.height ?? bounds.height
		});
		this.resizing = true;
		this.dispatchGeometryEvent('w1c-window-resize-start');
	}

	private moveResize(event: PointerEvent) {
		if (!matchesPointerSession(this.resizeSession, event) || !this.resizeSession) {
			return;
		}

		const size = moveResize(this.resizeSession, pointFromPointerEvent(event), {
			minWidth: this.minWidth,
			minHeight: this.minHeight,
			maxWidth: this.maxWidth ?? undefined,
			maxHeight: this.maxHeight ?? undefined
		});
		this.width = size.width;
		this.height = size.height;
		this.dispatchGeometryEvent('w1c-window-resize');
	}

	private endResize(event: PointerEvent) {
		if (!endPointerSession(this.resizePointerSession, event)) {
			return;
		}

		this.resizePointerSession = null;
		this.resizeSession = null;
		this.resizing = false;
		this.dispatchGeometryEvent('w1c-window-resize-end');
	}

	private hasInteractiveTarget(event: PointerEvent) {
		return event.composedPath().some((target) => {
			return (
				target instanceof HTMLButtonElement ||
				target instanceof HTMLAnchorElement ||
				target instanceof HTMLInputElement ||
				target instanceof HTMLSelectElement ||
				target instanceof HTMLTextAreaElement ||
				(target instanceof HTMLElement && target.isContentEditable)
			);
		});
	}

	private dispatchGeometryEvent(type: string) {
		this.dispatchEvent(
			new CustomEvent(type, {
				bubbles: true,
				composed: true,
				detail: { x: this.x, y: this.y, width: this.width, height: this.height }
			})
		);
	}

	static styles = css`
		:host {
			display: block;
			min-width: min(100%, 220px);
			color: var(--w1c-window-text, var(--w1c-control-text, #111111));
			font: var(--w1c-body-font, 13px/1.35 'MS Sans Serif', Tahoma, sans-serif);
		}

		:host([moving]),
		:host([resizing]) {
			user-select: none;
		}

		:host([moving]) {
			cursor: move;
		}

		:host([resizing]) {
			cursor: nwse-resize;
		}

		.chrome {
			box-sizing: border-box;
			position: relative;
			display: grid;
			grid-template-rows: auto auto minmax(0, 1fr) auto;
			min-height: var(--w1c-window-min-height, 160px);
			border: var(
				--w1c-window-border,
				1px solid var(--w1c-window-dark-shadow, var(--w1c-control-dark-shadow, #404040))
			);
			border-block-start-color: var(--w1c-window-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-start-color: var(--w1c-window-highlight, var(--w1c-control-highlight, #ffffff));
			border-radius: var(--w1c-window-radius, var(--w1c-radius-1, 0));
			background: var(--w1c-window-frame, var(--w1c-surface, #c0c0c0));
			box-shadow: var(
				--w1c-window-shadow,
				inset -1px -1px 0 var(--w1c-window-shadow-color, var(--w1c-control-shadow, #808080)),
				inset 1px 1px 0 var(--w1c-window-highlight, var(--w1c-control-highlight, #ffffff)),
				var(--w1c-window-shadow-outer, var(--w1c-shadow-none, none))
			);
			overflow: hidden;
			touch-action: none;
			will-change: transform, width, height;
		}

		.move-handle {
			cursor: move;
		}

		.content {
			box-sizing: border-box;
			min-width: 0;
			min-height: 0;
			padding: var(--w1c-window-content-padding, 12px);
			border: var(
				--w1c-window-content-border,
				1px solid var(--w1c-window-shadow-color, var(--w1c-control-shadow, #808080))
			);
			background: var(--w1c-window-background, var(--w1c-window-content-background, #ffffff));
			overflow: auto;
		}

		.resize-handle {
			box-sizing: border-box;
			position: absolute;
			inset-inline-end: 0;
			inset-block-end: 0;
			inline-size: var(--w1c-window-resize-handle-size, 14px);
			block-size: var(--w1c-window-resize-handle-size, 14px);
			cursor: nwse-resize;
			touch-action: none;
			background:
				linear-gradient(
						135deg,
						transparent 0 48%,
						var(--w1c-window-shadow-color, var(--w1c-control-shadow, #808080)) 49% 53%,
						transparent 54%
					)
					right 2px bottom 2px / 8px 8px no-repeat,
				linear-gradient(
						135deg,
						transparent 0 48%,
						var(--w1c-window-dark-shadow, var(--w1c-control-dark-shadow, #404040)) 49% 53%,
						transparent 54%
					)
					right 5px bottom 2px / 8px 8px no-repeat;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-window': W1cWindow;
	}
}
