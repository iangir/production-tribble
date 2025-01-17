import 'app/styles/index.scss';
import React from 'react';
import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: Decorator) =>
	(
		<div className={`app ${theme}`}>
			<Story />
		</div>
	);
