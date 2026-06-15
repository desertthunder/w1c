export type W1cAssetKind = 'icons' | 'sprites' | 'images';

export type W1cAssetBasePaths = Partial<Record<W1cAssetKind, string>>;

const assetBasePaths: Record<W1cAssetKind, string> = { icons: '', sprites: '', images: '' };

const absoluteUrlPattern = /^[a-z][a-z\d+.-]*:/i;

function stripTrailingSlash(value: string) {
	return value.replace(/\/+$/, '');
}

function stripLeadingSlash(value: string) {
	return value.replace(/^\/+/, '');
}

function isPassthroughUrl(value: string) {
	return value.startsWith('/') || value.startsWith('#') || absoluteUrlPattern.test(value);
}

export function setW1cAssetBasePath(kind: W1cAssetKind, basePath: string) {
	assetBasePaths[kind] = stripTrailingSlash(basePath.trim());
}

export function setW1cAssetBasePaths(paths: W1cAssetBasePaths) {
	for (const [kind, basePath] of Object.entries(paths)) {
		setW1cAssetBasePath(kind as W1cAssetKind, basePath);
	}
}

export function getW1cAssetBasePath(kind: W1cAssetKind) {
	return assetBasePaths[kind];
}

export function resolveW1cAssetUrl(kind: W1cAssetKind, path: string) {
	if (isPassthroughUrl(path)) return path;

	const basePath = getW1cAssetBasePath(kind);

	if (!basePath) return path;

	return `${basePath}/${stripLeadingSlash(path)}`;
}
