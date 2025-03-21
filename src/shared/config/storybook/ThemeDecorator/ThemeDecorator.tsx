import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: any) => (
	<div
		className={`${theme}`}
		style={{
			margin: '0 auto',
			backgroundColor: 'var(--bg-color)',
			display: 'flex',
			height: '100vh',
		}}
	>
		<Story />
	</div>
);
