import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import FormGroup from '@/_components/core/FormGroup'
import Label from '@/_components/core/Label'
import SelectButton from '@/_components/core/SelectButton'
import SelectMultiple from '@/_components/core/SelectMultiple'
import SelectMultipleButton from '@/_components/core/SelectMultipleButton'
import ContadorProduto from '@/_components/produto/ContadorProduto'
import {useCarrinho} from '@/_utils/CarrinhoContext'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Carrinho = ({}) => {
	const {itens, remover} = useCarrinho()
	const hasItens = itens.length > 0
	const hasCupons = true
	const router = useRouter()

	function removerItem(item) {
		remover(item)
	}

	return (
		<>
			{!hasItens &&
				<Card>
					<Card.Body className={'d-flex align-items-center'}>
						<p className={'m-0'}>Não há itens no carrinho. <Link href={'/'}
																			 className={'link-underline link-underline-opacity-0'}>Volte
							para a home</Link>.</p>
					</Card.Body>
				</Card>
			}

			{hasItens &&
				<>
					<Card className={'col-12 col-lg-9 col-xxl-6'}>
						<Card.Header className={'bg-dark text-bg-dark'}>
							<h3 className={'my-2'}><i className="bi bi-cart"></i> Carrinho</h3>
						</Card.Header>

						<Card.Body className={'overflow-auto'} style={{maxHeight: 500}}>
							{itens.map((item, index) => {
								const isFirst = index === 0

								return (
									<Card key={item.produto.id} className={isFirst ? '' : 'mt-3'}>
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

					<Card className={'col-12 col-lg-9 col-xxl-6 mt-5'}>
						<Card.Header className={'bg-dark text-bg-dark sticky-top z-1'}>
							<h3 className={'my-2'}><i className="bi bi-cart-check"></i> Finalizar compra</h3>
						</Card.Header>

						<Card.Body>
							<FormGroup className={'mb-3'}>
								<Label htmlFor={'endereco'}
									   label={<h4>Endereço de entrega</h4>}/>
								<SelectButton
									id={'endereco'}
									name={'endereco'}
									icon={<i className="bi bi-plus-lg"></i>}
									value={''}
									onClick={() => router.push('/usuario/endereco/cadastro')}
								/>
							</FormGroup>

							<hr className={'mt-4'}/>

							<h4>Forma de pagamento</h4>

							<FormGroup className={'mb-3'}>
								<Label htmlFor={'cartoes'} label={<span>Cartão - <span
									className={'fw-light text-muted'}>É possível selecionar diversos cartões</span></span>}/>
								<SelectMultipleButton
									size={3}
									id={'cartoes'}
									name={'cartoes'}
									icon={<i className="bi bi-plus-lg"></i>}
									onClick={() => router.push('/usuario/cartao/cadastro')}
									options={[
										{value: 1, text: 'Cartão 1'},
										{value: 2, text: 'Cartão 2'},
										{value: 3, text: 'Cartão 3'},
										{value: 4, text: 'Cartão 4'},
									]}
								/>
							</FormGroup>

							{hasCupons &&
								<FormGroup className={'mb-3'}>
									<Label htmlFor={'cupons'}
										   label={<span>Cupons - <span className={'fw-light text-muted'}>É possível selecionar diversos cupons</span></span>}/>
									<SelectMultiple
										size={3}
										id={'cupons'}
										name={'cupons'}
										options={[
											{value: 1, text: 'Cupom 1'},
											{value: 2, text: 'Cupom 2'},
											{value: 3, text: 'Cupom 3'},
											{value: 4, text: 'Cupom 4'},
										]}
									/>
								</FormGroup>
							}

							<h5 className={'m-0 fw-semibold'}>Total da compra: R$ 0.00,00</h5>
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