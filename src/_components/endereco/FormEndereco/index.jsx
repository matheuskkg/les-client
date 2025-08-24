import Checkbox from '@/_components/core/Checkbox'
import FormGroup from '@/_components/core/FormGroup'
import Input from '@/_components/core/Input'
import Label from '@/_components/core/Label'
import Select from '@/_components/core/Select'

const tiposLogradouro = [
	{value: 'Rua', text: 'Rua'},
	{value: 'Avenida', text: 'Avenida'},
	{value: 'Estrada', text: 'Estrada'},
	{value: 'Viela', text: 'Viela'},
]

const tiposResidencia = [
	{value: 'Casa', text: 'Casa'},
	{value: 'Apartamento', text: 'Apartamento'},
]

const FormEndereco = ({obj, onChange}) => {
	return (
		<>
			<FormGroup className={'mb-3'}>
				<Label htmlFor={'nomeEnd'} label={'*Nome identificador'}/>
				<Input
					id={'nomeEnd'}
					name={'nomeIdentificador'}
					placeholder={'Nome identificador'}
					value={obj.nomeIdentificador}
					onChange={onChange}
				/>
			</FormGroup>

			<div className={'row'}>
				<FormGroup className={'mb-3 col-md-4'}>
					<Label htmlFor={'pais'} label={'*Pais'}/>
					<Input
						id={'pais'}
						name={'pais'}
						placeholder={'Pais'}
						value={obj.pais}
						onChange={onChange}
					/>
				</FormGroup>

				<FormGroup className={'mb-3 col-md-4'}>
					<Label htmlFor={'estado'} label={'*Estado'}/>
					<Input
						id={'estado'}
						name={'estado'}
						placeholder={'Estado'}
						value={obj.estado}
						onChange={onChange}
					/>
				</FormGroup>

				<FormGroup className={'mb-3 col-md-4'}>
					<Label htmlFor={'cidade'} label={'*Cidade'}/>
					<Input
						id={'cidade'}
						name={'cidade'}
						placeholder={'Cidade'}
						value={obj.cidade}
						onChange={onChange}
					/>
				</FormGroup>
			</div>

			<div className={'row'}>
				<FormGroup className={'mb-3 col-sm-6'}>
					<Label htmlFor={'tipoLog'} label={'*Tipo de logradouro'}/>
					<Select
						id={'tipoLog'}
						name={'tipoLogradouro.tipo'}
						value={obj.tipoLogradouro.tipo}
						onChange={onChange}
						options={tiposLogradouro}
					/>
				</FormGroup>

				<FormGroup className={'mb-3 col-sm-6'}>
					<Label htmlFor={'logradouro'} label={'*Logradouro'}/>
					<Input
						id={'logradouro'}
						name={'logradouro'}
						placeholder={'Logradouro'}
						value={obj.logradouro}
						onChange={onChange}
					/>
				</FormGroup>
			</div>

			<div className={'row'}>
				<FormGroup className={'mb-3 col-sm-6'}>
					<Label htmlFor={'tipoRes'} label={'*Tipo de residência'}/>
					<Select
						id={'tipoRes'}
						name={'tipoResidencia.tipo'}
						value={obj.tipoResidencia.tipo}
						onChange={onChange}
						options={tiposResidencia}
					/>
				</FormGroup>

				<FormGroup className={'mb-3 col-sm-6'}>
					<Label htmlFor={'numeroEndereco'} label={'*Número'}/>
					<Input
						id={'numeroEndereco'}
						name={'numero'}
						placeholder={'Número'}
						value={obj.numero}
						onChange={onChange}
					/>
				</FormGroup>
			</div>

			<div className={'row'}>
				<FormGroup className={'mb-3 col-sm-6'}>
					<Label htmlFor={'bairro'} label={'*Bairro'}/>
					<Input
						id={'bairro'}
						name={'bairro'}
						placeholder={'Bairro'}
						value={obj.bairro}
						onChange={onChange}
					/>
				</FormGroup>

				<FormGroup className={'mb-3 col-sm-6'}>
					<Label htmlFor={'cep'} label={'*CEP'}/>
					<Input
						id={'cep'}
						name={'cep'}
						placeholder={'CEP'}
						value={obj.cep}
						onChange={onChange}
					/>
				</FormGroup>
			</div>

			<FormGroup className={'mb-3'}>
				<Label htmlFor={'observacao'} label={'Observação'}/>
				<Input
					id={'observacao'}
					name={'observacao'}
					placeholder={'Observação'}
					value={obj.observacao}
					onChange={onChange}
				/>
			</FormGroup>

			<div className={'row'}>
				<div className={'d-flex'}>
					<FormGroup className={'me-3'}>
						<Checkbox id={'cobranca'} name={'cobranca'} value={obj.cobranca} onChange={onChange}/>
						<Label htmlFor={'cobranca'} label={'Cobrança'} variant={'check-label'} className={'ms-1'}/>
					</FormGroup>

					<FormGroup>
						<Checkbox id={'entrega'} name={'entrega'} value={obj.entrega} onChange={onChange}/>
						<Label htmlFor={'entrega'} label={'Entrega'} variant={'check-label'} className={'ms-1'}/>
					</FormGroup>
				</div>
			</div>
		</>
	);
};

export default FormEndereco;