import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
	title: 'widget/ThemeSwitcher',
	component: ThemeSwitcher,
	parameters: {},
	tags: ['autodocs'],
	args: {},
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Button: Story = {
	decorators: ThemeDecorator(Theme.LIGHT),
};
