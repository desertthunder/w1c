<script lang="ts">
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';
	import PageMeta from './PageMeta.svelte';
	import { SvelteMap } from 'svelte/reactivity';

	const pageSources = import.meta.glob('/src/routes/**/+page.md', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;

	let { children, title, description }: { children: Snippet; title?: string; description?: string } = $props();

	let pageCopyState = $state('Copy markdown');
	let pageCopyTimer: ReturnType<typeof setTimeout> | undefined;
	const markdownByPath = new SvelteMap(
		Object.entries(pageSources).map(([file, source]) => {
			const pathname = file
				.replace('/src/routes', '')
				.replace('/+page.md', '/')
				.replace(/^\/index\/$/, '/');

			return [pathname, source];
		})
	);

	const markdownSource = $derived(markdownByPath.get(normalizePath(page.url.pathname)));
	const markdownCopySource = $derived.by(() =>
		markdownSource?.replace(
			[
				'<script>',
				"\timport ComponentPreview from '$components/ComponentPreview.svelte';",
				'</' + 'script>',
				'',
				''
			].join('\n'),
			''
		)
	);

	function normalizePath(pathname: string) {
		return pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
	}

	async function copyText(value: string) {
		if (!navigator.clipboard?.writeText) {
			throw new Error('Clipboard API is unavailable');
		}

		await navigator.clipboard.writeText(value);
	}

	function resetPageCopyState() {
		if (pageCopyTimer) {
			clearTimeout(pageCopyTimer);
		}

		pageCopyTimer = setTimeout(() => {
			pageCopyState = 'Copy markdown';
		}, 1600);
	}

	async function copyPageMarkdown() {
		if (!markdownCopySource) return;

		try {
			await copyText(markdownCopySource);
			pageCopyState = 'Copied';
		} catch {
			pageCopyState = 'Copy failed';
		}

		resetPageCopyState();
	}

	async function copyCodeBlock(button: HTMLButtonElement) {
		const block = button.closest('[data-docs-code-block]');
		const code = block?.querySelector('code')?.textContent;

		if (!code) return;

		try {
			await copyText(code);
			button.textContent = 'Copied';
		} catch {
			button.textContent = 'Failed';
		}

		setTimeout(() => {
			button.textContent = 'Copy';
		}, 1600);
	}

	function handleMarkdownClick(event: MouseEvent) {
		const button = (event.target as Element | null)?.closest<HTMLButtonElement>('[data-copy-code]');

		if (!button?.closest('.markdown-page')) return;

		void copyCodeBlock(button);
	}
</script>

<svelte:window onclick={handleMarkdownClick} />

{#if title && description}
	<PageMeta {title} {description} />
{/if}

<article class="markdown-page">
	{#if markdownSource}
		<div class="markdown-page__tools">
			<button class="copy-button copy-button--page" type="button" onclick={copyPageMarkdown}>{pageCopyState}</button>
		</div>
	{/if}

	{@render children()}
</article>

<style>
	.markdown-page {
		display: block;
	}

	.markdown-page__tools {
		display: flex;
		justify-content: flex-end;
		margin-block-end: var(--space-4);
	}

	.markdown-page :global(.copy-button) {
		padding: 0.28rem 0.55rem;
		color: var(--color-ink);
		background: #ffffff;
		border: 2px solid var(--color-rule);
		box-shadow: 3px 3px 0 var(--color-shadow);
		font-family: var(--font-mono);
		font-size: 0.72rem;
		font-weight: 700;
		line-height: 1;
		text-transform: uppercase;
		cursor: pointer;
	}

	.markdown-page :global(.copy-button:hover) {
		background: var(--color-badge);
	}

	.markdown-page :global(.copy-button:active) {
		box-shadow: 1px 1px 0 var(--color-shadow);
		transform: translate(2px, 2px);
	}

	.markdown-page :global(.copy-button:focus-visible) {
		outline: 3px solid var(--color-link);
		outline-offset: 3px;
	}

	.markdown-page :global(.code-block) {
		position: relative;
		margin: var(--space-5) 0;
	}

	.markdown-page :global(.code-block pre) {
		margin: 0;
		padding-inline-end: 6.5rem;
	}

	.markdown-page :global(.copy-button--code) {
		position: absolute;
		inset-block-start: var(--space-2);
		inset-inline-end: var(--space-3);
		z-index: 1;
	}
</style>
