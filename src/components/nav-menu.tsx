'use client';

import { NavItem, BurgerMenuBtn } from '@/components';
import { sectionName } from '@/constants';
import clsx from 'clsx';
import { useState } from 'react';

const NavMenu = () => {
	const [isMobileOpen, setIsMobileOpen] = useState(false);

	const toggleMobileMenu = () => setIsMobileOpen(prevState => !prevState);

	return (
		<nav
			className={clsx(
				isMobileOpen &&
					'bg-mobMenu/75 absolute right-0 top-0 min-h-dvh w-dvw px-5 py-11 text-right backdrop-blur-[25px]',
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
						<NavItem key={id} id={id} title={title} />
					))}
				</ul>
			</div>
		</nav>
	);
};

export default NavMenu;
