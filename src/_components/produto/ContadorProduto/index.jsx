import Button from '@/_components/core/Button'
import MaskedInput from '@/_components/core/MaskedInput'
import {useCarrinho} from '@/_utils/CarrinhoContext'
import {useState} from 'react'

const ContadorProduto = ({produto, min = 0}) => {
	const {adicionar, remover, buscarItemPorProduto} = useCarrinho()
	const itemExistente = buscarItemPorProduto(produto)
	const [contagemProduto, setContagemProduto] = useState(itemExistente || {
		produto,
		quantidade: '',
	})

	function atualizarCarrinho(next) {
		if (next.quantidade === '' || Number(next.quantidade) <= 0) {
			remover(next)
		} else {
			adicionar(next)
		}
	}

	function handleChange(e) {
		const {name, value} = e.target

		if (value < min) {
			return
		}

		setContagemProduto(prev => {
			const next = {
				...prev,
				[name]: value === '' ? '' : Number(value),
			}
			atualizarCarrinho(next)
			return next
		})
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
					disabled={contagemProduto.quantidade === '' || contagemProduto.quantidade === min}
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