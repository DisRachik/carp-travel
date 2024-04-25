import Image from 'next/image';
import { Container, NavMenu } from '@/components';

const Header = () => {
	return (
		<header className='pb-12 pt-6'>
			<Container className='flex justify-between'>
				<Image src='/logo.svg' alt='logo company CarpTravel' width={61} height={34} priority />
				<NavMenu />
			</Container>
		</header>
	);
};

export default Header;
