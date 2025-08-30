import Card from '@/_components/core/Card'
import CardProduto from '@/_components/produto/CardProduto'
import {useState} from 'react'
import placeholderImg from '@/_assets/images/placeholder.png'

export default function Home() {
	const [produtos, setProdutos] = useState([
		{
			id: 1,
			nome: 'Produto 1',
			preco: 1002.20,
			img: placeholderImg.src,
		},
		{
			id: 2,
			nome: 'Produto 2',
			preco: 100.20,
			img: placeholderImg.src,
		},
		{
			id: 3,
			nome: 'Produto 3',
			preco: 10.20,
			img: placeholderImg.src,
		},
		{
			id: 4,
			nome: 'Produto 4',
			preco: 141.51,
			img: placeholderImg.src,
		},
		{
			id: 5,
			nome: 'Produto 5',
			preco: 12.20,
			img: placeholderImg.src,
		},
	])

	return (
		<>
			<Card className={'col-12'}>
				<Card.Body>
					<div className={'row mx-0'}>
						{produtos.map(produto => <CardProduto produto={produto} key={produto.id}/>)}
					</div>
				</Card.Body>
			</Card>
		</>
	)
}
