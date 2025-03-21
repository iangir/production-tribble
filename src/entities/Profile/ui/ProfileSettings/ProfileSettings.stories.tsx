import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { TranslationDecorator } from 'shared/config/storybook/TranslationDecorator/TranslationDecorator';
import { ProfileSettings } from './ProfileSettings';

const meta: Meta<typeof ProfileSettings> = {
	title: 'entities/ProfileSettings',
	component: ProfileSettings,
	parameters: {},
	args: {},
	decorators: [StoreDecorator({}), RouterDecorator, TranslationDecorator],
};

export default meta;
type Story = StoryObj<typeof ProfileSettings>;

export const ProfileSettingsStory: Story = {};
