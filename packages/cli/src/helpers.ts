import { isCancel, text } from '@clack/prompts';
import type { Command } from 'cac';
import { DEFAULT_TEMPLATE, DEFAULT_THEME, W1C_TEMPLATES } from './scaffold';

/** Parsed options accepted by `w1c add`. Alias fields are normalized before scaffold work runs. */
export type AddOptions = {
	entry?: string;
	pub?: string;
	publicDir?: string;
	basePath?: string;
	conf?: string;
	config?: string;
};

/** Parsed options accepted by `w1c create`. */
export type CreateOptions = { install?: boolean; template?: string; theme?: string };

/** Parsed options accepted by `w1c init`. */
export type InitOptions = { entry?: string; theme?: string };

/** Injectable project-directory prompt used to keep prompt behavior unit-testable. */
export type PromptProjectDirectory = () => Promise<string | symbol>;

/** Adds the shared theme flag used by `create` and `init`. */
export function withThemeOpt(command: Command) {
	return command.option('-t, --theme <theme>', `Theme CSS import to add. Default: ${DEFAULT_THEME}`);
}

/** Adds the shared browser entry flag used by commands that edit an existing project. */
export function withEntryOpt(command: Command) {
	return command.option('-e, --entry <path>', 'Browser entry file to update. Default: src/main.ts');
}

/** Adds the opt-in dependency install flag for project creation. */
export function withInstallOpt(command: Command) {
	return command.option('-i, --install', 'Install dependencies after writing files');
}

/** Adds the scaffold template selector for `w1c create`. */
export function withTemplateOpt(command: Command) {
	return command.option(
		'-T, --template <template>',
		`Project template to create. Default: ${DEFAULT_TEMPLATE}. Options: ${W1C_TEMPLATES.join(', ')}`
	);
}

/** Adds icon asset flags, including the long aliases requested for public and config paths. */
export function withIconOpts(command: Command) {
	return command
		.option('-p, --public-dir <path>', 'Public/static asset directory for icons. Default: public')
		.option('--pub <path>', 'Alias for --public-dir')
		.option('-b, --base-path <path>', 'Public URL for copied icons. Default: /w1c/icons')
		.option('-c, --config <path>', 'Asset config module for icons. Default: src/w1c-assets.ts')
		.option('--conf <path>', 'Alias for --config');
}

/** Collapses icon aliases into the canonical option names consumed by scaffold helpers. */
export function normalizeAddOpts(options: AddOptions): AddOptions {
	return { ...options, publicDir: options.publicDir ?? options.pub, config: options.config ?? options.conf };
}

/** Returns an explicit directory argument or prompts for one, preserving prompt cancellation. */
export async function resolveProjectDir(
	dir: string | undefined,
	promptProjectDir: PromptProjectDirectory = () =>
		text({ message: 'Project directory', placeholder: 'my-w1c-app', defaultValue: 'my-w1c-app' })
) {
	const targetInput = dir ?? (await promptProjectDir());
	if (isCancel(targetInput)) return null;

	return String(targetInput);
}
