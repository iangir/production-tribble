import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import FeedPage from 'pages/FeedPage/ui/FeedPage';
import { PostPage } from 'pages/PostPage';

export type AppRouteProps = RouteProps & {
	authOnly?: boolean;
};

export enum AppRoutes {
	ABOUT = 'about',
	PROFILE = 'profile',
	FEED = 'feed',
	POST = 'post',
	// последний
	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.FEED]: '/',
	[AppRoutes.POST]: '/posts/', // + :id
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile',
	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.FEED]: {
		path: RoutePath.feed,
		element: <FeedPage />,
	},
	[AppRoutes.POST]: {
		path: `${RoutePath.post}:id`,
		element: <PostPage />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
	[AppRoutes.PROFILE]: {
		path: RoutePath.profile,
		element: <ProfilePage />,
		authOnly: true,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
