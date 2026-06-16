<script lang="ts">
	import '@w1c/components/styles/tokens.css';
	import '@w1c/components/themes/windows-95.css';
	import '@w1c/components/themes/gnome2.css';
	import '@w1c/components/themes/ubuntu-810.css';
	import '@w1c/components/themes/classic-mac.css';
	import '@w1c/components/themes/web-1.css';
	import '@w1c/components/themes/geocities.css';
	import { onMount, type Snippet } from 'svelte';
	import { docsTheme } from '../lib/theme.svelte';

	type PreviewComponent =
		| 'address-field'
		| 'alert'
		| 'button'
		| 'checkbox'
		| 'data-table'
		| 'dialog'
		| 'icon'
		| 'input'
		| 'panel'
		| 'select'
		| 'status-card'
		| 'statusbar'
		| 'textarea'
		| 'toolbar'
		| 'window';

	const loaders: Record<PreviewComponent, () => Promise<unknown>> = {
		'address-field': () => import('@w1c/components/address-field'),
		alert: () => import('@w1c/components/alert'),
		button: () => import('@w1c/components/button'),
		checkbox: () => import('@w1c/components/checkbox'),
		'data-table': () => import('@w1c/components/data-table'),
		dialog: () => import('@w1c/components/dialog'),
		icon: () => import('@w1c/components/icon'),
		input: () => import('@w1c/components/input'),
		panel: () => import('@w1c/components/panel'),
		select: () => import('@w1c/components/select'),
		'status-card': () => import('@w1c/components/status-card'),
		statusbar: () => import('@w1c/components/statusbar'),
		textarea: () => import('@w1c/components/textarea'),
		toolbar: () => import('@w1c/components/toolbar'),
		window: () => import('@w1c/components/window')
	};

	let { components, children }: { components: PreviewComponent[]; children: Snippet } = $props();

	let ready = $state(false);

	onMount(() => {
		void Promise.all(components.map((component) => loaders[component]())).then(() => {
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
		font: var(--w1c-body-font, 16px/1.25 'MS Sans Serif', Tahoma, sans-serif);
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
</style>
