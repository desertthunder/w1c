import { DOC_GROUPS, DOC_MANIFEST, FEATURED_DOCS, NAV_LINKS } from '$lib/docs';

export const prerender = true;
export const trailingSlash = 'always';

export function load() {
	return {
		featuredDocs: FEATURED_DOCS,
		primaryDocGroups: DOC_GROUPS,
		primaryDocs: DOC_MANIFEST,
		topNavLinks: NAV_LINKS
	};
}
