import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
	title: 'shared/Modal',
	component: Modal,
	parameters: {},
	tags: ['autodocs'],
	args: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalLight: Story = {
	args: {
		isOpen: true,
		children: 'MODAL',
		className: 'light',
	},
};

export const ModalDark: Story = {
	args: {
		isOpen: true,
		children: 'MODAL',
		className: 'dark',
	},
};
