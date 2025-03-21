import type { Meta, StoryObj } from '@storybook/react';
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
};

export const ModalDark: Story = {
	args: {
		className: 'app_dark_theme',
	},
};
