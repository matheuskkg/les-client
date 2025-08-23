import CustomDatePicker from '@/_components/core/CustomDatePicker'
import FormGroup from '@/_components/core/FormGroup'
import Input from '@/_components/core/Input'
import Label from '@/_components/core/Label'
import Select from '@/_components/core/Select'

const FormUsuarioDadosPessoais = ({obj, onChange}) => {
	return (
		<>
			<FormGroup className={'mb-3'}>
				<Label htmlFor={'nome'} label={'*Nome'}/>
				<Input
					id={'nome'}
					name={'nome'}
					placeholder={'Nome'}
					value={obj.nome}
					onChange={onChange}
				/>
			</FormGroup>

			<div className={'row'}>
				<FormGroup className={'mb-3 col-sm-6'}>
					<Label htmlFor={'genero'} label={'*Gênero'}/>
					<Select
						id={'genero'}
						name={'genero'}
						value={obj.genero}
						onChange={onChange}
						options={[]}
					/>
				</FormGroup>

				<FormGroup className={'mb-3 col-sm-6'}>
					<Label htmlFor={'dataNascimento'} label={'*Data de nascimento'}/>
					<CustomDatePicker
						id={'dataNascimento'}
						name={'dataNascimento'}
						placeholder={'Data de nascimento'}
						value={obj.dataNascimento}
						onChange={onChange}
					/>
				</FormGroup>
			</div>

			<div className={'row'}>
				<FormGroup className={'mb-3 mb-sm-0 col-sm-6'}>
					<Label htmlFor={'email'} label={'*E-mail'}/>
					<Input
						id={'email'}
						name={'email'}
						placeholder={'E-mail'}
						value={obj.email}
						onChange={onChange}
					/>
				</FormGroup>

				<FormGroup className={'col-sm-6'}>
					<Label htmlFor={'cpf'} label={'*CPF'}/>
					<Input
						id={'cpf'}
						name={'cpf'}
						placeholder={'CPF'}
						value={obj.cpf}
						onChange={onChange}
					/>
				</FormGroup>
			</div>
		</>
	);
};

export default FormUsuarioDadosPessoais;