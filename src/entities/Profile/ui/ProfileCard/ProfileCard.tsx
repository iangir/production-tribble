import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
	const { t } = useTranslation('profile');

	const data = useSelector(getProfileData);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileIsLoading);

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<Text title={t('Profile')} />
			<Button theme={ThemeButton.OUTLINE}>{t('Edit')}</Button>
			<div className={cls.data}>
				<Input
					value={data?.firstName}
					placeholder="Name"
					className={cls.input}
				/>
				<Input
					value={data?.lastName}
					placeholder="Last name"
					className={cls.input}
				/>
			</div>
		</div>
	);
};
