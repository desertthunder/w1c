export type DocLink = { title: string; href: string; description: string; external?: boolean };
export type DocGroup = { title: string; links: DocLink[] };

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
		title: 'Components',
		href: '/docs/components/',
		description: 'Browse the component catalog, examples, theming, and usage.'
	},
	{
		title: 'Typography',
		href: '/docs/typography/',
		description: 'See the heading, UI, and code fonts used by each theme.'
	},
	{ title: 'Icons', href: '/docs/icons/', description: 'Use W1C icon data, metadata, asset paths, and icon parts.' },
	{
		title: 'Inspiration',
		href: '/docs/inspiration/',
		description: 'Credit the sources behind W1C themes, icons, and early-web patterns.'
	}
];

const docsByHref = new Map(DOC_MANIFEST.map((doc) => [doc.href, doc]));

function docs(...hrefs: string[]) {
	return hrefs.map((href) => {
		const doc = docsByHref.get(href);

		if (!doc) throw new Error(`Missing doc manifest entry for ${href}`);

		return doc;
	});
}

export const FEATURED_DOCS: DocLink[] = docs('/docs/getting-started/', '/docs/components/', '/docs/icons/');

export const DOC_GROUPS: DocGroup[] = [
	{ title: 'Overview', links: docs('/docs/getting-started/') },
	{
		title: 'Manual',
		links: docs('/docs/installation/', '/docs/usage/', '/docs/components/', '/docs/typography/', '/docs/icons/')
	},
	{ title: 'Meta', links: docs('/docs/inspiration/') }
];
