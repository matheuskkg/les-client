import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

const SolicitarTrocaPedido = ({}) => {
	const [pedido, setPedido] = useState({itens: []})
	const [pedidoTroca, setPedidoTroca] = useState({itens: []})
	const router = useRouter()

	function handleMinus(item) {
		setPedidoTroca(prev => {
			const exists = pedidoTroca.itens.find(i => i.id === item.id)
			if (!exists) return prev

			if (exists.quantidade === 1) return {...prev, itens: prev.itens.filter(i => i.id !== item.id)}

			return {
				...prev,
				itens: prev.itens.map(i => i.id === item.id ? {...i, quantidade: i.quantidade - 1} : i),
			}
		})
	}

	function handlePlus(item) {
		setPedidoTroca(prev => {
			const exists = pedidoTroca.itens.find(i => i.id === item.id)
			if (!exists) {
				return {...prev, itens: [...prev.itens, {...item, quantidade: 1}]}
			}

			return {
				...prev,
				itens: prev.itens.map(i => i.id === item.id ? {...i, quantidade: i.quantidade + 1} : i),
			}
		})
	}

	useEffect(() => {
		//TODO api call
		setPedido({
			id: router.query.id,
			itens: [
				{
					id: 1,
					produto: {
						id: 1,
						nome: 'Livro ABC',
					},
					quantidade: 2,
				},
				{
					id: 2,
					produto: {
						id: 2,
						nome: 'Livro DEF',
					},
					quantidade: 5,
				},
			],
		})
	}, [])

	return (
		<>
			<Card className={'col-12 col-lg-9 col-xxl-6'}>
				<Card.Header className={'bg-dark text-bg-dark'}>
					<h3 className={'my-2'}><i className="bi bi-cart-check"></i> Solicitar troca</h3>
				</Card.Header>

				<Card.Body>
					{pedido.itens.map(item => {
						const itemTroca = pedidoTroca.itens.find(i => i.id === item.id)

						return (
							<div key={item.id}>
								<p className={'m-0'}>Produto: {item.produto.nome}</p>
								<p className={'mb-1'}>Quantidade: {item.quantidade}</p>

								<div className={'mb-3'}>
									<Button
										className={'me-3'}
										variant={'dark'}
										icon={<i className={'bi bi-dash-lg'}></i>}
										text={'Remover da troca'}
										disabled={!itemTroca}
										onClick={() => handleMinus(item)}
									/>

									<Button
										variant={'dark'}
										icon={<i className={'bi bi-plus-lg'}></i>}
										text={'Adicionar na troca'}
										disabled={itemTroca?.quantidade === item.quantidade}
										onClick={() => handlePlus(item)}
									/>
								</div>
							</div>)
					})}

					<hr/>

					<div>
						<h5>Para trocar:</h5>

						{pedidoTroca.itens.map(item => (
							<div key={item.id}>
								<p className={'m-0'}>Produto: {item.produto.nome} - Quantidade: {item.quantidade}</p>
							</div>
						))}
					</div>
				</Card.Body>

				<Card.Footer className={'bg-transparent'}>
					<div className={'d-flex justify-content-end align-items-center'}>
						<Button
							variant={'dark'}
							icon={<i className={'bi bi-check-lg'}></i>}
							text={'Solicitar troca'}
						/>
					</div>
				</Card.Footer>
			</Card>
		</>
	)
}

export default SolicitarTrocaPedido