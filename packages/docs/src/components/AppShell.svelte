<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { DocGroup, DocLink } from '../lib/docs';
	import DocsSidebar from './DocsSidebar.svelte';
	import SiteHeader from './SiteHeader.svelte';

	let {
		children,
		primaryDocGroups,
		topNavLinks
	}: { children: Snippet; primaryDocGroups: DocGroup[]; topNavLinks: DocLink[] } = $props();

	let sidebarOpen = $state(false);

	function closeSidebar() {
		sidebarOpen = false;
	}

	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}
</script>

<div class="site-shell">
	<a class="skip-link" href="#content">Skip to content</a>
	<SiteHeader links={topNavLinks} {sidebarOpen} onToggleSidebar={toggleSidebar} />

	<div class="page-grid">
		{#if sidebarOpen}
			<button class="sidebar-scrim" type="button" aria-label="Close docs navigation" onclick={closeSidebar}></button>
		{/if}
		<DocsSidebar groups={primaryDocGroups} open={sidebarOpen} onNavigate={closeSidebar} />

		<main id="content" data-pagefind-body>
			{@render children()}
		</main>
	</div>
</div>

<style>
	.site-shell {
		height: 100svh;
		display: grid;
		grid-template-rows: auto minmax(0, 1fr);
		overflow: hidden;
		overscroll-behavior: none;
	}

	.skip-link {
		position: absolute;
		inset-block-start: var(--space-3);
		inset-inline-start: var(--space-3);
		z-index: 10;
		padding: var(--space-2) var(--space-3);
		background: var(--color-badge);
		border: 2px solid var(--color-rule);
		transform: translateY(-150%);
	}

	.skip-link:focus {
		transform: translateY(0);
	}

	.page-grid {
		display: grid;
		grid-template-columns: minmax(220px, 300px) minmax(0, 1fr);
		align-items: start;
		min-height: 0;
		position: relative;
		overflow: hidden;
		overscroll-behavior: none;
	}

	.sidebar-scrim {
		display: none;
	}

	main {
		min-width: 0;
		height: 100%;
		overflow: auto;
		overscroll-behavior: contain;
		-webkit-overflow-scrolling: touch;
		padding: clamp(24px, 6vw, 80px);
		background: rgba(255, 252, 221, 0.94);
		box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.62);
	}

	@media (max-width: 820px) {
		.page-grid {
			display: grid;
			grid-template-columns: minmax(0, 1fr);
			grid-template-rows: minmax(0, 1fr);
			align-items: stretch;
		}

		.sidebar-scrim {
			display: block;
			position: absolute;
			inset: 0;
			z-index: 2;
			padding: 0;
			background: rgba(17, 17, 17, 0.32);
			border: 0;
		}

		main {
			padding: var(--space-5);
		}
	}
</style>
