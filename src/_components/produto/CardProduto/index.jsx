import Card from '@/_components/core/Card'
import ContadorProduto from '@/_components/produto/ContadorProduto'

const CardProduto = ({className = '', produto}) => {
	return (
		<>
			<Card className={'col-12 col-sm-6 col-md-4 col-lg-3'}>
				<Card.Body>
					<div className={'text-center'}>
					<img src={produto.img} alt={'Placeholder'} className={'img-fluid'} />

					</div>

					<hr/>

					<div className={'d-flex justify-content-between'}>
						<span>{produto.nome}</span>
						<span>{produto.preco}</span>
					</div>

					<hr/>

					<ContadorProduto produto={produto} />
				</Card.Body>
			</Card>
		</>
	)
}

export default CardProduto