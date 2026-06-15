<script lang="ts">
	import type { DocLink } from '../lib/docs';

	let {
		links,
		sidebarOpen,
		onToggleSidebar
	}: {
		links: DocLink[];
		sidebarOpen: boolean;
		onToggleSidebar: () => void;
	} = $props();
</script>

<header class="site-header">
	<a class="brand" href="/" aria-label="W1C docs home">
		<span class="brand-mark" aria-hidden="true">W1C</span>
		<span class="brand-text">Web 1 Components</span>
	</a>
	<button
		class="menu-toggle"
		type="button"
		aria-controls="docs-sidebar"
		aria-expanded={sidebarOpen}
		onclick={onToggleSidebar}>
		<span aria-hidden="true"></span>
		<span class="menu-label">Menu</span>
	</button>
	<nav aria-label="Primary docs">
		{#each links as item (`${item.href}:${item.title}`)}
			<a
				href={item.href}
				target={item.external ? '_blank' : undefined}
				rel={item.external ? 'noreferrer' : undefined}>
				{item.title}
			</a>
		{/each}
	</nav>
</header>

<style>
	.site-header {
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		gap: var(--space-4);
		min-height: 64px;
		border-bottom: 4px double var(--color-rule);
		background: #ffffff;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-3) var(--space-4);
		color: var(--color-ink);
		text-decoration: none;
	}

	.brand:visited {
		color: var(--color-ink);
	}

	.brand-mark {
		display: inline-grid;
		place-items: center;
		width: 88px;
		height: 31px;
		color: #ffffff;
		background: #111111;
		border: 2px outset #ffffff;
		font-family: var(--font-mono);
		font-weight: 600;
	}

	.brand-text {
		font-family: var(--font-serif);
		font-size: 1.25rem;
		font-weight: 700;
	}

	.menu-toggle {
		display: none;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-end;
	}

	nav a {
		display: inline-flex;
		align-items: center;
		min-height: 100%;
		padding: var(--space-3) var(--space-4);
		border-left: 2px solid var(--color-rule);
		font-family: var(--font-mono);
		font-size: 0.9rem;
		font-weight: 600;
		background: var(--color-paper-dark);
	}

	@media (max-width: 820px) {
		.site-header {
			display: grid;
			grid-template-columns: 1fr auto;
			gap: 0;
		}

		nav {
			grid-column: 1 / -1;
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		nav a {
			justify-content: center;
			min-height: 42px;
			padding: var(--space-2);
			border-top: 2px solid var(--color-rule);
			border-left: 0;
			text-align: center;
		}

		.menu-toggle {
			display: inline-grid;
			grid-template-columns: auto auto;
			align-items: center;
			gap: var(--space-2);
			margin: var(--space-2);
			padding: var(--space-2) var(--space-3);
			color: var(--color-ink);
			background: var(--color-sidebar);
			border: 2px outset #ffffff;
			font-family: var(--font-mono);
			font-size: 0.9rem;
			font-weight: 600;
		}

		.menu-toggle span[aria-hidden='true'] {
			width: 1.1rem;
			height: 0.8rem;
			background:
				linear-gradient(var(--color-ink), var(--color-ink)) 0 0 / 100% 2px no-repeat,
				linear-gradient(var(--color-ink), var(--color-ink)) 0 50% / 100% 2px no-repeat,
				linear-gradient(var(--color-ink), var(--color-ink)) 0 100% / 100% 2px no-repeat;
		}
	}
</style>
