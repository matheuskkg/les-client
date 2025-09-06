import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import { Modal } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ClienteService from '@/_services/cliente-service'
import { useRouter } from 'next/router'

const ConsultaEnderecos = () => {
	const [rows, setRows] = useState([])
	const [isModalExcluirOpen, setIsModalExcluirOpen] = useState(false)
	const [enderecoExcluindo, setEnderecoExcluindo] = useState({})

	const service = new ClienteService()
	const router = useRouter()

	function showModalExcluir(endereco) {
		setEnderecoExcluindo(endereco)
		setIsModalExcluirOpen(true)
	}

	function closeModalExcluir() {
		setIsModalExcluirOpen(false)
	}

	function handleExcluirEndereco() {

	}

	function enderecosToRows(enderecos) {
		const length = enderecos.length
		const rows = enderecos.map((e, index) => {
			const res = e.tipoLogradouro.tipo + ' ' + e.logradouro + ', ' + e.cidade + ' - ' + e.estado
			const shouldReturnHr = index < length - 1

			return (
				<div key={e.id}>
					<div className="d-flex justify-content-between align-items-center mx-2">
						<p className="my-0">{res}</p>

						<div>
							<Button
								className="me-1"
								variant={'dark'}
								icon={<i className="bi bi-pencil"></i>}
								onClick={() => router.push(`/usuario/endereco/edicao/${e.id}`)}
							/>

							<Button
								variant={'dark'}
								icon={<i className="bi bi-trash3"></i>}
								onClick={() => showModalExcluir(e)}
							/>
						</div>
					</div>

					{
						shouldReturnHr && <hr className="m-1" />
					}
				</div>
			)
		})

		setRows(rows)
	}

	useEffect(() => {
		service.consultarEnderecos()
			.then(response => {
				enderecosToRows(response.data.entidades)
			})
			.catch(error => console.log(error))
	}, [])

	return (
		<>
			<div className="container">
				<div className="col-sm-9 col-12 m-auto">
					<Card>
						<Card.Header className={'bg-transparent'}>
							<div className="d-flex justify-content-between align-items-center">
								<h3 className={'m-0'}>Endereços</h3>

								<Link
									href={'/usuario/endereco/cadastro'}
									className={'btn btn-sm btn-dark'}
								>
									Cadastrar endereço
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
					title={<h3>Excluir endereço ({enderecoExcluindo.nomeIdentificador})</h3>}
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
								onClick={handleExcluirEndereco}
							/>
						</div>
					}
				>
					<p>Tem certeza que deseja excluir esse endereço?</p>
				</Modal>
			)}
		</>
	)
}

//ConsultaEnderecos.auth = true

export default ConsultaEnderecos