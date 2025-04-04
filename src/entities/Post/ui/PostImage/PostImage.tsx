import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Image } from 'shared/ui/Image/Image';
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
			<Image images={block.images} className={cls.slider} />
		</section>
	);
});
