import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '@w1c/components/data-table';
import { storyThemeArgType } from './story-themes';

const meta = {
	title: 'Components/Data Table',
	tags: ['autodocs'],
	render: ({ compact, striped }) => html`
		<style>
			.table-story {
				width: min(720px, 100%);
			}

			.table-story w1c-data-table {
				--w1c-data-table-columns: 1.4fr 0.8fr 1fr 0.7fr;
			}

			.table-row {
				font: inherit;
			}

			.table-row strong {
				font-weight: 700;
			}
		</style>
		<div class="table-story">
			<w1c-data-table ?compact=${compact} ?striped=${striped}>
				<span slot="caption">Network shares</span>
				<div slot="head" class="table-row" role="row">
					<strong role="columnheader">Name</strong>
					<strong role="columnheader">Type</strong>
					<strong role="columnheader">Owner</strong>
					<strong role="columnheader">Status</strong>
				</div>
				<div class="table-row" role="row" aria-selected="true">
					<span role="cell">Public</span>
					<span role="cell">Folder</span>
					<span role="cell">workgroup</span>
					<span role="cell">Mounted</span>
				</div>
				<div class="table-row" role="row">
					<span role="cell">Archive</span>
					<span role="cell">Volume</span>
					<span role="cell">records</span>
					<span role="cell">Idle</span>
				</div>
				<div class="table-row" role="row">
					<span role="cell">Printer</span>
					<span role="cell">Device</span>
					<span role="cell">front desk</span>
					<span role="cell">Ready</span>
				</div>
				<div slot="foot" class="table-row" role="row">
					<span role="cell">3 objects</span>
					<span role="cell"></span>
					<span role="cell"></span>
					<span role="cell">1 selected</span>
				</div>
			</w1c-data-table>
		</div>
	`,
	argTypes: { compact: { control: 'boolean' }, striped: { control: 'boolean' }, theme: storyThemeArgType },
	args: { compact: false, striped: true, theme: 'global' }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {};
