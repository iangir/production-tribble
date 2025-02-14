import { lazy } from 'react';

export const AsyncProfilePage = lazy(
	() =>
		new Promise((resolve) => {
			// @ts-ignore
			setTimeout(() => resolve(import('./ProfilePage')), 1000);
		}),
);
