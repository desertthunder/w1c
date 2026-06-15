<script lang="ts">
	import '@fontsource-variable/ibm-plex-sans/wght.css';
	import '@fontsource/ibm-plex-serif/400.css';
	import '@fontsource/ibm-plex-serif/600.css';
	import '@fontsource/ibm-plex-serif/700.css';
	import '@fontsource/ibm-plex-mono/400.css';
	import '@fontsource/ibm-plex-mono/600.css';
	import SearchBox from '$lib/SearchBox.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { data, children } = $props();
	let sidebarOpen = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="site-shell">
	<a class="skip-link" href="#content">Skip to content</a>
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
			onclick={() => {
				sidebarOpen = !sidebarOpen;
			}}>
			<span aria-hidden="true"></span>
			<span class="menu-label">Menu</span>
		</button>
		<nav aria-label="Primary docs">
			{#each data.topNavLinks as item}
				<a
					href={item.href}
					target={item.external ? '_blank' : undefined}
					rel={item.external ? 'noreferrer' : undefined}>
					{item.title}
				</a>
			{/each}
		</nav>
	</header>

	<div class="page-grid">
		{#if sidebarOpen}
			<button
				class="sidebar-scrim"
				type="button"
				aria-label="Close docs navigation"
				onclick={() => {
					sidebarOpen = false;
				}}></button>
		{/if}
		<aside id="docs-sidebar" class:open={sidebarOpen} class="sidebar" aria-label="Docs navigation">
			<SearchBox />
			<nav>
				<p>Manual</p>
				{#each data.primaryDocs as item}
					<a
						href={item.href}
						onclick={() => {
							sidebarOpen = false;
						}}>
						<span>{item.title}</span>
						<small>{item.description}</small>
					</a>
				{/each}
			</nav>
		</aside>

		<main id="content" data-pagefind-body>
			{@render children()}
		</main>
	</div>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(:root) {
		--font-serif: 'IBM Plex Serif', Georgia, serif;
		--font-sans: 'IBM Plex Sans Variable', 'IBM Plex Sans', Tahoma, sans-serif;
		--font-mono: 'IBM Plex Mono', 'Courier New', monospace;
		--color-desktop: #f7d84a;
		--color-desktop-grid: rgba(120, 92, 0, 0.16);
		--color-paper: #fff9cf;
		--color-paper-dark: #f0df82;
		--color-ink: #111111;
		--color-link: #0000ee;
		--color-visited: #551a8b;
		--color-muted: #46402a;
		--color-rule: #111111;
		--color-shadow: #8b7200;
		--color-badge: #ffea00;
		--color-panel: rgba(255, 252, 221, 0.95);
		--color-panel-solid: #fff9cf;
		--color-panel-strong: #d1a900;
		--color-sidebar: #c8eeee;
		--color-sidebar-strong: #99d8d8;
		--space-1: 0.25rem;
		--space-2: 0.5rem;
		--space-3: 0.75rem;
		--space-4: 1rem;
		--space-5: 1.5rem;
		--space-6: 2rem;
		--space-7: 3rem;
		--measure: 74ch;
		font-family: var(--font-sans);
		color: var(--color-ink);
		background:
			linear-gradient(45deg, var(--color-desktop-grid) 25%, transparent 25%) 0 0 / 12px 12px,
			linear-gradient(45deg, transparent 75%, rgba(112, 82, 0, 0.18) 75%) 0 0 / 12px 12px,
			var(--color-desktop);
	}

	:global(html) {
		height: 100%;
		overflow: hidden;
		overscroll-behavior: none;
	}

	:global(body) {
		height: 100%;
		margin: 0;
		min-width: 320px;
		overflow: hidden;
		overscroll-behavior: none;
		font-family: var(--font-sans);
		font-size: 17px;
		line-height: 1.55;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(a) {
		color: var(--color-link);
		text-decoration-thickness: 1px;
		text-underline-offset: 0.16em;
	}

	:global(a:visited) {
		color: var(--color-visited);
	}

	:global(code) {
		font-family: var(--font-mono);
		font-size: 0.92em;
		background: #ffffff;
		border: 1px solid var(--color-shadow);
		padding: 0.05em 0.25em;
	}

	:global(pre) {
		max-width: 100%;
		overflow: auto;
		padding: var(--space-4);
		background: #111111;
		color: #00ff66;
		border: 3px ridge var(--color-panel-strong);
		box-shadow: 6px 6px 0 var(--color-shadow);
	}

	:global(pre code) {
		padding: 0;
		color: inherit;
		background: transparent;
		border: 0;
	}

	:global(h1),
	:global(h2),
	:global(h3) {
		font-family: var(--font-serif);
		line-height: 1.05;
		letter-spacing: 0;
	}

	:global(h1) {
		margin: 0;
		font-size: clamp(3rem, 9vw, 7rem);
	}

	:global(h2) {
		margin: var(--space-7) 0 var(--space-3);
		font-size: clamp(2rem, 4vw, 3.5rem);
	}

	:global(h3) {
		margin: var(--space-6) 0 var(--space-2);
		font-size: 1.45rem;
	}

	:global(.doc-kicker) {
		width: fit-content;
		margin: 0 0 var(--space-3);
		padding: var(--space-1) var(--space-2);
		background: var(--color-badge);
		border: 2px solid var(--color-rule);
		font-family: var(--font-mono);
		font-size: 0.82rem;
		font-weight: 600;
		text-transform: uppercase;
	}

	:global(.lede) {
		margin: var(--space-4) 0 var(--space-6);
		font-size: clamp(1.15rem, 2vw, 1.45rem);
	}

	:global(p),
	:global(li) {
		max-width: var(--measure);
	}

	:global(table) {
		width: 100%;
		border-collapse: collapse;
		background: #ffffff;
	}

	:global(th),
	:global(td) {
		padding: var(--space-2);
		border: 2px solid var(--color-rule);
		text-align: left;
		vertical-align: top;
	}

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

	.site-header nav {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-end;
	}

	.site-header nav a {
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

	.page-grid {
		display: grid;
		grid-template-columns: minmax(220px, 300px) minmax(0, 1fr);
		align-items: start;
		min-height: 0;
		position: relative;
		overflow: hidden;
		overscroll-behavior: none;
	}

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

	.sidebar-scrim {
		display: none;
	}

	.sidebar nav {
		display: grid;
		gap: var(--space-2);
		margin-top: var(--space-5);
	}

	.sidebar nav p {
		margin: 0;
		font-family: var(--font-mono);
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
	}

	.sidebar nav a {
		display: grid;
		gap: 0.15rem;
		padding: var(--space-3);
		color: var(--color-ink);
		background: #ffffff;
		border: 2px solid var(--color-rule);
		box-shadow: 3px 3px 0 var(--color-shadow);
		text-decoration: none;
	}

	.sidebar nav a:visited {
		color: var(--color-ink);
	}

	.sidebar small {
		font-size: 0.8rem;
		line-height: 1.35;
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
		.site-header,
		.page-grid {
			display: grid;
		}

		.site-header {
			grid-template-columns: 1fr auto;
			gap: 0;
		}

		.site-header nav {
			grid-column: 1 / -1;
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));
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

		.site-header nav a {
			justify-content: center;
			min-height: 42px;
			padding: var(--space-2);
			border-top: 2px solid var(--color-rule);
			border-left: 0;
			text-align: center;
		}

		.page-grid {
			grid-template-columns: minmax(0, 1fr);
			grid-template-rows: minmax(0, 1fr);
			align-items: stretch;
		}

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

		.sidebar-scrim {
			display: block;
			position: absolute;
			inset: 0;
			z-index: 2;
			padding: 0;
			background: rgba(17, 17, 17, 0.32);
			border: 0;
		}

		.sidebar nav {
			gap: var(--space-2);
			margin-top: var(--space-4);
		}

		.sidebar small {
			display: block;
		}

		main {
			padding: var(--space-5);
		}
	}
</style>
