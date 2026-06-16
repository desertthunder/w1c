import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Webring navigation strip with previous, home, random, and next slots.
 *
 * @slot - Optional ring description.
 * @slot previous - Previous site link.
 * @slot home - Ring home link.
 * @slot random - Random site link.
 * @slot next - Next site link.
 * @csspart chrome - The outer ring frame.
 * @csspart title - Ring title.
 * @csspart content - Description wrapper.
 * @csspart nav - Navigation wrapper.
 */
@customElement('w1c-webring')
export class W1cWebring extends LitElement {
	@property()
	name = 'Webring';

	render() {
		return html`
			<nav part="chrome" class="chrome" aria-label=${this.name}>
				<strong part="title" class="title">${this.name}</strong>
				<div part="content" class="content"><slot></slot></div>
				<div part="nav" class="nav">
					<slot name="previous"><a href="#">Previous</a></slot>
					<slot name="home"><a href="#">Ring Home</a></slot>
					<slot name="random"><a href="#">Random</a></slot>
					<slot name="next"><a href="#">Next</a></slot>
				</div>
			</nav>
		`;
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-webring-text, var(--w1c-control-text, #000000));
			font: var(--w1c-body-font, 14px/1.25 Arial, sans-serif);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			gap: var(--w1c-webring-gap, var(--w1c-space-2, 8px));
			padding: var(--w1c-webring-padding, var(--w1c-space-3, 12px));
			border: var(--w1c-webring-border, 3px double #0000ee);
			background: var(--w1c-webring-background, #ffffcc);
			text-align: center;
		}

		.title {
			color: var(--w1c-webring-title-text, #660099);
			font: var(--w1c-webring-title-font, 700 17px/1.1 var(--w1c-font-heading, cursive));
			text-decoration: underline;
		}

		.content {
			min-width: 0;
		}

		.nav {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: var(--w1c-webring-nav-gap, var(--w1c-space-2, 8px));
		}

		::slotted(a),
		a {
			color: var(--w1c-webring-link, #0000ee);
			font-weight: 700;
		}

		::slotted(a:visited),
		a:visited {
			color: var(--w1c-webring-link-visited, #660099);
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-webring': W1cWebring;
	}
}
