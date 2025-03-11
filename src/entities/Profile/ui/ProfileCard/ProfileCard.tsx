import { useCallback, useState } from 'react';
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
import { Avatar, AvatartSize } from 'shared/ui/ProfilePic/Avatar';
import { Profile } from '../../model/types/Profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	data?: Profile;
	isLoading?: boolean;
	className?: string;
	error?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		data, isLoading, error, className,
	} = props;
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const [isEditing, setIsEditing] = useState(false);

	const onCancel = useCallback(() => {
		setIsEditing(!isEditing);
		dispatch(profileActions.cancelEdit());
	}, [dispatch, isEditing]);

	const onSave = useCallback(() => {
		dispatch(updateProfileData());
		setIsEditing(!isEditing);
	}, [dispatch, isEditing]);

	const onChangeName = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ firstName: value || '' }));
		},
		[dispatch],
	);

	const onChangeSecondName = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ lastName: value || '' }));
		},
		[dispatch],
	);

	const onChangeAge = useCallback(
		(value?: string) => {
			if (value?.match(/^[0-9]*$/)) {
				dispatch(
					profileActions.updateProfile({ age: Number(value || 0) }),
				);
			}
		},
		[dispatch],
	);

	const onChangeCountry = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ country: value || '' }));
		},
		[dispatch],
	);

	const onChangeCity = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ city: value || '' }));
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
				<Text
					title={t('An error has occurred')}
					theme={TextTheme.ERROR}
				/>
			</div>
		);
	}

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.editBtns}>
				{!isEditing ? (
					<Button
						onClick={() => setIsEditing(!isEditing)}
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
			<div className={cls.container}>
				<div className={cls.data}>
					<label htmlFor="name" className={cls.label}>
						<Text p={t('Name')} />
						{isEditing ? (
							<Input
								onChange={onChangeName}
								value={data?.firstName}
								className={cls.input}
								id="name"
							/>
						) : (
							<Text title={data?.firstName} />
						)}
					</label>
					<label htmlFor="lastName" className={cls.label}>
						<Text p={t('Last name')} />
						{isEditing ? (
							<Input
								onChange={onChangeSecondName}
								value={data?.lastName}
								className={cls.input}
								id="lastName"
							/>
						) : (
							<Text title={data?.lastName} />
						)}
					</label>
					<label htmlFor="age" className={cls.label}>
						<Text p={t('Age')} />
						{isEditing ? (
							<Input
								onChange={onChangeAge}
								value={data?.age?.toString()}
								className={cls.input}
								id="age"
							/>
						) : (
							<Text title={data?.age?.toString()} />
						)}
					</label>
					<label htmlFor="country" className={cls.label}>
						<Text p={t('Country')} />
						{isEditing ? (
							<Input
								onChange={onChangeCountry}
								value={data?.country}
								className={cls.input}
								id="country"
							/>
						) : (
							<Text title={data?.country} />
						)}
					</label>
					<label htmlFor="city" className={cls.label}>
						<Text p={t('City')} />
						{isEditing ? (
							<Input
								onChange={onChangeCity}
								value={data?.city}
								className={cls.input}
								id="city"
							/>
						) : (
							<Text title={data?.city} />
						)}
					</label>
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
							<Text title={data?.username} />
						)}
					</label>
				</div>
				<div className={cls.avatar}>
					<Text p={t('Profile Image')} />
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
							size={AvatartSize.LARGE}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
