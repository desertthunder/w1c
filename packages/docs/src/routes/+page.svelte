<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>W1C Docs</title>
	<meta name="description" content="Documentation for W1C, a retro web component library for modern pages." />
</svelte:head>

<section class="home">
	<p class="kicker">Web components for the indie web.</p>
	<h1>W1C</h1>
	<p class="lede">
		W1C (Web 1.0 Components) takes retro operating-system and early-web UI patterns as components & UI primitives for
		your next project.
	</p>
	<nav class="doc-cards" aria-label="Start reading">
		{#each data.primaryDocs as item (`${item.href}:${item.title}`)}
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
	}

	.doc-cards a:visited {
		color: var(--color-ink);
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
</style>
