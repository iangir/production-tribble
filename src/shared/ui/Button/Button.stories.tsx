import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import LightIcon from 'shared/assets/icons/sun-icon.svg';

import { Button, ThemeButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		children: 'Button',
		label: 'Button',
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

export const OutlineIncerted: Story = {
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
