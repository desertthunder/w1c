#!/usr/bin/env node
import { confirm, intro, outro } from '@clack/prompts';
import chalk from 'chalk';
import { execa } from 'execa';
import fsExtra from 'fs-extra';
import { resolve } from 'node:path';
import { cac } from 'cac';
import { CLI_DOCS } from './docs/data';
import { renderMarkdown } from './docs/renderer';
import {
	type AddOptions,
	type CreateOptions,
	type InitOptions,
	normalizeAddOpts,
	resolveProjectDir,
	withEntryOpt,
	withIconOpts,
	withInstallOpt,
	withTemplateOpt,
	withThemeOpt
} from './helpers';
import {
	addComponentImport,
	addIcons,
	addThemes,
	createProject,
	W1C_TEMPLATES,
	initProject,
	W1C_THEMES
} from './scaffold';

const cli = cac('w1c');
const docsBySlug = new Map(CLI_DOCS.map((doc) => [doc.slug, doc]));

/** Accepts both bare slugs and `/docs/...` paths for terminal docs lookup. */
function normalizeDocTopic(topic: string | undefined) {
	if (!topic) return 'getting-started';
	const normalized = topic
		.trim()
		.replace(/^\/?docs\/?/, '')
		.replace(/\/+$/, '');

	return normalized || 'getting-started';
}

/** Formats the bundled docs index for `w1c docs --list`. */
const listDocs = () => CLI_DOCS.map((doc) => `${chalk.cyan(doc.slug.padEnd(34))} ${doc.description}`).join('\n');

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

const createCommand = withInstallOpt(
	withTemplateOpt(
		withThemeOpt(
			cli
				.command('create [dir]', 'Create a small app that consumes @w1c/components')
				.usage('[dir] [--template bundler|static-html|static-site|server-rendered]')
				.example('w1c create my-app -t windows-95')
				.example('w1c create site --template static-html -t geocities')
				.example('w1c create templates --template server-rendered -t ubuntu-810')
		)
	)
);

createCommand.action(async (dir: string | undefined, options: CreateOptions) => {
	intro('W1C scaffold');

	const targetInput = await resolveProjectDir(dir);
	if (!targetInput) {
		outro('Cancelled');
		return;
	}

	const targetDir = resolve(String(targetInput));
	if ((await fsExtra.pathExists(targetDir)) && !(await confirm({ message: 'Directory exists. Continue?' }))) {
		outro('Cancelled');
		return;
	}

	try {
		await createProject(targetInput, { template: options.template, theme: options.theme });
	} catch (error) {
		console.error(chalk.red(error instanceof Error ? error.message : String(error)));
		console.error(`Available themes: ${W1C_THEMES.join(', ')}`);
		console.error(`Available templates: ${W1C_TEMPLATES.join(', ')}`);
		process.exitCode = 1;
		return;
	}

	if (options.install) {
		await execa('pnpm', ['install'], { cwd: targetDir, stdio: 'inherit' });
	}

	outro(`Created ${targetDir}`);
});

withThemeOpt(
	withEntryOpt(cli.command('init [dir]', 'Add W1C component and theme imports to an existing project'))
).action(async (dir: string | undefined, options: InitOptions) => {
	const targetDir = resolve(dir ?? process.cwd());

	try {
		const result = await initProject({ targetDir, entry: options.entry, theme: options.theme });
		console.log(chalk.green(`Updated ${result.entryPath}`));
	} catch (error) {
		console.error(chalk.red(error instanceof Error ? error.message : String(error)));
		console.error(`Available themes: ${W1C_THEMES.join(', ')}`);
		process.exitCode = 1;
	}
});

withIconOpts(withEntryOpt(cli.command('add <kind> [...values]', 'Add W1C themes or icon assets'))).action(
	async (kind: string, values: string[] | undefined, options: AddOptions) => {
		const addOptions = normalizeAddOpts(options);

		if (kind === 'theme') {
			try {
				const result = await addThemes(values, { entry: addOptions.entry });
				console.log(chalk.green(`Updated ${result.entryPath}`));
			} catch (error) {
				console.error(chalk.red(error instanceof Error ? error.message : String(error)));
				console.error(`Available themes: ${W1C_THEMES.join(', ')}`);
				process.exitCode = 1;
			}

			return;
		}

		if (kind === 'icons') {
			try {
				const result = await addIcons(addOptions);
				await addComponentImport({ entry: addOptions.entry });
				console.log(chalk.green(`Copied ${result.iconFile}`));
				console.log(chalk.green(`Updated ${result.entryPath}`));
			} catch (error) {
				console.error(chalk.red(error instanceof Error ? error.message : String(error)));
				process.exitCode = 1;
			}

			return;
		}

		console.error(chalk.red(`Unknown add target: ${kind}`));
		console.error(`Use ${chalk.cyan('w1c add theme')} or ${chalk.cyan('w1c add icons')}.`);
		process.exitCode = 1;
	}
);

cli.help();
cli.parse();
