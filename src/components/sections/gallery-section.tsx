'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import content from '@/data/content.json';
import { useScreenSize } from '@/hooks';
import '@/styles/gallery-section.css';
import { Section, Container, Title, GalleryNavigation } from '@/components';
import { section } from '@/components/section';

const { title, cards } = content.gallery;
const images = [...cards, ...cards];

const GallerySection = () => {
	const { isMobile } = useScreenSize();

	return (
		<Section sectionTitle={section.Gallery}>
			<Container>
				<Title sectionName={section.Gallery} elementName='h2' className='mb-6'>
					{title}
				</Title>

				<Swiper
					className={clsx('h-[633px] md:h-[294px] xl:h-[429px]')}
					direction={isMobile ? 'vertical' : 'horizontal'}
					slidesPerView={3}
					spaceBetween={24}
					loop={true}
					centeredSlides={true}
				>
					{images.map(({ image, alt, id }, itemId) => {
						const key = +id > 3 ? id : itemId;
						return (
							<SwiperSlide key={key} className='relative z-0'>
								{({ isActive }) => (
									<div className='slideContainer relative h-full w-full'>
										<Image src={image} alt={alt} fill className={clsx('')} />
										{!isMobile && (
											<div className={clsx(!isActive && 'wrap-img absolute left-0 top-0 z-10 h-full w-full ')}></div>
										)}
									</div>
								)}
							</SwiperSlide>
						);
					})}
					{!isMobile && <GalleryNavigation className='absolute bottom-0 z-50' />}
				</Swiper>
			</Container>
		</Section>
	);
};

export default GallerySection;
