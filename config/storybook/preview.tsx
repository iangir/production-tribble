import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider/index';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';

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
				title: 'Theme',
				items: [
					{ title: 'Dark', value: Theme.DARK },
					{ title: 'Light', value: Theme.LIGHT },
				],
				dynamicTitle: true,
			},
		},
		locale: {
			namme: 'Locale',
			description: 'Global language for components',
			toolbar: {
				title: 'locale',
				items: [
					{ title: 'En', value: 'en' },
					{ title: 'Ru', value: 'ru' },
				],
				dynamicTitle: true,
			},
		},
	},
	initialGlobals: {
		theme: Theme.LIGHT,
		locale: 'en',
	},
	decorators: [
		(Story, context) => {
			const { theme } = context.globals;
			return ThemeDecorator(Story, theme);
		},
		(Story, context) => {
			const { locale } = context.globals;
			return TranslationDecorator(Story, locale);
		},
	],
};

export default preview;
