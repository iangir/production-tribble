import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
	title: 'shared/Input',
	component: Input,
	parameters: {},
	tags: ['autodocs'],
	args: {
		value: 'johndoe@email.com',
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = {
	decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK), RouterDecorator],
};
