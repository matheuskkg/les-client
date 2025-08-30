import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import FormGroup from '@/_components/core/FormGroup'
import Input from '@/_components/core/Input'
import Label from '@/_components/core/Label'
import SelectMultiple from '@/_components/core/SelectMultiple'
import AuthService from '@/_services/auth-service'
import {useAuth} from '@/_utils/AuthContext'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState} from 'react'
import {toast} from 'react-toastify'

const Login = () => {
	const [login, setLogin] = useState({
		email: '',
		senha: '',
	})

	const service = new AuthService()
	const {setAuthToken} = useAuth()
	const router = useRouter()

	function handleChange(e) {
		const {name, value} = e.target
		setLogin({...login, [name]: value})
	}

	async function handleSubmit(e) {
		e.preventDefault()

		if (!login.email) {
			toast.error('Informe o e-mail.')
			return
		}

		if (!login.senha) {
			toast.error('Informe a senha.')
			return
		}

		await service.login(login)
			.then(response => {
				const token = response.data.entidades[0].token

				setAuthToken(token)
				router.push('/')
			})
			.catch(error => {
				error.response.data.mensagens.forEach(mensagem => toast.error(mensagem))
			})
	}

	return (
		<>
			<Card className={'col-12 col-sm-8 col-md-6 col-lg-4 col-xxl-3'}>
				<Card.Header className={'bg-transparent'}>
					<h3 className={'my-2'}>Login</h3>
				</Card.Header>

				<form onSubmit={handleSubmit}>
					<Card.Body>
						<FormGroup className={'mb-3'}>
							<Label htmlFor={'email'} label={'*E-mail'}/>
							<Input
								id={'email'}
								name={'email'}
								placeholder={'E-mail'}
								value={login.email}
								onChange={handleChange}
							/>
						</FormGroup>

						<FormGroup>
							<Label htmlFor={'senha'} label={'*Senha'}/>
							<Input
								id={'senha'}
								name={'senha'}
								type={'password'}
								placeholder={'Senha'}
								value={login.senha}
								onChange={handleChange}
							/>
						</FormGroup>

						<FormGroup>
							<Label htmlFor={'test'} label={'*Test'}/>
							<SelectMultiple
								id={'test'}
								name={'test'}
								placeholder={'Selecione'}
								className={''}
								options={[
									{id: 1, descricao: 'test 1'},
									{id: 2, descricao: 'test 2'},
									{id: 3, descricao: 'test 3'},
								]}
							/>
						</FormGroup>
					</Card.Body>

					<Card.Footer className={'bg-transparent'}>
						<div>
							<Button
								type={'submit'}
								className={'w-100 my-1'}
								icon={<i className="bi bi-box-arrow-in-right"></i>}
								text={'Entrar'}
								variant={'dark'}
							/>
						</div>

						<div>
							<p className={'m-0'}>Ainda não possui uma conta? <Link href={'/auth/cadastro'}
																				   className={'link-underline link-underline-opacity-0'}>Cadastre-se</Link>.
							</p>
						</div>
					</Card.Footer>
				</form>
			</Card>
		</>
	)
}

export default Login