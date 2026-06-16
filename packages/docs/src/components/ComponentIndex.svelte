<script lang="ts">
	import { COMPONENT_DOC_GROUPS } from '$lib/docs';
</script>

<div class="component-index">
	{#each COMPONENT_DOC_GROUPS as group (group.title)}
		<section
			class="component-index__group"
			aria-labelledby={`component-group-${group.title.toLowerCase().replaceAll(' ', '-')}`}>
			<h2 id={`component-group-${group.title.toLowerCase().replaceAll(' ', '-')}`}>{group.title}</h2>
			<div class="component-index__links">
				{#each group.links ?? [] as item (`${item.href}:${item.title}`)}
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a class="component-index__link" href={item.href}>
						<span>{item.title}</span>
						<small>{item.description}</small>
					</a>
				{/each}
			</div>
		</section>
	{/each}
</div>

<style>
	.component-index {
		display: grid;
		gap: var(--space-7);
		margin-block: var(--space-6);
	}

	.component-index__group {
		display: grid;
		gap: var(--space-3);
	}

	.component-index__group h2 {
		margin: 0;
		padding-block-end: var(--space-2);
		border-block-end: 4px double var(--color-rule);
	}

	.component-index__links {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
		gap: var(--space-3);
	}

	.component-index__link {
		display: grid;
		gap: var(--space-2);
		padding: var(--space-3);
		color: var(--color-ink);
		background: #ffffff;
		border: 2px solid var(--color-rule);
		box-shadow: 3px 3px 0 var(--color-shadow);
		text-decoration: none;
		transition:
			background-color 120ms ease-out,
			box-shadow 120ms ease-out,
			transform 120ms ease-out;
	}

	.component-index__link:visited {
		color: var(--color-ink);
	}

	.component-index__link:hover {
		background: var(--color-badge);
		box-shadow: 5px 5px 0 var(--color-shadow);
		transform: translate(-2px, -2px);
	}

	.component-index__link:active {
		box-shadow: 1px 1px 0 var(--color-shadow);
		transform: translate(2px, 2px) scale(0.98);
	}

	.component-index__link:focus-visible {
		outline: 3px solid var(--color-link);
		outline-offset: 3px;
	}

	.component-index__link span {
		font-family: var(--font-mono);
		font-weight: 700;
	}

	.component-index__link small {
		font-size: 0.88rem;
		line-height: 1.35;
	}

	@media (prefers-reduced-motion: reduce) {
		.component-index__link {
			transition: none;
		}

		.component-index__link:hover,
		.component-index__link:active {
			transform: none;
		}
	}
</style>
