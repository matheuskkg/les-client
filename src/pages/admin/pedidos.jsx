import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import {formatarBRL} from '@/_utils/Format'
import {Modal} from 'antd'
import {useEffect, useState} from 'react'
import styles from '@/_assets/css/DivTable.module.css'

const textoBotoesStatusPadrao = {
	'Em processamento': 'Enviar para entrega',
	'Em trânsito': 'Confirmar entrega',
}

const textoBotoesStatusTroca = {
	'Em troca': 'Autorizar troca',
	'Troca autorizada': 'Finalizar',
}

const ConsultarPedidosAdmin = ({}) => {
	const [pedidosFluxoPadrao, setPedidosFluxoPadrao] = useState([])
	const [pedidosFluxoTroca, setPedidosFluxoTroca] = useState([])
	const [modalFinalizarTroca, setModalFinalizarTroca] = useState({
		isOpen: false,
		pedido: {},
	})

	function alterarStatusPadrao(pedido) {
		const pedidoAlt = pedidosFluxoPadrao.find(p => p.id === pedido.id)

		if (pedidoAlt.status === 'Em processamento') {
			pedidoAlt.status = 'Em trânsito'
		} else if (pedidoAlt.status === 'Em trânsito') {
			setPedidosFluxoPadrao(pedidosFluxoPadrao.filter(p => p.id !== pedidoAlt.id))
			return
		}

		setPedidosFluxoPadrao(pedidosFluxoPadrao.map(p => p.id !== pedidoAlt.id ? p : pedidoAlt))
	}

	function alterarStatusTroca(pedido) {
		const pedidoAlt = pedidosFluxoTroca.find(p => p.id === pedido.id)

		if (pedidoAlt.status === 'Em troca') {
			pedidoAlt.status = 'Troca autorizada'
		} else if (pedidoAlt.status === 'Troca autorizada') {
			setModalFinalizarTroca({isOpen: true, pedido: pedidoAlt})
		}

		setPedidosFluxoTroca(pedidosFluxoTroca.map(p => p.id !== pedidoAlt.id ? p : pedidoAlt))
	}

	function finalizarTroca(deveRetornarAoEstoque) {
		setPedidosFluxoTroca(pedidosFluxoTroca.filter(p => p.id !== modalFinalizarTroca.pedido.id))
		setModalFinalizarTroca({isOpen: false, pedido: {}})

		//TODO api call
	}

	useEffect(() => {
		//TODO api call
		setPedidosFluxoPadrao([
			{
				id: 1,
				itens: [
					{id: 1},
					{id: 2},
					{id: 3},
				],
				totalItensUnicos: 3,
				totalItens: 7,
				valor: 12712.50,
				status: 'Em processamento',
			},
			{
				id: 2,
				itens: [
					{id: 1},
					{id: 2},
					{id: 3},
				],
				totalItensUnicos: 3,
				totalItens: 7,
				valor: 127.50,
				status: 'Em processamento',
			},
		])
		setPedidosFluxoTroca([
			{
				id: 1,
				produto: {
					id: 1,
					nome: 'Livro A',
				},
				quantidade: 2,
				usuario: {
					id: 1,
					nome: 'Usuário A',
				},
				status: 'Em troca',
			},
		])
	}, [])

	return (
		<>
			{/*TODO criar componente próprio*/}
			<Card className={'col-12'}>
				<Card.Header className={'bg-dark text-bg-dark'}>
					<h2 className={'my-2'}>Pedidos</h2>

					<div className={`${styles.header} my-2`}>
						<span>Total de itens únicos</span>
						<span>Total de produtos</span>
						<span>Valor do pedido</span>
						<span>Status</span>
						<span>Ações</span>
					</div>
				</Card.Header>

				<Card.Body>
					<div style={{height: 400, overflowY: 'auto'}}>
						<div className={'w-100'}>
							{pedidosFluxoPadrao.map(p => (
								<div key={p.id}>
									<div className={`d-flex justify-content-start my-2 ${styles.row}`}>
										<span>{p.totalItensUnicos}</span>
										<span>{p.totalItens}</span>
										<span>{formatarBRL(p.valor)}</span>
										<span>{p.status}</span>
										<span>
											<Button
												variant={'dark'}
												icon={<i className={'bi bi-check-lg'}></i>}
												text={textoBotoesStatusPadrao[p.status]}
												onClick={() => alterarStatusPadrao(p)}
											/>
										</span>
									</div>

									<hr/>
								</div>
							))}
						</div>
					</div>
				</Card.Body>
			</Card>

			{/*TODO criar componente próprio*/}
			<Card className={'col-12 mt-5'}>
				<Card.Header className={'bg-dark text-bg-dark'}>
					<h2 className={'my-2'}>Pedidos de troca</h2>

					<div className={`${styles.header} my-2`}>
						<span>Usuário solicitante</span>
						<span>Produto</span>
						<span>Quantidade</span>
						<span>Status</span>
						<span>Ações</span>
					</div>
				</Card.Header>

				<Card.Body>
					<div style={{height: 400, overflowY: 'auto'}}>
						<div className={'w-100'}>
							{pedidosFluxoTroca.map(p => (
								<div key={p.id}>
									<div className={`d-flex justify-content-start my-2 ${styles.row}`}>
										<span>{p.usuario.nome}</span>
										<span>{p.produto.nome}</span>
										<span>{p.quantidade}</span>
										<span>{p.status}</span>
										<span>
											<Button
												variant={'dark'}
												icon={<i className={'bi bi-check-lg'}></i>}
												text={textoBotoesStatusTroca[p.status]}
												onClick={() => alterarStatusTroca(p)}
											/>
										</span>
									</div>

									<hr/>
								</div>
							))}
						</div>
					</div>
				</Card.Body>
			</Card>

			<Modal
				title={<h3>Finalizar troca</h3>}
				open={modalFinalizarTroca.isOpen}
				closable={false}
				footer={
					<div className={'d-flex justify-content-evenly align-items-center'}>
						<Button
							className={'w-100 me-2'}
							variant={'dark'}
							icon={<i className={'bi bi-x-lg'}></i>}
							text={'Não'}
							onClick={() => finalizarTroca(false)}
						/>
						<Button
							className={'w-100 ms-2'}
							variant={'dark'}
							icon={<i className={'bi bi-check-lg'}></i>}
							text={'Sim'}
							onClick={() => finalizarTroca(true)}
						/>
					</div>
				}
			>
				Os produtos devem retornar ao estoque?
			</Modal>
		</>
	)
}

export default ConsultarPedidosAdmin