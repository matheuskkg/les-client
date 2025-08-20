'use client'

import {DatePicker} from 'antd'
import dayjs from 'dayjs'

const CustomDatePicker = (
	{
		id,
		name,
		className,
		placeholder,
		value,
		onChange,
		maxDate = new Date(),
	},
) => {
	return (
		<>
			<DatePicker
				id={id}
				name={name}
				className={`form-control ${className}`}
				placeholder={placeholder}
				maxDate={dayjs(maxDate)}
				format={{
					format: 'DD/MM/YYYY',
					type: 'mask',
				}}
				value={value}
				onChange={(date, dateString) => {
					onChange({
						target: {name, value: date || ''},
					})
				}}
			/>
		</>
	)
}

export default CustomDatePicker