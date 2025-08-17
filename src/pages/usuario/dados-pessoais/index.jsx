import FormUsuarioDadosPessoais from "@/_components/FormUsuarioDadosPessoais";
import {useState} from "react";
import {defaultDadosPessoais} from "@/utils/DefaultValues";
import Card from "@/_components/Card";
import Button from "@/_components/Button";

const DadosPessoais = () => {
	const [dadosPessoais, setDadosPessoais] = useState(defaultDadosPessoais)

	function handleChange(e) {
		const {id, value} = e.target;
		setDadosPessoais({...dadosPessoais, [id]: value});
	}

	return (
		<>
			<Card className={'col-12 col-md-9 col-xxl-7'}>
				<Card.Header className={'bg-transparent'}>
					<h3 className={'my-2'}>Alterar dados pessoais</h3>
				</Card.Header>

				<Card.Body>
					<FormUsuarioDadosPessoais
						obj={dadosPessoais}
						onChange={handleChange}
					/>
				</Card.Body>

				<Card.Footer className={'bg-transparent'}>
					<Button
						className={'w-100 my-1 my-sm-0'}
						icon={<i className="bi bi-person-add"></i>}
						text={'Salvar'}
						variant={'primary'}
					/>
				</Card.Footer>
			</Card>

		</>
	);
};

export default DadosPessoais;