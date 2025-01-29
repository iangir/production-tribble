import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCunterValue';

describe('getCounterValue', () => {
	test('', () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 },
		};
		expect(getCounterValue(state as StateSchema)).toEqual(10);
	});
});
