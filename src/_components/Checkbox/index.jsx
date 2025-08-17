const Checkbox = ({id, value, onChange}) => {
	return (
		<>
			<input
				id={id}
				type={'checkbox'}
				className={'form-check-input'}
				value={value}
				onChange={onChange}/>
		</>
	);
};

export default Checkbox;