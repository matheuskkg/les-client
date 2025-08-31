import React from 'react'

const Card = ({children, className = '', style}) => {
	return (
		<>
			<div className={`card ${className}`} style={style}>
				{children}
			</div>
		</>
	)
}

const Header = ({children, className = '', style}) => {
	return (
		<>
			<div className={`card-header ${className}`} style={style}>
				{children}
			</div>
		</>
	)
}
Card.Header = Header

const Body = ({children, className = '', style}) => {
	return (
		<>
			<div className={`card-body ${className}`} style={style}>
				{children}
			</div>
		</>
	)
}
Card.Body = Body

const Footer = ({children, className = '', style}) => {
	return (
		<>
			<div className={`card-footer ${className}`} style={style}>
				{children}
			</div>
		</>
	)
}
Card.Footer = Footer

export default Card