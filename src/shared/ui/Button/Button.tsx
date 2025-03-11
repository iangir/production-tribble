import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes, memo } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
	DEFAULT = '',
	CLEAR = 'clear',
	OUTLINE = 'outline',
	ICON = 'icon',
}

export enum ButtonColor {
	DEFAULT = '',
	RED = 'red',
	GREEN = 'green',
}

export enum ButtonSize {
	MEDIUM = 'm',
	SMALL = 's',
	LARGE = 'l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
	color?: ButtonColor;
	size?: ButtonSize;
	inverted?: boolean;
	disabled?: boolean;
}
export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = ThemeButton.DEFAULT,
		color = ButtonColor.DEFAULT,
		size = ButtonSize.MEDIUM,
		inverted = false,
		type = 'button',
		disabled,
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.disabled]: disabled,
		[cls.inverted]: inverted,
	};

	return (
		<button
			// eslint-disable-next-line react/button-has-type
			type={type}
			className={classNames(cls.Button, mods, [
				className,
				cls[theme],
				cls[color],
				cls[size],
			])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});
