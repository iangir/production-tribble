import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Icon from 'shared/assets/icons/next.svg';
import Cross from 'shared/assets/icons/cross.svg';
import cls from './Slider.module.scss';
import { Button, ThemeButton } from '../Button/Button';

interface SliderProps {
	className?: string;
	images: { src: string; title: string }[];
}

export const Slider = ({ className, images }: SliderProps) => {
	const [imageIndex, setImageIndex] = useState(0);
	const [fullscreen, setFullscreen] = useState(false);
	const showPrevImage = () => {
		if (imageIndex === 0) return;
		setImageIndex((index) => index - 1);
	};

	const showNextImage = () => {
		if (imageIndex === images.length - 1) return;
		setImageIndex((index) => index + 1);
	};

	const fullscreenHandler = () => {
		setFullscreen(false);
	};

	let minHeight = 400;
	const setHeight = (e: number) => {
		minHeight = e;
	};

	return (
		<div
			className={cls.sliderContainer}
			style={{ minHeight: `${minHeight}px` }}
		>
			<div
				className={classNames(
					cls.Slider,
					{ [cls.fullscreen]: fullscreen },
					[className],
				)}
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
						<figure className={cls.figure}>
							<img
								src={img.src}
								key={img.src}
								alt={img.title}
								className={cls.image}
								onClick={() => setFullscreen(true)}
								onLoad={(e) => setHeight(e.currentTarget.height)}
							/>
						</figure>
					</div>
				))}
				<div className={cls.dots}>
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
				{imageIndex > 0 && (
					<Button
						onClick={showPrevImage}
						theme={ThemeButton.ICON}
						className={cls.prevBtn}
					>
						<Icon />
					</Button>
				)}
				{imageIndex < images.length - 1 && (
					<Button
						onClick={showNextImage}
						theme={ThemeButton.ICON}
						className={cls.nextBtn}
					>
						<Icon />
					</Button>
				)}
				{fullscreen && (
					<Button
						onClick={fullscreenHandler}
						theme={ThemeButton.ICON}
						className={cls.fullscreenBtn}
					>
						<Cross />
					</Button>
				)}
			</div>
		</div>
	);
};
