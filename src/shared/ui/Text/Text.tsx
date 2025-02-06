import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
	DEFAULT = 'default',
	ERROR = 'error',
}

interface TextProps {
	className?: string;
	title?: string;
	p?: string;
	theme?: TextTheme;
}

export const Text = (props: TextProps) => {
	const {
		className, title, p, theme = TextTheme.DEFAULT,
	} = props;
	return (
		<div
			className={classNames(cls.Text, { [cls[theme]]: true }, [
				className,
			])}
		>
			{title && <p className={cls.title}>{title}</p>}
			{p && <p className={cls.p}>{p}</p>}
		</div>
	);
};
