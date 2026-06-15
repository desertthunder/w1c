import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

/**
 * Slotted tablist and panel coordinator.
 *
 * @slot tabs - Tab buttons or links.
 * @slot - Tab panels.
 * @csspart chrome - The outer tabs frame.
 * @csspart tablist - The tab row.
 * @csspart panels - The panel stack.
 */
@customElement('w1c-tabs')
export class W1cTabs extends LitElement {
	@property({ type: Number, reflect: true })
	selected = 0;

	@query('slot[name="tabs"]')
	private tabsSlot?: HTMLSlotElement;

	@query('slot:not([name])')
	private panelsSlot?: HTMLSlotElement;

	render() {
		return html`
			<section part="chrome" class="chrome">
				<div part="tablist" class="tablist" role="tablist">
					<slot name="tabs" @slotchange=${this.syncTabs}></slot>
				</div>
				<div part="panels" class="panels">
					<slot @slotchange=${this.syncTabs}></slot>
				</div>
			</section>
		`;
	}

	protected updated(changedProperties: Map<string, unknown>) {
		if (changedProperties.has('selected')) {
			this.syncTabs();
		}
	}

	private syncTabs() {
		const tabs = this.getTabs();
		const panels = this.getPanels();
		const selected = Math.max(0, Math.min(this.selected, Math.max(tabs.length - 1, 0)));

		if (selected !== this.selected) {
			this.selected = selected;
			return;
		}

		tabs.forEach((tab, index) => {
			const panel = panels[index];
			const tabId = tab.id || `w1c-tab-${index}`;
			const panelId = panel?.id || `w1c-panel-${index}`;
			const disabled = this.isDisabled(tab);

			tab.id = tabId;
			tab.setAttribute('role', 'tab');
			tab.setAttribute('aria-selected', String(index === selected));
			tab.setAttribute('tabindex', index === selected && !disabled ? '0' : '-1');
			tab.setAttribute('aria-controls', panelId);
			tab.removeEventListener('click', this.handleTabClick);
			tab.addEventListener('click', this.handleTabClick);
			tab.removeEventListener('keydown', this.handleTabKeydown);
			tab.addEventListener('keydown', this.handleTabKeydown);

			if (panel) {
				panel.id = panelId;
				panel.setAttribute('role', 'tabpanel');
				panel.setAttribute('aria-labelledby', tabId);
				panel.toggleAttribute('hidden', index !== selected);
			}
		});
	}

	private handleTabClick = (event: Event) => {
		if (this.isDisabled(event.currentTarget as HTMLElement)) {
			return;
		}

		const index = this.getTabs().indexOf(event.currentTarget as HTMLElement);
		if (index >= 0) {
			this.selectTab(index);
		}
	};

	private handleTabKeydown = (event: KeyboardEvent) => {
		const tabs = this.getTabs();
		const index = tabs.indexOf(event.currentTarget as HTMLElement);
		if (index < 0 || this.isDisabled(tabs[index])) {
			return;
		}

		if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
			event.preventDefault();
			this.selectTab(this.getNextEnabledTabIndex(index, 1));
		}

		if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
			event.preventDefault();
			this.selectTab(this.getNextEnabledTabIndex(index, -1));
		}

		if (event.key === 'Home') {
			event.preventDefault();
			this.selectTab(this.getNextEnabledTabIndex(-1, 1));
		}

		if (event.key === 'End') {
			event.preventDefault();
			this.selectTab(this.getNextEnabledTabIndex(tabs.length, -1));
		}
	};

	private selectTab(index: number) {
		this.selected = index;
		this.updateComplete.then(() => this.getTabs()[index]?.focus());
		this.dispatchEvent(
			new CustomEvent('w1c-tab-change', { bubbles: true, composed: true, detail: { selected: index } })
		);
	}

	private getTabs() {
		return (this.tabsSlot?.assignedElements({ flatten: true }) as HTMLElement[] | undefined) ?? [];
	}

	private getPanels() {
		return (this.panelsSlot?.assignedElements({ flatten: true }) as HTMLElement[] | undefined) ?? [];
	}

	private isDisabled(tab: HTMLElement) {
		return tab.hasAttribute('disabled') || tab.getAttribute('aria-disabled') === 'true';
	}

	private getNextEnabledTabIndex(index: number, direction: 1 | -1) {
		const tabs = this.getTabs();
		for (let step = 1; step <= tabs.length; step += 1) {
			const nextIndex = (index + step * direction + tabs.length) % tabs.length;
			if (!this.isDisabled(tabs[nextIndex])) {
				return nextIndex;
			}
		}

		return this.selected;
	}

	static styles = css`
		:host {
			display: block;
			color: var(--w1c-tabs-text, var(--w1c-control-text, #111111));
			font: var(--w1c-body-font, 13px/1.35 'MS Sans Serif', Tahoma, sans-serif);
		}

		.chrome {
			box-sizing: border-box;
			display: grid;
			min-width: 0;
		}

		.tablist {
			display: flex;
			align-items: end;
			gap: var(--w1c-tabs-gap, 1px);
			padding-inline: var(--w1c-tabs-tablist-padding-inline, var(--w1c-space-1, 4px));
		}

		.tablist ::slotted(*) {
			box-sizing: border-box;
			min-height: var(--w1c-tab-height, 24px);
			padding: var(--w1c-tab-padding, 3px 10px);
			border: var(--w1c-tab-border, 1px solid var(--w1c-control-dark-shadow, #404040));
			border-block-start-color: var(--w1c-tab-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-start-color: var(--w1c-tab-highlight, var(--w1c-control-highlight, #ffffff));
			border-block-end: 0;
			border-radius: var(--w1c-tab-radius, var(--w1c-radius-1, 0) var(--w1c-radius-1, 0) 0 0);
			color: var(--w1c-tab-text, var(--w1c-control-text, #111111));
			background: var(--w1c-tab-background, var(--w1c-surface, #c0c0c0));
			font: var(--w1c-control-font, inherit);
			text-decoration: none;
			cursor: default;
		}

		.tablist ::slotted([aria-selected='true']) {
			position: relative;
			z-index: 1;
			padding-block-end: calc(var(--w1c-tab-padding-block-end-active, 3px) + 1px);
			color: var(--w1c-tab-active-text, var(--w1c-tab-text, var(--w1c-control-text, #111111)));
			background: var(--w1c-tab-active-background, var(--w1c-window-content-background, #ffffff));
		}

		.panels {
			box-sizing: border-box;
			min-width: 0;
			padding: var(--w1c-tabs-panel-padding, var(--w1c-space-3, 12px));
			border: var(--w1c-tabs-panel-border, 1px solid var(--w1c-control-dark-shadow, #404040));
			border-block-start-color: var(--w1c-tabs-panel-highlight, var(--w1c-control-highlight, #ffffff));
			border-inline-start-color: var(--w1c-tabs-panel-highlight, var(--w1c-control-highlight, #ffffff));
			background: var(--w1c-tabs-panel-background, var(--w1c-window-content-background, #ffffff));
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'w1c-tabs': W1cTabs;
	}
}
