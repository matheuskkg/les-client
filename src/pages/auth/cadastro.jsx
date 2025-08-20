import Button from '@/_components/Button'
import Card from '@/_components/Card'
import FormEndereco from '@/_components/FormEndereco'
import FormTelefone from '@/_components/FormTelefone'
import FormUsuarioDadosPessoais from '@/_components/FormUsuarioDadosPessoais'
import FormUsuarioSenha from '@/_components/FormUsuarioSenha'
import {defaultDadosPessoais, defaultEndereco, defaultSenha, defaultTelefone} from '@/utils/DefaultValues'
import Link from 'next/link'
import {useState} from 'react'

const CadastroUsuario = () => {
	const [usuario, setUsuario] = useState(defaultDadosPessoais)
	const [senha, setSenha] = useState(defaultSenha)
	const [telefone, setTelefone] = useState(defaultTelefone)
	const [endereco, setEndereco] = useState(defaultEndereco)

	function handleChangeUsuario(e) {
		const {name, value} = e.target;
		setUsuario({...usuario, [name]: value})
		console.log(usuario)
	}

	function handleChangeSenha(e) {
		const {name, value} = e.target;
		setSenha({...senha, [name]: value});
	}

	function handleChangeTelefone(e) {
		const {name, value} = e.target;
		setTelefone({...telefone, [name]: value});
	}

	function handleChangeEndereco(e) {
		const {name, value} = e.target;
		setEndereco({...endereco, [name]: value});
	}

	function handleSubmit() {

	}

	return (
		<>
			<Card className={'col-12 col-md-9 col-xxl-7'}>
				<Card.Header className={'bg-transparent'}>
					<h3 className={'my-2'}>Cadastro de usuário</h3>
				</Card.Header>

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
					<div className="d-sm-flex justify-content-sm-between align-items-sm-center">
						<div>
							<Button
								className={'w-100 my-1 my-sm-0'}
								icon={<i className="bi bi-person-add"></i>}
								text={'Cadastrar'}
								variant={'primary'}
								onClick={handleSubmit}
							/>
						</div>

						<div>
							<p className={'m-0'}>Já possui uma conta? <Link href={'/auth/login'}
																			className={'link-underline link-underline-opacity-0'}>Faça
								o login</Link>.</p>
						</div>
					</div>
				</Card.Footer>
			</Card>
		</>
	)
}

export default CadastroUsuario;