'use client';

import { Section, ServicesCard } from '@/components';
import { section } from '@/components/section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import content from '@/data/content.json';
import { useEffect, useState } from 'react';
const { title: sectionName, cards } = content.services;
const cardsName = cards.map(({ id, title }) => ({ id, title }));

const ServicesSection = () => {
	const [currentCard, setCurrentCard] = useState<any>(0);

	return (
		<Section sectionTitle={section.Services} className='py-0'>
			<Swiper effect={'fade'} modules={[EffectFade, Pagination, A11y]} onSwiper={setCurrentCard} className='mySwiper'>
				{cards.map((card, i, arr) => (
					<SwiperSlide key={card.id}>
						<ServicesCard data={cardsName} card={card} sectionName={sectionName} currentCard={i} />
					</SwiperSlide>
				))}
			</Swiper>
		</Section>
	);
};

export default ServicesSection;
