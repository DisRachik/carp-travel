import { Fragment } from 'react';
import clsx from 'clsx';
import content from '@/data/content.json';
import { Section, Container, Title, InfoAboutUs } from '@/components';
import { section } from '@/components/section';

const { title, text, motto } = content.about;

const AboutSection = () => {
	return (
		<Section sectionTitle={section.About} className='xl:pb-[104px] xl:pt-[106px]'>
			<Container className='grid grid-cols-[3,_minmax(90px,_1fr)] gap-y-5 md:grid-cols-[3,_minmax(221px,_1fr)] md:gap-y-4 xl:grid-cols-[minmax(605px,_1fr),_minmax(292px,_1fr),_minmax(297px,_1fr)] xl:gap-6'>
				<Title
					sectionName={section.About}
					elementName='h2'
					className='col-span-3 md:order-1 md:col-span-2 xl:col-span-1'
				>
					{title}
				</Title>
				<InfoAboutUs
					numberHighlightedWords={4}
					className='col-span-2 mt-[-15px] w-[180px] md:order-2 md:col-span-1 md:mt-3 md:w-[221px] md:justify-self-end xl:col-start-2 xl:w-full'
				>
					{text[0]}
				</InfoAboutUs>
				<InfoAboutUs
					numberHighlightedWords={2}
					className='col-span-2 w-[180px] md:order-4 md:col-span-1 md:col-start-3 md:w-[221px] md:justify-self-end xl:col-start-2 xl:w-full'
				>
					{text[1]}
				</InfoAboutUs>
				<div className='col-span-2 col-start-2 flex w-[180px] flex-col justify-self-end py-5 md:order-3 md:col-span-1 md:col-start-1 md:w-[221px] md:self-end md:justify-self-start md:p-0 xl:order-6 xl:col-start-3 xl:ml-[-1px] xl:w-full'>
					{motto.map((item, el) => {
						const wordsLength: number = item.split(' ').length;
						return (
							<Fragment key={el}>
								<InfoAboutUs
									numberHighlightedWords={el === motto.length - 1 ? 0 : wordsLength}
									className={clsx(
										'uppercase',
										(el + 1) / 2 === 1 && 'text-right',
										el === motto.length - 1 && 'lowercase tracking-[-0.14px] md:tracking-[0.32px] xl:tracking-[2.16px]',
									)}
								>
									{item.trim()}
								</InfoAboutUs>
							</Fragment>
						);
					})}
				</div>
				<InfoAboutUs
					numberHighlightedWords={3}
					className='col-span-3 md:order-5 md:col-span-2 md:col-start-2 md:mt-12 xl:col-span-1 xl:col-start-1'
				>
					{text[2]}
				</InfoAboutUs>
			</Container>
		</Section>
	);
};

export default AboutSection;
