import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import LightIcon from 'shared/assets/icons/sun-icon.svg';
import DarkIcon from 'shared/assets/icons/moon-icon.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
	className?: string;
}
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button
			onClick={toggleTheme}
			theme={ThemeButton.ICON}
			inverted
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			title={`Change to ${
				theme === Theme.LIGHT ? 'dark' : 'light'
			} theme`}
		>
			{theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
		</Button>
	);
});
