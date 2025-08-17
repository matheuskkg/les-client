import React from 'react'

const getChildrenOnDisplayName = (children, displayName) => {
	return React.Children.toArray(children).filter(
		(child) =>
			React.isValidElement(child) &&
			child.type &&
			child.type.displayName === displayName
	);
}

const Card = ({children, className}) => {
	const [header] = getChildrenOnDisplayName(children, 'Header');
	const [body] = getChildrenOnDisplayName(children, 'Body');
	const [footer] = getChildrenOnDisplayName(children, 'Footer');

	return (
		<>
			<div className={`card ${className}`}>
				{header}
				{body}
				{footer}
			</div>
		</>
	);
};

const Header = ({children, className}) => {
	return (
		<>
			<div className={`card-header ${className}`}>
				{children}
			</div>
		</>
	);
};
Header.displayName = 'Header';
Card.Header = Header;

const Body = ({children, className}) => {
	return (
		<>
			<div className={`card-body ${className}`}>
				{children}
			</div>
		</>
	);
};
Body.displayName = 'Body';
Card.Body = Body;

const Footer = ({children, className}) => {
	return (
		<>
			<div className={`card-footer ${className}`}>
				{children}
			</div>
		</>
	);
};
Footer.displayName = 'Footer';
Card.Footer = Footer;

export default Card;