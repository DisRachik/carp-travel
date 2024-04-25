import { useEffect, useState } from 'react';

type UseScreenSize = { isMobile: boolean | null };

export function useScreenSize(): UseScreenSize {
	const [isMobile, setIsMobile] = useState<boolean | null>(null);

	useEffect(() => {
		const smallMediaQuery = window.matchMedia('(max-width: 767px)');
		setIsMobile(smallMediaQuery.matches);

		const handleSmallChange = () => {
			setIsMobile(prevState => !prevState);
		};

		smallMediaQuery.addEventListener('change', handleSmallChange);

		return () => {
			smallMediaQuery.removeEventListener('change', handleSmallChange);
		};
	}, []);

	return { isMobile };
}
