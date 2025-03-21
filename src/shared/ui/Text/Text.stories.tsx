import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
	title: 'shared/Text',
	component: Text,
	parameters: {},
	args: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
	args: {
		title: 'Title',
		p: 'Text',
	},
};

export const Error: Story = {
	args: {
		title: 'Error',
		p: 'An unknown error occurred',
		theme: TextTheme.ERROR,
	},
};
