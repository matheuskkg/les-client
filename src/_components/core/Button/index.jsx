const Button = ({type = 'button', className = '', variant, onClick, icon, text}) => {
	return (
		<>
			<button type={type} className={`btn btn-${variant} ${className}`} onClick={onClick}>{icon} {text}</button>
		</>
	);
};

export default Button;