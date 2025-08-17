const Input = ({id, placeholder, type = 'text', value, onChange, className = ''}) => {
	return (
		<>
			<input
				id={id}
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
				className={`form-control ${className}`}
			/>
		</>
	)
}

export default Input;