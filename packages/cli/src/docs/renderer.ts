import chalk from 'chalk';
import { marked } from 'marked';

type Token = Record<string, unknown>;

const width = Math.min(process.stdout.columns || 88, 100);

function wrap(text: string, indent = '') {
	const normalized = text.replace(/\s+/g, ' ').trim();
	if (!normalized) return '';

	const limit = Math.max(width - indent.length, 24);
	const lines: string[] = [];
	let line = '';

	for (const word of normalized.split(' ')) {
		if (!line) {
			line = word;
			continue;
		}

		if (line.length + word.length + 1 > limit) {
			lines.push(`${indent}${line}`);
			line = word;
			continue;
		}

		line += ` ${word}`;
	}

	if (line) lines.push(`${indent}${line}`);
	return lines.join('\n');
}

function stripHtml(html: string) {
	return html
		.replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, '$2 ($1)')
		.replace(/<code>([\s\S]*?)<\/code>/g, '`$1`')
		.replace(/<[^>]+>/g, '')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&amp;/g, '&')
		.trim();
}

function renderInline(tokens: Token[] | undefined, fallback = ''): string {
	if (!tokens) return fallback;

	return tokens
		.map((token) => {
			switch (token.type) {
				case 'text':
					return String(token.raw ?? token.text ?? '');
				case 'codespan':
					return chalk.cyan(`\`${String(token.text ?? '')}\``);
				case 'strong':
					return chalk.bold(renderInline(token.tokens as Token[], String(token.text ?? '')));
				case 'em':
					return chalk.italic(renderInline(token.tokens as Token[], String(token.text ?? '')));
				case 'link': {
					const text = renderInline(token.tokens as Token[], String(token.text ?? ''));
					const href = String(token.href ?? '');
					return href ? `${chalk.underline(text)} ${chalk.dim(`(${href})`)}` : text;
				}
				case 'br':
					return '\n';
				case 'html':
					return stripHtml(String(token.raw ?? token.text ?? ''));
				default:
					return renderInline(token.tokens as Token[] | undefined, String(token.text ?? token.raw ?? ''));
			}
		})
		.join('');
}

function renderList(items: Token[], ordered: boolean) {
	return items
		.map((item, index) => {
			const marker = ordered ? `${index + 1}.` : '-';
			const text = renderInline(item.tokens as Token[] | undefined, String(item.text ?? ''));
			return wrap(text, `${marker} `);
		})
		.join('\n');
}

function renderToken(token: Token): string {
	switch (token.type) {
		case 'heading': {
			const text = renderInline(token.tokens as Token[], String(token.text ?? ''));
			return `${chalk.bold.blue(text)}\n${chalk.dim('='.repeat(Math.min(stripHtml(text).length, width)))}`;
		}
		case 'paragraph':
			return wrap(renderInline(token.tokens as Token[], String(token.text ?? '')));
		case 'list':
			return renderList(token.items as Token[], Boolean(token.ordered));
		case 'code': {
			const language = String(token.lang ?? '');
			const fence = `\`\`\`${language}`;
			return [chalk.dim(fence), chalk.gray(String(token.text ?? '').trimEnd()), chalk.dim('```')].join('\n');
		}
		case 'blockquote':
			return String(token.text ?? '')
				.split('\n')
				.map((line) => chalk.dim(`> ${line}`))
				.join('\n');
		case 'hr':
			return chalk.dim('-'.repeat(Math.min(width, 72)));
		case 'html':
			return wrap(stripHtml(String(token.raw ?? token.text ?? '')));
		case 'space':
			return '';
		default:
			return renderInline(token.tokens as Token[] | undefined, String(token.text ?? token.raw ?? ''));
	}
}

export function renderMarkdown(markdown: string) {
	const tokens = marked.lexer(markdown) as Token[];
	return tokens.map(renderToken).filter(Boolean).join('\n\n').trim();
}
