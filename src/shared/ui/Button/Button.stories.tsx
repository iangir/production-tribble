import type { Meta, StoryObj } from '@storybook/react';
import LightIcon from 'shared/assets/icons/sun-icon.svg';

import {
	Button, ButtonColor, ButtonSize, ThemeButton,
} from './Button';

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	parameters: {},
	tags: ['autodocs'],
	args: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Button',
	},
};

export const DefaultSmall: Story = {
	args: {
		children: 'Button',
		size: ButtonSize.SMALL,
	},
};

export const DefaultLarge: Story = {
	args: {
		children: 'Button',
		size: ButtonSize.LARGE,
	},
};

export const DefaultGreen: Story = {
	args: {
		children: 'Button',
		color: ButtonColor.GREEN,
	},
};

export const DefaultRed: Story = {
	args: {
		children: 'Button',
		color: ButtonColor.RED,
	},
};

export const DefaultDisabled: Story = {
	args: {
		children: 'Button',
		disabled: true,
	},
};

export const Clear: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.CLEAR,
	},
};

export const Outline: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.OUTLINE,
	},
};

export const OutlineGreen: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.OUTLINE,
		color: ButtonColor.GREEN,
	},
};

export const OutlineRed: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.OUTLINE,
		color: ButtonColor.RED,
	},
};

export const Icon: Story = {
	args: {
		children: <LightIcon />,
		theme: ThemeButton.ICON,
	},
};
