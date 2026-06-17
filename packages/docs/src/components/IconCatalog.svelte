<script lang="ts">
	import { onMount } from 'svelte';
	import { W1C_ICON_METADATA, W1C_ICON_NAMES } from '@w1c/components/icons';

	let ready = $state(false);

	const icons = W1C_ICON_NAMES.map((name) => ({ name, metadata: W1C_ICON_METADATA[name] }));

	onMount(() => {
		void import('@w1c/components/icon').then(() => {
			ready = true;
		});
	});
</script>

<div class="icon-catalog">
	{#each icons as { name, metadata } (name)}
		<article class="icon-card">
			<div class="icon-card__preview" aria-hidden={!ready}>
				{#if ready}
					<w1c-icon {name} label={metadata.name}></w1c-icon>
				{/if}
			</div>
			<div class="icon-card__body">
				<h2>{metadata.name}</h2>
				<p>{metadata.category}</p>
				<dl>
					<div>
						<dt>Source</dt>
						<dd><a href={metadata.sourceUrl} target="_blank" rel="external">{metadata.sourceReferenceProject}</a></dd>
					</div>
					<div>
						<dt>License</dt>
						<dd>{metadata.license}</dd>
					</div>
					<div>
						<dt>Attribution</dt>
						<dd>{metadata.attribution}</dd>
					</div>
				</dl>
			</div>
		</article>
	{/each}
</div>

<style>
	.icon-catalog {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
		gap: var(--space-4);
		margin-block: var(--space-5);
	}

	.icon-card {
		display: grid;
		grid-template-columns: 4rem minmax(0, 1fr);
		gap: var(--space-3);
		align-items: start;
		padding: var(--space-3);
		background: #ffffff;
		border: 2px solid var(--color-rule);
		box-shadow: 4px 4px 0 var(--color-shadow);
	}

	.icon-card__preview {
		display: grid;
		place-items: center;
		width: 4rem;
		aspect-ratio: 1;
		color: #111111;
		background:
			linear-gradient(45deg, rgb(0 0 0 / 0.08) 25%, transparent 25%) 0 0 / 8px 8px,
			linear-gradient(45deg, transparent 75%, rgb(0 0 0 / 0.08) 75%) 0 0 / 8px 8px,
			#fff9cf;
		border: 1px solid var(--color-shadow);
	}

	.icon-card__preview w1c-icon {
		--w1c-icon-size: 32px;
	}

	.icon-card__body {
		min-width: 0;
		display: grid;
		gap: var(--space-2);
	}

	.icon-card h2 {
		margin: 0;
		overflow-wrap: anywhere;
		font-family: var(--font-mono);
		font-size: 1rem;
		line-height: 1.1;
	}

	.icon-card p {
		margin: 0;
		max-width: none;
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 0.78rem;
		text-transform: uppercase;
	}

	.icon-card dl {
		display: grid;
		gap: var(--space-2);
		margin: 0;
		font-size: 0.86rem;
		line-height: 1.35;
	}

	.icon-card dl > div {
		display: grid;
		gap: 0.1rem;
	}

	.icon-card dt {
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
	}

	.icon-card dd {
		margin: 0;
		max-width: none;
		overflow-wrap: anywhere;
	}
</style>
