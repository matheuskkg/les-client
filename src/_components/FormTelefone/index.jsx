import FormGroup from "@/_components/FormGroup";
import Label from "@/_components/Label";
import Input from "@/_components/Input";
import Select from "@/_components/Select";

const FormTelefone = ({obj, onChange}) => {
	return (
		<>
			<div className={'row'}>
				<FormGroup className={'mb-3 mb-sm-0 col-sm-2 col-4'}>
					<Label htmlFor={'ddd'} label={'*DDD'}/>
					<Input
						id={'ddd'}
						placeholder={'DDD'}
						value={obj.ddd}
						onChange={onChange}
					/>
				</FormGroup>

				<FormGroup className={'mb-3 mb-sm-0 col-sm-4 col-8'}>
					<Label htmlFor={'tipoTel'} label={'*Tipo de telefone'}/>
					<Select
						id={'tipoTel'}
						value={obj.tipoTelefone}
						onChange={onChange}
						options={[]}
					/>
				</FormGroup>

				<FormGroup className={'mb-0 col-sm-6'}>
					<Label htmlFor={'numeroTelefone'} label={'*Número'}/>
					<Input
						id={'numeroTelefone'}
						placeholder={'Número'}
						value={obj.numeroTelefone}
						onChange={onChange}
					/>
				</FormGroup>
			</div>
		</>
	);
};

export default FormTelefone;