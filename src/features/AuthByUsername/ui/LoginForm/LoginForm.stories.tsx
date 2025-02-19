import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
	title: 'features/LoginForm',
	component: LoginForm,
	parameters: {},
	tags: ['autodocs'],
	args: {},
	decorators: [StoreDecorator({}), RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
	decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightError: Story = {
	decorators: [
		StoreDecorator({
			loginForm: {
				username: 'admin',
				password: 'admin',
				error: 'Incorrect username or password',
				isLoading: false,
			},
		}),
	],
};
