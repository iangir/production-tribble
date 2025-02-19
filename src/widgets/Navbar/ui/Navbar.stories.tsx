import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
	title: 'widget/Navbar',
	component: Navbar,
	parameters: {},
	tags: ['autodocs'],
	args: {},
	decorators: [StoreDecorator({}), RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
};
