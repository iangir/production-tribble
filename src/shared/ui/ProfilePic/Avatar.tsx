import { classNames } from 'shared/lib/classNames/classNames';
import stringToGradient from 'shared/lib/stringToGradient/stringToGradient';
import cls from './Avatar.module.scss';

export enum AvatarSize {
	MEDIUM = 'm',
	SMALL = 's',
	LARGE = 'l',
}

interface AvatarProps {
	username?: string;
	size?: AvatarSize;
	className?: string;
	src?: string;
}

export const Avatar = (props: AvatarProps) => {
	const {
		className, src, username, size = AvatarSize.MEDIUM,
	} = props;

	const usernameToString = username || 'A';

	return src ? (
		<img
			src={src}
			className={classNames(cls.Avatar, {}, [className, cls[size]])}
			alt="ProfileImage"
		/>
	) : (
		<div
			className={classNames(cls.Avatar, {}, [className, cls[size]])}
			style={{
				backgroundImage: `${stringToGradient(usernameToString)}`,
			}}
		>
			<svg className={cls.letter} viewBox="0 0 60 60">
				<text
					x="50%"
					y="52%"
					textAnchor="middle"
					alignmentBaseline="middle"
				>
					{Array.from(usernameToString)[0].toUpperCase()}
				</text>
			</svg>
		</div>
	);
};
