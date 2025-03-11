import { classNames } from 'shared/lib/classNames/classNames';
import stringToGradient from 'shared/lib/stringToGradient/stringToGradient';
import cls from './Avatar.module.scss';

export enum AvatartSize {
	MEDIUM = 'm',
	SMALL = 's',
	LARGE = 'l',
}

interface AvatarProps {
	username: string;
	size?: AvatartSize;
	className?: string;
	src?: string;
}

export const Avatar = (props: AvatarProps) => {
	const {
		className, src, username, size = AvatartSize.MEDIUM,
	} = props;

	return src ? (
		<img
			src={src}
			className={classNames(cls.Avatar, {}, [className, cls[size]])}
			alt="Profile"
		/>
	) : (
		<div
			className={classNames(cls.Avatar, {}, [className, cls[size]])}
			style={{
				backgroundImage: `${stringToGradient(username)}`,
			}}
		>
			<svg className={cls.letter} viewBox="0 0 60 60">
				<text
					x="50%"
					y="52%"
					textAnchor="middle"
					alignmentBaseline="middle"
				>
					{Array.from(username)[0].toUpperCase()}
				</text>
			</svg>
		</div>
	);
};
