<script lang="ts">
	import '@w1c/fonts/all.css';
	import '../styles/main.css';
	import AppShell from '../components/AppShell.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { data, children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<AppShell primaryDocGroups={data.primaryDocGroups} topNavLinks={data.topNavLinks}>
	{@render children()}
</AppShell>
