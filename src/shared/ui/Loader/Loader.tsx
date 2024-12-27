import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
	className?: string;
}
export const Loader = ({ className = 'loader-size-m' }: LoaderProps) => {
	return <div className={classNames('loader', {}, [className])}></div>;
};
