export interface IQASessionProps {
	issue: {
		thesis: string;
		argument: string;
	};
}

const QASession = ({ issue: { thesis, argument } }: IQASessionProps) => {
	return (
		<>
			<h3 className='text-sm md:-ml-1 md:text-base/5 xl:ml-0 xl:basis-1/2 xl:text-lg/6'>{thesis}</h3>
			<p className='text-xs/5 font-extralight xl:basis-1/2 xl:text-left xl:leading-6'>{argument}</p>
		</>
	);
};

export default QASession;
