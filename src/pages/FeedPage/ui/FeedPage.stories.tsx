import type { Meta, StoryObj } from '@storybook/react';
import { FeedPage } from './FeedPage';

const meta: Meta<typeof FeedPage> = {
	title: 'pages/FeedPage',
	component: FeedPage,
	parameters: {},
	args: {},
};

export default meta;
type Story = StoryObj<typeof FeedPage>;

export const NoAvatar: Story = {};
