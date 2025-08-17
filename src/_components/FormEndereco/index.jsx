import FormGroup from "@/_components/FormGroup";
import Label from "@/_components/Label";
import Input from "@/_components/Input";
import Select from "@/_components/Select";
import Checkbox from "@/_components/Checkbox";

const FormEndereco = ({obj, onChange}) => {
	return (
		<>
			<FormGroup className={'mb-3'}>
				<Label htmlFor={'nomeEnd'} label={'*Nome identificador'}/>
				<Input
					id={'nomeEnd'}
					placeholder={'Nome identificador'}
					value={obj.nome}
					onChange={onChange}
				/>
			</FormGroup>

			<div className={'row'}>
				<FormGroup className={'mb-3 col-md-4'}>
					<Label htmlFor={'pais'} label={'*Pais'}/>
					<Input
						id={'pais'}
						placeholder={'Pais'}
						value={obj.pais}
						onChange={onChange}
					/>
				</FormGroup>

				<FormGroup className={'mb-3 col-md-4'}>
					<Label htmlFor={'estado'} label={'*Estado'}/>
					<Input
						id={'estado'}
						placeholder={'Estado'}
						value={obj.estado}
						onChange={onChange}
					/>
				</FormGroup>

				<FormGroup className={'mb-3 col-md-4'}>
					<Label htmlFor={'cidade'} label={'*Cidade'}/>
					<Input
						id={'cidade'}
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
						value={obj.tipoLogradouro}
						onChange={onChange}
						options={[]}
					/>
				</FormGroup>

				<FormGroup className={'mb-3 col-sm-6'}>
					<Label htmlFor={'logradouro'} label={'*Logradouro'}/>
					<Input
						id={'logradouro'}
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
						value={obj.tipoResidencia}
						onChange={onChange}
						options={[]}
					/>
				</FormGroup>

				<FormGroup className={'mb-3 col-sm-6'}>
					<Label htmlFor={'numeroEndereco'} label={'*Número'}/>
					<Input
						id={'numeroEndereco'}
						placeholder={'Número'}
						value={obj.numeroEndereco}
						onChange={onChange}
					/>
				</FormGroup>
			</div>

			<div className={'row'}>
				<FormGroup className={'mb-3 col-sm-6'}>
					<Label htmlFor={'bairro'} label={'*Bairro'}/>
					<Input
						id={'bairro'}
						placeholder={'Bairro'}
						value={obj.bairro}
						onChange={onChange}
					/>
				</FormGroup>

				<FormGroup className={'mb-3 col-sm-6'}>
					<Label htmlFor={'cep'} label={'*CEP'}/>
					<Input
						id={'cep'}
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
					placeholder={'Observação'}
					value={obj.observacao}
					onChange={onChange}
				/>
			</FormGroup>

			<div className={'row'}>
				<div className={'d-flex'}>
					<FormGroup className={'me-3'}>
						<Checkbox id={'cobranca'} value={obj.cobranca} onChange={onChange}/>
						<Label htmlFor={'cobranca'} label={'Cobrança'} variant={'check-label'} className={'ms-1'}/>
					</FormGroup>

					<FormGroup>
						<Checkbox id={'entrega'} value={obj.entrega} onChange={onChange}/>
						<Label htmlFor={'entrega'} label={'Entrega'} variant={'check-label'} className={'ms-1'}/>
					</FormGroup>
				</div>
			</div>
		</>
	);
};

export default FormEndereco;