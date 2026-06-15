<script lang="ts">
	let { data } = $props()
</script>

<svelte:head>
	<title>Manual | W1C Docs</title>
	<meta
		name="description"
		content="Start reading the W1C manual for installation, usage, and component guidance."
	/>
</svelte:head>

<section class="manual-index">
	<p class="doc-kicker">Manual</p>
	<h1>Read the W1C manual</h1>
	<p class="lede">
		Start with the first window, then wire W1C into the kind of site you are
		building.
	</p>

	<nav class="manual-links" aria-label="Manual pages">
		{#each data.primaryDocs as item}
			<a href={item.href}>
				<span>{item.title}</span>
				<small>{item.description}</small>
			</a>
		{/each}
	</nav>
</section>

<style>
	.manual-index {
		display: grid;
		gap: var(--space-5);
	}

	.manual-links {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: var(--space-4);
		max-width: 920px;
	}

	.manual-links a {
		display: grid;
		gap: var(--space-2);
		min-height: 140px;
		padding: var(--space-4);
		color: var(--color-ink);
		background: #ffffff;
		border: 3px double var(--color-rule);
		box-shadow: 5px 5px 0 var(--color-shadow);
		text-decoration: none;
	}

	.manual-links a:visited {
		color: var(--color-ink);
	}

	.manual-links span {
		font-family: var(--font-serif);
		font-size: 1.4rem;
		font-weight: 700;
	}

	.manual-links small {
		font-size: 0.96rem;
		line-height: 1.4;
	}
</style>
