import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
	title: 'pages/MainPage',
	component: MainPage,
	parameters: {},
	args: {},
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const MainPageStory: Story = {};
