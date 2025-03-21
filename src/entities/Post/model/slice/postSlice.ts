import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostSchema } from '../types/postSchema';
import { fetchPostById } from '../services/fetchPostById/fetchPostById';
import { PostType } from '../types/postTypes';

const initialState: PostSchema = {
	isLoading: false,
	error: undefined,
	data: undefined,
};

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder.addCase(fetchPostById.pending, (state) => {
			state.error = undefined;
			state.isLoading = true;
		});
		builder.addCase(
			fetchPostById.fulfilled,
			(state, action: PayloadAction<PostType>) => {
				state.isLoading = false;
				state.data = action.payload;
			},
		);
		builder.addCase(fetchPostById.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	},
});

export const { actions: postActions } = postSlice;
export const { reducer: postReducer } = postSlice;
