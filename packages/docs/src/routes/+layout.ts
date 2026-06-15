import { DOC_MANIFEST, NAV_LINKS } from '$lib/docs';

export const prerender = true;
export const trailingSlash = 'always';

export function load() {
	return { primaryDocs: DOC_MANIFEST, topNavLinks: NAV_LINKS };
}
