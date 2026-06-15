<script lang="ts">
	import '@w1c/lib';
</script>

<svelte:head>
	<title>W1C Web Components</title>
	<meta
		name="description"
		content="Public documentation for W1C, a retro web component library."
	/>
</svelte:head>

<main>
	<section class="hero">
		<p class="eyebrow">Web 1.0 components for modern apps</p>
		<h1>W1C</h1>
		<p>
			Reusable Lit web components, icons, and themes inspired by GNOME 2, old
			Ubuntu, Windows 95, classic Mac, and Geocities.
		</p>
	</section>

	<section class="preview" aria-label="Component preview">
		<my-element>
			<h2>Library Preview</h2>
		</my-element>
	</section>
</main>

<style>
	:global(body) {
		margin: 0;
		background: #f6f1df;
		color: #151515;
		font-family:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
			"Segoe UI", sans-serif;
	}

	main {
		min-width: 320px;
	}

	.hero {
		box-sizing: border-box;
		min-height: 42svh;
		padding: clamp(48px, 8vw, 96px) clamp(20px, 6vw, 80px);
		background:
			linear-gradient(90deg, rgba(0, 106, 166, 0.16) 1px, transparent 1px),
			linear-gradient(rgba(0, 106, 166, 0.14) 1px, transparent 1px),
			#f6f1df;
		background-size: 18px 18px;
		border-bottom: 4px double #151515;
	}

	.eyebrow {
		margin: 0 0 12px;
		font-family: "Courier New", ui-monospace, monospace;
		font-size: 14px;
		text-transform: uppercase;
	}

	h1 {
		margin: 0;
		font-size: clamp(56px, 12vw, 132px);
		line-height: 0.9;
	}

	.hero p:last-child {
		max-width: 720px;
		margin: 24px 0 0;
		font-size: 20px;
		line-height: 1.5;
	}

	.preview {
		background: #ffffff;
	}
</style>
