import { browser } from '$app/environment';
import { DEFAULT_DOCS_THEME, DOCS_THEMES } from './themes';

const storageKey = 'w1c-docs-theme';

export const docsTheme = $state({ selected: DEFAULT_DOCS_THEME });

export function isDocsTheme(theme: string) {
	return DOCS_THEMES.some((option) => option.id === theme);
}

export function setDocsTheme(theme: string) {
	docsTheme.selected = isDocsTheme(theme) ? theme : DEFAULT_DOCS_THEME;

	if (browser) {
		localStorage.setItem(storageKey, docsTheme.selected);
	}
}

export function loadStoredDocsTheme() {
	if (!browser) return;

	setDocsTheme(localStorage.getItem(storageKey) ?? DEFAULT_DOCS_THEME);
}
