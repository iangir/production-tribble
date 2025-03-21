import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
	title: 'pages/AboutPage',
	component: AboutPage,
	parameters: {},
	args: {},
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const AboutPageStory: Story = {};
