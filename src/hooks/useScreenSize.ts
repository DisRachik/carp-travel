import { useEffect, useState } from 'react';

type UseScreenSize = { isMobile: boolean | null; isDesktop: boolean | null };

export function useScreenSize(): UseScreenSize {
	const [isMobile, setIsMobile] = useState<boolean | null>(null);
	const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

	useEffect(() => {
		const smallMediaQuery = window.matchMedia('(max-width: 767px)');
		setIsMobile(smallMediaQuery.matches);

		const bigMediaQuery = window.matchMedia('(min-width: 1280px)');
		setIsDesktop(bigMediaQuery.matches);

		const handleSmallChange = () => {
			setIsMobile(prevState => !prevState);
		};
		const handleBigChange = () => {
			setIsDesktop(prevState => !prevState);
		};

		smallMediaQuery.addEventListener('change', handleSmallChange);
		bigMediaQuery.addEventListener('change', handleBigChange);

		return () => {
			smallMediaQuery.removeEventListener('change', handleSmallChange);
			bigMediaQuery.addEventListener('change', handleBigChange);
		};
	}, []);

	return { isMobile, isDesktop };
}
