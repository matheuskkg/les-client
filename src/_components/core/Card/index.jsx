import React from 'react'

const Card = ({children, className}) => {
	return (
		<>
			<div className={`card ${className}`}>
				{children}
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
Card.Footer = Footer;

export default Card;