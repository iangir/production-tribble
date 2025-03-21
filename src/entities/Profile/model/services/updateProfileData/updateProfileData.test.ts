import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

describe('loginByUsername', () => {
	const data = {
		username: 'username',
		email: 'email@email.com',
	};

	test('fulfilled', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: { form: data },
		});
		thunk.api.put.mockReturnValue(Promise.resolve({ data }));
		const result = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('rejected', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: { form: data },
		});
		thunk.api.put.mockReturnValue(
			Promise.resolve({
				status: 503,
			}),
		);
		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
	});

	test('validation error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: { form: { username: '', email: '' } },
		});
		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([ValidateProfileError.REQUIRED]);
	});
});
