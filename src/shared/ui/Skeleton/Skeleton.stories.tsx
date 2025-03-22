import type { Meta, StoryObj } from '@storybook/react';
import { ComponentDecorator } from 'shared/config/storybook/ComponentDecorator/ComponentDecorator';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
	title: 'shared/Skeleton',
	component: Skeleton,
	parameters: {},
	args: {},
	decorators: [ComponentDecorator],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const SkeletonStory: Story = {
	args: { height: '200px', width: '500px', borderRadius: '10px' },
};
