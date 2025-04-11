import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
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
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { UserInfo } from 'shared/ui/UserInfo/UserInfo';
import VoteIcon from 'shared/assets/icons/vote.svg';
import CommentsIcon from 'shared/assets/icons/comments.svg';
import MoreIcon from 'shared/assets/icons/more.svg';
import ShareIcon from 'shared/assets/icons/share.svg';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByPostId } from 'pages/PostPage/model/services/fetchCommentsByPostId/fetchCommentsByPostId';
import { PostBlock, PostBlockType } from '../../model/types/postTypes';
import { postReducer } from '../../model/slice/postSlice';
import { fetchPostById } from '../../model/services/fetchPostById/fetchPostById';
import cls from './Post.module.scss';
import { PostImage } from '../PostImage/PostImage';
import { PostCode } from '../PostCode/PostCode';
import { PostText } from '../PostText/PostText';

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

	useInitialEffect(() => {
		dispatch(fetchPostById(id));
		dispatch(fetchCommentsByPostId(id));
	});

	const renderBlock = useCallback((block: PostBlock) => {
		switch (block.type) {
		case PostBlockType.TEXT:
			return <PostText block={block} key={block.id} />;
		case PostBlockType.IMAGE:
			return <PostImage block={block} key={block.id} />;
		case PostBlockType.CODE:
			return <PostCode block={block} key={block.id} />;
		default:
			return null;
		}
	}, []);

	let content;

	if (isLoading) {
		content = (
			<div className={classNames(cls.postContainer, {}, [className])}>
				<div className={cls.userInfoSkeleton}>
					<Skeleton className={cls.avatarSkeleton} />
					<Skeleton className={cls.usernameSkeleton} />
				</div>
				<Skeleton className={cls.titleSkeleton} />
				<Skeleton className={cls.bodySkeleton} />
				<Skeleton className={cls.postInfoSkeleton} />
			</div>
		);
	} else if (error) {
		content = (
			<Text
				title={t('An error has occured')}
				p={t(error)}
				theme={TextTheme.ERROR}
				align={TextAlign.CENTER}
			/>
		);
	} else if (data) {
		content = (
			<div className={cls.postContainer}>
				<UserInfo
					username={data?.authorUsername}
					date={data?.createdAt}
					// avatarSrc={data?.user.avatar}
					className={cls.userInfo}
				/>
				<div className={cls.content}>
					<Text title={data?.title} className={cls.title} />
					{data?.body.map(renderBlock)}
				</div>
				<div className={cls.postInfo}>
					<div className={cls.votes}>
						<Button theme={ThemeButton.ICON} className={cls.upvote}>
							<VoteIcon />
						</Button>
						<span>{data?.rating}</span>
						<Button
							theme={ThemeButton.ICON}
							className={cls.downvote}
						>
							<VoteIcon />
						</Button>
					</div>
					<Button theme={ThemeButton.ICON_WITH_TEXT}>
						<CommentsIcon />
						<span>{data?.commentsCount}</span>
					</Button>
					<Button theme={ThemeButton.ICON_WITH_TEXT}>
						<ShareIcon />
						{t('Share')}
					</Button>
					<Button theme={ThemeButton.ICON} className={cls.actionsBtn}>
						<MoreIcon />
					</Button>
				</div>
			</div>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<article className={classNames(cls.Post, {}, [className])}>
				{content}
			</article>
		</DynamicModuleLoader>
	);
});
