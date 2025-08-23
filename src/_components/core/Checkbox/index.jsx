const Checkbox = ({id, name, value, onChange}) => {
	return (
		<>
			<input
				id={id}
				name={name}
				type={'checkbox'}
				className={'form-check-input'}
				checked={value}
				onChange={onChange}
			/>
		</>
	)
}

export default Checkbox