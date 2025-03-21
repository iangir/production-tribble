import type { Meta, StoryObj } from '@storybook/react';
import NotFoundPage from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
	title: 'pages/NotFoundPage',
	component: NotFoundPage,
	parameters: {},
	args: {},
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const NotFoundPageStory: Story = {};
