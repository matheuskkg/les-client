import Button from '@/_components/core/Button'
import Checkbox from '@/_components/core/Checkbox'
import Select from 'react-select'

const SelectMultiple = (
	{
		id,
		name,
		placeholder,
		value,
		onChange,
		options = [],
	},
) => {
	return (
		<>
			<div className={'input-group w-100'}>
				<Select
					className={'d-flex'}
					classNamePrefix="d-flex rs"
					isMulti
					id={id}
					name={name}
					placeholder={placeholder}
					value={value}
					options={options}
					getOptionValue={(o) => o.id ?? o.value}
					formatOptionLabel={(option) => (
						<div className="d-flex align-items-center">
						<span className="me-2">
							<Checkbox
							/>
						</span>
							{option.descricao}
						</div>
					)}
					styles={{
						control: (base, state) => ({
							...base,
							border: '1px solid #ced4da',
							borderRadius: '0.375rem',
							boxShadow: state.isFocused ? '0 0 0 0.25rem rgba(13, 110, 253, 0.25)' : 'none',
							borderColor: state.isFocused ? '#86b7fe' : '#ced4da',
							minHeight: '38px',
							fontSize: '1rem',
							lineHeight: '1.5',
							color: '#212529',
							backgroundColor: '#fff',
							'&:hover': {
								borderColor: state.isFocused ? '#86b7fe' : '#ced4da',
							},
						}),
						placeholder: (base) => ({
							...base,
							color: '#6c757d',
						}),
						singleValue: (base) => ({
							...base,
							color: '#212529',
						}),
						multiValue: (base) => ({
							...base,
							backgroundColor: '#e9ecef',
							borderRadius: '0.25rem',
						}),
						multiValueLabel: (base) => ({
							...base,
							color: '#495057',
							fontSize: '0.875rem',
						}),
						multiValueRemove: (base) => ({
							...base,
							color: '#6c757d',
							':hover': {
								backgroundColor: '#dee2e6',
								color: '#495057',
							},
						}),
						menu: (base) => ({
							...base,
							border: '1px solid #ced4da',
							borderRadius: '0.375rem',
							boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
						}),
						option: (base, state) => ({
							...base,
							backgroundColor: state.isSelected
								? '#0d6efd'
								: state.isFocused
									? '#f8f9fa'
									: 'white',
							color: state.isSelected ? 'white' : '#212529',
							':active': {
								backgroundColor: state.isSelected ? '#0d6efd' : '#e9ecef',
							},
						}),
						indicatorSeparator: (base) => ({
							...base,
							backgroundColor: '#ced4da',
						}),
						dropdownIndicator: (base) => ({
							...base,
							color: '#6c757d',
							':hover': {
								color: '#495057',
							},
						}),
					}}
				/>
				<Button
					variant={'primary'}
					text={'oi'}
				/>
			</div>
		</>
	)
}

export default SelectMultiple
