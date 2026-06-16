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
	},
	{ title: 'Components', href: '/docs/components/', description: 'Browse every W1C custom element.' }
];

export const DOC_MANIFEST: DocLink[] = [
	{ title: 'Getting started', href: '/docs/getting-started/', description: 'Build your first retro UI.' },
	{ title: 'Installation', href: '/docs/installation/', description: 'Add W1C to your project.' },
	{
		title: 'Usage',
		href: '/docs/usage/',
		description: 'Register components, cherry-pick imports, and apply theme CSS.'
	},
	{ title: 'Components', href: '/docs/components/', description: 'Index of W1C custom elements.' },
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

export const COMPONENT_DOCS: DocLink[] = [
	{ title: 'Icon', href: '/docs/components/icon/', description: 'Render bundled W1C icon data.' },
	{ title: 'Button', href: '/docs/components/button/', description: 'Raised, sunken, and flat command controls.' },
	{ title: 'Window', href: '/docs/components/window/', description: 'Window shell with chrome slots.' },
	{ title: 'Titlebar', href: '/docs/components/titlebar/', description: 'Dense titlebar for windows and dialogs.' },
	{ title: 'Toolbar', href: '/docs/components/toolbar/', description: 'Compact row for controls and fields.' },
	{ title: 'Statusbar', href: '/docs/components/statusbar/', description: 'Footer row for status text and panes.' },
	{ title: 'Desktop icon', href: '/docs/components/desktop-icon/', description: 'Desktop shortcut button or link.' },
	{ title: 'Dialog', href: '/docs/components/dialog/', description: 'Dialog shell for alerts and confirmations.' },
	{ title: 'Panel', href: '/docs/components/panel/', description: 'Framed grouped content surface.' },
	{ title: 'Taskbar', href: '/docs/components/taskbar/', description: 'Desktop taskbar or GNOME-style panel row.' },
	{ title: 'Menu bar', href: '/docs/components/menu-bar/', description: 'Horizontal app menu surface.' },
	{ title: 'Menu', href: '/docs/components/menu/', description: 'Vertical command menu surface.' },
	{ title: 'Menu item', href: '/docs/components/menu-item/', description: 'Button or anchor command row.' },
	{ title: 'Address field', href: '/docs/components/address-field/', description: 'Toolbar location field.' },
	{ title: 'Tabs', href: '/docs/components/tabs/', description: 'Slotted tabs with keyboard selection.' },
	{ title: 'Toast', href: '/docs/components/toast/', description: 'Status, info, warning, and danger notice shell.' },
	{ title: 'Data table', href: '/docs/components/data-table/', description: 'Dense ARIA table grid.' },
	{ title: 'Data list', href: '/docs/components/data-list/', description: 'Dense record list surface.' },
	{
		title: 'Document browser',
		href: '/docs/components/document-browser/',
		description: 'Browser shell with toolbar, sidebar, content, and statusbar.'
	},
	{
		title: 'Word processor',
		href: '/docs/components/word-processor/',
		description: 'Editor shell with toolbar, ruler, page, and details pane.'
	},
	{
		title: 'JSON viewer',
		href: '/docs/components/json-viewer/',
		description: 'Read-only formatted JSON/source viewer.'
	},
	{ title: 'Divider', href: '/docs/components/divider/', description: 'Horizontal or vertical separator.' }
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
		links: docs('/docs/installation/', '/docs/usage/', '/docs/typography/', '/docs/icons/', '/docs/components/')
	},
	{ title: 'Components', links: COMPONENT_DOCS },
	{ title: 'Meta', links: docs('/docs/inspiration/') }
];
