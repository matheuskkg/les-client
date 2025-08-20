import Button from '@/_components/Button'
import Card from '@/_components/Card'
import FormEndereco from '@/_components/FormEndereco'
import {defaultEndereco} from '@/utils/DefaultValues'
import {useState} from 'react'

const CadastroEndereco = () => {
	const [endereco, setEndereco] = useState(defaultEndereco)

	function handleChange(e) {
		const {name, value} = e.target
		setEndereco({...endereco, [name]: value})
	}

	function handleSubmit() {

	}

	return (
		<>
			<Card>
				<Card.Header className={'bg-transparent'}>
					<h3 className={'my-2'}>Cadastro de endereço</h3>
				</Card.Header>

				<Card.Body>
					<FormEndereco
						obj={endereco}
						onChange={handleChange}
					/>
				</Card.Body>

				<Card.Footer className={'bg-transparent'}>
					<Button
						className={'w-100'}
						variant={'primary'}
						icon={<i className="bi bi-plus-lg"></i>}
						text={'Cadastrar'}
						onClick={handleSubmit}
					/>
				</Card.Footer>
			</Card>
		</>
	)
}

export default CadastroEndereco