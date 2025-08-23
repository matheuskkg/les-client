import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import FormEndereco from '@/_components/endereco/FormEndereco'
import TableEnderecos from '@/_components/endereco/TableEnderecos'
import {Modal} from 'antd'
import Link from 'next/link'
import {useEffect, useState} from 'react'

const ConsultaEnderecos = () => {
	const [isModalEditarOpen, setIsModalEditarOpen] = useState(false)
	const [isModalExcluirOpen, setIsModalExcluirOpen] = useState(false)

	const [enderecoEditando, setEnderecoEditando] = useState({})
	const [enderecoExcluindo, setEnderecoExcluindo] = useState({})

	function handleChangeEnderecoEditando(e) {
		const {name, type, value, checked} = e.target
		const inputValue = type === 'checkbox' ? checked : value
		setEnderecoEditando({...enderecoEditando, [name]: inputValue})
	}

	function showModalEditar(endereco) {
		setEnderecoEditando(endereco)
		setIsModalEditarOpen(true)
	}

	function closeModalEditar() {
		setIsModalEditarOpen(false)
	}

	function handleEditarEndereco(e) {
		e.preventDefault()

	}

	function showModalExcluir(endereco) {
		setEnderecoExcluindo(endereco)
		setIsModalExcluirOpen(true)
	}

	function closeModalExcluir() {
		setIsModalExcluirOpen(false)
	}

	function handleExcluirEndereco() {

	}

	const mock = [
		{
			id: 1,
			nomeIdentificador: 'nome',
			pais: 'pais',
			estado: 'bcd',
			cidade: 'abc',
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
			nomeIdentificador: 'nome',
			pais: 'pais',
			estado: 'bcd',
			cidade: 'abc',
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
		{
			id: 3,
			nomeIdentificador: 'nome',
			pais: 'pais',
			estado: 'bcd',
			cidade: 'abc',
			tipoLogradouro: {
				tipo: 'Rua',
			},
			logradouro: 'kfgkf',
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
			id: 4,
			nomeIdentificador: 'nome',
			pais: 'pais',
			estado: 'bcd',
			cidade: 'abc',
			tipoLogradouro: {
				tipo: 'Rua',
			},
			logradouro: 'aewewewbc',
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
	]

	useEffect(() => {

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
							<TableEnderecos
								enderecos={mock}
								maxHeight={500}
								onClickEditar={showModalEditar}
								onClickExcluir={showModalExcluir}
							/>
						</Card.Body>
					</Card>
				</div>
			</div>

			{isModalEditarOpen && (
				<Modal
					centered={true}
					title={<h3>Alterar endereço</h3>}
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
						<FormEndereco
							obj={enderecoEditando}
							onChange={handleChangeEnderecoEditando}
						/>

						<div>
							<Button
								type={'submit'}
								className={'w-100 mt-3 mb-2'}
								icon={<i className="bi bi-check-lg"></i>}
								text={'Confirmar'}
								variant={'dark'}
								onClick={handleEditarEndereco}
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

export default ConsultaEnderecos