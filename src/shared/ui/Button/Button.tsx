import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes, memo } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
	OUTLINE = 'outline',
	ICON = 'icon',
	ICON_WITH_TEXT = 'iconWithText',
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
export const Button = memo(
	React.forwardRef<HTMLButtonElement, ButtonProps>((btnProps, ref) => {
		const {
			className,
			children,
			theme,
			color,
			size,
			inverted = false,
			type = 'button',
			disabled,
			...otherProps
		} = btnProps;

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
					size && cls[size],
				])}
				disabled={disabled}
				type={type}
				ref={ref}
				{...otherProps}
			>
				{children}
			</button>
		);
	}),
);
