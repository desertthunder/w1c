<script lang="ts">
	import '@w1c/components/styles/tokens.css';
	import '@w1c/components/themes/windows-95.css';
	import '@w1c/components/themes/gnome2.css';
	import '@w1c/components/themes/ubuntu-810.css';
	import '@w1c/components/themes/classic-mac.css';
	import '@w1c/components/themes/web-1.css';
	import '@w1c/components/themes/geocities.css';
	import { onMount } from 'svelte';
	import { THEME_CATALOG, type ThemeCatalogEntry } from '$lib/catalogs';

	let { themes = THEME_CATALOG }: { themes?: ThemeCatalogEntry[] } = $props();

	let ready = $state(false);

	onMount(() => {
		void Promise.all([
			import('@w1c/components/window'),
			import('@w1c/components/toolbar'),
			import('@w1c/components/button'),
			import('@w1c/components/statusbar')
		]).then(() => {
			ready = true;
		});
	});
</script>

<div class="theme-catalog">
	{#each themes as theme (theme.id)}
		<article class="theme-card" data-w1c-theme={theme.id}>
			<div class="theme-card__sample">
				{#if ready}
					<w1c-window title={theme.label}>
						<div slot="controls">
							<w1c-button aria-label="Minimize">_</w1c-button>
							<w1c-button aria-label="Close">x</w1c-button>
						</div>
						<w1c-toolbar slot="toolbar">
							<w1c-button>File</w1c-button>
							<w1c-button>Edit</w1c-button>
						</w1c-toolbar>
						<p>{theme.notes}</p>
						<w1c-statusbar slot="statusbar">
							<span>theme/{theme.id}</span>
						</w1c-statusbar>
					</w1c-window>
				{/if}
			</div>
			<div class="theme-card__body">
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<h2><a href={theme.href}>{theme.label}</a></h2>
				<p>{theme.notes}</p>
				<div class="theme-card__swatches" aria-label={`${theme.label} color swatches`}>
					{#each theme.swatches as swatch (swatch)}
						<span style={`--swatch: ${swatch}`} title={swatch}></span>
					{/each}
				</div>
				<dl>
					<div>
						<dt>Import</dt>
						<dd><code>{theme.importPath}</code></dd>
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
				</dl>
			</div>
		</article>
	{/each}
</div>

<style>
	.theme-catalog {
		display: grid;
		gap: var(--space-5);
		margin-block: var(--space-5);
	}

	.theme-card {
		display: grid;
		grid-template-columns: minmax(16rem, 0.9fr) minmax(0, 1.1fr);
		gap: var(--space-4);
		align-items: start;
		padding: var(--space-4);
		background: #ffffff;
		border: 3px double var(--color-rule);
		box-shadow: 5px 5px 0 var(--color-shadow);
	}

	.theme-card__sample {
		min-width: 0;
		padding: var(--space-3);
		color: var(--w1c-control-text, #111111);
		background:
			var(--w1c-desktop-background-image, none),
			var(--w1c-desktop-background, var(--w1c-window-content-background, #ffffff));
		background-size: var(--w1c-desktop-background-size, auto);
		border: 1px solid var(--color-shadow);
	}

	.theme-card__sample w1c-window {
		width: min(100%, 22rem);
	}

	.theme-card__sample p {
		margin: 0;
		max-width: none;
		font: var(--w1c-body-font, 0.86rem/1.3 var(--w1c-font-ui, sans-serif));
	}

	.theme-card__body {
		display: grid;
		gap: var(--space-3);
		min-width: 0;
	}

	.theme-card h2 {
		margin: 0;
		font-size: var(--font-size-h3);
	}

	.theme-card p {
		margin: 0;
		max-width: none;
	}

	.theme-card__swatches {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.theme-card__swatches span {
		width: 2rem;
		aspect-ratio: 1;
		background: var(--swatch);
		border: 2px solid var(--color-rule);
		box-shadow: 2px 2px 0 var(--color-shadow);
	}

	.theme-card dl {
		display: grid;
		gap: var(--space-2);
		margin: 0;
	}

	.theme-card dl > div {
		display: grid;
		gap: 0.15rem;
	}

	.theme-card dt {
		color: var(--color-muted);
		font-family: var(--font-mono);
		font-size: 0.76rem;
		font-weight: 700;
		text-transform: uppercase;
	}

	.theme-card dd {
		margin: 0;
		max-width: none;
		overflow-wrap: anywhere;
	}

	.theme-card ul {
		display: grid;
		gap: var(--space-1);
		margin: 0;
		padding-inline-start: 1.1rem;
	}

	@media (max-width: 760px) {
		.theme-card {
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
