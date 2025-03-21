import type { Meta, StoryObj } from '@storybook/react';
import { Post } from './Post';

const meta: Meta<typeof Post> = {
	title: 'entities/Post',
	component: Post,
	parameters: {},
	args: {},
};

export default meta;
type Story = StoryObj<typeof Post>;

export const NoAvatar: Story = {};
