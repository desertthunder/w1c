<script lang="ts">
	import { resolve } from '$app/paths';
	import type { DocLink } from '../lib/docs';
	import type { DocsTheme } from '../lib/themes';

	let {
		links,
		themeOptions,
		selectedTheme,
		sidebarOpen,
		onToggleSidebar,
		onThemeChange
	}: {
		links: DocLink[];
		themeOptions: DocsTheme[];
		selectedTheme: string;
		sidebarOpen: boolean;
		onToggleSidebar: () => void;
		onThemeChange: (theme: string) => void;
	} = $props();
</script>

<header class="site-header">
	<a class="brand" href={resolve('/')} aria-label="W1C docs home">
		<span class="brand-mark" aria-hidden="true">W1C</span>
		<span class="brand-text">Web 1.0 Components</span>
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
	<div class="site-header__left">
		<nav aria-label="Primary docs">
			{#each links as item (`${item.href}:${item.title}`)}
				<!-- eslint-disable svelte/no-navigation-without-resolve -->
				<a
					href={item.href}
					target={item.external ? '_blank' : undefined}
					rel={item.external ? 'noreferrer' : undefined}>
					{item.title}
				</a>
				<!-- eslint-enable svelte/no-navigation-without-resolve -->
			{/each}
		</nav>
		<label class="theme-picker">
			<span>Theme</span>
			<select value={selectedTheme} onchange={(event) => onThemeChange(event.currentTarget.value)}>
				{#each themeOptions as option (option.id)}
					<option value={option.id}>{option.label}</option>
				{/each}
			</select>
		</label>
	</div>
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

	.site-header__left {
		display: flex;
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
		font-size: var(--font-size-brand);
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

	.theme-picker {
		display: grid;
		align-content: center;
		gap: 2px;
		min-width: 150px;
		padding: var(--space-2) var(--space-4);
		border-left: 2px solid var(--color-rule);
		background: var(--color-sidebar);
		font-family: var(--font-mono);
		font-size: var(--font-size-theme-label);
		font-weight: 600;
		text-transform: uppercase;
	}

	.theme-picker select {
		width: 100%;
		min-height: 28px;
		color: var(--color-ink);
		background: #ffffff;
		border: 2px inset #ffffff;
		font: 600 var(--font-size-theme-select) / 1.1 var(--font-sans);
	}

	nav a {
		display: inline-flex;
		align-items: center;
		min-height: 100%;
		padding: var(--space-3) var(--space-4);
		border-left: 2px solid var(--color-rule);
		font-family: var(--font-mono);
		font-size: var(--font-size-nav);
		font-weight: 600;
		background: var(--color-paper-dark);
	}

	@media (max-width: 820px) {
		.site-header {
			display: grid;
			grid-template-columns: 1fr auto;
			gap: 0;
		}

		.site-header__left {
			grid-column: 1 / -1;
			display: grid;
			grid-template-columns: minmax(0, 1fr);
			width: 100%;
		}

		nav {
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.theme-picker {
			min-width: 0;
			border-top: 2px solid var(--color-rule);
			border-left: 0;
		}

		nav a {
			justify-content: center;
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
