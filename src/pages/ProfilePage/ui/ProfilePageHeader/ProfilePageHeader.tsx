import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => (
	<div
		className={classNames(cls.ProfilePageHeader, {}, [className])}
	/>
);
