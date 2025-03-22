import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react/*';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (Story: StoryFn, theme: Theme) => (
	<div
		className={`${theme}`}
		style={{
			backgroundColor: 'var(--bg-color)',
		}}
	>
		<Story />
	</div>
);
