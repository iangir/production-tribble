import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk';
import { loginByUsername } from './loginByUsername';

const axios = require('axios');

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
	const userValue = {
		username: 'username',
		id: '1',
	};

	test('succeeded login', async () => {
		mockedAxios.post.mockReturnValue(
			Promise.resolve({
				data: userValue,
			}),
		);
		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({
			username: 'username',
			password: '123',
		});
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(thunk.dispatch).toHaveBeenCalledWith(
			userActions.setAuthData(userValue),
		);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(userValue);
	});

	test('rejected login', async () => {
		mockedAxios.post.mockReturnValue(
			Promise.resolve({
				status: 403,
			}),
		);
		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({
			username: 'username',
			password: '123',
		});
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('Incorrect username or password.');
	});
});
