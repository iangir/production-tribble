import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
	DEFAULT = 'default',
	OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
	/** Is this the principal call to action on the page? */
	primary?: boolean;
	/** What background color to use */
	backgroundColor?: string;
	/** How large should the button be? */
	size?: 'small' | 'medium' | 'large';
	/** Button contents */
	label?: string;
	/** Optional click handler */
	onClick?: () => void;
}
export const Button: FC<ButtonProps> = (props) => {
	const { className, children, theme, type = 'button', ...otherProps } = props;

	return (
		<button
			// eslint-disable-next-line react/button-has-type
			type={type}
			className={classNames(cls.Button, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
