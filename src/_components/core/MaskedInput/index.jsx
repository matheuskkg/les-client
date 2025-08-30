const MaskedInput = ({id, name, placeholder, type = 'text', value, onChange, className = '', pattern}) => {
	function handleChange(e) {
		if (!pattern) onChange(e)

		const value = typeof e.target.value === 'string' ? e.target.value : String(e.target.value)

		if (!value.match(pattern)) return

		onChange(e)
	}

	return (
		<>
			<input
				id={id}
				name={name}
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={handleChange}
				className={`form-control ${className}`}
			/>
		</>
	)
}

export default MaskedInput