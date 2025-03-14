import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();
	const reloadPage = () => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};
	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<Text title={t('Something went wrong')} theme={TextTheme.ERROR} />
			<Button onClick={reloadPage}>{t('Refresh')}</Button>
		</div>
	);
};
