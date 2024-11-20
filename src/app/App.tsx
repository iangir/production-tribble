import 'app/styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div
			className={classNames('app', { hovered: true, selected: true }, [
				theme,
				'cls',
			])}
		>
			<button onClick={toggleTheme}>{theme.toUpperCase()}</button>
			<Navbar />

			<AppRouter />
		</div>
	);
};

export default App;
