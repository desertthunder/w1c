import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|mjs|ts)'],
	addons: ['@storybook/addon-docs'],
	framework: { name: '@storybook/web-components-vite', options: {} },
	viteFinal: (config) => {
		return {
			...config,
			build: {
				...config.build,
				// Storybook's manager/iframe bundles exceed Vite's app-oriented default.
				chunkSizeWarningLimit: 1200
			}
		};
	}
};

export default config;
