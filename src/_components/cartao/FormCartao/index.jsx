import FormGroup from '@/_components/core/FormGroup'
import Input from '@/_components/core/Input'
import Label from '@/_components/core/Label'
import Select from '@/_components/core/Select'
import BandeiraService from '@/_services/bandeira-service'
import { useMedia } from 'use-media'
import { useState, useEffect } from 'react'

const FormCartao = ({ obj, onChange }) => {
	const [bandeiras, setBandeiras] = useState([])

	const bandeiraService = new BandeiraService()
	const isWide = useMedia({ minWidth: 576 })

	const inputCodigoSeguranca = (
		<FormGroup className={'col-sm-6 mb-3 mb-sm-0'}>
			<Label htmlFor={'codigoSeguranca'} label={'*Código de segurança:'} />
			<Input
				id={'codigoSeguranca'}
				name={'codigoSeguranca'}
				placeholder={'Código de segurança'}
				value={obj.codigoSeguranca}
				onChange={onChange}
			/>
		</FormGroup>
	)

	const inputBandeira = (
		<FormGroup className={'col-sm-6'}>
			<Label htmlFor={'bandeira'} label={'*Bandeira:'} />
			<Select
				id={'bandeira'}
				name={'bandeira.id'}
				value={obj.bandeira.id}
				onChange={onChange}
				options={bandeiras.map(b => ({ value: b.id, text: b.bandeira }))}
			/>
		</FormGroup>
	)

	useEffect(() => {
		async function consultarBandeiras() {
			const response = await bandeiraService.consultar()

			setBandeiras(response.data.entidades)
		}

		consultarBandeiras()
	}, [])

	return (
		<>
			<div className={'row'}>
				<FormGroup className={'mb-3 col-sm-6'}>
					<Label htmlFor={'nomeTitular'} label={'*Nome do titular:'} />
					<Input
						id={'nomeTitular'}
						name={'nomeTitular'}
						placeholder={'Nome do titular'}
						value={obj.nomeTitular}
						onChange={onChange}
					/>
				</FormGroup>

				<FormGroup className={'mb-3 col-sm-6'}>
					<Label htmlFor={'numeroCartao'} label={'*Número:'} />
					<Input
						id={'numeroCartao'}
						name={'numero'}
						placeholder={'Número'}
						value={obj.numero}
						onChange={onChange}
					/>
				</FormGroup>
			</div>

			<div className={'row'}>
				{isWide ? (
					<>
						{inputBandeira}
						{inputCodigoSeguranca}
					</>
				) : (
					<>
						{inputCodigoSeguranca}
						{inputBandeira}
					</>
				)}
			</div>
		</>
	)
}

export default FormCartao