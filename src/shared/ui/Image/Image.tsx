import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Image.module.scss';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	className?: string;
}

export const Image = ({ className, src, alt }: ImageProps) => {
	return (
		<img
			src={src}
			alt={alt}
			className={classNames(cls.Image, {}, [className])}
		/>
	);
};
