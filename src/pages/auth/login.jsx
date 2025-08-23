import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import FormGroup from '@/_components/core/FormGroup'
import Input from '@/_components/core/Input'
import Label from '@/_components/core/Label'
import Link from 'next/link'
import {useState} from 'react'

const Login = () => {
	const [login, setLogin] = useState({
		email: '',
		senha: '',
	})

	function handleChange(e) {
		const {name, value} = e.target;
		setLogin({...login, [name]: value});
	}

	function handleSubmit() {

	}

	return (
		<>
			<Card className={'col-12 col-sm-8 col-md-6 col-lg-4 col-xxl-3'}>
				<Card.Header className={'bg-transparent'}>
					<h3 className={'my-2'}>Login</h3>
				</Card.Header>

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
				</Card.Body>

				<Card.Footer className={'bg-transparent'}>
					<div>
						<Button
							className={'w-100 my-1'}
							icon={<i className="bi bi-box-arrow-in-right"></i>}
							text={'Entrar'}
							variant={'dark'}
							onClick={handleSubmit}
						/>
					</div>

					<div>
						<p className={'m-0'}>Ainda não possui uma conta? <Link href={'/auth/cadastro'}
																			   className={'link-underline link-underline-opacity-0'}>Cadastre-se</Link>.
						</p>
					</div>
				</Card.Footer>
			</Card>
		</>
	);
};

export default Login;