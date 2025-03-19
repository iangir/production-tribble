import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
	test('should work with filled state', () => {
		const data = {
			username: 'username',
			email: 'email@email.com',
		};
		const state: DeepPartial<StateSchema> = {
			profile: { form: data },
		};
		expect(getProfileForm(state as StateSchema)).toEqual(data);
	});

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileForm(state as StateSchema)).toEqual(undefined);
	});
});
