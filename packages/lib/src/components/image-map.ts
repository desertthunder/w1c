import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Image-map-style sticker sheet with slotted positioned links.
 *
 * @slot - Absolutely positioned links or buttons.
 * @csspart chrome - The figure wrapper.
 * @csspart image - The base image.
 * @csspart hotspots - Hotspot overlay.
 * @csspart caption - Optional caption.
 */
@customElement('w1c-image-map')
export class W1cImageMap extends LitElement {
	@property()
	src = '';

	@property()
	alt = '';

	@property()
	caption = '';

	render() {
		return html`
			<figure part="chrome" class="chrome">
				${this.src
					? html`<img part="image" class="image" src=${this.src} alt=${this.alt} />`
					: html`<div part="image" class="image placeholder" aria-label=${this.alt}></div>`}
				<div part="hotspots" class="hotspots"><slot></slot></div>
				${this.caption ? html`<figcaption part="caption" class="caption">${this.caption}</figcaption>` : ''}
			</figure>
		`;
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-image-map-text, var(--w1c-control-text, #000000));
			font: var(--w1c-body-font, 14px/1.25 Arial, sans-serif);
		}

		.chrome {
			box-sizing: border-box;
			position: relative;
			display: inline-block;
			max-width: 100%;
			margin: 0;
			border: var(--w1c-image-map-border, 4px ridge #ffff00);
			background: var(--w1c-image-map-background, #000000);
		}

		.image {
			display: block;
			max-width: 100%;
			height: auto;
			image-rendering: var(--w1c-image-map-rendering, auto);
		}

		.placeholder {
			width: var(--w1c-image-map-placeholder-width, 320px);
			aspect-ratio: var(--w1c-image-map-placeholder-ratio, 4 / 3);
			background:
				linear-gradient(45deg, rgb(255 255 255 / 0.18) 25%, transparent 25% 75%, rgb(255 255 255 / 0.18) 75%),
				linear-gradient(45deg, rgb(255 255 255 / 0.18) 25%, transparent 25% 75%, rgb(255 255 255 / 0.18) 75%), #000066;
			background-position:
				0 0,
				8px 8px;
			background-size: 16px 16px;
		}

		.hotspots {
			position: absolute;
			inset: 0;
		}

		::slotted(a),
		::slotted(button) {
			position: absolute;
			inset-inline-start: var(--x, auto);
			inset-block-start: var(--y, auto);
			width: var(--w, auto);
			height: var(--h, auto);
			box-sizing: border-box;
			border: var(--w1c-image-map-hotspot-border, 2px dashed #ffff00);
			background: var(--w1c-image-map-hotspot-background, rgb(0 0 238 / 0.72));
			color: var(--w1c-image-map-hotspot-text, #ffffff);
			font: var(--w1c-image-map-hotspot-font, 700 12px/1.1 var(--w1c-font-ui, Arial, sans-serif));
			text-align: center;
			text-decoration: none;
		}

		::slotted(a:focus-visible),
		::slotted(button:focus-visible) {
			outline: var(--w1c-image-map-focus, 3px solid #ff0000);
			outline-offset: 2px;
		}

		.caption {
			padding: var(--w1c-image-map-caption-padding, 4px 6px);
			background: var(--w1c-image-map-caption-background, #ffffcc);
			text-align: center;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-image-map': W1cImageMap;
	}
}
