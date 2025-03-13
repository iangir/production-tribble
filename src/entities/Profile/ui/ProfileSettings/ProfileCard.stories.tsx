import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { TranslationDecorator } from 'shared/config/storybook/TranslationDecorator/TranslationDecorator';
import { ProfileSettings } from './ProfileSettings';

const meta: Meta<typeof ProfileSettings> = {
	title: 'entities/ProfileCard',
	component: ProfileSettings,
	parameters: {},
	tags: ['autodocs'],
	args: {},
	decorators: [StoreDecorator({}), RouterDecorator, TranslationDecorator],
};

export default meta;
type Story = StoryObj<typeof ProfileSettings>;

export const Light: Story = {
	decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
};
