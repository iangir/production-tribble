import type { Meta, StoryObj } from '@storybook/react';
import { PostPage } from './PostPage';

const meta: Meta<typeof PostPage> = {
	title: 'pages/PostPage',
	component: PostPage,
	parameters: {},
	args: {},
};

export default meta;
type Story = StoryObj<typeof PostPage>;

export const NoAvatar: Story = {};
