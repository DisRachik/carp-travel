export interface IHtmlElFactoryProps {
	elementName: string;
	className?: string;
	children: React.ReactNode;
	idAnchor?: string;
}

const HtmlElFactory: React.FC<IHtmlElFactoryProps> = ({ elementName, className, children, idAnchor }) => {
	switch (elementName) {
		case 'h1':
			return <h1 className={className}>{children}</h1>;
		case 'h2':
			return <h2 className={className}>{children}</h2>;
		case 'span':
			return <span className={className}>{children}</span>;
		case 'section':
			return (
				<section id={idAnchor} className={className}>
					{children}
				</section>
			);
		case 'footer':
			return (
				<footer id={idAnchor} className={className}>
					{children}
				</footer>
			);

		default:
			return null;
	}
};

export default HtmlElFactory;
