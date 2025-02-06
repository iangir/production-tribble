import type { Meta, StoryObj } from '@storybook/react';
import LightIcon from 'shared/assets/icons/sun-icon.svg';

import { Button, ThemeButton } from './Button';

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
		label: 'Button',
	},
};

export const DefaultDisabled: Story = {
	args: {
		children: 'Button',
		label: 'Button',
		disabled: true,
	},
};

export const Clear: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.CLEAR,
	},
};

export const ClearInverted: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.CLEAR_INVERTED,
	},
};

export const Outline: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.OUTLINE,
	},
};

export const OutlineInverted: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.OUTLINE_INVERTED,
	},
};

export const Icon: Story = {
	args: {
		children: <LightIcon />,
		theme: ThemeButton.ICON,
	},
};

export const IconInverted: Story = {
	args: {
		children: <LightIcon />,
		theme: ThemeButton.ICON_INVERTED,
	},
};
