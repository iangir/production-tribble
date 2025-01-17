import 'app/styles/index.scss';
import React from 'react';
import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: Decorator) => (
	<BrowserRouter>
		<Story />
	</BrowserRouter>
);
