import manifest from '../../generated/manifest.json' with { type: 'json' };

export type CliDoc = { slug: string; title: string; description: string; content: string };

export type CliDocsManifest = { hash: string; docs: CliDoc[] };

export const CLI_DOCS_MANIFEST = manifest as CliDocsManifest;

export const CLI_DOCS = CLI_DOCS_MANIFEST.docs;
