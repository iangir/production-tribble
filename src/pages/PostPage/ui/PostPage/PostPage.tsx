import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Post } from 'entities/Post';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './PostPage.module.scss';

interface PostPageProps {
	className?: string;
}

export const PostPage = ({ className }: PostPageProps) => {
	const { t } = useTranslation();
	const { id } = useParams();

	if (!id) {
		return (
			<Text
				title={t('An error has occured')}
				p={t('Bad request')}
				theme={TextTheme.ERROR}
				align={TextAlign.CENTER}
			/>
		);
	}

	return (
		<div className={classNames(cls.PostPage, {}, [className])}>
			<Post id={id} />
		</div>
	);
};

export default PostPage;
