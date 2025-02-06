import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/index';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);
	const dispatch = useDispatch();

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	useEffect(() => {
		onCloseModal();
	}, [authData, onCloseModal]);

	let authBtn = (
		<Button onClick={onShowModal} theme={ThemeButton.CLEAR_INVERTED}>
			{t('Sign in')}
		</Button>
	);

	if (authData) {
		authBtn = (
			<Button onClick={onLogout} theme={ThemeButton.CLEAR_INVERTED}>
				{t('Sign out')}
			</Button>
		);
	}

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
					{t('Main page')}
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
					{t('About')}
				</AppLink>
				<div className={cls.switchers}>
					<ThemeSwitcher />
					<LangSwitcher />
				</div>
				{authBtn}
				<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
			</div>
		</div>
	);
};
