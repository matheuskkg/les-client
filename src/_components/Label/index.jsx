const Label = ({htmlFor, label, className = '', variant = 'label'}) => {
	return (
		<>
			<label className={`form-${variant} ${className}`} htmlFor={htmlFor}>{label}</label>
		</>
	)
}

export default Label;