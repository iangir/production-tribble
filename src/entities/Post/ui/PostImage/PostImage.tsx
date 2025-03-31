import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Slider } from 'shared/ui/Slider/Slider';
import { PostImageBlock } from '../../model/types/postTypes';
import cls from './PostImage.module.scss';

interface PostImageProps {
	className?: string;
	block: PostImageBlock;
}

export const PostImage = memo(({ className, block }: PostImageProps) => {
	const a = 1;
	return (
		<section className={classNames(cls.PostImage, {}, [className])}>
			<Slider images={block.src} className={cls.slider} />
			<Text p={'Images'} align={TextAlign.CENTER} />
		</section>
	);
});
