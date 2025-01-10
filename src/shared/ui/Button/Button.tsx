import { classNames } from 'shared/lib/classNames/classNames';
import { FC, ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
	DEFAULT = 'default',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme = ThemeButton.DEFAULT,
		type = 'button',
		...otherProps
	} = props;

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
