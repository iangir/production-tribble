import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/index';
import { BugButton } from 'app/providers/ErrorBoundary';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const { theme } = useTheme();

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
					{t('Главная')}
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
					{t('О сайте')}
				</AppLink>
				<div className={cls.switchers}>
					<ThemeSwitcher />
					<LangSwitcher />
				</div>
				<Button
					onClick={onToggleModal}
					theme={ThemeButton.CLEAR_INVERTED}
				>
					{t('Войти')}
				</Button>
				<Modal isOpen={isAuthModal} onClose={onToggleModal}>
					{'asddddddddddddd'}
				</Modal>
			</div>
		</div>
	);
};
