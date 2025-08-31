import Button from '@/_components/core/Button'
import Select from '@/_components/core/Select'

const SelectButton = (
	{
		className = '',
		id,
		name,
		value,
		onChange,
		options = [],
		onClick,
		icon,
		variant = 'dark',
	},
) => {
	return (
		<>
			<div className={'input-group'}>
				<Select
					className={className}
					id={id}
					name={name}
					value={value}
					onChange={onChange}
					options={options}
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

export default SelectButton