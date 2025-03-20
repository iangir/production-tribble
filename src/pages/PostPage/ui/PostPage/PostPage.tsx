import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PostPage.module.scss';

interface PostPageProps {
	className?: string;
}

export const PostPage = ({ className }: PostPageProps) => {
	const { t } = useTranslation('post');
	return (
		<div className={classNames(cls.PostPage, {}, [className])}>
			{t('Post')}
		</div>
	);
};

export default PostPage;
