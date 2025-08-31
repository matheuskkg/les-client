import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import ContadorProduto from '@/_components/produto/ContadorProduto'
import {useCarrinho} from '@/_utils/CarrinhoContext'
import Link from 'next/link'

const Carrinho = ({}) => {
	const {itens, remover} = useCarrinho()
	const hasItens = itens.length > 0

	function removerItem(item) {
		remover(item)
	}

	return (
		<>
			{!hasItens &&
				<>
					<Card>
						<Card.Body className={'d-flex align-items-center'}>
							<p className={'m-0'}>Não há itens no carrinho. <Link href={'/'} className={'link-underline link-underline-opacity-0'}>Volte para a home</Link>.</p>
						</Card.Body>
					</Card>
				</>
			}

			{hasItens &&
				<>
					<Card className={'col-12 col-lg-6'}>
						<Card.Header className={'bg-dark text-bg-dark'}>
							<h3 className={'my-2'}><i className="bi bi-cart"></i> Carrinho</h3>
						</Card.Header>

						<Card.Body className={'overflow-auto'} style={{maxHeight: 500}}>
							{itens.map(item => {
								return (
									<Card key={item.produto.id}>
										<Card.Body className={'d-flex justify-content-between flex-column'}>
											<div className={'d-flex flex-column mb-3'}>
												<img className={'img-fluid col-3'} src={item.produto.img}
													 alt={'Placeholder'}/>
												<p>{item.produto.nome}</p>
												<p>Preço unitário: {item.produto.preco}</p>
												<p>Preço total: {item.produto.preco * item.quantidade}</p>
											</div>

											<div className={'d-flex justify-content-between flex-column'}>
												<ContadorProduto produto={item.produto} min={1}/>

												<Button
													className={'btn-sm w-auto mt-3'}
													variant={'outline-dark'}
													text={'Remover'}
													onClick={() => removerItem(item)}
												/>
											</div>
										</Card.Body>
									</Card>
								)
							})}
						</Card.Body>
					</Card>

					<Card className={'col-12 col-lg-6 my-5'}>
						<Card.Header className={'bg-dark text-bg-dark sticky-top z-1'}>
							<h3 className={'my-2'}><i className="bi bi-cart-check"></i> Finalizar compra</h3>
						</Card.Header>

						<Card.Body>

						</Card.Body>

						<Card.Footer className={'bg-white'}>
							<div className={'d-flex justify-content-end'}>
								<Button
									variant={'dark'}
									icon={<i className="bi bi-check-lg"></i>}
									text={'Finalizar compra'}
								/>
							</div>
						</Card.Footer>
					</Card>
				</>
			}
		</>
	)
}

export default Carrinho