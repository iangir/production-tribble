import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentsList.module.scss';
import { CommentType } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentsListProps {
	className?: string;
	comments: CommentType[];
	isLoading?: boolean;
}

export const CommentsList = ({
	className,
	comments,
	isLoading,
}: CommentsListProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.CommentsList, {}, [className])}>
			{comments.length ? (
				comments.map((comment) => (
					<CommentCard
						comment={comment}
						key={comment.id}
						className={cls.comment}
						isLoading={isLoading}
					/>
				))
			) : (
				<Text
					p={t('Be the first to comment!')}
					className={cls.emptyListText}
				/>
			)}
		</div>
	);
};
