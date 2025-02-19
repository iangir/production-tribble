import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<
	User,
	LoginByUsernameProps,
	ThunkConfig<string>
>(
	'login/loginByUsername',
	async (authData, { dispatch, rejectWithValue, extra }) => {
		try {
			const response = await extra.api.post<User>('/login', authData);
			if (!response.data) {
				throw new Error();
			}

			localStorage.setItem(
				USER_LOCALSTORAGE_KEY,
				JSON.stringify(response.data),
			);

			dispatch(userActions.setAuthData(response.data));

			return response.data;
		} catch (error) {
			return rejectWithValue(i18n.t('Incorrect username or password.'));
		}
	},
);
