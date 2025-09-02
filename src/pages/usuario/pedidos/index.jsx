import styles from '@/_assets/css/DivTable.module.css'
import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

const ConsultarPedidos = ({}) => {
	const [pedidos, setPedidos] = useState([])
	const router = useRouter()

	function solicitarTroca(pedido) {
		router.push('/usuario/pedidos/troca/' + pedido.id)
	}

	useEffect(() => {
		setPedidos([
			{
				id: 1,
				valor: 51.52,
				data: '2025-12-05',
			},
			{
				id: 2,
				valor: 515.12,
				data: '2025-12-06',
			},
			{
				id: 3,
				valor: 67.54,
				data: '2025-12-07',
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
						<span>Data do pedido</span>
						<span>Valor do pedido</span>
						<span>Ações</span>
					</div>
				</Card.Header>

				<Card.Body>
					<div style={{height: 400, overflowY: 'auto'}}>
						<div className={'w-100'}>
							{pedidos.map(p => (
								<div key={p.id}>
									<div className={`d-flex justify-content-start my-2 ${styles.row}`}>
										<span>{p.data}</span>
										<span>{p.valor}</span>
										<span>
											<Button
												variant={'dark'}
												icon={<i className={'bi bi-check-lg'}></i>}
												text={'Solicitar troca'}
												onClick={() => solicitarTroca(p)}
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
		</>
	)
}

export default ConsultarPedidos