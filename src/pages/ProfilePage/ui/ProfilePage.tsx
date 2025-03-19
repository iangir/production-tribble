import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import {
	fetchProfileData,
	ProfileSettings,
	profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
	className?: string;
}

const reducers: ReducersList = {
	profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (__PROJECT__ === 'storybook') return;
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.ProfilePage, {}, [className])}>
				<Text title={t('Profile')} align={TextAlign.CENTER} />
				<ProfileSettings />
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
