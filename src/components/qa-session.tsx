export interface IQASessionProps {
	issue: {
		thesis: string;
		argument: string;
	};
}

const QASession = ({ issue: { thesis, argument } }: IQASessionProps) => {
	return (
		<>
			<h3>{thesis}</h3>
			<p>{argument}</p>
		</>
	);
};

export default QASession;
