import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FeedPage.module.scss';

interface FeedPageProps {
	className?: string;
}

export const FeedPage = ({ className }: FeedPageProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.FeedPage, {}, [className])}>
			{t('feed')}
		</div>
	);
};

export default FeedPage;
