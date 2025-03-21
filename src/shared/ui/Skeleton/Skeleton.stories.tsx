import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
	title: 'shared/Skeleton',
	component: Skeleton,
	parameters: {},
	args: {},
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const SkeletonStory: Story = {
	args: { height: '100px', width: '100px', borderRadius: '5px' },
};
