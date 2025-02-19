import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { FC, ButtonHTMLAttributes, memo } from 'react';
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
export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = ThemeButton.DEFAULT,
		type = 'button',
		disabled,
		...otherProps
	} = props;

	const mods: Mods = {
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
});
