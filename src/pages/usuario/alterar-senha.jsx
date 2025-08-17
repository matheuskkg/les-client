import Button from '@/_components/Button'
import Card from '@/_components/Card'
import FormUsuarioSenha from '@/_components/FormUsuarioSenha'
import {defaultSenha} from '@/utils/DefaultValues'
import {useState} from 'react'

const AlterarSenha = () => {
	const [senha, setSenha] = useState(defaultSenha)

	function handleChange(e) {
		const {id, value} = e.target
		setSenha({...senha, [id]: value})
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

				<Card.Footer>
					<Button
						variant={'primary'}
						icon={<i className="bi bi-key"></i>}
						text={'Alterar'}
						onClick={handleSubmit}
					/>
				</Card.Footer>
			</Card>
		</>
	)
}

export default AlterarSenha