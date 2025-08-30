const Button = ({type = 'button', className = '', variant, onClick, icon, text, disabled}) => {
	return (
		<>
			<button type={type} className={`btn btn-${variant} ${className}`} onClick={onClick} disabled={disabled}>{icon} {text}</button>
		</>
	);
};

export default Button;