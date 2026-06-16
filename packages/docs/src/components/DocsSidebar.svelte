<script lang="ts">
	import { page } from '$app/state';
	import type { DocGroup } from '../lib/docs';
	import SearchBox from './SearchBox.svelte';

	let { groups, open, onNavigate }: { groups: DocGroup[]; open: boolean; onNavigate: () => void } = $props();

	function groupId(title: string) {
		return `docs-group-${title.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`;
	}

	function normalizePath(pathname: string) {
		return pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
	}

	function groupContainsPath(group: DocGroup, pathname: string): boolean {
		const path = normalizePath(pathname);

		return (
			Boolean(group.links?.some((item) => item.href === path)) ||
			Boolean(group.groups?.some((subgroup) => groupContainsPath(subgroup, path)))
		);
	}

	function groupStartsOpen(group: DocGroup) {
		return group.title !== 'Components' || groupContainsPath(group, page.url.pathname);
	}
</script>

<aside id="docs-sidebar" class:open class="sidebar" aria-label="Docs navigation">
	<SearchBox />
	<nav aria-label="Docs sections">
		{#each groups as group (group.title)}
			<!-- eslint-disable svelte/no-navigation-without-resolve -->
			<details class="nav-group" open={groupStartsOpen(group)}>
				<summary id={groupId(group.title)}>{group.title}</summary>
				{#if group.links?.length}
					<div class="nav-links">
						{#each group.links as item (`${item.href}:${item.title}`)}
							<a href={item.href} onclick={onNavigate}>
								<span>{item.title}</span>
								<small>{item.description}</small>
							</a>
						{/each}
					</div>
				{/if}
				{#if group.groups?.length}
					<div class="nav-subgroups">
						{#each group.groups as subgroup (`${group.title}:${subgroup.title}`)}
							<details class="nav-subgroup" open={groupContainsPath(subgroup, page.url.pathname)}>
								<summary id={groupId(`${group.title}-${subgroup.title}`)}>{subgroup.title}</summary>
								<div class="nav-links">
									{#each subgroup.links ?? [] as item (`${item.href}:${item.title}`)}
										<a href={item.href} onclick={onNavigate}>
											<span>{item.title}</span>
											<small>{item.description}</small>
										</a>
									{/each}
								</div>
							</details>
						{/each}
					</div>
				{/if}
			</details>
			<!-- eslint-enable svelte/no-navigation-without-resolve -->
		{/each}
	</nav>
</aside>

<style>
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

	nav {
		display: grid;
		gap: var(--space-5);
		margin-top: var(--space-5);
	}

	.nav-group {
		display: grid;
		gap: var(--space-2);
	}

	nav summary {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		margin: 0;
		padding: var(--space-2) var(--space-3);
		color: var(--color-ink);
		background: #ffffff;
		border: 2px solid var(--color-rule);
		box-shadow: 3px 3px 0 var(--color-shadow);
		font-family: var(--font-sans);
		font-size: 0.8rem;
		font-weight: 600;
		list-style: none;
		text-transform: uppercase;
		cursor: pointer;
	}

	nav summary::marker {
		content: '';
	}

	nav summary::-webkit-details-marker {
		display: none;
	}

	nav summary::before {
		content: '+';
		display: inline-grid;
		place-items: center;
		width: 1.1rem;
		height: 1.1rem;
		font-size: 0.7rem;
		line-height: 1;
	}

	nav details[open] > summary::before {
		content: '-';
	}

	nav summary:focus-visible {
		outline: 3px solid var(--color-link);
		outline-offset: 3px;
	}

	nav summary:hover {
		background: var(--color-badge);
	}

	.nav-links,
	.nav-subgroups {
		display: grid;
		gap: var(--space-2);
	}

	.nav-subgroups {
		gap: var(--space-4);
	}

	.nav-subgroup {
		display: grid;
		gap: var(--space-2);
		padding-inline-start: var(--space-3);
		border-inline-start: 3px double var(--color-rule);
	}

	.nav-subgroup summary {
		color: var(--color-muted);
		font-size: 0.74rem;
		box-shadow: 2px 2px 0 var(--color-shadow);
	}

	nav a {
		display: grid;
		gap: 0.15rem;
		padding: var(--space-3);
		color: var(--color-ink);
		background: #ffffff;
		border: 2px solid var(--color-rule);
		box-shadow: 3px 3px 0 var(--color-shadow);
		text-decoration: none;
		transition:
			background-color 120ms ease-out,
			box-shadow 120ms ease-out,
			color 120ms ease-out,
			transform 120ms ease-out;
	}

	nav a:visited {
		color: var(--color-ink);
	}

	nav a:hover {
		color: var(--color-ink);
		background: var(--color-badge);
		box-shadow: 5px 5px 0 var(--color-shadow);
		transform: translate(-2px, -2px);
	}

	nav a:active {
		box-shadow: 1px 1px 0 var(--color-shadow);
		transform: translate(2px, 2px) scale(0.96);
	}

	nav a:focus-visible {
		outline: 3px solid var(--color-link);
		outline-offset: 3px;
	}

	small {
		font-size: 0.8rem;
		line-height: 1.35;
	}

	@media (prefers-reduced-motion: reduce) {
		nav a {
			transition: none;
		}

		nav a:hover,
		nav a:active {
			transform: none;
		}
	}

	@media (max-width: 820px) {
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

		nav {
			gap: var(--space-2);
			margin-top: var(--space-4);
		}

		small {
			display: block;
		}
	}
</style>
