const SelectMultiple = (
	{
		className = '',
		id,
		name,
		value,
		onChange,
		options = [],
		size = 1,
	},
) => {
	const selectOptions = options.map((option) =>
		<option key={option.value} value={option.value}>{option.text}</option>,
	)

	return (
		<>
			<select
				multiple
				size={size}
				className={`form-select ${className} ${value === '' ? 'empty-select' : ''}`}
				id={id}
				name={name}
				value={value}
				onChange={onChange}
			>
				<option value={''} disabled hidden>Selecione</option>
				{selectOptions}
			</select>
		</>
	)
}

export default SelectMultiple
