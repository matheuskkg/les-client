import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import FormTelefone from '@/_components/usuario/FormTelefone'
import FormUsuarioDadosPessoais from '@/_components/usuario/FormUsuarioDadosPessoais'
import {defaultDadosPessoais, defaultTelefone} from '@/_utils/DefaultValues'
import {useState} from 'react'

const DadosPessoais = () => {
	const [usuario, setUsuario] = useState(defaultDadosPessoais)
	const [telefone, setTelefone] = useState(defaultTelefone)

	function handleChangeUsuario(e) {
		const {name, value} = e.target;
		setUsuario({...usuario, [name]: value});
	}

	function handleChangeTelefone(e) {
		const {name, value} = e.target;
		setTelefone({...telefone, [name]: value});
	}

	function handleSubmit() {

	}

	return (
		<>
			<Card className={'col-12 col-md-9 col-xxl-7'}>
				<Card.Header className={'bg-transparent'}>
					<h3 className={'my-2'}>Alterar dados pessoais</h3>
				</Card.Header>

				<Card.Body>
					<FormUsuarioDadosPessoais
						obj={usuario}
						onChange={handleChangeUsuario}
					/>

					<hr />

					<FormTelefone
						obj={telefone}
						onChange={handleChangeTelefone}
					/>
				</Card.Body>

				<Card.Footer className={'bg-transparent'}>
					<Button
						className={'w-100 my-1 my-sm-0'}
						icon={<i className="bi bi-person-check"></i>}
						text={'Salvar'}
						variant={'dark'}
						onClick={handleSubmit}
					/>
				</Card.Footer>
			</Card>
		</>
	);
};

DadosPessoais.auth = true

export default DadosPessoais;