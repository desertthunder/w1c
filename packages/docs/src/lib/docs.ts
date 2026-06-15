export type DocLink = { title: string; href: string; description: string; external?: boolean };

export const NAV_LINKS: DocLink[] = [
	{
		title: 'Getting Started',
		href: '/docs/getting-started/',
		description: 'Install W1C and render the first retro window.'
	},
	{ title: 'About', href: '/about/', description: 'Why W1C exists.' },
	{
		title: 'Repo',
		href: 'https://github.com/desertthunder',
		description: 'View the project repository.',
		external: true
	}
];

export const DOC_MANIFEST: DocLink[] = [
	{ title: 'Getting started', href: '/docs/getting-started/', description: 'Build your first retro UI.' },
	{ title: 'Installation', href: '/docs/installation/', description: 'Add W1C to your project.' },
	{
		title: 'Usage',
		href: '/docs/usage/',
		description: 'Register components, cherry-pick imports, and apply theme CSS.'
	},
	{
		title: 'Inspiration',
		href: '/docs/inspiration/',
		description: 'Credit the sources behind W1C themes, icons, and early-web patterns.'
	}
];
