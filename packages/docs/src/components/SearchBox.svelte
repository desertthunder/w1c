<script lang="ts">
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let searchRoot: HTMLDivElement;
	let unavailable = $state(false);

	type PagefindWindow = Window &
		typeof globalThis & {
			PagefindUI?: new (options: {
				element: HTMLElement;
				bundlePath?: string;
				showSubResults?: boolean;
				showImages?: boolean;
			}) => unknown;
		};

	onMount(() => {
		if (!browser) return;

		const pagefindCssUrl = `${base}/pagefind/pagefind-ui.css`;
		const pagefindUrl = `${base}/pagefind/pagefind-ui.js`;
		const pagefindBundlePath = `${base}/pagefind/`;
		const existingStylesheet = document.querySelector<HTMLLinkElement>(`link[href="${pagefindCssUrl}"]`);

		if (!existingStylesheet) {
			const stylesheet = document.createElement('link');
			stylesheet.rel = 'stylesheet';
			stylesheet.href = pagefindCssUrl;
			document.head.append(stylesheet);
		}

		const startSearch = () => {
			const PagefindUI = (window as PagefindWindow).PagefindUI;

			if (PagefindUI) {
				new PagefindUI({
					element: searchRoot,
					bundlePath: pagefindBundlePath,
					showImages: false,
					showSubResults: true
				});
			} else {
				unavailable = true;
			}
		};

		const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${pagefindUrl}"]`);

		if (existingScript) {
			if ((window as PagefindWindow).PagefindUI) {
				startSearch();
			} else {
				existingScript.addEventListener('load', startSearch, { once: true });
			}
			return;
		}

		const script = document.createElement('script');
		script.src = pagefindUrl;
		script.async = true;
		script.addEventListener('load', startSearch, { once: true });
		script.addEventListener('error', () => {
			unavailable = true;
		});
		document.head.append(script);
	});
</script>

<div class="search-box">
	<div bind:this={searchRoot}></div>
	{#if unavailable}
		<p>Search appears after the static build runs Pagefind.</p>
	{/if}
</div>

<style>
	.search-box {
		min-height: 42px;
	}

	.search-box p {
		margin: 0;
		font-size: 0.82rem;
		color: var(--color-muted);
	}

	.search-box :global(.pagefind-ui) {
		--pagefind-ui-scale: 0.78;
		--pagefind-ui-primary: var(--color-ink);
		--pagefind-ui-text: var(--color-ink);
		--pagefind-ui-background: var(--color-paper);
		--pagefind-ui-border: var(--color-ink);
		--pagefind-ui-tag: var(--color-badge);
		--pagefind-ui-border-width: 2px;
		--pagefind-ui-border-radius: 0;
		--pagefind-ui-font: var(--font-sans);
	}

	.search-box :global(.pagefind-ui__search-input) {
		box-shadow: inset 2px 2px 0 var(--color-shadow);
	}

	.search-box :global(.pagefind-ui__button) {
		border-style: outset;
		box-shadow: none;
	}
</style>
