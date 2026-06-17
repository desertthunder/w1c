<script lang="ts">
	import ThemeCatalog from './ThemeCatalog.svelte';
	import { getThemeCatalogEntry } from '$lib/catalogs';

	let { themeId }: { themeId: string } = $props();
	const theme = $derived(getThemeCatalogEntry(themeId));
</script>

{#if theme}
	<section class="theme-detail">
		<div class="theme-detail__facts">
			<dl>
				<div>
					<dt>Import</dt>
					<dd><code>{theme.importPath}</code></dd>
				</div>
				<div class="theme-detail__selector">
					<dt>Theme selector</dt>
					<dd><code>[data-w1c-theme='{theme.id}']</code></dd>
				</div>
				<div>
					<dt>Fonts</dt>
					<dd>{theme.heading} headings, {theme.ui} UI, {theme.code} code</dd>
				</div>
				<div>
					<dt>Source</dt>
					<dd>
						{#if theme.sources?.length}
							<ul>
								{#each theme.sources as source (source.url)}
									<li><a href={source.url}>{source.name}</a></li>
								{/each}
							</ul>
						{:else}
							<a href={theme.sourceUrl} rel="external" target="_blank">{theme.source}</a>
						{/if}
					</dd>
				</div>
				<div>
					<dt>License</dt>
					<dd>{theme.license}</dd>
				</div>
			</dl>
		</div>
	</section>

	<ThemeCatalog themes={[theme]} />
{/if}

<style>
	.theme-detail__facts {
		margin-block: var(--space-5);
		padding: var(--space-4);
		background: #ffffff;
		border: 3px double var(--color-rule);
		box-shadow: 5px 5px 0 var(--color-shadow);
	}

	.theme-detail dl {
		display: grid;
		grid-template-columns: repeat(6, minmax(0, 1fr));
		gap: var(--space-4);
		margin: 0;
	}

	.theme-detail dl > div {
		display: grid;
		grid-column: span 2;
		gap: var(--space-1);
	}

	.theme-detail dl > div:nth-child(-n + 2) {
		grid-column: span 3;
	}

	.theme-detail dt {
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 700;
		text-transform: uppercase;
	}

	.theme-detail dd {
		margin: 0;
		max-width: none;
		overflow-wrap: anywhere;
	}

	.theme-detail ul {
		display: grid;
		gap: var(--space-1);
		margin: 0;
		padding-inline-start: 1.1rem;
	}

	@media (max-width: 760px) {
		.theme-detail dl {
			grid-template-columns: minmax(0, 1fr);
		}

		.theme-detail dl > div,
		.theme-detail dl > div:nth-child(-n + 2) {
			grid-column: auto;
		}
	}
</style>
