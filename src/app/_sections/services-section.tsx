'use client';

import { Section, ServicesCard } from '@/components';
import { section } from '@/components/section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import content from '@/data/content.json';
import { useEffect, useState } from 'react';
import { useScreenSize } from '@/hooks';
const { title: sectionName, cards } = content.services;
const cardsName = cards.map(({ id, title }) => ({ id, title }));

const ServicesSection = () => {
	const [_, setCurrentCard] = useState<any>(0);

	return (
		<Section sectionTitle={section.Services} className='pb-0 pt-0 md:pb-0 md:pt-0 xl:pb-0 xl:pt-0'>
			<Swiper effect={'fade'} modules={[EffectFade, Pagination, A11y]} onSwiper={setCurrentCard} className='mySwiper'>
				{cards.map((card, i, arr) => (
					<SwiperSlide key={card.id}>
						<ServicesCard
							data={cardsName}
							card={card}
							sectionName={sectionName}
							currentCard={i}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</Section>
	);
};

export default ServicesSection;
