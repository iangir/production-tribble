import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
	test('set username and password', () => {
		const state: DeepPartial<LoginSchema> = {
			username: '123',
			password: '123',
		};

		expect(
			loginReducer(
				state as LoginSchema,
				loginActions.setUsername('admin'),
			),
		).toEqual({ username: 'admin', password: '123' });

		expect(
			loginReducer(state as LoginSchema, loginActions.setPassword('pwd')),
		).toEqual({ username: '123', password: 'pwd' });
	});
});
