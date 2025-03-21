import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
	title: 'features/LoginForm',
	component: LoginForm,
	parameters: {},
	args: {},
	decorators: [StoreDecorator({}), RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};

export const Error: Story = {
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
