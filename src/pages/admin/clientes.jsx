import FormFiltro from '@/_components/admin/FormFiltro'
import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import ClienteService from '@/_services/cliente-service'
import {useEffect, useState} from 'react'

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
				setClientes(response.data)
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

			<Card className={'mt-5'}>
				<Card.Body>

				</Card.Body>
			</Card>
		</>
	)
}

export default ConsultarClientes