import Image from 'next/image';
import { Container, NavMenu } from '@/components';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='absolute left-0 top-0 w-full pt-9 md:pt-[25px] xl:pt-6'>
			<Container className='flex justify-between'>
				<Link href='/' aria-label='brand logo'>
					<Image src='/logo.svg' alt='logo company CarpTravel' width={61} height={34} priority />
				</Link>
				<NavMenu />
			</Container>
		</header>
	);
};

export default Header;
