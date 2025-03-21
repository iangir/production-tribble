import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
	className?: string;
	height?: string;
	width?: string;
	borderRadius?: string;
}

export const Skeleton = (props: SkeletonProps) => {
	const {
		className, height = '100%', width = '100%', borderRadius,
	} = props;

	const styles: React.CSSProperties = {
		height,
		width,
		borderRadius,
	};

	return (
		<div
			className={classNames(cls.Skeleton, {}, [className])}
			style={styles}
		/>
	);
};
