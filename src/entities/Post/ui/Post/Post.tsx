import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import {
	getPostData,
	getPostError,
	getPostIsLoading,
} from 'entities/Post/model/selectors/postSelectors';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { postReducer } from '../../model/slice/postSlice';
import { fetchPostById } from '../../model/services/fetchPostById/fetchPostById';
import cls from './Post.module.scss';

interface PostProps {
	id: string;
	className?: string;
}

const reducers: ReducersList = {
	post: postReducer,
};

export const Post = memo(({ id, className }: PostProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const isLoading = useSelector(getPostIsLoading);
	const data = useSelector(getPostData);
	const error = useSelector(getPostError);

	let content;

	if (isLoading) {
		content = <Skeleton width="100%" height="500px" />;
	} else if (error) {
		content = (
			<Text
				title={t('An error has occured')}
				p={t(error)}
				theme={TextTheme.ERROR}
				align={TextAlign.CENTER}
			/>
		);
	} else {
		content = data?.title;
	}

	useEffect(() => {
		dispatch(fetchPostById(id));
	}, [dispatch, id]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.Post, {}, [className])}>
				{content}
			</div>
		</DynamicModuleLoader>
	);
});
