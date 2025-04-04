import { memo } from 'react';
import { PostTextBlock } from 'entities/Post/model/types/postTypes';
import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PostText.module.scss';

interface PostTextProps {
	className?: string;
	block: PostTextBlock;
}

export const PostText = memo(({ className, block }: PostTextProps) => (
	<section className={classNames(cls.PostText, {}, [className])}>
		{block.body.map((p) => (
			<Text p={p} key={Math.random()} />
		))}
	</section>
));
