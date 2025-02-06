import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	DEFAULT = 'default',
	OUTLINE = 'outline',
	OUTLINE_INVERTED = 'outlineInverted',
	ICON = 'icon',
	ICON_INVERTED = 'iconInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
	disabled?: boolean;
	label?: string;
}
export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		type = 'button',
		disabled,
		...otherProps
	} = props;

	const mods: Record<string, boolean> = {
		[cls[theme]]: true,
		[cls.disabled]: disabled,
	};

	return (
		<button
			// eslint-disable-next-line react/button-has-type
			type={type}
			className={classNames(cls.Button, mods, [className])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
};
