import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
	parameters: {},
	tags: ['autodocs'],
	args: { to: '/', children: 'Link' },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const PrimaryLight: Story = {
	args: { theme: AppLinkTheme.PRIMARY },
	decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export const SecondaryLight: Story = {
	args: { theme: AppLinkTheme.SECONDARY },
	decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export const PrimaryDark: Story = {
	args: { theme: AppLinkTheme.PRIMARY },
	decorators: [ThemeDecorator(Theme.DARK), RouterDecorator],
};

export const SecondaryDark: Story = {
	args: { theme: AppLinkTheme.SECONDARY },
	decorators: [ThemeDecorator(Theme.DARK), RouterDecorator],
};
