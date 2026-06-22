import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components';
import '@w1c/components/themes/gnome2.css';
import '@w1c/components/themes/ubuntu-810.css';
import '@w1c/components/themes/windows-95.css';
import { storyThemeArgType } from './story-themes';

const referenceStyles = html`
	<style>
		.reference-stack {
			display: grid;
			gap: 18px;
			width: min(1040px, 100%);
		}

		.reference-screen {
			position: relative;
			display: grid;
			grid-template-rows: auto minmax(360px, 1fr) auto;
			width: min(960px, calc(100vw - 48px));
			min-height: 560px;
			overflow: hidden;
			color: var(--w1c-control-text, #111111);
			background:
				var(--w1c-desktop-background-image, none),
				var(--w1c-desktop-background, var(--w1c-window-content-background, #ffffff));
			background-size: var(--w1c-desktop-background-size, auto);
			border: 1px solid var(--w1c-control-dark-shadow, #404040);
			box-shadow: var(--w1c-window-shadow, 0 2px 12px rgb(0 0 0 / 0.22));
			font: var(--w1c-control-font, 13px/1.2 var(--w1c-font-ui, sans-serif));
		}

		.reference-screen[data-w1c-theme='gnome2'],
		.reference-screen[data-w1c-theme='ubuntu-810'] {
			--w1c-window-content-background: #f7f3ed;
		}

		.reference-desktop {
			position: relative;
			min-width: 0;
			padding: 18px;
		}

		.reference-icons {
			position: absolute;
			inset-block-start: 18px;
			inset-inline-start: 18px;
			display: grid;
			gap: 16px;
			width: 96px;
		}

		.reference-window {
			position: absolute;
			inset-block-start: 44px;
			inset-inline-start: 150px;
			width: min(620px, calc(100% - 180px));
		}

		.reference-window.secondary {
			inset-block-start: 238px;
			inset-inline-start: auto;
			inset-inline-end: 28px;
			width: min(360px, calc(100% - 180px));
		}

		.reference-menubar {
			display: flex;
			flex-wrap: wrap;
			gap: 2px;
			padding: 2px;
		}

		.reference-pane {
			display: grid;
			gap: 8px;
			min-height: 170px;
		}

		.reference-pane h2,
		.reference-pane p {
			margin: 0;
		}

		.reference-pane ul {
			margin: 0;
			padding-inline-start: 18px;
		}

		.reference-tray {
			display: inline-flex;
			align-items: center;
			gap: 6px;
			white-space: nowrap;
		}

		.reference-address {
			width: min(360px, 100%);
		}

		.reference-windows-list {
			display: flex;
			gap: 4px;
			min-width: 0;
		}

		.reference-windows-list w1c-button {
			min-width: 0;
			max-width: 180px;
		}

		@media (max-width: 720px) {
			.reference-screen {
				width: calc(100vw - 32px);
				min-height: 620px;
			}

			.reference-icons {
				position: static;
				grid-template-columns: repeat(3, 82px);
				width: auto;
				margin-block-end: 14px;
			}

			.reference-window,
			.reference-window.secondary {
				position: static;
				width: 100%;
				margin-block-end: 14px;
			}
		}
	</style>
`;

const windowControls = html`
	<div slot="controls">
		<w1c-button aria-label="Minimize">_</w1c-button>
		<w1c-button aria-label="Maximize">□</w1c-button>
		<w1c-button aria-label="Close">x</w1c-button>
	</div>
`;

const gnomeScreen = (theme: 'gnome2' | 'ubuntu-810') => html`
	${referenceStyles}
	<div class="reference-screen" data-w1c-theme=${theme}>
		<w1c-taskbar>
			<w1c-button slot="start"><w1c-icon name="home" label="Main menu"></w1c-icon> Applications</w1c-button>
			<div class="reference-windows-list">
				<w1c-button variant="sunken">File Browser</w1c-button>
				<w1c-button>Terminal</w1c-button>
			</div>
			<span slot="tray" class="reference-tray">
				<w1c-icon name="wireless" label="Network"></w1c-icon>
				<w1c-icon name="volume" label="Volume"></w1c-icon>
				Mon 10:24
			</span>
		</w1c-taskbar>

		<div class="reference-desktop">
			<div class="reference-icons">
				<w1c-desktop-icon label="Home"><w1c-icon slot="icon" name="home" label="Home"></w1c-icon></w1c-desktop-icon>
				<w1c-desktop-icon label="Computer"
					><w1c-icon slot="icon" name="computer" label="Computer"></w1c-icon
				></w1c-desktop-icon>
				<w1c-desktop-icon label="Wastebasket"
					><w1c-icon slot="icon" name="trash" label="Wastebasket"></w1c-icon
				></w1c-desktop-icon>
			</div>

			<w1c-window class="reference-window" title="File Browser">
				<w1c-icon slot="icon" name="folder" label="Folder"></w1c-icon>
				${windowControls}
				<w1c-toolbar slot="toolbar">
					<w1c-button><w1c-icon name="back" label="Back"></w1c-icon> Back</w1c-button>
					<w1c-button><w1c-icon name="forward" label="Forward"></w1c-icon> Forward</w1c-button>
					<w1c-address-field class="reference-address" label="Location" value="/home/w1c/Documents"></w1c-address-field>
				</w1c-toolbar>
				<div class="reference-pane">
					<h2>Documents</h2>
					<w1c-data-list compact>
						<span><w1c-icon name="folder" label="Folder"></w1c-icon> Screenshots</span>
						<span><w1c-icon name="document" label="Document"></w1c-icon> release-notes.txt</span>
						<span><w1c-icon name="pdf" label="PDF"></w1c-icon> theme-contract.pdf</span>
					</w1c-data-list>
				</div>
				<w1c-statusbar slot="statusbar">3 items, 12.4 MB available</w1c-statusbar>
			</w1c-window>

			<w1c-window class="reference-window secondary" title="Terminal">
				<w1c-icon slot="icon" name="terminal" label="Terminal"></w1c-icon>
				${windowControls}
				<div class="reference-pane">
					<p><strong>w1c@desktop</strong>:~$ pnpm --filter @w1c/storybook check</p>
					<p>Type definitions loaded.</p>
					<p>Story catalog ready.</p>
				</div>
				<w1c-statusbar slot="statusbar">bash</w1c-statusbar>
			</w1c-window>
		</div>

		<w1c-taskbar>
			<w1c-button slot="start">Show Desktop</w1c-button>
			<span>Workspace 1</span>
			<span slot="tray" class="reference-tray">Trash empty</span>
		</w1c-taskbar>
	</div>
`;

const windows95Screen = () => html`
	${referenceStyles}
	<div class="reference-screen" data-w1c-theme="windows-95">
		<div class="reference-desktop">
			<div class="reference-icons">
				<w1c-desktop-icon label="My Computer"
					><w1c-icon slot="icon" name="computer" label="My Computer"></w1c-icon
				></w1c-desktop-icon>
				<w1c-desktop-icon label="Inbox"><w1c-icon slot="icon" name="folder" label="Inbox"></w1c-icon></w1c-desktop-icon>
				<w1c-desktop-icon label="Recycle Bin"
					><w1c-icon slot="icon" name="trash" label="Recycle Bin"></w1c-icon
				></w1c-desktop-icon>
			</div>

			<w1c-window class="reference-window" title="Control Panel">
				<w1c-icon slot="icon" name="computer" label="Control Panel"></w1c-icon>
				${windowControls}
				<div slot="toolbar" class="reference-menubar">
					<w1c-button variant="flat">File</w1c-button>
					<w1c-button variant="flat">Edit</w1c-button>
					<w1c-button variant="flat">View</w1c-button>
					<w1c-button variant="flat">Help</w1c-button>
				</div>
				<div class="reference-pane">
					<w1c-data-list compact>
						<span><w1c-icon name="palette" label="Display"></w1c-icon> Display</span>
						<span><w1c-icon name="volume" label="Sounds"></w1c-icon> Sounds</span>
						<span><w1c-icon name="database" label="ODBC"></w1c-icon> ODBC Data Sources</span>
						<span><w1c-icon name="warning" label="System"></w1c-icon> System</span>
					</w1c-data-list>
				</div>
				<w1c-statusbar slot="statusbar">4 object(s)</w1c-statusbar>
			</w1c-window>

			<w1c-window class="reference-window secondary" title="Dial-Up Networking">
				<w1c-icon slot="icon" name="globe" label="Network"></w1c-icon>
				${windowControls}
				<div class="reference-pane">
					<p>Connection status</p>
					<w1c-alert tone="info">Connected at 28,800 bps</w1c-alert>
					<w1c-button>Disconnect</w1c-button>
				</div>
			</w1c-window>
		</div>

		<w1c-taskbar>
			<w1c-button slot="start"><w1c-icon name="computer" label="Start"></w1c-icon> Start</w1c-button>
			<div class="reference-windows-list">
				<w1c-button variant="sunken">Control Panel</w1c-button>
				<w1c-button>Dial-Up Networking</w1c-button>
			</div>
			<span slot="tray" class="reference-tray">
				<w1c-icon name="volume" label="Volume"></w1c-icon>
				10:24 AM
			</span>
		</w1c-taskbar>
	</div>
`;

const meta = {
	title: 'Examples/Reference Screens',
	tags: ['autodocs'],
	argTypes: { theme: storyThemeArgType },
	args: { theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Gnome2Desktop: Story = { args: { theme: 'gnome2' }, render: () => gnomeScreen('gnome2') };

export const Ubuntu810Desktop: Story = { args: { theme: 'ubuntu-810' }, render: () => gnomeScreen('ubuntu-810') };

export const Windows95Desktop: Story = { args: { theme: 'windows-95' }, render: () => windows95Screen() };

export const SideBySide: Story = {
	render: () => html` <div class="reference-stack">${gnomeScreen('ubuntu-810')} ${windows95Screen()}</div> `
};
