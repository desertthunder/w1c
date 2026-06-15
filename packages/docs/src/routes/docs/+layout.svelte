<script lang="ts">
	let { children } = $props()
</script>

<article class="doc-page">
	{@render children()}
</article>

<style>
	.doc-page {
		max-width: 980px;
	}

	.doc-page :global(.callout) {
		margin: var(--space-5) 0;
		padding: var(--space-4);
		background: #ffffff;
		border: 3px double var(--color-rule);
		box-shadow: 5px 5px 0 var(--color-shadow);
	}

	.doc-page :global(.steps) {
		display: grid;
		gap: var(--space-4);
		padding: 0;
		list-style: none;
		counter-reset: docs-step;
	}

	.doc-page :global(.steps li) {
		position: relative;
		padding: var(--space-4) var(--space-4) var(--space-4) 4rem;
		background: #ffffff;
		border: 2px solid var(--color-rule);
		counter-increment: docs-step;
	}

	.doc-page :global(.steps li::before) {
		content: counter(docs-step);
		position: absolute;
		inset-block-start: var(--space-4);
		inset-inline-start: var(--space-4);
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		color: #ffffff;
		background: var(--color-ink);
		font-family: var(--font-mono);
		font-weight: 600;
	}
</style>
