import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
	title: 'widget/Sidebar',
	component: Sidebar,
	parameters: {},
	args: {},
	decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarStory: Story = {};
