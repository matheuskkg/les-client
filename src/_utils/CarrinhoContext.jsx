import {createContext, useContext, useState} from 'react'

export const CarrinhoContext = createContext([])

export const CarrinhoProvider = ({children}) => {
	const [itens, setItens] = useState([])

	function adicionar(item) {
		if (!item || item.quantidade === '' || Number(item.quantidade) === 0) return

		setItens(prev => {
			const itensCarrinho = [...prev]
			const index = itensCarrinho.findIndex(i => i.produto.id === item.produto.id)
			if (index !== -1) {
				itensCarrinho[index] = {
					produto: itensCarrinho[index].produto,
					quantidade: Number(item.quantidade),
				}
			} else {
				itensCarrinho.push({
					produto: item.produto,
					quantidade: Number(item.quantidade),
				})
			}

			return itensCarrinho
		})
	}

	function remover(item) {
		if (!item) return

		setItens(prev => prev.filter(i => i.produto.id !== item.produto.id))
	}

	function limpar() {
		setItens([])
	}

	const value = {
		itens, adicionar, remover, limpar,
	}

	return (
		<CarrinhoContext.Provider value={{itens, adicionar, remover, limpar}}>
			{children}
		</CarrinhoContext.Provider>
	)
}

export function useCarrinho() {
	return useContext(CarrinhoContext)
}