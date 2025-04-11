import { memo } from 'react';
import { t } from 'i18next';
import { UserInfo } from 'shared/ui/UserInfo/UserInfo';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import VoteIcon from 'shared/assets/icons/vote.svg';
import MoreIcon from 'shared/assets/icons/more.svg';
import CommentsIcon from 'shared/assets/icons/comments.svg';
import { CommentType } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentProps {
	className?: string;
	comment: CommentType;
	isLoading?: boolean;
}

export const CommentCard = memo(
	({ className, comment, isLoading }: CommentProps) => {
		if (isLoading) {
			return (
				<div className={classNames(cls.CommentCard, {}, [className])}>
					<div className={cls.userInfoSkeleton}>
						<Skeleton className={cls.avatarSkeleton} />
						<Skeleton className={cls.usernameSkeleton} />
					</div>

					<Skeleton className={cls.commentSkeleton} />
					<Skeleton className={cls.commentInfoSkeleton} />
				</div>
			);
		}
		return (
			<div className={classNames(cls.CommentCard, {}, [className])}>
				<UserInfo
					username={comment.user.username}
					date={comment.createdAt}
					avatarSrc=""
				/>
				<Text p={comment.body} className={cls.commentBody} />
				<div className={cls.commentInfo}>
					<div className={cls.votes}>
						<Button theme={ThemeButton.ICON} className={cls.upvote}>
							<VoteIcon />
						</Button>
						<span>{comment.rating}</span>
						<Button
							theme={ThemeButton.ICON}
							className={cls.downvote}
						>
							<VoteIcon />
						</Button>
					</div>
					<Button theme={ThemeButton.ICON_WITH_TEXT}>
						<CommentsIcon />
						{t('Reply')}
					</Button>
					<Button theme={ThemeButton.ICON} className={cls.actionsBtn}>
						<MoreIcon />
					</Button>
				</div>
			</div>
		);
	},
);
