import FormGroup from "@/_components/FormGroup";
import Label from "@/_components/Label";
import Input from "@/_components/Input";

const FormUsuarioSenha = ({obj, onChange, display}) => {
	let senhaClassName
	let senhaConfirmarClassName
	if (display === 'column') {
		senhaClassName = 'col-12 mb-3';
		senhaConfirmarClassName = 'col-12'
	} else {
		senhaClassName = 'col-sm-6 mb-3 mb-sm-0'
		senhaConfirmarClassName = 'col-sm-6'
	}

	return (
		<>
			<div className={'row'}>
				<FormGroup className={`${senhaClassName}`}>
					<Label htmlFor={'senha'} label={'*Senha'}/>
					<Input
						id={'senha'}
						name={'senha'}
						placeholder={'Senha'}
						type={'password'}
						value={obj.senha}
						onChange={onChange}
					/>
				</FormGroup>

				<FormGroup className={`${senhaConfirmarClassName}`}>
					<Label htmlFor={'senhaConfirmar'} label={'*Confirmar senha'}/>
					<Input
						id={'senhaConfirmar'}
						name={'senhaConfirmar'}
						placeholder={'Confirmar senha'}
						type={'password'}
						value={obj.senhaConfirmar}
						onChange={onChange}
					/>
				</FormGroup>
			</div>
		</>
	);
};

export default FormUsuarioSenha;