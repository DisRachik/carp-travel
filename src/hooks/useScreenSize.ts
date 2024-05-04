import { useEffect, useState } from 'react';

type UseScreenSize = { isMobile: boolean | null };

export function useScreenSize(): UseScreenSize {
	const [isMobile, setIsMobile] = useState<boolean | null>(null);

	useEffect(() => {
		const mobileMediaQuery = window.matchMedia('(max-width: 767px)');
		setIsMobile(mobileMediaQuery.matches);

		const handleMobileChange = (e: MediaQueryListEvent) => {
			setIsMobile(prevState => prevState !== e.matches && e.matches);
		};

		mobileMediaQuery.addEventListener('change', handleMobileChange);

		return () => {
			mobileMediaQuery.removeEventListener('change', handleMobileChange);
		};
	}, [isMobile]);

	return { isMobile };
}
