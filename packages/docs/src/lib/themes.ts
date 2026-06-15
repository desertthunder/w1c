export type DocsTheme = { id: string; label: string; heading: string; ui: string; code: string };

export const DOCS_THEMES: DocsTheme[] = [
	{ id: 'windows-95', label: 'Windows 95', heading: 'IBM Plex Serif', ui: 'IBM Plex Sans', code: 'IBM Plex Mono' },
	{ id: 'gnome2', label: 'GNOME 2', heading: 'Ubuntu', ui: 'Ubuntu', code: 'Ubuntu Mono' },
	{ id: 'ubuntu-810', label: 'Ubuntu 8.10', heading: 'Ubuntu', ui: 'Ubuntu', code: 'Ubuntu Mono' },
	{ id: 'classic-mac', label: 'Classic Mac', heading: 'ChiKareGo2', ui: 'ChicagoFLF', code: 'Anonymous Pro' },
	{ id: 'web-1', label: 'Web 1.0', heading: 'Times New Roman', ui: 'Arial', code: 'Courier New' },
	{ id: 'geocities', label: 'Geocities', heading: 'Comic Relief', ui: 'Comic Neue', code: 'Comic Neue' }
] as const;

export const DEFAULT_DOCS_THEME = DOCS_THEMES[0].id;
