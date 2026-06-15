import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'

const markdownLayout = new URL('./src/components/MarkdownPage.svelte', import.meta.url).pathname

const escapeHtml = (value) =>
	value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;')
		.replaceAll('{', '&#123;')
		.replaceAll('}', '&#125;')

const highlightCode = (code, lang = 'text') => {
	const language = lang || 'text'
	const escapedLanguage = escapeHtml(language)

	return `<pre class="language-${escapedLanguage}"><code class="language-${escapedLanguage}">${escapeHtml(code)}</code></pre>`
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => {
			if (!filename || filename.split(/[/\\]/).includes('node_modules')) return undefined
			if (/\.(md|svx)$/.test(filename)) return false
			return true
		}
	},
	extensions: ['.svelte', '.svx', '.md'],
	kit: {
		adapter: adapter()
	},
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md'],
			layout: markdownLayout,
			highlight: {
				highlighter: highlightCode
			}
		})
	]
}

export default config
