import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Post } from './Post';

const meta: Meta<typeof Post> = {
	title: 'entities/Post',
	component: Post,
	parameters: {},
	args: {},
	decorators: [StoreDecorator({}), RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof Post>;

export const PostStory: Story = {};
