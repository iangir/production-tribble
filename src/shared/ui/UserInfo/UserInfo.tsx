import i18n from 'shared/config/i18n/i18n';
import { getRelativeTime } from 'shared/lib/getRelativeTime/getRelativeTime';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './UserInfo.module.scss';
import { AppLink } from '../AppLink/AppLink';
import { Avatar, AvatarSize } from '../Avatar/Avatar';

interface UserInfoProps {
	username: string;
	avatarSrc?: string;
	className?: string;
	date: string;
}

export const UserInfo = ({
	username,
	avatarSrc,
	date,
	className,
}: UserInfoProps) => {
	const locale = i18n.language;
	const dateObj = new Date(date);
	const dateString = getRelativeTime(dateObj, locale);

	return (
		<div className={classNames(cls.UserInfo, {}, [className])}>
			<AppLink to={`/profile/${username}`} className={cls.userLink}>
				<Avatar
					src={avatarSrc}
					username={username}
					size={AvatarSize.SMALL}
				/>
				<span className={cls.author}>{username}</span>
			</AppLink>
			<time
				dateTime={date}
				title={dateObj.toString()}
				className={cls.time}
			>
				{dateString}
			</time>
		</div>
	);
};
