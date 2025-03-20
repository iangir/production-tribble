import { lazy } from 'react';

export const AsyncFeedPage = lazy(
	() => new Promise((resolve) => {
		// @ts-ignore
		setTimeout(() => resolve(import('./FeedPage')), 1000);
	}),
);
