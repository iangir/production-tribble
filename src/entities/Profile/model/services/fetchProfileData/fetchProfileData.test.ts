import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

describe('loginByUsername', () => {
	const data = {
		username: 'username',
		email: 'email@email.com',
	};

	test('fulfilled', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({ data }));
		const result = await thunk.callThunk();

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('rejected', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(
			Promise.resolve({
				status: 403,
			}),
		);
		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual('error');
	});
});
