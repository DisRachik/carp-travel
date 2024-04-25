'use client';

import { NavItem, BurgerMenuBtn } from '@/components';
import { sectionName } from '@/constants';
import { useScreenSize } from '@/hooks';
import { useState } from 'react';

const NavMenu = () => {
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const { isMobile } = useScreenSize();

	const toggleMobileMenu = () => setIsMobileOpen(prevState => !prevState);

	return (
		<>
			{isMobile === null ? null : isMobile ? (
				<BurgerMenuBtn isOpen={isMobileOpen} onClick={toggleMobileMenu} />
			) : (
				<nav>
					<ul className='flex h-full md:gap-6 xl:gap-14'>
						{sectionName.map(({ id, title }) => (
							<NavItem key={id} id={id} title={title} />
						))}
					</ul>
				</nav>
			)}
		</>
	);
};

export default NavMenu;
