import FormGroup from '@/_components/core/FormGroup'
import Input from '@/_components/core/Input'
import Label from '@/_components/core/Label'

const FormFiltro = ({obj, onChange}) => {
	return (
		<>
			<div className={'row'}>
				<FormGroup className={'mb-sm-0 mb-3 col-12 col-sm-4'}>
					<Label htmlFor={'filtroNome'} label={'Nome'}/>
					<Input
						id={'filtroNome'}
						name={'nome'}
						placeholder={'Nome'}
						value={obj.nome}
						onChange={onChange}
					/>
				</FormGroup>

				<FormGroup className={'mb-sm-0 mb-3 col-12 col-sm-4'}>
					<Label htmlFor={'filtroEmail'} label={'Email'}/>
					<Input
						id={'filtroEmail'}
						name={'email'}
						placeholder={'Email'}
						value={obj.email}
						onChange={onChange}
					/>
				</FormGroup>

				<FormGroup className={'mb-0 col-12 col-sm-4'}>
					<Label htmlFor={'filtroCpf'} label={'CPF'}/>
					<Input
						id={'filtroCpf'}
						name={'cpf'}
						placeholder={'CPF'}
						value={obj.cpf}
						onChange={onChange}
					/>
				</FormGroup>
			</div>
		</>
	)
}

export default FormFiltro