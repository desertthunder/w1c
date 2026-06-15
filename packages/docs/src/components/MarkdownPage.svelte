<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, title, description }: { children: Snippet; title?: string; description?: string } = $props();
</script>

<svelte:head>
	{#if title}
		<title>{title}</title>
	{/if}
	{#if description}
		<meta name="description" content={description} />
	{/if}
</svelte:head>

{@render children()}
