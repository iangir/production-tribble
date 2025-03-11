import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
	title: 'shared/Avatar',
	component: Avatar,
	parameters: {},
	tags: ['autodocs'],
	args: { username: 'johndoe' },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const NoAvatar: Story = {};
