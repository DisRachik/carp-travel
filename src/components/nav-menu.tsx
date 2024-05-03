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
		if (!isMobile) {
			setIsMobileOpen(false);
			document.body.classList.remove('overflow-hidden');
		}
	}, [isMobile]);

	const toggleMobileMenu = () => {
		setIsMobileOpen(prevState => !prevState);
		document.body.classList.toggle('overflow-hidden');
	};

	return (
		<nav
			className={clsx(
				isMobileOpen &&
					'fixed left-0 top-0 h-dvh w-full overflow-y-auto bg-mobMenu/75 px-5 py-11 text-right backdrop-blur-[25px]',
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
