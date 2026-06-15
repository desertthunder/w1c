import { create } from 'storybook/theming';

const w1cTheme = create({
	base: 'light',

	brandTitle: 'W1C Storybook',
	brandUrl: '/',
	brandTarget: '_self',

	fontBase: '"IBM Plex Sans Variable", "IBM Plex Sans", Tahoma, sans-serif',
	fontCode: '"IBM Plex Mono", "Courier New", monospace',

	colorPrimary: '#111111',
	colorSecondary: '#0000ee',

	appBg: '#f7d84a',
	appContentBg: '#fff9cf',
	appPreviewBg: '#fff9cf',
	appBorderColor: '#111111',
	appBorderRadius: 0,

	textColor: '#111111',
	textInverseColor: '#ffffff',

	barTextColor: '#111111',
	barSelectedColor: '#0000ee',
	barHoverColor: '#0000ee',
	barBg: '#ffffff',

	inputBg: '#ffffff',
	inputBorder: '#111111',
	inputTextColor: '#111111',
	inputBorderRadius: 0
});

export default w1cTheme;
