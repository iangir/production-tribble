import { StoryFn } from '@storybook/react/*';

export const ComponentDecorator = (Story: StoryFn) => (
	<div
		style={{
			height: '300px',
			alignContent: 'center',
			marginLeft: 'auto',
			marginRight: 'auto',
			maxWidth: 'fit-content',
		}}
	>
		<Story />
	</div>
);
