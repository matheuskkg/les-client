import FormGroup from "@/_components/FormGroup";
import Label from "@/_components/Label";
import Input from "@/_components/Input";

const FormUsuarioSenha = ({obj, onChange}) => {
	return (
		<>
			<div className={'row'}>
				<FormGroup className={'mb-3 mb-sm-0 col-sm-6'}>
					<Label htmlFor={'senha'} label={'*Senha'}/>
					<Input
						id={'senha'}
						placeholder={'Senha'}
						type={'password'}
						value={obj.senha}
						onChange={onChange}
					/>
				</FormGroup>

				<FormGroup className={'col-sm-6'}>
					<Label htmlFor={'senhaConfirmar'} label={'*Confirmar senha'}/>
					<Input
						id={'senhaConfirmar'}
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