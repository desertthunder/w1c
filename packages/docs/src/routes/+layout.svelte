<script lang="ts">
	import '@fontsource-variable/ibm-plex-sans/wght.css';
	import '@fontsource/ibm-plex-serif/400.css';
	import '@fontsource/ibm-plex-serif/600.css';
	import '@fontsource/ibm-plex-serif/700.css';
	import '@fontsource/ibm-plex-mono/400.css';
	import '@fontsource/ibm-plex-mono/600.css';
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
