import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import {useMedia} from 'use-media'

const ConfirmarPedido = ({}) => {
	const isWide = useMedia({minWidth: 576})

	const botaoConfirmar = (
		<Button
			variant={'dark'}
			icon={<i className={'bi bi-check-lg'}></i>}
			text={'Confirmar'}
		/>
	)

	const botaoVoltar = (
		<Button
			className={'me-sm-3 mt-2 mt-sm-0'}
			variant={'dark'}
			icon={<i className={'bi bi-arrow-left'}></i>}
			text={'Voltar'}
		/>
	)

	return (
		<>
			<Card className={'col-12 col-lg-9 col-xxl-6'}>
				<Card.Header className={'bg-dark text-bg-dark'}>
					<h3 className={'my-2'}><i className="bi bi-cart-check"></i> Finalizar pedido</h3>
				</Card.Header>

				<Card.Body>
					<p>Total da compra:</p>
					<p>Endereço de entrega:</p>
					<p className={'mb-0'}>Forma de pagamento:</p>
				</Card.Body>

				<Card.Footer className={'bg-transparent'}>
					<div className={'d-flex justify-content-sm-end flex-column flex-sm-row'}>
						{isWide ? (
							<>
								{botaoVoltar}
								{botaoConfirmar}
							</>
						) : (
							<>
								{botaoConfirmar}
								{botaoVoltar}
							</>
						)}
					</div>
				</Card.Footer>
			</Card>
		</>
	)
}

export default ConfirmarPedido