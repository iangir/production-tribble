import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { TranslationDecorator } from 'shared/config/storybook/TranslationDecorator/TranslationDecorator';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	parameters: {},
	tags: ['autodocs'],
	args: { data: { username: 'johndoe' } },
	decorators: [StoreDecorator({}), RouterDecorator, TranslationDecorator],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Light: Story = {
	decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
};
