const Select = ({className, id, value, onChange, options}) => {
	return (
		<>
			<select
				className={`form-select ${className} ${value === '' ? 'empty-select' : ''}`}
				id={id}
				value={value}
				onChange={onChange}
				defaultValue={''}
			>
				<option value={''} disabled hidden>Selecione</option>


			</select>
		</>
	);
};

export default Select;