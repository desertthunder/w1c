import type { Preview } from '@storybook/web-components-vite';
import { html } from 'lit';
import classicMacUrl from '@w1c/components/themes/classic-mac.css?url';
import geocitiesUrl from '@w1c/components/themes/geocities.css?url';
import gnome2Url from '@w1c/components/themes/gnome2.css?url';
import ubuntu810Url from '@w1c/components/themes/ubuntu-810.css?url';
import web1Url from '@w1c/components/themes/web-1.css?url';
import windows95Url from '@w1c/components/themes/windows-95.css?url';
import './preview.css';
import w1cTheme from './w1c-theme';

const themeUrls = {
	'windows-95': windows95Url,
	gnome2: gnome2Url,
	'ubuntu-810': ubuntu810Url,
	'classic-mac': classicMacUrl,
	'web-1': web1Url,
	geocities: geocitiesUrl
} as const;

const themeLabels: Record<ThemeName, string> = {
	'web-1': 'Web 1.0',
	'windows-95': 'Windows 95',
	geocities: 'Geocities',
	'classic-mac': 'Classic Mac (System 7)',
	gnome2: 'GNOME 2',
	'ubuntu-810': 'Ubuntu 8.10'
} as const;

type ThemeName = keyof typeof themeUrls;
type StoryTheme = ThemeName | 'global';

function setThemeLink(theme: ThemeName) {
	if (typeof document === 'undefined') return;

	const existingLink = document.querySelector<HTMLLinkElement>('link[data-w1c-theme]');
	const href = themeUrls[theme];

	if (existingLink) {
		existingLink.href = href;
		return;
	}

	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = href;
	link.dataset.w1cTheme = theme;
	document.head.append(link);
}

const preview: Preview = {
	globalTypes: {
		theme: {
			description: 'W1C theme',
			defaultValue: 'windows-95',
			toolbar: {
				title: 'Theme',
				icon: 'paintbrush',
				items: [
					{ value: 'web-1', title: 'Web 1.0' },
					{ value: 'windows-95', title: 'Windows 95' },
					{ value: 'geocities', title: 'Geocities' },
					{ value: 'classic-mac', title: 'Classic Mac (System 7)' },
					{ value: 'gnome2', title: 'GNOME 2' },
					{ value: 'ubuntu-810', title: 'Ubuntu 8.10' }
				]
			}
		}
	},
	parameters: { controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } }, docs: { theme: w1cTheme } },
	decorators: [
		(story, context) => {
			const storyTheme = String(context.args.theme ?? 'global') as StoryTheme;
			const globalTheme = String(context.globals.theme ?? 'windows-95') as ThemeName;
			const theme = storyTheme === 'global' ? globalTheme : storyTheme;
			setThemeLink(theme in themeUrls ? theme : 'windows-95');

			return html`
				<div class="w1c-story-shell">
					<p class="w1c-story-note"><strong>Theme</strong>: ${themeLabels[theme]} (<code>${theme}</code>)</p>
					${story()}
				</div>
			`;
		}
	]
};

export default preview;
