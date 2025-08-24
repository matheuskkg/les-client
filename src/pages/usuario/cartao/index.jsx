import FormCartao from '@/_components/cartao/FormCartao'
import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import {Modal} from 'antd'
import Link from 'next/link'
import {useEffect, useState} from 'react'

const ConsultaCartoes = () => {
	const [isModalEditarOpen, setIsModalEditarOpen] = useState(false)
	const [isModalExcluirOpen, setIsModalExcluirOpen] = useState(false)

	const [cartaoEditando, setCartaoEditando] = useState({})
	const [cartaoExcluindo, setCartaoExcluindo] = useState({})

	function handleChangeCartaoEditando(e) {
		const {name, type, value, checked} = e.target
		const inputValue = type === 'checkbox' ? checked : value
		setCartaoEditando({...cartaoEditando, [name]: inputValue})
	}

	function showModalEditar(cartao) {
		setCartaoEditando(cartao)
		setIsModalEditarOpen(true)
	}

	function closeModalEditar() {
		setIsModalEditarOpen(false)
	}

	function handleEditarCartao(e) {
		e.preventDefault()

	}

	function showModalExcluir(cartao) {
		setCartaoExcluindo(cartao)
		setIsModalExcluirOpen(true)
	}

	function closeModalExcluir() {
		setIsModalExcluirOpen(false)
	}

	function handleExcluirCartao() {

	}

	const [rows, setRows] = useState([])
	useEffect(() => {
		const cartoes = [
			{
				bandeira: {
					bandeira: 'Visa',
				},
				nomeTitular: 'c1',
				numero: '1234 5678 9012 3456',
				codigoSeguranca: '123',
				preferencial: false,
			},
			{
				bandeira: {
					bandeira: 'Visa',
				},
				nomeTitular: 'c2',
				numero: '1234 5678 9012 3456',
				codigoSeguranca: '123',
				preferencial: false,
			},
			{
				bandeira: {
					bandeira: 'Visa',
				},
				nomeTitular: 'c3',
				numero: '1234 5678 9012 3456',
				codigoSeguranca: '123',
				preferencial: true,
			},
			{
				bandeira: {
					bandeira: 'Visa',
				},
				nomeTitular: 'c4',
				numero: '1234 5678 9012 3456',
				codigoSeguranca: '123',
				preferencial: false,
			},
		]

		const length = cartoes.length
		const rows = cartoes.map((c, index) => {
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
								onClick={() => showModalEditar(c)}
							/>

							<Button
								variant={'dark'}
								icon={<i className="bi bi-trash3"></i>}
								onClick={() => showModalExcluir(c)}
							/>
						</div>
					</div>

					{
						shouldReturnHr && <hr className="m-1"/>
					}
				</div>
			)
		})

		setRows(rows)
	}, [])

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
								style={{maxHeight: 500, overflowY: 'auto'}}
							>
								{rows}
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>

			{isModalEditarOpen && (
				<Modal
					centered={true}
					title={<h3>Alterar cartão</h3>}
					open={isModalEditarOpen}
					onCancel={closeModalEditar}
					footer={null}
					width={{
						xs: '90%',
						md: '70%',
						xl: '50%',
					}}
				>
					<form>
						<FormCartao
							obj={cartaoEditando}
							onChange={handleChangeCartaoEditando}
						/>

						<div>
							<Button
								type={'submit'}
								className={'w-100 mt-3 mb-2'}
								icon={<i className="bi bi-check-lg"></i>}
								text={'Confirmar'}
								variant={'dark'}
								onClick={handleEditarCartao}
							/>

							<Button
								className={'w-100'}
								icon={<i className="bi bi-x-lg"></i>}
								text={'Cancelar'}
								variant={'dark'}
								onClick={closeModalEditar}
							/>
						</div>
					</form>
				</Modal>
			)}

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

export default ConsultaCartoes