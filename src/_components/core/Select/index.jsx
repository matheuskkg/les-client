const Select = ({className, id, name, value, onChange, options}) => {
	return (
		<>
			<select
				className={`form-select ${className} ${value === '' ? 'empty-select' : ''}`}
				id={id}
				name={name}
				value={value}
				onChange={onChange}
			>
				<option value={''} disabled hidden>Selecione</option>


			</select>
		</>
	);
};

export default Select;