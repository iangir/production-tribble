import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import HamburgerIcon from 'shared/assets/icons/hamburger.svg';
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
	className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(true);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};
	return (
		<aside
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<Button
				onClick={onToggle}
				theme={ThemeButton.ICON}
				inverted
				data-testid="sidebar-toggle"
				type="button"
				className={cls.toggleBtn}
			>
				<HamburgerIcon />
			</Button>

			<div>
				{SidebarItemsList.map((item) => (
					<SidebarItem
						item={item}
						collapsed={collapsed}
						key={item.path}
					/>
				))}
			</div>
		</aside>
	);
};
