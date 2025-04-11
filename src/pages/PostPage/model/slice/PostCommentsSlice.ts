import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CommentType } from 'entities/Comment';
import { PostCommentsSchema } from '../types/PostCommentsSchema';
import { fetchCommentsByPostId } from '../services/fetchCommentsByPostId/fetchCommentsByPostId';

const postCommentsAdapter = createEntityAdapter<CommentType>({
	selectId: (comment) => comment.id,
});

export const getPostComments = postCommentsAdapter.getSelectors<StateSchema>(
	(state) => state.postComments || postCommentsAdapter.getInitialState(),
);

const postCommentsSlice = createSlice({
	name: 'postComments',
	initialState: postCommentsAdapter.getInitialState<PostCommentsSchema>({
		ids: [],
		entities: {},
		isLoading: false,
		error: undefined,
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(
				fetchCommentsByPostId.fulfilled,
				(state, action: PayloadAction<CommentType[]>) => {
					state.isLoading = false;
					postCommentsAdapter.setAll(state, action.payload);
				},
			)
			.addCase(fetchCommentsByPostId.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(fetchCommentsByPostId.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			});
	},
});

export const { reducer: postCommentsReducer } = postCommentsSlice;
