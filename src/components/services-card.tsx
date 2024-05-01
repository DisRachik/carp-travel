'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { useSwiper } from 'swiper/react';
import 'swiper/css/effect-fade';
import styles from '@/styles/services-card.module.css';
import { section } from '@/components/section';
import { Title } from '@/components';

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
			<div className='container h-auto md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-6 xl:grid-cols-[minmax(607px,_1fr),_minmax(293px,_1fr),_minmax(293px,_1fr)] xl:gap-y-5'>
				<Title
					sectionName={section.Services}
					elementName='h2'
					className='mb-3 md:order-1 md:col-span-2 md:mb-0 xl:col-span-1'
				>
					{sectionName}
				</Title>
				<p className='mb-3 text-right text-[43px] font-thin md:order-2 md:mb-0 md:text-start md:text-[67px] md:leading-[78px] xl:text-[98px]/tight'>
					0{currentCard + 1}/<span className=' text-white/20'>0{data.length}</span>
				</p>
				<Image
					src={image}
					alt={title}
					width={280}
					height={213}
					className='mb-3 w-full md:order-3 md:col-span-2 md:row-span-3 md:mb-0 md:h-[370px] md:w-[463px] xl:col-span-1 xl:col-start-1 xl:row-span-2 xl:h-[429px] xl:w-[607px]'
				/>

				<p className='mb-6 text-right text-xs/6 font-extralight tracking-[2.4px] md:order-5 md:mb-2 md:text-left xl:hidden'>
					{action}
				</p>

				<ul className='mb-8 space-y-3 md:order-4 md:mb-0 xl:col-span-2 xl:space-y-6'>
					{data.map(({ id, title }, i) => (
						<li key={id} className='xl:flex xl:justify-start xl:gap-7'>
							<button
								type='button'
								onClick={() => swiper.slideTo(i)}
								className={clsx(
									'relative max-w-52 text-left text-xl font-extralight uppercase leading-[0.85] md:max-w-full md:text-[22px] md:leading-[0.82] xl:w-72 xl:text-[28px]',
									currentCard === i && styles['card-item'],
									currentCard === i && 'px-[16.48px] font-medium md:px-[14px]',
								)}
							>
								{title}
							</button>
							{currentCard === i && <p className='hidden xl:inline-block'>{action}</p>}
						</li>
					))}
				</ul>
				<p className='inline-flex min-h-[120px] items-end text-sm font-extralight md:order-6 md:text-[13px] xl:col-start-3 xl:row-start-3 xl:min-h-[168px] xl:text-lg/6'>
					{description}
				</p>
			</div>
		</div>
	);
};

export default ServicesCard;
