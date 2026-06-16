<script lang="ts">
	import PageMeta from '../components/PageMeta.svelte';

	let { data } = $props();

	const title = 'W1C Docs';
	const description = 'Documentation for W1C, a retro web component library for modern pages.';
</script>

<PageMeta {title} {description} />

<section class="home">
	<p class="kicker">Web components for the indie web.</p>
	<h1>W1C</h1>
	<p class="lede">
		W1C (Web 1.0 Components) takes retro operating-system and early-web UI patterns as components & UI primitives for
		your next project.
	</p>
	<nav class="doc-cards" aria-label="Start reading">
		{#each data.featuredDocs as item (`${item.href}:${item.title}`)}
			<a href={item.href}>
				<span>{item.title}</span>
				<small>{item.description}</small>
			</a>
		{/each}
	</nav>
</section>

<style>
	.home {
		display: grid;
		gap: var(--space-5);
	}

	.kicker {
		width: fit-content;
		margin: 0;
		padding: var(--space-1) var(--space-2);
		background: var(--color-badge);
		border: 2px solid var(--color-rule);
		font-family: var(--font-mono);
		font-size: 0.85rem;
		font-weight: 600;
		text-transform: uppercase;
	}

	.lede {
		margin: 0;
		font-size: clamp(1.2rem, 2vw, 1.55rem);
	}

	.doc-cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: var(--space-4);
		max-width: 980px;
	}

	.doc-cards a {
		display: grid;
		gap: var(--space-2);
		min-height: 150px;
		padding: var(--space-4);
		color: var(--color-ink);
		background: #ffffff;
		border: 3px double var(--color-rule);
		box-shadow: 6px 6px 0 var(--color-shadow);
		text-decoration: none;
		transition:
			background-color 140ms ease-out,
			box-shadow 140ms ease-out,
			color 140ms ease-out,
			transform 140ms ease-out;
	}

	.doc-cards a:visited {
		color: var(--color-ink);
	}

	.doc-cards a:hover {
		color: var(--color-ink);
		background: var(--color-badge);
		box-shadow: 9px 9px 0 var(--color-shadow);
		transform: translate(-3px, -3px);
	}

	.doc-cards a:active {
		box-shadow: 2px 2px 0 var(--color-shadow);
		transform: translate(3px, 3px) scale(0.96);
	}

	.doc-cards a:focus-visible {
		outline: 3px solid var(--color-link);
		outline-offset: 4px;
	}

	.doc-cards span {
		font-family: var(--font-serif);
		font-size: 1.55rem;
		font-weight: 700;
	}

	.doc-cards small {
		font-size: 1rem;
		line-height: 1.4;
	}

	@media (prefers-reduced-motion: reduce) {
		.doc-cards a {
			transition: none;
		}

		.doc-cards a:hover,
		.doc-cards a:active {
			transform: none;
		}
	}
</style>
