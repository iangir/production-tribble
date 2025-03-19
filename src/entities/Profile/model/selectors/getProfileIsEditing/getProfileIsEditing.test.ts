import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsEditing } from './getProfileIsEditing';

describe('getProfileisEditing', () => {
	test('should work with filled state', () => {
		const state: DeepPartial<StateSchema> = {
			profile: { isEditing: true },
		};
		expect(getProfileIsEditing(state as StateSchema)).toEqual(true);
	});

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileIsEditing(state as StateSchema)).toEqual(undefined);
	});
});
