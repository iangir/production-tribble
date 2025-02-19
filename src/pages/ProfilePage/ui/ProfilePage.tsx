import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import {
	fetchProfileData,
	ProfileCard,
	profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
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
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.ProfilePage, {}, [className])}>
				<ProfileCard />
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
