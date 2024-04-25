'use client';

import { Link } from 'react-scroll';

export interface INavItemProps {
	id: number;
	title: string;
}

const NavItem = ({ id, title }: INavItemProps) => {
	return (
		<li key={id} className='flex h-full items-center'>
			<Link
				to={title}
				smooth={true}
				duration={500}
				href='/'
				className='text-lg tracking-widest first-letter:uppercase md:text-sm'
			>
				{title}
			</Link>
		</li>
	);
};

export default NavItem;
