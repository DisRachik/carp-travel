import { useEffect, useState } from 'react';

type UseScreenSize = { isMobile: boolean | null; isSmall: boolean | null };

export function useScreenSize(): UseScreenSize {
	const [isMobile, setIsMobile] = useState<boolean | null>(null);
	const [isSmall, setIsSmall] = useState<boolean | null>(null);

	useEffect(() => {
		const mobileMediaQuery = window.matchMedia('(max-width: 767px)');
		setIsMobile(mobileMediaQuery.matches);

		const handleMobileChange = () => {
			setIsMobile(prevState => !prevState);
		};

		mobileMediaQuery.addEventListener('change', handleMobileChange);

		return () => {
			mobileMediaQuery.removeEventListener('change', handleMobileChange);
		};
	}, [isMobile]);

	useEffect(() => {
		const smallMediaQuery = window.matchMedia('(max-width: 480px)');
		setIsSmall(smallMediaQuery.matches);

		const handleSmallChange = () => {
			setIsSmall(prevState => !prevState);
		};

		smallMediaQuery.addEventListener('change', handleSmallChange);

		return () => {
			smallMediaQuery.addEventListener('change', handleSmallChange);
		};
	}, [isSmall]);

	return { isMobile, isSmall };
}
