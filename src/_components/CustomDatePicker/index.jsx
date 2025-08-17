import DatePicker from "react-datepicker";
import { parse, format } from "date-fns"

const CustomDatePicker = (
	{
		id,
		className,
		placeholder,
		value,
		onChange,
		maxDate = new Date()
	}) => {
	const parseInputDate = (str) => {
		if (!str) return null;
		const d = parse(str, "dd/MM/yyyy", new Date());
		return isNaN(d) ? null : d;
	};

	const selectedDate =
		value instanceof Date
			? value
			: parseInputDate(value);

	const handleChange = (date) => {
		const capped = date && date > maxDate ? maxDate : date;
		onChange({
			target: {
				id,
				value: capped
			}
		});
	};

	const handleRawChange = (e) => {
		const raw = e.target.value;
		let outValue = raw;
		if (/^\d{2}\/\d{2}\/\d{4}$/.test(raw)) {
			const parsed = parse(raw, "dd/MM/yyyy", new Date());
			if (!isNaN(parsed) && parsed > maxDate) {
				outValue = format(maxDate, "dd/MM/yyyy");
			}
		}
		onChange({
			target: {
				id,
				value: outValue
			}
		});
	};

	return (
		<>
			<DatePicker
				id={id}
				className={`form-control ${className}`}
				wrapperClassName={'form-control'}
				placeholderText={placeholder}
				dateFormat={'dd/MM/yyyy'}
				selected={selectedDate}
				onChange={handleChange}
				onChangeRaw={handleRawChange}
				maxDate={maxDate}
				peekNextMonth={false}
				showYearDropdown={true}
				scrollableYearDropdown={true}
			/>
		</>
	);
};

export default CustomDatePicker;