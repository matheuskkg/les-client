import Button from '@/_components/core/Button'
import SelectMultiple from '@/_components/core/SelectMultiple'

const SelectMultipleButton = (
	{
		className = '',
		id,
		name,
		value,
		onChange,
		options = [],
		size = 1,
		onClick,
		icon,
		variant = 'dark',
	},
) => {
	return (
		<>
			<div className={'input-group'}>
				<SelectMultiple
					className={className}
					id={id}
					name={name}
					value={value}
					onChange={onChange}
					options={options}
					size={size}
				/>
				<Button
					variant={variant}
					icon={icon}
					onClick={onClick}
				/>
			</div>
		</>
	)
}

export default SelectMultipleButton