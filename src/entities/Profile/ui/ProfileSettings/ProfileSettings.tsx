import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
	Button,
	ButtonColor,
	ButtonSize,
	ThemeButton,
} from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { profileActions } from 'entities/Profile/model/slice/profileSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import { Avatar, AvatarSize } from 'shared/ui/ProfilePic/Avatar';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { ValidateProfileError } from '../../model/types/Profile';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileIsEditing } from '../../model/selectors/getProfileIsEditing/getProfileIsEditing';
import cls from './ProfileSettings.module.scss';

interface ProfileSettingsProps {
	className?: string;
}

export const ProfileSettings = (props: ProfileSettingsProps) => {
	const { className } = props;
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const isLoading = useSelector(getProfileIsLoading);
	const isEditing = useSelector(getProfileIsEditing);
	const data = useSelector(getProfileForm);
	const error = useSelector(getProfileError);
	const validateErrors = useSelector(getProfileValidateErrors);

	const usernameErrorsMap = {
		[ValidateProfileError.REQUIRED]: t('This field is required'),
		[ValidateProfileError.USERNAME_LENGTH]: t(
			'Username must be between 5 and 20 characters',
		),
		[ValidateProfileError.USERNAME_SYMBOLS]: t(
			'Username contains invalid symbols',
		),
		[ValidateProfileError.USERNAME_EXISTS]: t('Username already exists'),
	};

	const userErrorMessage = validateErrors?.find((key) => Object.hasOwn(usernameErrorsMap, key));

	const emailErrorsMap = {
		[ValidateProfileError.REQUIRED]: t('This field is required'),
		[ValidateProfileError.INCORRECT_EMAIL]: t('Email is invalid'),
		[ValidateProfileError.EMAIL_EXISTS]: t('Email already exists'),
	};

	const emailErrorMessage = validateErrors?.find((key) => Object.hasOwn(emailErrorsMap, key));

	const onEdit = useCallback(() => {
		dispatch(profileActions.setIsEditing(true));
	}, [dispatch]);

	const onCancel = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onSave = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);

	const onChangeEmail = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ email: value || '' }));
		},
		[dispatch],
	);

	const onChangeUsername = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ username: value || '' }));
		},
		[dispatch],
	);

	const onChangeAvatar = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ avatar: value || '' }));
		},
		[dispatch],
	);

	if (isLoading) {
		return (
			<div
				className={classNames(cls.ProfileCard, {}, [
					className,
					cls.loading,
				])}
			>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div
				className={classNames(cls.ProfileCard, {}, [
					className,
					cls.error,
				])}
			>
				<Text p={t('An error has occurred')} theme={TextTheme.ERROR} />
			</div>
		);
	}

	return (
		<div className={classNames(cls.ProfileSettings, {}, [className])}>
			<div className={cls.container}>
				<div className={cls.data}>
					<label htmlFor="username" className={cls.label}>
						<Text p={t('Username')} />
						{isEditing ? (
							<Input
								onChange={onChangeUsername}
								value={data?.username}
								className={cls.input}
								id="username"
							/>
						) : (
							<Text p={data?.username} />
						)}
						{userErrorMessage && (
							<Text
								p={
									usernameErrorsMap[
										userErrorMessage as keyof typeof usernameErrorsMap
									]
								}
								theme={TextTheme.ERROR}
								className={cls.errorMessagge}
							/>
						)}
					</label>
					<label htmlFor="email" className={cls.label}>
						<Text p={t('Email')} />
						{isEditing ? (
							<Input
								onChange={onChangeEmail}
								value={data?.email}
								className={cls.input}
								id="email"
							/>
						) : (
							<Text p={data?.email} />
						)}
						{emailErrorMessage && (
							<Text
								p={
									emailErrorsMap[
										emailErrorMessage as keyof typeof emailErrorsMap
									]
								}
								theme={TextTheme.ERROR}
								className={cls.errorMessagge}
							/>
						)}
					</label>
				</div>
				<div className={cls.avatar}>
					<Text p={t('Profile image')} />
					{isEditing ? (
						<Input
							onChange={onChangeAvatar}
							value={data?.avatar}
							className={cls.input}
							id="avatar"
						/>
					) : (
						<Avatar
							username={data?.username!}
							src={data?.avatar}
							size={AvatarSize.LARGE}
						/>
					)}
				</div>
			</div>
			<div className={cls.editBtns}>
				{!isEditing ? (
					<Button
						onClick={onEdit}
						theme={ThemeButton.OUTLINE}
						size={ButtonSize.SMALL}
						className={cls.btn}
					>
						{t('Edit')}
					</Button>
				) : (
					<>
						<Button
							onClick={onCancel}
							theme={ThemeButton.OUTLINE}
							color={ButtonColor.RED}
							className={cls.btn}
							size={ButtonSize.SMALL}
						>
							{t('Cancel')}
						</Button>
						<Button
							onClick={onSave}
							theme={ThemeButton.OUTLINE}
							color={ButtonColor.GREEN}
							className={cls.btn}
							size={ButtonSize.SMALL}
						>
							{t('Save')}
						</Button>
					</>
				)}
			</div>
		</div>
	);
};
