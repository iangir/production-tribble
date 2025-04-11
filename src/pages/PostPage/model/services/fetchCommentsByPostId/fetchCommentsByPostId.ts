import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { CommentType } from 'entities/Comment';
import i18n from 'shared/config/i18n/i18n';

export const fetchCommentsByPostId = createAsyncThunk<
	CommentType[],
	string | undefined,
	ThunkConfig<string>
>('post/fetchCommentsByPostId', async (postId, { rejectWithValue, extra }) => {
	if (!postId) {
		return rejectWithValue(i18n.t('Load error'));
	}

	try {
		const response = await extra.api.get<CommentType[]>('/comments', {
			params: {
				parentId: postId,
				_expand: 'user',
			},
		});
		if (!response.data) {
			throw new Error();
		}
		return response.data;
	} catch (error) {
		return rejectWithValue(i18n.t('Cannot load comments'));
	}
});
