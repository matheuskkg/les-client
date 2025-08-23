import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import FormEndereco from '@/_components/endereco/FormEndereco'
import {defaultEndereco} from '@/utils/DefaultValues'
import {Modal} from 'antd'
import {useRouter} from 'next/router'
import {useState} from 'react'

const CadastroEndereco = () => {
	const [endereco, setEndereco] = useState(defaultEndereco)

	const router = useRouter()

	function handleChange(e) {
		const {name, type, value, checked} = e.target
		const inputValue = type === 'checkbox' ? checked : value
		setEndereco({...endereco, [name]: inputValue})
	}

	function handleSubmit(e) {
		e.preventDefault()

	}

	const [isModalCancelarOpen, setIsModalCancelarOpen] = useState(false)

	function showModalCancelar() {
		setIsModalCancelarOpen(true)
	}

	function closeModalCancelar() {
		setIsModalCancelarOpen(false)
	}

	return (
		<>
			<Card className={'col-12 col-md-9 col-xxl-7'}>
				<Card.Header className={'bg-transparent'}>
					<h3 className={'my-2'}>Cadastro de endereço</h3>
				</Card.Header>

				<form>
					<Card.Body>
						<FormEndereco
							obj={endereco}
							onChange={handleChange}
						/>
					</Card.Body>

					<Card.Footer className={'bg-transparent'}>
						<div className={'d-flex justify-content-sm-end flex-column-reverse flex-sm-row'}>
							<Button
								className={'me-sm-2'}
								variant={'dark'}
								icon={<i className="bi bi-arrow-left"></i>}
								text={'Cancelar'}
								onClick={showModalCancelar}
							/>

							<Button
								type={'submit'}
								className={'ms-sm-2 mb-sm-0 mb-2'}
								variant={'dark'}
								icon={<i className="bi bi-download"></i>}
								text={'Salvar'}
								onClick={handleSubmit}
							/>
						</div>
					</Card.Footer>
				</form>
			</Card>

			{isModalCancelarOpen && (
				<Modal
					centered={true}
					title={<h3>Cancelar cadastro</h3>}
					open={isModalCancelarOpen}
					onCancel={closeModalCancelar}
					footer={
						<div className={'d-flex justify-content-evenly align-items-center'}>
							<Button
								className={'w-100 me-2'}
								icon={<i className="bi bi-x-lg"></i>}
								text={'Não'}
								variant={'dark'}
								onClick={closeModalCancelar}
							/>
							<Button
								className={'w-100 ms-2'}
								icon={<i className="bi bi-check-lg"></i>}
								text={'Sim'}
								variant={'dark'}
								onClick={router.back}
							/>
						</div>
					}
				>
					<p>Tem certeza que deseja cancelar o cadastro?</p>
				</Modal>
			)}
		</>
	)
}

export default CadastroEndereco