'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { Section, Container, Title } from '@/components';
import { section } from '@/components/section';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import content from '@/data/content.json';
const { title, cards } = content.gallery;
const images = [...cards, ...cards];

const GallerySection = () => {
	return (
		<Section sectionTitle={section.Gallery} className=''>
			<Container className=''>
				<Title sectionName={section.Gallery} elementName='h2' className='mb-6'>
					{title}
				</Title>

				<Swiper
					className={clsx('h-[633px]', 'mySwiper')}
					direction='vertical'
					slidesPerView={3}
					spaceBetween={24}
					loop={true}
				>
					{images.map(({ image, alt, id }, itemId) => {
						const key = +id > 3 ? id : itemId;
						return (
							<SwiperSlide key={key} className='relative'>
								<Image src={image} alt={alt} fill />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Container>
		</Section>
	);
};

export default GallerySection;
