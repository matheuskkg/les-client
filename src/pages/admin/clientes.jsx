import FormFiltro from '@/_components/admin/FormFiltro'
import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import ClienteService from '@/_services/cliente-service'
import {useEffect, useState} from 'react'
import styles from '@/_assets/css/ConsultarClientes.module.css'
import {toast} from 'react-toastify'

const ConsultarClientes = () => {
	const [clientes, setClientes] = useState([])

	const [filtro, setFiltro] = useState({
		nome: '',
		email: '',
		cpf: '',
	})

	function handleChange(e) {
		const {name, value} = e.target
		setFiltro({...filtro, [name]: value})
	}

	const service = new ClienteService()

	function consultar() {
		service.consultar(filtro)
			.then(response => {
				if (response.data.entidades.length === 0) {
					toast.warning('Nenhum cliente encontrado.')
					return
				}

				setClientes(response.data.entidades)
			})
			.catch(error => console.log(error))
	}

	function handleConsultar(e) {
		e.preventDefault()

		consultar()
	}

	useEffect(() => {
		consultar()
	}, [])

	return (
		<>
			<Card>
				<Card.Body>
					<form>
						<FormFiltro
							obj={filtro}
							onChange={handleChange}
						/>

						<div className={'d-flex justify-content-center col-12 col-sm-6 m-auto'}>
							<Button
								className={'mt-3 w-100'}
								type={'submit'}
								variant={'dark'}
								icon={<></>}
								text={'Filtrar'}
								onClick={handleConsultar}
							/>
						</div>
					</form>
				</Card.Body>
			</Card>

			<Card className={'col-12 mt-5 d-flex flex-row flex-xxl-column'}>
				<Card.Header className={'bg-dark text-bg-dark'}>
					<div className={`${styles.header} sticky-top my-2`}>
						<span>Nome</span>
						<span>E-mail</span>
						<span>CPF</span>
						<span>Telefone</span>
						<span>Placeholder</span>
					</div>
				</Card.Header>

				<Card.Body>
					<div style={{height: 400, overflowY: 'auto'}}>
						<div className={'w-100'}>
							{clientes.map(c => (
								<>
									<div key={c.id} className={`d-flex justify-content-start my-2 ${styles.clienteRow}`}>
										<span>{c.nome}</span>
										<span>{c.email}</span>
										<span>{c.cpf}</span>
										<span>{c.telefone.ddd} - {c.telefone.numero}</span>
										<span>Placeholder</span>
									</div>

									<hr/>
								</>
							))}
						</div>
					</div>
				</Card.Body>
			</Card>
		</>
	)
}

export default ConsultarClientes