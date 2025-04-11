import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { PostType } from '../../types/postTypes';

export const fetchPostById = createAsyncThunk<
	PostType,
	string,
	ThunkConfig<string>
>('post/fetchPostById', async (postId, { rejectWithValue, extra }) => {
	try {
		const response = await extra.api.get<PostType>(`/posts/${postId}`);
		if (!response.data) {
			throw new Error();
		}
		return response.data;
	} catch (error) {
		return rejectWithValue(i18n.t('Cannot load post'));
	}
});
