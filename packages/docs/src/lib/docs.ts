/**
 * @module doc
 *
 * @description documentation manifest
 */

/** Documentation metadata */
export type DocLink = { title: string; href: string; description: string; external?: boolean };

/** Documentation category */
export type DocGroup = { title: string; links: DocLink[] };

export const NAV_LINKS: DocLink[] = [
	{
		title: 'Getting Started',
		href: '/docs/getting-started/',
		description: 'Install W1C and render the first retro window.'
	},
	{ title: 'About', href: '/about/', description: 'Why W1C exists.' },
	{ title: 'Components', href: '/docs/components/', description: 'Browse every W1C custom element.' },
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
		title: 'Drag & Drop',
		href: '/docs/dnd/',
		description: 'Add DnD with framework-neutral drag, resize, pointer session, and geometry helpers.'
	},
	{ title: 'Components', href: '/docs/components/', description: 'Index of W1C custom elements.' },
	{
		title: 'Typography',
		href: '/docs/typography/',
		description: 'See the heading, UI, and code fonts used by each theme.'
	},
	{ title: 'Icons', href: '/docs/icons/', description: 'Use W1C icon data, metadata, asset paths, and icon parts.' },
	{ title: 'Inspiration', href: '/docs/inspiration/', description: 'Where the dev got this idea.' }
];

export const COMPONENT_DOCS: DocLink[] = [
	{ title: 'Icon', href: '/docs/components/icon/', description: 'Render bundled W1C icon data.' },
	{ title: 'Badge 88x31', href: '/docs/components/badge-88x31/', description: 'Native-size early-web badge.' },
	{ title: 'Visitor counter', href: '/docs/components/visitor-counter/', description: 'Odometer-style visitor count.' },
	{
		title: 'Guestbook panel',
		href: '/docs/components/guestbook-panel/',
		description: 'Guestbook entries and sign links.'
	},
	{
		title: 'Webring',
		href: '/docs/components/webring/',
		description: 'Previous, home, random, and next ring navigation.'
	},
	{
		title: 'Under construction',
		href: '/docs/components/under-construction/',
		description: 'Hazard-stripe unfinished page notice.'
	},
	{ title: 'Marquee', href: '/docs/components/marquee/', description: 'Reduced-motion friendly marquee banner.' },
	{ title: 'Blink', href: '/docs/components/blink/', description: 'Reduced-motion friendly inline blink emphasis.' },
	{
		title: 'Tiled background',
		href: '/docs/components/tiled-background/',
		description: 'Repeated image or CSS background surface.'
	},
	{ title: 'Link cluster', href: '/docs/components/link-cluster/', description: 'Directory-style link grouping.' },
	{ title: 'Last updated', href: '/docs/components/last-updated/', description: 'Static page update stamp.' },
	{
		title: 'Image map',
		href: '/docs/components/image-map/',
		description: 'Clickable sticker sheet with positioned hotspots.'
	},
	{ title: 'Button', href: '/docs/components/button/', description: 'Raised, sunken, and flat command controls.' },
	{ title: 'Label', href: '/docs/components/label/', description: 'Form label with required and disabled states.' },
	{ title: 'Input', href: '/docs/components/input/', description: 'Native text input with W1C control chrome.' },
	{ title: 'Select', href: '/docs/components/select/', description: 'Native select control with W1C control chrome.' },
	{ title: 'Textarea', href: '/docs/components/textarea/', description: 'Native textarea with W1C control chrome.' },
	{ title: 'Checkbox', href: '/docs/components/checkbox/', description: 'Labelled native checkbox control.' },
	{
		title: 'Validation message',
		href: '/docs/components/validation-message/',
		description: 'Compact validation and helper message.'
	},
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
	{ title: 'Alert', href: '/docs/components/alert/', description: 'Inline alert or flash notice.' },
	{ title: 'Data table', href: '/docs/components/data-table/', description: 'Dense ARIA table grid.' },
	{ title: 'Data list', href: '/docs/components/data-list/', description: 'Dense record list surface.' },
	{ title: 'Status card', href: '/docs/components/status-card/', description: 'Compact status summary card.' },
	{ title: 'Endpoint row', href: '/docs/components/endpoint-row/', description: 'Dense endpoint and status row.' },
	{ title: 'Source viewer', href: '/docs/components/source-viewer/', description: 'Full source viewer shell.' },
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
		links: docs(
			'/docs/installation/',
			'/docs/usage/',
			'/docs/dnd/',
			'/docs/typography/',
			'/docs/icons/',
			'/docs/components/'
		)
	},
	{ title: 'Components', links: COMPONENT_DOCS },
	{ title: 'Meta', links: docs('/docs/inspiration/') }
];
