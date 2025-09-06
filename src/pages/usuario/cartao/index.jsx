import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import ClienteService from '@/_services/cliente-service'
import CartaoService from '@/_services/cartao-service'
import { Modal } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const ConsultaCartoes = () => {
	const [cartoes, setCartoes] = useState([])
	const [rows, setRows] = useState([])
	const [isModalExcluirOpen, setIsModalExcluirOpen] = useState(false)
	const [cartaoExcluindo, setCartaoExcluindo] = useState({})

	const service = new ClienteService()
	const cartaoService = new CartaoService()
	const router = useRouter()

	function showModalExcluir(cartao) {
		setCartaoExcluindo(cartao)
		setIsModalExcluirOpen(true)
	}

	function closeModalExcluir() {
		setIsModalExcluirOpen(false)
	}

	function handleExcluirCartao() {

	}

	function cartoesToRows() {
		const length = cartoes.length
		return cartoes.map((c, index) => {
			const res = c.bandeira.bandeira + ' - ' + c.nomeTitular
			const shouldReturnHr = index < length - 1

			return (
				<div key={c.id}>
					<div className="d-flex justify-content-between align-items-center mx-2">
						<p className="my-0">{res}</p>

						<div>
							<Button
								className="me-1"
								variant={'dark'}
								icon={<i className="bi bi-pencil"></i>}
								onClick={() => router.push(`/usuario/cartao/edicao/${c.id}`)}
							/>

							<Button
								variant={'dark'}
								icon={<i className="bi bi-trash3"></i>}
								onClick={() => showModalExcluir(c)}
							/>
						</div>
					</div>

					{
						shouldReturnHr && <hr className="m-1" />
					}
				</div>
			)
		})
	}

	useEffect(() => {
		service.consultarCartoes()
			.then(response => {
				setCartoes(response.data.entidades)
			})
	}, [])

	useEffect(() => {
		setRows(cartoesToRows())
	}, [cartoes])

	return (
		<>
			<div className={'container-xxl'}>
				<div className={'col-md-9 col-12 m-auto'}>
					<Card>
						<Card.Header className={'bg-transparent'}>
							<div className={'d-flex justify-content-between align-items-center'}>
								<h3 className={'m-0'}>Cartões</h3>

								<Link
									href={'/usuario/cartao/cadastro'}
									className={'btn btn-sm btn-dark'}
								>
									Cadastrar cartão
								</Link>
							</div>
						</Card.Header>

						<Card.Body>
							<div
								style={{ maxHeight: 500, overflowY: 'auto' }}
							>
								{rows}
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>

			{isModalExcluirOpen && (
				<Modal
					centered={true}
					title={<h3>Excluir cartão</h3>}
					open={isModalExcluirOpen}
					onCancel={closeModalExcluir}
					footer={
						<div className={'d-flex justify-content-evenly align-items-center'}>
							<Button
								className={'w-100 me-2'}
								icon={<i className="bi bi-x-lg"></i>}
								text={'Cancelar'}
								variant={'dark'}
								onClick={closeModalExcluir}
							/>

							<Button
								className={'w-100 ms-2'}
								icon={<i className="bi bi-check-lg"></i>}
								text={'Excluir'}
								variant={'dark'}
								onClick={handleExcluirCartao}
							/>
						</div>
					}
				>
					<p>Tem certeza que deseja excluir esse cartão?</p>
				</Modal>
			)}
		</>
	)
}

//ConsultaCartoes.auth = true

export default ConsultaCartoes