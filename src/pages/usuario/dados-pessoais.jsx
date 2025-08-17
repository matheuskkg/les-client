import FormUsuarioDadosPessoais from "@/_components/FormUsuarioDadosPessoais";
import {useState} from "react";
import {defaultDadosPessoais} from "@/utils/DefaultValues";
import Card from "@/_components/Card";
import Button from "@/_components/Button";
import FormTelefone from "@/_components/FormTelefone";

const DadosPessoais = () => {
	const [usuario, setUsuario] = useState(defaultDadosPessoais)
	const [telefone, setTelefone] = useState(defaultDadosPessoais)

	function handleChangeUsuario(e) {
		const {id, value} = e.target;
		setUsuario({...usuario, [id]: value});
	}

	function handleChangeTelefone(e) {
		const {id, value} = e.target;
		setTelefone({...telefone, [id]: value});
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
						variant={'primary'}
						onClick={handleSubmit}
					/>
				</Card.Footer>
			</Card>
		</>
	);
};

export default DadosPessoais;