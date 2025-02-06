import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const {
		username, password, error, isLoading,
	} = useSelector(getLoginState);

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
		<form className={classNames(cls.LoginForm, {}, [className])}>
			<Text title={t('Sign in')} />
			{error && <Text p={error} theme={TextTheme.ERROR} />}
			<Input
				onChange={onChangeUsername}
				value={username}
				className={cls.input}
				type="text"
				placeholder={t('Email')}
			/>
			<Input
				onChange={onChangePassword}
				value={password}
				className={cls.input}
				type="text"
				placeholder={t('Password')}
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
	);
});
