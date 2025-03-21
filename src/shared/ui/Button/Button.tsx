import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes, memo } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
	OUTLINE = 'outline',
	ICON = 'icon',
}

export enum ButtonColor {
	RED = 'red',
	GREEN = 'green',
}

export enum ButtonSize {
	DEFAULT = 'm',
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
	type?: 'button' | 'submit' | 'reset';
}
export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme,
		color,
		size = ButtonSize.DEFAULT,
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
			className={classNames(cls.Button, mods, [
				className,
				theme && cls[theme],
				color && cls[color],
				cls[size],
			])}
			disabled={disabled}
			type={type}
			{...otherProps}
		>
			{children}
		</button>
	);
});
