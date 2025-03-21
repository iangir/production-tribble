import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider/index';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	globalTypes: {
		theme: {
			description: 'Global theme for components',
			toolbar: {
				// The label to show for this toolbar item
				title: 'Theme',
				// Array of plain string values or MenuItem shape (see below)
				items: [
					{ title: 'Dark', value: Theme.DARK },
					{ title: 'Light', value: Theme.LIGHT },
				],
				// Change title based on selected value
				dynamicTitle: true,
			},
		},
	},
	initialGlobals: {
		theme: Theme.LIGHT,
	},
	decorators: [
		(Story) => (
			<div
				style={
					{
						// margin: '0',
						// backgroundColor: 'var(--bg-color)',
					}
				}
			>
				{Story()}
			</div>
		),
		(Story, context) => {
			const selectedTheme = context.globals.theme || Theme.LIGHT;
			return ThemeDecorator(selectedTheme)(Story);
		},
	],
};

export default preview;
