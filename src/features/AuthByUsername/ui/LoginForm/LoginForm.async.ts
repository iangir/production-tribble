import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const AsyncLoginForm = lazy<FC<LoginFormProps>>(
	() => new Promise((resolve) => {
		setTimeout(() => resolve(import('./LoginForm')), 1000);
	}),
);
