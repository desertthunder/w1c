<script lang="ts">
	import '@w1c/components/styles/tokens.css';
	import '@w1c/components/themes/windows-95.css';
	import '@w1c/components/themes/gnome2.css';
	import '@w1c/components/themes/ubuntu-810.css';
	import '@w1c/components/themes/classic-mac.css';
	import '@w1c/components/themes/web-1.css';
	import '@w1c/components/themes/geocities.css';
	import { onMount, type Snippet } from 'svelte';
	import { docsTheme } from '$lib/theme.svelte';

	type PreviewComponent =
		| 'address-field'
		| 'alert'
		| 'badge-88x31'
		| 'blink'
		| 'button'
		| 'checkbox'
		| 'data-list'
		| 'data-table'
		| 'desktop-icon'
		| 'dialog'
		| 'divider'
		| 'document-browser'
		| 'endpoint-row'
		| 'guestbook-panel'
		| 'icon'
		| 'image-map'
		| 'input'
		| 'json-viewer'
		| 'label'
		| 'last-updated'
		| 'link-cluster'
		| 'marquee'
		| 'menu'
		| 'menu-bar'
		| 'menu-item'
		| 'panel'
		| 'select'
		| 'source-viewer'
		| 'status-card'
		| 'statusbar'
		| 'tabs'
		| 'taskbar'
		| 'textarea'
		| 'tiled-background'
		| 'titlebar'
		| 'toast'
		| 'toolbar'
		| 'under-construction'
		| 'validation-message'
		| 'visitor-counter'
		| 'webring'
		| 'window'
		| 'word-processor';

	const loaders: Record<PreviewComponent, () => Promise<unknown>> = {
		'address-field': () => import('@w1c/components/address-field'),
		alert: () => import('@w1c/components/alert'),
		'badge-88x31': () => import('@w1c/components/badge-88x31'),
		blink: () => import('@w1c/components/blink'),
		button: () => import('@w1c/components/button'),
		checkbox: () => import('@w1c/components/checkbox'),
		'data-list': () => import('@w1c/components/data-list'),
		'data-table': () => import('@w1c/components/data-table'),
		'desktop-icon': () => import('@w1c/components/desktop-icon'),
		dialog: () => import('@w1c/components/dialog'),
		divider: () => import('@w1c/components/divider'),
		'document-browser': () => import('@w1c/components/document-browser'),
		'endpoint-row': () => import('@w1c/components/endpoint-row'),
		'guestbook-panel': () => import('@w1c/components/guestbook-panel'),
		icon: () => import('@w1c/components/icon'),
		'image-map': () => import('@w1c/components/image-map'),
		input: () => import('@w1c/components/input'),
		'json-viewer': () => import('@w1c/components/json-viewer'),
		label: () => import('@w1c/components/label'),
		'last-updated': () => import('@w1c/components/last-updated'),
		'link-cluster': () => import('@w1c/components/link-cluster'),
		marquee: () => import('@w1c/components/marquee'),
		menu: () => import('@w1c/components/menu'),
		'menu-bar': () => import('@w1c/components/menu-bar'),
		'menu-item': () => import('@w1c/components/menu-item'),
		panel: () => import('@w1c/components/panel'),
		select: () => import('@w1c/components/select'),
		'source-viewer': () => import('@w1c/components/source-viewer'),
		'status-card': () => import('@w1c/components/status-card'),
		statusbar: () => import('@w1c/components/statusbar'),
		tabs: () => import('@w1c/components/tabs'),
		taskbar: () => import('@w1c/components/taskbar'),
		textarea: () => import('@w1c/components/textarea'),
		'tiled-background': () => import('@w1c/components/tiled-background'),
		titlebar: () => import('@w1c/components/titlebar'),
		toast: () => import('@w1c/components/toast'),
		toolbar: () => import('@w1c/components/toolbar'),
		'under-construction': () => import('@w1c/components/under-construction'),
		'validation-message': () => import('@w1c/components/validation-message'),
		'visitor-counter': () => import('@w1c/components/visitor-counter'),
		webring: () => import('@w1c/components/webring'),
		window: () => import('@w1c/components/window'),
		'word-processor': () => import('@w1c/components/word-processor')
	};

	let { components, children }: { components: PreviewComponent[]; children: Snippet } = $props();

	let ready = $state(false);

	onMount(() => {
		void Promise.all(
			components.map((component) => {
				return loaders[component]();
			})
		).then(() => {
			ready = true;
		});
	});
</script>

<div class="component-preview" data-w1c-theme={docsTheme.selected}>
	{#if ready}
		<div class="component-preview__stage">
			{@render children()}
		</div>
	{:else}
		<div class="component-preview__loading" aria-hidden="true">Loading preview...</div>
	{/if}
</div>

<style>
	.component-preview {
		margin: var(--space-5) 0;
		padding: var(--space-3);
		background: #ffffff;
		border: 3px double var(--color-rule);
		box-shadow: 5px 5px 0 var(--color-shadow);
	}

	.component-preview__stage {
		min-height: 4rem;
		padding: var(--space-4);
		overflow: auto;
		background:
			linear-gradient(45deg, rgb(0 0 0 / 0.04) 25%, transparent 25%) 0 0 / 10px 10px,
			linear-gradient(45deg, transparent 75%, rgb(0 0 0 / 0.04) 75%) 0 0 / 10px 10px,
			var(--w1c-window-content-background, #ffffff);
		border: 1px solid var(--color-shadow);
		color: var(--w1c-control-text, #111111);
		font: var(
			--w1c-body-font,
			var(--w1c-font-size-2, 16px) / var(--w1c-line-normal, 1.25)
				var(--w1c-font-ui, 'MS Sans Serif', Tahoma, sans-serif)
		);
	}

	.component-preview__loading {
		padding: var(--space-4);
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 0.9rem;
	}

	.component-preview :global(w1c-window) {
		max-width: 100%;
	}

	.component-preview :global(w1c-titlebar),
	.component-preview :global(w1c-window) {
		--w1c-titlebar-columns: minmax(0, 1fr) auto minmax(0, 1fr);
		--w1c-titlebar-title-align: center;
	}

	.component-preview :global(w1c-titlebar::part(icon)),
	.component-preview :global(w1c-window::part(icon)) {
		justify-self: start;
		justify-content: flex-start;
	}

	.component-preview :global(w1c-titlebar::part(controls)),
	.component-preview :global(w1c-window::part(controls)) {
		justify-self: end;
		justify-content: flex-end;
	}
</style>
