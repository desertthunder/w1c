<script lang="ts">
	import type { Snippet } from 'svelte';
	import PageMeta from './PageMeta.svelte';

	let { children, title, description }: { children: Snippet; title?: string; description?: string } = $props();
</script>

{#if title && description}
	<PageMeta {title} {description} />
{/if}

{@render children()}
