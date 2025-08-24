import FormGroup from '@/_components/core/FormGroup'
import Input from '@/_components/core/Input'
import Label from '@/_components/core/Label'
import Select from '@/_components/core/Select'

const tiposTelefone = [
	{value: 'Pessoal', text: 'Pessoal'},
	{value: 'Comercial', text: 'Comercial'},
]

const FormTelefone = ({obj, onChange}) => {
	return (
		<>
			<div className={'row'}>
				<FormGroup className={'mb-3 mb-sm-0 col-sm-2 col-4'}>
					<Label htmlFor={'ddd'} label={'*DDD'}/>
					<Input
						id={'ddd'}
						name={'ddd'}
						placeholder={'DDD'}
						value={obj.ddd}
						onChange={onChange}
					/>
				</FormGroup>

				<FormGroup className={'mb-3 mb-sm-0 col-sm-4 col-8'}>
					<Label htmlFor={'tipoTel'} label={'*Tipo de telefone'}/>
					<Select
						id={'tipoTel'}
						name={'tipoTelefone.tipo'}
						value={obj.tipoTelefone.tipo}
						onChange={onChange}
						options={tiposTelefone}
					/>
				</FormGroup>

				<FormGroup className={'mb-0 col-sm-6'}>
					<Label htmlFor={'numeroTelefone'} label={'*Número'}/>
					<Input
						id={'numeroTelefone'}
						name={'numero'}
						placeholder={'Número'}
						value={obj.numero}
						onChange={onChange}
					/>
				</FormGroup>
			</div>
		</>
	);
};

export default FormTelefone;