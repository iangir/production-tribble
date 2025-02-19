import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
	item: SidebarItemType;
	collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
	const { t } = useTranslation();

	return (
		<AppLink to={item.path} className={cls.item}>
			{item.Icon && (
				<item.Icon
					className={classNames(cls.icon)}
					aria-label={item.text}
				/>
			)}

			<span
				className={classNames(cls.link, { [cls.collapsed]: collapsed })}
			>
				{t(item.text)}
			</span>
		</AppLink>
	);
});
