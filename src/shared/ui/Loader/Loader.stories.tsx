import type { Meta, StoryObj } from '@storybook/react';
import { ComponentDecorator } from 'shared/config/storybook/ComponentDecorator/ComponentDecorator';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
	title: 'shared/Loader',
	component: Loader,
	decorators: [ComponentDecorator],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const LoaderStory: Story = {};
