import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/Profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
	isLoading: false,
	isEditing: false,
	error: undefined,
	data: undefined,
	form: undefined,
	validateErrors: undefined,
};

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		updateProfile: (state, action: PayloadAction<Profile>) => {
			state.form = {
				...state.form,
				...action.payload,
			};
		},
		cancelEdit: (state) => {
			state.form = state.data;
			state.validateErrors = undefined;
			state.isEditing = false;
		},
		setIsEditing: (state, action: PayloadAction<boolean>) => {
			state.isEditing = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(fetchProfileData.pending, (state) => {
			state.error = undefined;
			state.isLoading = true;
		});
		builder.addCase(
			fetchProfileData.fulfilled,
			(state, action: PayloadAction<Profile>) => {
				state.isLoading = false;
				state.data = action.payload;
				state.form = action.payload;
			},
		);
		builder.addCase(fetchProfileData.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
		builder.addCase(updateProfileData.pending, (state) => {
			state.validateErrors = undefined;
			state.isLoading = true;
		});
		builder.addCase(
			updateProfileData.fulfilled,
			(state, action: PayloadAction<Profile>) => {
				state.isLoading = false;
				state.data = action.payload;
				state.form = action.payload;
				state.validateErrors = undefined;
				state.isEditing = false;
			},
		);
		builder.addCase(updateProfileData.rejected, (state, action) => {
			state.isLoading = false;
			state.validateErrors = action.payload;
		});
	},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
