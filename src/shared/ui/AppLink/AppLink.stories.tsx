import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ComponentDecorator } from 'shared/config/storybook/ComponentDecorator/ComponentDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
	parameters: {},
	decorators: [RouterDecorator, ComponentDecorator],
	args: { to: '/', children: 'Link' },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
	args: { theme: AppLinkTheme.PRIMARY },
};
