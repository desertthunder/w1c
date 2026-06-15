export const storyThemeOptions = [
	'global',
	'windows-95',
	'gnome2',
	'ubuntu-810',
	'classic-mac',
	'web-1',
	'geocities'
] as const;

export type StoryTheme = (typeof storyThemeOptions)[number];

export const storyThemeArgType = {
	control: { type: 'select' },
	options: storyThemeOptions,
	description: 'Theme for this story. Use global to follow the toolbar.'
} as const;
