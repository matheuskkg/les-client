import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import FormUsuarioSenha from '@/_components/usuario/FormUsuarioSenha'
import {defaultSenha} from '@/_utils/DefaultValues'
import {useState} from 'react'

const AlterarSenha = () => {
	const [senha, setSenha] = useState(defaultSenha)

	function handleChange(e) {
		const {name, value} = e.target
		setSenha({...senha, [name]: value})
	}

	function handleSubmit() {

	}

	return (
		<>
			<Card className={'alterar-senha-card'}>
				<Card.Header className={'bg-transparent'}>
					<h3 className={'my-2'}>Alterar senha</h3>
				</Card.Header>

				<Card.Body>
					<FormUsuarioSenha
						obj={senha}
						onChange={handleChange}
						display={'column'}
					/>
				</Card.Body>

				<Card.Footer className={'bg-transparent'}>
					<Button
						className={'w-100'}
						variant={'dark'}
						icon={<i className="bi bi-key"></i>}
						text={'Alterar'}
						onClick={handleSubmit}
					/>
				</Card.Footer>
			</Card>
		</>
	)
}

AlterarSenha.auth = true

export default AlterarSenha