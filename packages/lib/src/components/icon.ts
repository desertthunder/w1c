import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { getW1cIcon, type IconData, type W1cIconName } from '../icons/index.js';

/**
 * Inline SVG icon renderer for the bundled W1C icon set or trusted IconData.
 *
 * @csspart icon - The rendered SVG element.
 */
@customElement('w1c-icon')
export class W1cIcon extends LitElement {
	@property()
	name: W1cIconName | '' = '';

	@property()
	label = '';

	@property({ attribute: false })
	icon?: IconData;

	render() {
		const icon = this.icon ?? getW1cIcon(this.name);

		if (!icon) return nothing;

		const width = icon.width ?? 16;
		const height = icon.height ?? 16;
		const left = icon.left ?? 0;
		const top = icon.top ?? 0;
		const hidden = this.label ? nothing : 'true';

		return html`
			<svg
				part="icon"
				viewBox=${`${left} ${top} ${width} ${height}`}
				width=${width}
				height=${height}
				role=${this.label ? 'img' : nothing}
				aria-label=${this.label || nothing}
				aria-hidden=${hidden}
				fill="currentColor"
				focusable="false">
				${unsafeSVG(icon.body)}
			</svg>
		`;
	}

	static styles = css`
		:host {
			display: inline-flex;
			width: var(--w1c-icon-size, 1em);
			height: var(--w1c-icon-size, 1em);
			flex: none;
			color: var(--w1c-icon-color, currentColor);
			line-height: 0;
			vertical-align: -0.125em;
		}

		svg {
			display: block;
			width: 100%;
			height: 100%;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-icon': W1cIcon;
	}
}
