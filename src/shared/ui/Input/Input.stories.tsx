import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
	title: 'shared/Input',
	component: Input,
	parameters: {},
	args: {
		value: 'johndoe@email.com',
	},
	decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputStory: Story = {};
