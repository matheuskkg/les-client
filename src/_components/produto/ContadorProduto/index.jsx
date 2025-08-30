import Button from '@/_components/core/Button'
import MaskedInput from '@/_components/core/MaskedInput'
import {useState} from 'react'

const ContadorProduto = ({produto}) => {
	const [contagemProduto, setContagemProduto] = useState({
		produto,
		quantidade: '',
	})

	function handleChange(e) {
		const {name, value} = e.target
		setContagemProduto(prev => ({
			...prev,
			[name]: value === '' ? '' : Number(value),
		}))
	}

	function handleMinus() {
		const q = contagemProduto.quantidade
		if (q === '') return
		if (q === 1) {
			handleChange({target: {name: 'quantidade', value: ''}})
		} else {
			handleChange({target: {name: 'quantidade', value: q - 1}})
		}
	}

	function handlePlus() {
		const current = contagemProduto.quantidade === '' ? 0 : contagemProduto.quantidade
		handleChange({target: {name: 'quantidade', value: current + 1}})
	}

	return (
		<>
			<div className="d-flex justify-content-between">
				<Button
					className="col-4"
					variant="dark"
					icon={<i className="bi bi-dash-lg"></i>}
					onClick={handleMinus}
					disabled={contagemProduto.quantidade === ''}
				/>

				<div className={'col-3 mx-2'}>
					<MaskedInput
						name={'quantidade'}
						className={'text-center'}
						value={contagemProduto.quantidade}
						onChange={handleChange}
						placeholder={'-'}
						pattern={'^([1-9]\\d*)?$'}
					/>
				</div>

				<Button
					className={'col-4'}
					variant={'dark'}
					icon={<i className="bi bi-plus-lg"></i>}
					onClick={handlePlus}
				/>
			</div>
		</>
	)
}

export default ContadorProduto