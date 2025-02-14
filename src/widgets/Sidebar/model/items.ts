import React, { SVGProps } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import UserIcon from 'shared/assets/icons/user.svg';

export interface SidebarItemType {
	path: string;
	text: string;
	Icon?:
		| React.VFC<React.SVGProps<SVGSVGElement>>
		| React.VFC<SVGProps<SVGAElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
	{
		path: RoutePath.main,
		text: 'Home page',
		Icon: HomeIcon,
	},
	{
		path: RoutePath.profile,
		text: 'Profile',
		Icon: UserIcon,
	},
];
