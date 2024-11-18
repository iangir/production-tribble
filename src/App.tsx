import { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import './styles/index.scss';
import { Theme, ThemeContext } from './theme/ThemeContext';
import useTheme from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

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
					<Route path={'/about'} element={<AboutPageAsync />} />
					<Route path={'/'} element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
