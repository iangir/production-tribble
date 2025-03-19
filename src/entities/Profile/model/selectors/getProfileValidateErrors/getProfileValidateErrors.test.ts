import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileData', () => {
	test('should return data', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				validateErrors: [
					ValidateProfileError.USERNAME_LENGTH,
					ValidateProfileError.REQUIRED,
				],
			},
		};
		expect(getProfileValidateErrors(state as StateSchema)).toEqual([
			ValidateProfileError.USERNAME_LENGTH,
			ValidateProfileError.REQUIRED,
		]);
	});

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileValidateErrors(state as StateSchema)).toEqual(
			undefined,
		);
	});
});
