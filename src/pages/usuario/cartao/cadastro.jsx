import FormCartao from '@/_components/cartao/FormCartao'
import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import {defaultCartao} from '@/_utils/DefaultValues'
import {Modal} from 'antd'
import {useRouter} from 'next/router'
import {useState} from 'react'
import {useMedia} from 'use-media'

const CadastroCartao = () => {
	const [cartao, setCartao] = useState(defaultCartao)

	const router = useRouter()
	const isWide = useMedia({minWidth: 576})

	function handleChange(e) {
		const {name, type, value, checked} = e.target
		const inputValue = type === 'checkbox' ? checked : value
		setCartao({...cartao, [name]: inputValue})
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

	const botaoSalvar = (
		<Button
			type={'submit'}
			className={'ms-sm-2 mb-sm-0 mb-2'}
			variant={'dark'}
			icon={<i className="bi bi-download"></i>}
			text={'Salvar'}
			onClick={handleSubmit}
		/>
	)

	const botaoCancelar = (
		<Button
			className={'me-sm-2'}
			variant={'dark'}
			icon={<i className="bi bi-arrow-left"></i>}
			text={'Cancelar'}
			onClick={showModalCancelar}
		/>
	)

	return (
		<>
			<Card className={'col-12 col-md-9 col-lg-6 col-xxl-4'}>
				<Card.Header className={'bg-transparent'}>
					<h3 className={'my-2'}>Cadastro de cartão</h3>
				</Card.Header>

				<form>
					<Card.Body>
						<FormCartao
							obj={cartao}
							onChange={handleChange}
						/>
					</Card.Body>

					<Card.Footer className={'bg-transparent'}>
						<div className={'d-flex justify-content-sm-end flex-sm-row flex-column'}>
							{isWide ? (
								<>
									{botaoCancelar}
									{botaoSalvar}
								</>
							) : (
								<>
									{botaoSalvar}
									{botaoCancelar}
								</>
							)}
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

CadastroCartao.auth = true

export default CadastroCartao