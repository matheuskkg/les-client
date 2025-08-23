const Input = ({id, name, placeholder, type = 'text', value, onChange, className = ''}) => {
	return (
		<>
			<input
				id={id}
				name={name}
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