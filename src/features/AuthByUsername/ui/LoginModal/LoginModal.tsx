import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { AsyncLoginForm } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
	<Modal
		className={classNames(cls.LoginModal, {}, [className])}
		isOpen={isOpen}
		onClose={onClose}
		lazy
	>
		<Suspense fallback={<Loader />}>
			<AsyncLoginForm />
		</Suspense>
	</Modal>
);
