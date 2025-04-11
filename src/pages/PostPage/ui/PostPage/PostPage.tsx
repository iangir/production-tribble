import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Post } from 'entities/Post';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { CommentsList } from 'entities/Comment';
import { getPostCommentsIsLoading } from '../../model/selectors/PostCommentsSelectors';
import cls from './PostPage.module.scss';
import {
	getPostComments,
	postCommentsReducer,
} from '../../model/slice/PostCommentsSlice';

interface PostPageProps {
	className?: string;
}

export const PostPage = ({ className }: PostPageProps) => {
	const { t } = useTranslation();
	const { id } = useParams();
	const comments = useSelector(getPostComments.selectAll);
	const commentsIsLoading = useSelector(getPostCommentsIsLoading);

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

	const reducer: ReducersList = {
		postComments: postCommentsReducer,
	};

	return (
		<DynamicModuleLoader reducers={reducer} removeAfterUnmount>
			<div className={classNames(cls.PostPage, {}, [className])}>
				<Post id={id} />
				<CommentsList
					comments={comments}
					isLoading={commentsIsLoading}
				/>
			</div>
		</DynamicModuleLoader>
	);
};

export default PostPage;
