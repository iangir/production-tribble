import { useCallback, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import NextIcon from 'shared/assets/icons/next.svg';
import CrossIcon from 'shared/assets/icons/cross.svg';
import TextIcon from 'shared/assets/icons/text.svg';
import { PostImageBlock } from 'entities/Post/model/types/postTypes';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Image.module.scss';
import { Text } from '../Text/Text';

interface ImageProps {
	className?: string;
	images: PostImageBlock['images'];
}

export const Image = ({ className, images }: ImageProps) => {
	const [imageIndex, setImageIndex] = useState(0);
	const [fullscreen, setFullscreen] = useState(false);
	const [captionShow, setCaptionShow] = useState(false);

	const showPrevImage = useCallback(() => {
		if (imageIndex === 0) return;
		setImageIndex((index) => index - 1);
	}, [imageIndex]);

	const showNextImage = useCallback(() => {
		if (imageIndex === images.length - 1) return;
		setImageIndex((index) => index + 1);
	}, [imageIndex, images.length]);

	const fullscreenHandler = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setFullscreen(false);
			}
			if (e.key === 'ArrowRight') {
				showNextImage();
			}
			if (e.key === 'ArrowLeft') {
				showPrevImage();
			}
		},
		[showNextImage, showPrevImage],
	);

	useEffect(() => {
		if (fullscreen) {
			document.addEventListener('keydown', fullscreenHandler);
		}
		return () => {
			document.removeEventListener('keydown', fullscreenHandler);
		};
	}, [fullscreen, fullscreenHandler]);

	return (
		<div
			className={classNames(cls.Image, { [cls.fullscreen]: fullscreen }, [
				className,
			])}
		>
			{images.map((img) => (
				<div
					key={img.src}
					className={cls.imageContainer}
					style={{
						translate: `${-100 * imageIndex}%`,
					}}
				>
					<img
						className={cls.bgBlur}
						src={img.src}
						alt="background"
					/>
					{img.caption && (
						<div>
							{captionShow && (
								<Text p={img.caption} className={cls.caption} />
							)}

							<Button
								onClick={() => setCaptionShow((prev) => !prev)}
								className={cls.captionBtn}
								theme={ThemeButton.ICON}
							>
								{captionShow ? <CrossIcon /> : <TextIcon />}
							</Button>
						</div>
					)}
					<figure className={cls.figure}>
						<img
							src={img.src}
							key={img.src}
							alt={img.caption}
							className={cls.image}
							onClick={() => setFullscreen(true)}
						/>
					</figure>
				</div>
			))}
			{images.length > 1 && (
				<div className={cls.dots}>
					<div
						className={cls.dotPointer}
						style={{
							translate: `${200 * imageIndex}%`,
						}}
					/>
					{images.map((_, index) => (
						<div
							key={Math.random()}
							className={classNames(cls.dot, {
								[cls.active]: index === imageIndex,
							})}
							onClick={() => setImageIndex(index)}
						/>
					))}
				</div>
			)}
			{imageIndex > 0 && (
				<Button
					onClick={showPrevImage}
					theme={ThemeButton.ICON}
					className={cls.prevBtn}
				>
					<NextIcon />
				</Button>
			)}
			{imageIndex < images.length - 1 && (
				<Button
					onClick={showNextImage}
					theme={ThemeButton.ICON}
					className={cls.nextBtn}
				>
					<NextIcon />
				</Button>
			)}
			{fullscreen && (
				<Button
					onClick={() => setFullscreen(false)}
					theme={ThemeButton.ICON}
					className={cls.fullscreenBtn}
				>
					<CrossIcon />
				</Button>
			)}
		</div>
	);
};
