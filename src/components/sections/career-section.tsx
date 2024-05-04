import clsx from 'clsx';
import content from '@/data/content.json';
import { Section, Container, Title, QASession, CareerForm } from '@/components';
import { section } from '@/components/section';

const { title, subtitle, text, theses } = content.career;

const CareerSection = () => {
	return (
		<Section sectionTitle={section.Career}>
			<Container className='grid grid-cols-3 gap-9 md:gap-5 xl:grid-cols-[1fr_1fr_290px_292px] xl:gap-x-8 xl:gap-y-[14px]'>
				<Title sectionName={section.Career} elementName='h2' className='col-span-3 md:col-span-2'>
					{title}
				</Title>

				<p className='col-span-2 col-start-2 -mt-3 text-sm font-extralight md:col-span-1 md:col-start-3 md:mt-0 md:pt-2 md:text-justify md:text-[13px]/5 xl:col-start-4 xl:pt-3 xl:text-lg/6'>
					{text[0]}
				</p>

				<p className='col-span-2 col-start-2 text-3xl font-extralight uppercase md:col-span-1 md:col-start-1 md:-mt-2 md:pb-9 md:text-right xl:m-0 xl:p-0 xl:text-4xl xl:leading-[1.084]'>
					{subtitle}
				</p>

				<ul className='col-span-2 space-y-4 text-right md:col-span-1 md:col-start-1 md:row-span-2 md:space-y-6 xl:col-span-2 xl:row-span-1 xl:space-y-[21px]'>
					{theses.map((item, i) => (
						<li
							key={i}
							className={clsx(
								'space-y-2 md:flex md:h-[88px] md:flex-col md:justify-between md:space-y-0 xl:flex xl:h-fit xl:flex-row xl:gap-6',
								i === 1 && 'md:h-[68px]',
							)}
						>
							<QASession issue={item} />
						</li>
					))}
				</ul>

				<p className='col-span-2 col-start-2 mt-28 text-sm font-extralight md:col-span-1 md:mt-0 md:pb-3 md:text-[13px]/5 xl:col-start-3 xl:row-start-2 xl:w-60 xl:text-lg/6'>
					{text[1]}
				</p>

				<CareerForm className='col-span-3 md:col-span-2 xl:row-span-2' />
			</Container>
		</Section>
	);
};

export default CareerSection;
