import { memo, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';
import CopySuccessIcon from 'shared/assets/icons/copy-success.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { PostCodeBlock } from '../../model/types/postTypes';
import cls from './PostCode.module.scss';

interface PostCodeProps {
	className?: string;
	block: PostCodeBlock;
}

export const PostCode = memo(({ className, block }: PostCodeProps) => {
	const [clicked, setClicked] = useState(false);

	const copyBtnHandler = () => {
		navigator.clipboard.writeText(block.body);
		setClicked(true);
		setTimeout(() => setClicked(false), 1500);
	};

	return (
		<section className={classNames(cls.PostCode, {}, [className])}>
			<Button
				onClick={copyBtnHandler}
				theme={ThemeButton.ICON}
				className={cls.copyBtn}
			>
				{clicked ? <CopySuccessIcon /> : <CopyIcon />}
			</Button>
			<pre className={cls.pre}>
				<code className={cls.code}>{block.body}</code>
			</pre>
		</section>
	);
});
