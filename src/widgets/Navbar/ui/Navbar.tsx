import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/index';
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
		<Button onClick={onShowModal} theme={ThemeButton.CLEAR} inverted>
			{t('Sign in')}
		</Button>
	);

	if (authData) {
		authBtn = (
			<Button onClick={onLogout} theme={ThemeButton.CLEAR} inverted>
				{t('Sign out')}
			</Button>
		);
	}

	return (
		<nav className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.container}>
				<ThemeSwitcher />
				<LangSwitcher />
				{authBtn}
				{isAuthModal && (
					<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
				)}
			</div>
		</nav>
	);
};
