import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { InputTerminal } from 'shared/ui/Input/InputTerminal/InputTerminal';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	const [term, setTerminal] = useState('');

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Input
				onChange={(value) => setEmail(value)}
				value={email}
				className={cls.input}
				type="text"
				placeholder={t('Email')}
			/>
			<Input
				className={cls.input}
				type="text"
				placeholder={t('Password')}
			/>
			<InputTerminal
				value={term}
				onChange={(value) => setTerminal(value)}
				label={t('Terminal')}
				autofocus
			/>
			<Button theme={ThemeButton.OUTLINE}>{t('Войти')}</Button>
		</div>
	);
};
