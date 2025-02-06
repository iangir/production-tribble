import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
	title: 'shared/Modal',
	component: Modal,
	parameters: {},
	args: {
		isOpen: true,
		children: 'MODAL',
	},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalLight: Story = {
	args: {
		className: 'app_light_theme',
	},
	decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ModalDark: Story = {
	args: {
		className: 'app_dark_theme',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
