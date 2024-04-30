'use client';

import Image from 'next/image';
import clsx from 'clsx';
import styles from './services-card.module.css';
import { useSwiper, useSwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import 'swiper/css/effect-fade';
import Title from './title';
import { section } from './section';

interface Card {
	id: string;
	title: string;
	action: string;
	description: string;
	image: string;
	background: string;
}

export interface IServicesCardProps {
	data: Array<Pick<Card, 'id' | 'title'>>;
	card: Card;
	currentCard: number;
	sectionName: string;
}

const ServicesCard: React.FC<IServicesCardProps> = ({ data, card, currentCard, sectionName }) => {
	const { title, action, description, image } = card;
	const swiper = useSwiper();

	return (
		<div className={clsx('h-[851px] py-14 md:h-[621px] xl:h-[779px]', styles[`bg-services__${currentCard + 1}`])}>
			<div className='container h-auto'>
				<Title sectionName={section.Services} elementName='h2' className=' mb-3'>
					{sectionName}
				</Title>
				<p className='mb-3 text-right text-[43px] font-thin'>
					0{currentCard + 1}/<span className=' text-white/20'>0{data.length}</span>
				</p>
				<Image src={image} alt={title} width={280} height={213} className='mb-3 w-full' />
				<p className='mb-6 text-right text-xs/6 font-extralight tracking-[2.4px]'>{action}</p>

				<ul className='mb-8 space-y-3'>
					{data.map(({ id, title }, i) => (
						<li key={id}>
							<button
								type='button'
								onClick={() => swiper.slideTo(i)}
								className={clsx(
									'relative max-w-52 text-left text-xl font-extralight uppercase leading-[0.85]',
									currentCard === i && styles['card-item'],
									currentCard === i && 'px-[16.48px] font-medium',
								)}
							>
								{title}
							</button>
						</li>
					))}
				</ul>
				<p className='inline-flex min-h-[120px] items-end text-sm font-extralight'>{description}</p>
			</div>
		</div>
	);
};

export default ServicesCard;
