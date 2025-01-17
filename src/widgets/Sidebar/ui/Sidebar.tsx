import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(true);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};
	return (
		<div
			data-testid='sidebar'
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<Button
				theme={ThemeButton.DEFAULT}
				data-testid='sidebar-toggle'
				onClick={onToggle}
				type='button'
			>
				TOGGLE
			</Button>
		</div>
	);
};
