#!/usr/bin/env node
import { confirm, intro, isCancel, outro, text } from '@clack/prompts';
import chalk from 'chalk';
import { execa } from 'execa';
import fsExtra from 'fs-extra';
import { resolve } from 'node:path';
import { cac } from 'cac';
import { CLI_DOCS } from './docs/data';
import { renderMarkdown } from './docs/renderer';

const { ensureDir, pathExists, writeFile } = fsExtra;
const cli = cac('w1c');
const docsBySlug = new Map(CLI_DOCS.map((doc) => [doc.slug, doc]));

function normalizeDocTopic(topic: string | undefined) {
	if (!topic) return 'getting-started';

	const normalized = topic
		.trim()
		.replace(/^\/?docs\/?/, '')
		.replace(/\/+$/, '');

	return normalized || 'getting-started';
}

function listDocs() {
	return CLI_DOCS.map((doc) => `${chalk.cyan(doc.slug.padEnd(34))} ${doc.description}`).join('\n');
}

cli
	.command('docs [topic]', 'Render W1C docs in the terminal')
	.option('--list', 'List bundled docs topics')
	.option('--raw', 'Print the bundled Markdown without terminal formatting')
	.action((topic: string | undefined, options: { list?: boolean; raw?: boolean }) => {
		if (options.list || topic === 'list') {
			console.log(listDocs());
			return;
		}

		const slug = normalizeDocTopic(topic);
		const doc = docsBySlug.get(slug);

		if (!doc) {
			console.error(chalk.red(`Unknown docs topic: ${slug}`));
			console.error(`Run ${chalk.cyan('w1c docs --list')} to see available topics.`);
			process.exitCode = 1;
			return;
		}

		console.log(options.raw ? doc.content : renderMarkdown(doc.content));
	});

cli
	.command('create [dir]', 'Create a small app that consumes @w1c/components')
	.option('--install', 'Install dependencies after writing files')
	.action(async (dir: string | undefined, options: { install?: boolean }) => {
		intro('W1C scaffold');

		const targetInput =
			dir ?? (await text({ message: 'Project directory', placeholder: 'my-w1c-app', defaultValue: 'my-w1c-app' }));

		if (isCancel(targetInput)) {
			outro('Cancelled');
			return;
		}

		const targetDir = resolve(String(targetInput));
		if ((await pathExists(targetDir)) && !(await confirm({ message: 'Directory exists. Continue?' }))) {
			outro('Cancelled');
			return;
		}

		await ensureDir(`${targetDir}/src`);
		await writeFile(
			`${targetDir}/package.json`,
			`${JSON.stringify(
				{
					name: String(targetInput),
					private: true,
					type: 'module',
					scripts: { dev: 'vite', build: 'vite build', preview: 'vite preview' },
					dependencies: { '@w1c/components': 'workspace:*' },
					devDependencies: { vite: '^8.0.16', typescript: '~6.0.2' }
				},
				null,
				2
			)}\n`
		);
		await writeFile(
			`${targetDir}/index.html`,
			'<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>W1C App</title><script type="module" src="/src/main.ts"></script></head><body><w1c-window title="W1C App"><h1>W1C</h1><p>Retro web components are ready.</p><w1c-statusbar slot="statusbar">@w1c/components</w1c-statusbar></w1c-window></body></html>\n'
		);
		await writeFile(`${targetDir}/src/main.ts`, "import '@w1c/components'\n");

		if (options.install) {
			await execa('pnpm', ['install'], { cwd: targetDir, stdio: 'inherit' });
		}

		outro(`Created ${targetDir}`);
	});

cli.help();
cli.parse();
