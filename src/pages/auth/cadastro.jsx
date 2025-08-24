import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import FormEndereco from '@/_components/endereco/FormEndereco'
import FormTelefone from '@/_components/usuario/FormTelefone'
import FormUsuarioDadosPessoais from '@/_components/usuario/FormUsuarioDadosPessoais'
import FormUsuarioSenha from '@/_components/usuario/FormUsuarioSenha'
import AuthService from '@/_services/auth-service'
import ClienteService from '@/_services/cliente-service'
import {useAuth} from '@/_utils/AuthContext'
import {defaultDadosPessoais, defaultEndereco, defaultSenha, defaultTelefone} from '@/_utils/DefaultValues'
import dayjs from 'dayjs'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState} from 'react'
import {toast} from 'react-toastify'
import {useMedia} from 'use-media'

const CadastroUsuario = () => {
	const [usuario, setUsuario] = useState(defaultDadosPessoais)
	const [senha, setSenha] = useState(defaultSenha)
	const [telefone, setTelefone] = useState(defaultTelefone)
	const [endereco, setEndereco] = useState(defaultEndereco)

	const isWide = useMedia({minWidth: 576})
	const clienteService = new ClienteService()
	const authService = new AuthService()
	const {setAuthToken} = useAuth()
	const router = useRouter()

	function handleChangeUsuario(e) {
		const {name, value} = e.target
		setUsuario({...usuario, [name]: value})
	}

	function handleChangeSenha(e) {
		const {name, value} = e.target
		setSenha({...senha, [name]: value})
	}

	function handleChangeTelefone(e) {
		const {name, value} = e.target

		if (name.includes('.')) {
			const [parent, child] = name.split('.')
			setTelefone(prev => ({
				...prev,
				[parent]: {...prev[parent], [child]: value},
			}))
			return
		}

		setTelefone({...telefone, [name]: value})
	}

	function handleChangeEndereco(e) {
		const {name, type, value, checked} = e.target
		const inputValue = type === 'checkbox' ? checked : value

		if (name.includes('.')) {
			const [parent, child] = name.split('.')
			setEndereco(prev => ({
				...prev,
				[parent]: {...prev[parent], [child]: inputValue},
			}))
			return
		}

		setEndereco({...endereco, [name]: inputValue})
	}

	async function handleSubmit(e) {
		e.preventDefault()

		await clienteService.cadastrar({
			...usuario,
			dataNascimento: dayjs(usuario.dataNascimento).format('YYYY-MM-DD'),
			senha,
			telefone,
			endereco,
		})
			.then(response => {
				authService.login({
					email: usuario.email,
					senha: senha.senha,
				})
					.then(response => {
						const token = response.data.entidades[0].token

						setAuthToken(token)
						router.replace('/')
					})
			})
			.catch(error => {
				error.response.data.mensagens.forEach(mensagem => toast.error(mensagem))
			})
	}

	const pLogin = (
		<p className={'m-0'}>Já possui uma conta? <Link href={'/auth/login'}
														className={'link-underline link-underline-opacity-0'}>Faça o
			login</Link>.</p>
	)

	const botaoCadastrar = (
		<div>
			<Button
				type={'submit'}
				className={'w-100 my-1 my-sm-0'}
				icon={<i className="bi bi-person-add"></i>}
				text={'Cadastrar'}
				variant={'dark'}
			/>
		</div>
	)

	return (
		<>
			<Card className={'col-12 col-md-9 col-xxl-7'}>
				<Card.Header className={'bg-transparent'}>
					<h3 className={'my-2'}>Cadastro de usuário</h3>
				</Card.Header>

				<form onSubmit={handleSubmit}>
					<Card.Body>
						<FormUsuarioDadosPessoais
							obj={usuario}
							onChange={handleChangeUsuario}
						/>

						<hr/>

						<FormUsuarioSenha
							obj={senha}
							onChange={handleChangeSenha}
						/>

						<hr/>

						<FormTelefone
							obj={telefone}
							onChange={handleChangeTelefone}
						/>

						<hr/>

						<FormEndereco
							obj={endereco}
							onChange={handleChangeEndereco}
						/>
					</Card.Body>

					<Card.Footer className={'bg-transparent'}>
						<div
							className="d-flex justify-content-sm-between align-items-sm-center flex-column flex-sm-row"
						>
							{isWide ? (
								<>
									{pLogin}
									{botaoCadastrar}
								</>
							) : (
								<>
									{botaoCadastrar}
									{pLogin}
								</>
							)}
						</div>
					</Card.Footer>
				</form>
			</Card>
		</>
	)
}

export default CadastroUsuario