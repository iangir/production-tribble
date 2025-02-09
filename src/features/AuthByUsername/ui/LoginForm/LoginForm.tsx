import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
	className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const error = useSelector(getLoginError);
	const isLoading = useSelector(getLoginIsLoading);

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value));
		},
		[dispatch],
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch],
	);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, username, password]);

	return (
		<DynamicModuleLoader
			name="loginForm"
			reducer={loginReducer}
			removeAfterUnmount
		>
			<form
				className={classNames(cls.LoginForm, {}, [className])}
				name="loginForm"
			>
				<Text title={t('Sign in')} />
				{error && <Text p={error} theme={TextTheme.ERROR} />}
				<Input
					onChange={onChangeUsername}
					value={username}
					className={cls.input}
					type="text"
					placeholder={t('Email')}
					name="loginForm"
				/>
				<Input
					onChange={onChangePassword}
					value={password}
					className={cls.input}
					type="text"
					placeholder={t('Password')}
					name="loginForm"
				/>
				<Button
					type="submit"
					onClick={onLoginClick}
					onSubmit={onLoginClick}
					disabled={isLoading}
					theme={ThemeButton.OUTLINE}
				>
					{t('Sign in')}
				</Button>
			</form>
		</DynamicModuleLoader>
	);
});

export default LoginForm;
