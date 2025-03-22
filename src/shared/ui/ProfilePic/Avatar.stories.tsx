import type { Meta, StoryObj } from '@storybook/react';
import { ComponentDecorator } from 'shared/config/storybook/ComponentDecorator/ComponentDecorator';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
	title: 'shared/Avatar',
	component: Avatar,
	args: { username: 'johndoe' },
	decorators: [ComponentDecorator],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const NoAvatar: Story = {};
