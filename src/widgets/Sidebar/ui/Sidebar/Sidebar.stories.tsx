import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
	title: 'widget/Sidebar',
	component: Sidebar,
	parameters: {},
	tags: ['autodocs'],
	args: {},
	decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
	args: {},
	decorators: ThemeDecorator(Theme.LIGHT),
};

export const Dark: Story = {
	args: {},
	decorators: ThemeDecorator(Theme.DARK),
};
