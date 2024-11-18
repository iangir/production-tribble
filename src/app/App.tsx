import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import 'app/styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

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
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPage />} />
					<Route path={'/'} element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
