import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
	DEFAULT = 'default',
	ERROR = 'error',
}

export enum TextAlign {
	RIGHT = 'right',
	CENTER = 'center',
	LEFT = 'left',
}

interface TextProps {
	className?: string;
	title?: string;
	p?: string;
	theme?: TextTheme;
	align?: TextAlign;
}

export const Text = (props: TextProps) => {
	const {
		className,
		title,
		p,
		theme = TextTheme.DEFAULT,
		align = TextAlign.LEFT,
	} = props;

	return (
		<>
			{title && (
				<p
					className={classNames(cls.title, {}, [
						className,
						cls[theme],
						cls[align],
					])}
				>
					{title}
				</p>
			)}
			{p && (
				<p
					className={classNames(cls.p, {}, [
						className,
						cls[theme],
						cls[align],
					])}
				>
					{p}
				</p>
			)}
		</>
	);
};
