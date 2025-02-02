import React, {
	InputHTMLAttributes,
	memo,
	useState,
	useEffect,
	useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './InputTerminal.module.scss';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	label: string;
	value?: string;
	onChange?: (value: string) => void;
	autofocus?: boolean;
}

export const InputTerminal = memo((props: InputProps) => {
	const {
		className,
		onChange,
		value = '',
		type = 'text',
		label,
		autofocus,
		...otherProps
	} = props;

	const ref = useRef<HTMLInputElement>();
	const [isFocused, setIsFocused] = useState(false);
	const [caretPos, setCaretPos] = useState(0);

	const onBlur = () => {
		setIsFocused(false);
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	const onSelect = (e: any) => {
		setCaretPos(e?.target?.selectionStart || 0);
	};

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true);
			ref.current?.focus();
		}
	}, [autofocus]);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
		setCaretPos(e.target.value.length);
	};

	return (
		<div className={classNames(cls.Input, {}, [className])}>
			<label htmlFor={label} className={cls.label}>
				{`${label}>`}
				<div className={cls.caretWrapper}>
					<input
						value={value}
						onChange={onChangeHandler}
						type={type}
						id={label}
						className={cls.input}
						onFocus={onFocus}
						onBlur={onBlur}
						onSelect={onSelect}
						ref={ref}
						{...otherProps}
					/>
					{isFocused && (
						<span
							className={cls.caret}
							style={{ left: `${caretPos * 8.8}px` }}
						/>
					)}
				</div>
			</label>
		</div>
	);
});
