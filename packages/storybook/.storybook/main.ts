import type { StorybookConfig } from '@storybook/web-components-vite';
import { fileURLToPath } from 'node:url';

const workspaceRoot = fileURLToPath(new URL('../../..', import.meta.url));
const storybookBase = process.env.W1C_STORYBOOK_BASE ?? '/';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|mjs|ts)'],
	addons: ['@storybook/addon-docs', '@storybook/addon-vitest'],
	framework: { name: '@storybook/web-components-vite', options: {} },
	staticDirs: [{ from: '../../docs/src/lib/assets', to: '/' }],
	viteFinal: (config) => {
		return {
			...config,
			base: storybookBase,
			build: {
				...config.build,
				// Storybook's manager/iframe bundles exceed Vite's app-oriented default.
				chunkSizeWarningLimit: 1200
			},
			server: {
				...config.server,
				fs: { ...config.server?.fs, allow: Array.from(new Set([...(config.server?.fs?.allow ?? []), workspaceRoot])) }
			}
		};
	}
};

export default config;
