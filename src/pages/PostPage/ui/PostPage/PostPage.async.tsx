import { lazy } from 'react';

export const AsyncPostPage = lazy(
	() => new Promise((resolve) => {
		// @ts-ignore
		setTimeout(() => resolve(import('./PostPage')), 1000);
	}),
);
