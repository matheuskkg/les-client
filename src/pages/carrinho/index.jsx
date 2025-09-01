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
import {useEffect, useState} from 'react'

const Carrinho = ({}) => {
	const {itens, remover} = useCarrinho()
	const router = useRouter()

	const hasItens = itens.length > 0
	const precoTotalPedido = itens.reduce((precoTotal, item) => {
		return precoTotal + item.produto.preco * item.quantidade
	}, 0)

	const [enderecos, setEnderecos] = useState([])
	const [enderecoSelecionado, setEnderecoSelecionado] = useState('')
	function handleChangeEndereco(e) {
		setEnderecoSelecionado(enderecos.find(end => end.id === e.target.value))
	}

	const [cartoes, setCartoes] = useState([])
	const [cartoesSelecionados, setCartoesSelecionados] = useState([])

	function handleChangeCartoes(e) {
		const selectedIds = Array.from(e.target.selectedOptions, o => Number(o.value))
		setCartoesSelecionados(cartoes.filter(c => selectedIds.includes(c.id)))
	}

	const [cupons, setCupons] = useState([])
	const [cuponsSelecionados, setCuponsSelecionados] = useState([])
	const hasCupons = cupons.length > 0

	function handleChangeCupons(e) {
		const selectedIds = Array.from(e.target.selectedOptions, o => Number(o.value))
		let selected = cupons.filter(c => selectedIds.includes(c.id))

		const cuponsPromocionais = selected.filter(c => c.tipoCupom.tipo === 'Promocional')
		if (cuponsPromocionais.length > 1) {
			selected = selected.filter(c =>
				c.tipoCupom.tipo !== 'Promocional' || (c.tipoCupom.tipo === 'Promocional' && !cuponsSelecionados.find(cc => cc.id === c.id)),
			)
		}

		setCuponsSelecionados(selected)
	}

	function removerItem(item) {
		remover(item)
	}

	useEffect(() => {
		//TODO api call
		//filtrar enderecos por entrega === true na chamada
		setEnderecos([
			{
				id: 1,
				nomeIdentificador: 'nome1',
				pais: 'pais',
				estado: 'estado 1',
				cidade: 'cidade 1',
				tipoLogradouro: {
					tipo: 'Rua',
				},
				logradouro: 'abc',
				tipoResidencia: {
					tipo: 'Casa',
				},
				numero: '123A',
				bairro: 'ju',
				cep: '123412412',
				observacao: 'asdaw',
				cobranca: true,
				entrega: true,
			},
			{
				id: 2,
				nomeIdentificador: 'nome2',
				pais: 'pais',
				estado: 'estado 2',
				cidade: 'cidade 2',
				tipoLogradouro: {
					tipo: 'Rua',
				},
				logradouro: 'jhg',
				tipoResidencia: {
					tipo: 'Casa',
				},
				numero: '123A',
				bairro: 'ju',
				cep: '123412412',
				observacao: 'asdaw',
				cobranca: true,
				entrega: true,
			},
		])
		setCupons([
			{id: 1, codigo: 'CUPOM-1', valor: 20.00, tipoCupom: {tipo: 'Promocional'}},
			{id: 4, codigo: 'CUPOM-4', valor: 512.75, tipoCupom: {tipo: 'Promocional'}},
			{id: 2, codigo: 'CUPOM-2', valor: 2.50, tipoCupom: {tipo: 'Troca'}},
			{id: 3, codigo: 'CUPOM-3', valor: 14.75, tipoCupom: {tipo: 'Troca'}},
			{id: 5, codigo: 'CUPOM-5', valor: 5.51, tipoCupom: {tipo: 'Troca'}},
		])
		setCartoes([
			{
				id: 1,
				bandeira: {
					bandeira: 'Visa',
				},
				nomeTitular: 'c1',
				numero: '1234 5678 9012 3456',
				codigoSeguranca: '123',
				preferencial: false,
			},
			{
				id: 2,
				bandeira: {
					bandeira: 'Visa',
				},
				nomeTitular: 'c2',
				numero: '1234 5678 9012 3456',
				codigoSeguranca: '123',
				preferencial: false,
			},
			{
				id: 3,
				bandeira: {
					bandeira: 'Visa',
				},
				nomeTitular: 'c3',
				numero: '1234 5678 9012 3456',
				codigoSeguranca: '123',
				preferencial: true,
			},
			{
				id: 4,
				bandeira: {
					bandeira: 'Visa',
				},
				nomeTitular: 'c4',
				numero: '1234 5678 9012 3456',
				codigoSeguranca: '123',
				preferencial: false,
			},
		])
	}, [])

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
							<h3 className={'my-2'}><i className="bi bi-cart-check"></i> Finalizar pedido</h3>
						</Card.Header>

						<Card.Body>
							<FormGroup className={'mb-3'}>
								<Label htmlFor={'endereco'}
									   label={<h4>Endereço de entrega</h4>}/>
								<SelectButton
									id={'endereco'}
									name={'endereco'}
									icon={<i className="bi bi-plus-lg"></i>}
									value={enderecoSelecionado}
									onChange={handleChangeEndereco}
									options={enderecos.map(e => ({
										value: e.id,
										text: `${e.tipoLogradouro.tipo} ${e.logradouro} ${e.numero}`,
									}))}
								/>
							</FormGroup>

							<hr className={'mt-4'}/>

							<h4>Forma de pagamento</h4>

							<FormGroup className={'mb-3'}>
								<Label htmlFor={'cartoes'}
									   label={<span>Cartão - <span className={'fw-light text-muted'}>É possível selecionar diversos cartões</span></span>}/>
								<SelectMultipleButton
									size={3}
									id={'cartoes'}
									name={'cartoes'}
									icon={<i className="bi bi-plus-lg"></i>}
									value={cartoesSelecionados.map(c => c.id)}
									onChange={handleChangeCartoes}
									options={cartoes.map(c => ({
										value: c.id,
										text: `${c.bandeira.bandeira} - ${c.nomeTitular}`,
									}))}
								/>
							</FormGroup>

							{hasCupons &&
								<FormGroup className={'mb-3'}>
									<Label htmlFor={'cupons'}
										   label={<span>Cupons - <span className={'fw-light text-muted'}>É possível selecionar diversos cupons - Apenas um cupom promocional pode ser selecionado por vez</span></span>}/>
									<SelectMultiple
										size={3}
										id={'cupons'}
										name={'cupons'}
										value={cuponsSelecionados.map(c => c.id)}
										onChange={handleChangeCupons}
										options={cupons.map(c => ({
											value: c.id,
											text: `${c.codigo} - ${c.valor} (${c.tipoCupom.tipo})`,
										}))}
									/>
								</FormGroup>
							}

							<h5 className={'m-0 fw-semibold'}>Total da compra: {precoTotalPedido}</h5>
						</Card.Body>

						<Card.Footer className={'bg-white'}>
							<div className={'d-flex justify-content-end'}>
								<Button
									variant={'dark'}
									icon={<i className="bi bi-check-lg"></i>}
									text={'Finalizar pedido'}
									onClick={() => router.push('/carrinho/confirmar-pedido')}
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