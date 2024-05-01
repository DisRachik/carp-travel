'use client';

import clsx from 'clsx';
import { useSwiper } from 'swiper/react';
import { SliderNavButton } from '@/components';

export interface IGalleryNavigationProps {
	className?: string;
}

const GalleryNavigation = ({ className }: IGalleryNavigationProps) => {
	const swiper = useSwiper();

	return (
		<>
			<SliderNavButton onClick={() => swiper.slidePrev()} className={clsx('left-[37px] xl:left-52', className)}>
				BACK
			</SliderNavButton>
			<SliderNavButton onClick={() => swiper.slideNext()} className={clsx('right-[37px] xl:right-52', className)}>
				NEXT
			</SliderNavButton>
		</>
	);
};

export default GalleryNavigation;
