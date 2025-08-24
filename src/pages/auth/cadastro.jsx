import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import FormEndereco from '@/_components/endereco/FormEndereco'
import FormTelefone from '@/_components/usuario/FormTelefone'
import FormUsuarioDadosPessoais from '@/_components/usuario/FormUsuarioDadosPessoais'
import FormUsuarioSenha from '@/_components/usuario/FormUsuarioSenha'
import {defaultDadosPessoais, defaultEndereco, defaultSenha, defaultTelefone} from '@/_utils/DefaultValues'
import Link from 'next/link'
import {useState} from 'react'
import {useMedia} from 'use-media'

const CadastroUsuario = () => {
	const [usuario, setUsuario] = useState(defaultDadosPessoais)
	const [senha, setSenha] = useState(defaultSenha)
	const [telefone, setTelefone] = useState(defaultTelefone)
	const [endereco, setEndereco] = useState(defaultEndereco)

	const isWide = useMedia({minWidth: 576})

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
		setTelefone({...telefone, [name]: value})
	}

	function handleChangeEndereco(e) {
		const {name, type, value, checked} = e.target
		const inputValue = type === 'checkbox' ? checked : value
		setEndereco({...endereco, [name]: inputValue})
	}

	function handleSubmit(e) {
		e.preventDefault()

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
				onClick={handleSubmit}
			/>
		</div>
	)

	return (
		<>
			<Card className={'col-12 col-md-9 col-xxl-7'}>
				<Card.Header className={'bg-transparent'}>
					<h3 className={'my-2'}>Cadastro de usuário</h3>
				</Card.Header>

				<form>
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