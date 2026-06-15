<script lang="ts">
	import type { DocLink } from '../lib/docs';
	import SearchBox from './SearchBox.svelte';

	let {
		links,
		open,
		onNavigate
	}: {
		links: DocLink[];
		open: boolean;
		onNavigate: () => void;
	} = $props();
</script>

<aside id="docs-sidebar" class:open class="sidebar" aria-label="Docs navigation">
	<SearchBox />
	<nav>
		<p>Manual</p>
		{#each links as item (`${item.href}:${item.title}`)}
			<a href={item.href} onclick={onNavigate}>
				<span>{item.title}</span>
				<small>{item.description}</small>
			</a>
		{/each}
	</nav>
</aside>

<style>
	.sidebar {
		height: 100%;
		min-height: 0;
		overflow: auto;
		overscroll-behavior: contain;
		padding: var(--space-4);
		border-right: 4px double var(--color-rule);
		background: var(--color-sidebar);
		backdrop-filter: blur(1px);
	}

	nav {
		display: grid;
		gap: var(--space-2);
		margin-top: var(--space-5);
	}

	nav p {
		margin: 0;
		font-family: var(--font-mono);
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
	}

	nav a {
		display: grid;
		gap: 0.15rem;
		padding: var(--space-3);
		color: var(--color-ink);
		background: #ffffff;
		border: 2px solid var(--color-rule);
		box-shadow: 3px 3px 0 var(--color-shadow);
		text-decoration: none;
	}

	nav a:visited {
		color: var(--color-ink);
	}

	small {
		font-size: 0.8rem;
		line-height: 1.35;
	}

	@media (max-width: 820px) {
		.sidebar {
			position: absolute;
			inset: 0 auto 0 0;
			z-index: 3;
			width: min(320px, 88vw);
			height: 100%;
			border-right: 4px double var(--color-rule);
			border-bottom: 0;
			box-shadow: 8px 0 0 rgba(17, 17, 17, 0.22);
			transform: translateX(-105%);
			transition: transform 140ms ease-out;
		}

		.sidebar.open {
			transform: translateX(0);
		}

		nav {
			gap: var(--space-2);
			margin-top: var(--space-4);
		}

		small {
			display: block;
		}
	}
</style>
