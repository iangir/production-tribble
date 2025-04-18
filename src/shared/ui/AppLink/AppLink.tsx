import React, { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = '',
	SECONDARY = '',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}
export const AppLink = memo((props: AppLinkProps) => {
	const {
		to,
		children,
		className,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props;
	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	);
});
