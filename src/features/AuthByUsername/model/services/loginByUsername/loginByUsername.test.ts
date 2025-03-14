import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
	const userValue = {
		username: 'username',
		id: '1',
	};

	test('succeeded login', async () => {
		const thunk = new TestAsyncThunk(loginByUsername);
		thunk.api.post.mockReturnValue(
			Promise.resolve({
				data: userValue,
			}),
		);
		const result = await thunk.callThunk({
			username: 'username',
			password: '123',
		});
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(thunk.dispatch).toHaveBeenCalledWith(
			userActions.setAuthData(userValue),
		);
		expect(thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(userValue);
	});

	test('rejected login', async () => {
		const thunk = new TestAsyncThunk(loginByUsername);
		thunk.api.post.mockReturnValue(
			Promise.resolve({
				status: 403,
			}),
		);
		const result = await thunk.callThunk({
			username: 'username',
			password: '123',
		});
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('Incorrect username or password.');
	});
});
