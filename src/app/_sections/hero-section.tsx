import { Section, Container, Title, ButtonScroll } from '@/components';
import { section } from '@/components/section';

import content from '@/data/content.json';
const { title, slogan, places, text } = content.hero;

const HeroSection = () => {
	return (
		<Section sectionTitle={section.Hero} className='pt-[105px] md:pt-[122px] xl:pb-[104px] xl:pt-[130px]'>
			<Container className='grid grid-cols-2 gap-y-6 md:grid-cols-[1fr_230px] md:gap-y-7 xl:grid-cols-[1fr_295px]'>
				<p className='col-start-2 flex flex-col items-center justify-center md:order-2 md:pb-[31px] xl:pb-[149px]'>
					<Title sectionName={section.Hero} elementName='span' className='flex h-[45px] md:h-[88px] xl:h-[123px]'>
						{slogan[0]}
					</Title>
					<span className='w-[118px] text-xs font-light tracking-[9.48px] md:mt-[-8px] md:w-full md:text-sm md:leading-none md:tracking-[25.9px] xl:text-base xl:tracking-[34px] '>
						{slogan[1]}
					</span>
				</p>
				<Title
					sectionName={section.Hero}
					elementName='h1'
					className='col-start-1 col-end-3 w-[280px] md:order-1 md:col-auto md:row-span-2'
				>
					{title}
				</Title>
				<p className='col-start-1 col-end-3 max-w-40 text-[10px] font-extralight leading-4 md:order-4 md:col-auto md:max-w-72 md:self-end md:text-sm md:leading-4 md:tracking-[1.26px] xl:max-w-full xl:text-base xl:tracking-[1.44px]'>
					{places.join(' / ')}
				</p>
				<p className='col-start-1 col-end-3 max-w-72 text-justify text-sm font-extralight md:order-3 md:col-auto md:text-base md:leading-5 xl:text-lg xl:leading-6'>
					{text}
				</p>
				<ButtonScroll scrollTo={section.Contacts} className='col-start-1 col-end-3 md:order-5 md:col-auto'>
					JOIN NOW
				</ButtonScroll>
			</Container>
		</Section>
	);
};

export default HeroSection;
