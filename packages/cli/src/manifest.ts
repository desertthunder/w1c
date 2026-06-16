import * as crypto from 'node:crypto';
import * as fs from 'node:fs/promises';
import * as p from 'node:path';
import * as u from 'node:url';

type DocPage = { slug: string; title: string; description: string; content: string };

type DocsManifest = { hash: string; docs: DocPage[] };

const here = p.dirname(u.fileURLToPath(import.meta.url));
const docsSourceDir = p.resolve(here, '../../docs/src/routes/docs');
const generatedDir = p.resolve(here, '../generated');
const manifestPath = p.resolve(generatedDir, 'manifest.json');
const oldGeneratedDir = p.resolve(here, 'generated');

async function findPageFiles(dir: string): Promise<string[]> {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		entries.map(async (entry) => {
			const path = p.resolve(dir, entry.name);

			if (entry.isDirectory()) {
				return findPageFiles(path);
			}

			return entry.isFile() && entry.name === '+page.md' ? [path] : [];
		})
	);

	return files.flat().sort();
}

function parseFrontmatter(source: string) {
	const match = source.match(/^---\n([\s\S]*?)\n---\n?/);
	const metadata: Record<string, string> = {};

	if (!match) {
		return { metadata, body: source };
	}

	for (const line of match[1].split('\n')) {
		const separator = line.indexOf(':');
		if (separator === -1) continue;

		metadata[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
	}

	return { metadata, body: source.slice(match[0].length) };
}

function sanitizeMarkdown(source: string) {
	const { metadata, body } = parseFrontmatter(source);
	const output: string[] = [];
	let inFence = false;
	let inPreview = false;
	let inScript = false;

	for (const line of body.split('\n')) {
		const trimmed = line.trim();

		if (trimmed.startsWith('```')) {
			inFence = !inFence;
			output.push(line);
			continue;
		}

		if (!inFence) {
			if (inPreview) {
				inPreview = !/^<\/ComponentPreview>/.test(trimmed);
				continue;
			}

			if (inScript) {
				inScript = !trimmed.startsWith('</script>');
				continue;
			}

			if (/^<script(?:\s|>)/.test(trimmed)) {
				inScript = !trimmed.includes('</script>');
				continue;
			}

			if (/^<ComponentPreview\b/.test(trimmed)) {
				inPreview = !trimmed.includes('</ComponentPreview>');
				continue;
			}
			if (/^<[A-Z][A-Za-z0-9]*(?:\s[^>]*)?\/>$/.test(trimmed)) continue;
			if (/^<li>/.test(trimmed)) {
				output.push(
					line
						.replace(/^\s*<li><a href="([^"]+)">([^<]+)<\/a>([\s\S]*?)<\/li>\s*$/, '- [$2]($1)$3')
						.replace(/<[^>]+>/g, '')
				);
				continue;
			}
			if (/^<p class="doc-kicker">/.test(trimmed)) continue;
			if (/^<\/?(div|ol)\b/.test(trimmed)) continue;
		}

		output.push(line);
	}

	return {
		metadata,
		content: output
			.join('\n')
			.replace(/\n{3,}/g, '\n\n')
			.trim()
	};
}

function slugFromPage(file: string) {
	const route = p.relative(docsSourceDir, p.dirname(file)).replaceAll('\\', '/');
	return route === '' ? 'index' : route;
}

function hashDocs(docs: DocPage[]) {
	return crypto.createHash('sha256').update(JSON.stringify(docs)).digest('hex');
}

async function generate() {
	const pageFiles = await findPageFiles(docsSourceDir);
	const docs: DocPage[] = [];

	await fs.rm(oldGeneratedDir, { recursive: true, force: true });

	for (const file of pageFiles) {
		const slug = slugFromPage(file);
		const source = await fs.readFile(file, 'utf8');
		const { metadata, content } = sanitizeMarkdown(source);
		const title = metadata.title?.replace(/\s+\|\s+W1C Docs$/, '') ?? slug;
		const description = metadata.description ?? '';

		docs.push({ slug, title, description, content });
	}

	docs.sort((a, b) => a.slug.localeCompare(b.slug));
	await fs.mkdir(generatedDir, { recursive: true });

	const manifest: DocsManifest = { hash: hashDocs(docs), docs };

	await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, '\t')}\n`);
}

await generate();
