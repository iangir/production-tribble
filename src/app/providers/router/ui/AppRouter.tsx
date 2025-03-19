import { Suspense, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	AppRouteProps,
	routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/index';
import RequireAuth from './RequireAuth';

const AppRouter = () => {
	const renderWithwrapper = useCallback((route: AppRouteProps) => {
		const element = (
			<Suspense fallback={<PageLoader />}>
				<div className="page-wrapper">{route.element}</div>
			</Suspense>
		);

		return (
			<Route
				key={route.path}
				path={route.path}
				element={
					route.authOnly ? (
						<RequireAuth>{element}</RequireAuth>
					) : (
						element
					)
				}
			/>
		);
	}, []);

	return <Routes>{Object.values(routeConfig).map(renderWithwrapper)}</Routes>;
};

export default AppRouter;
