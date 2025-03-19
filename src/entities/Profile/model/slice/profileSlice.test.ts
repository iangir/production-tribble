import { DeepPartial } from '@reduxjs/toolkit';
import { ProfileSchema, ValidateProfileError } from '../types/Profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

describe('profileSlice', () => {
	const state: DeepPartial<ProfileSchema> = {
		isLoading: false,
		isEditing: false,
		error: undefined,
		data: {
			username: 'username',
			email: 'some@email.com',
		},
		form: undefined,
		validateErrors: undefined,
	};
	test('setIsEditing', () => {
		expect(
			profileReducer(
				state as ProfileSchema,
				profileActions.setIsEditing(true),
			),
		).toEqual({
			...state,
			isEditing: true,
		});
	});

	test('updateProfile', () => {
		const form = {
			username: 'JohnDoe',
			email: 'JohnDoe@email.com',
		};
		expect(
			profileReducer(
				state as ProfileSchema,
				profileActions.updateProfile(form),
			),
		).toEqual({ ...state, form });
	});

	test('updtadeProfileData peinding', () => {
		expect(
			profileReducer(
				{
					...state,
					validateErrors: [ValidateProfileError.REQUIRED],
				} as ProfileSchema,
				updateProfileData.pending,
			),
		).toEqual({ ...state, isLoading: true, validateErrors: undefined });
	});
	test('updtadeProfileData fulfilled', () => {
		expect(
			profileReducer(
				{
					...state,
					isLoading: true,
				} as ProfileSchema,
				updateProfileData.fulfilled({ ...state.data }, ''),
			),
		).toEqual({ ...state, form: state.data, isLoading: false });
	});
});
