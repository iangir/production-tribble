import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	parameters: {},
	tags: ['autodocs'],
	args: {},
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
	args: {},
	decorators: ThemeDecorator(Theme.LIGHT),
};

export const Dark: Story = {
	args: {},
	decorators: ThemeDecorator(Theme.DARK),
};
