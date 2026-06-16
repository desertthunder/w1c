import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Slotted surface with a repeated image or CSS background.
 *
 * @slot - Page or section content.
 * @csspart chrome - The tiled background surface.
 * @csspart content - Content wrapper.
 */
@customElement('w1c-tiled-background')
export class W1cTiledBackground extends LitElement {
	@property()
	src = '';

	@property()
	color = '';

	@property({ attribute: 'tile-size' })
	tileSize = '';

	render() {
		const styles = [
			this.src ? `--w1c-tiled-image: url("${this.src.replaceAll('"', '%22')}")` : '',
			this.color ? `--w1c-tiled-color: ${this.color}` : '',
			this.tileSize ? `--w1c-tiled-size: ${this.tileSize}` : ''
		]
			.filter(Boolean)
			.join('; ');

		return html`
			<section part="chrome" class="chrome" style=${styles}>
				<div part="content" class="content"><slot></slot></div>
			</section>
		`;
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-tiled-text, var(--w1c-control-text, #000000));
			font: var(
				--w1c-body-font,
				var(--w1c-font-size-2, 14px) / var(--w1c-line-normal, 1.25) var(--w1c-font-ui, Arial, sans-serif)
			);
		}

		.chrome {
			box-sizing: border-box;
			min-width: 0;
			min-height: var(--w1c-tiled-min-height, 160px);
			padding: var(--w1c-tiled-padding, var(--w1c-space-4, 16px));
			background-color: var(--w1c-tiled-color, #000066);
			background-image: var(--w1c-tiled-image, radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 1.5px));
			background-repeat: repeat;
			background-size: var(--w1c-tiled-size, 16px 16px);
		}

		.content {
			box-sizing: border-box;
			min-width: 0;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-tiled-background': W1cTiledBackground;
	}
}
