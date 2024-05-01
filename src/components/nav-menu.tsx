'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useScreenSize } from '@/hooks';
import { sectionName } from '@/constants';
import { NavItem, BurgerMenuBtn } from '@/components';

const NavMenu = () => {
	const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
	const { isMobile } = useScreenSize();

	useEffect(() => {
		!isMobile && setIsMobileOpen(false);
	}, [isMobile]);

	const toggleMobileMenu = () => setIsMobileOpen(prevState => !prevState);

	return (
		<nav
			className={clsx(
				isMobileOpen &&
					'absolute right-0 top-0 min-h-dvh w-full bg-mobMenu/75 px-5 py-11 text-right backdrop-blur-[25px]',
			)}
		>
			<div className={clsx('h-full', isMobileOpen && 'container space-y-[110px]')}>
				<BurgerMenuBtn isOpen={isMobileOpen} onClick={toggleMobileMenu} />
				<ul
					className={clsx(
						'md:flex md:h-full md:gap-6 xl:gap-14',
						!isMobileOpen && 'hidden',
						isMobileOpen && 'space-y-12 text-center',
					)}
				>
					{sectionName.map(({ id, title }) => (
						<NavItem key={id} id={id} title={title} onClick={toggleMobileMenu} isMobileOpen={isMobileOpen} />
					))}
				</ul>
			</div>
		</nav>
	);
};

export default NavMenu;
