import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button
			onClick={toggle}
			theme={ThemeButton.CLEAR}
			className={classNames(cls.LangSwitcher, {}, [className])}
			title={t('Change language')}
		>
			{t('Language')}
		</Button>
	);
};
