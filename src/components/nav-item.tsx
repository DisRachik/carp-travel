'use client';

import { Link } from 'react-scroll';

export interface INavItemProps {
	id: number;
	title: string;
}

const NavItem = ({ id, title }: INavItemProps) => {
	return (
		<li key={id} className='items-center md:flex md:h-full'>
			<Link to={title} smooth={true} duration={500} href='/' className='text-lg capitalize tracking-widest md:text-sm'>
				{title}
			</Link>
		</li>
	);
};

export default NavItem;
