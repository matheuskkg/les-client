import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import FormTelefone from '@/_components/usuario/FormTelefone'
import FormUsuarioDadosPessoais from '@/_components/usuario/FormUsuarioDadosPessoais'
import { defaultDadosPessoais, defaultTelefone } from '@/_utils/DefaultValues'
import { useEffect, useState } from 'react'
import ClienteService from '@/_services/cliente-service'
import dayjs from 'dayjs'
import { useMedia } from 'use-media'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const DadosPessoais = () => {
	const [usuario, setUsuario] = useState(defaultDadosPessoais)
	const [telefone, setTelefone] = useState(defaultTelefone)

	const service = new ClienteService()
	const isWide = useMedia({ minWidth: 576 })
	const router = useRouter()

	function handleChangeUsuario(e) {
		const { name, value } = e.target
		setUsuario({ ...usuario, [name]: value })
	}

	function handleChangeTelefone(e) {
		const { name, value } = e.target

		if (name.includes('.')) {
			const [parent, child] = name.split('.')
			setTelefone(prev => ({
				...prev,
				[parent]: { ...prev[parent], [child]: value },
			}))
			return
		}

		setTelefone({ ...telefone, [name]: value })
	}

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			await service.alterar({ ...usuario, telefone })

			toast.success('Dados pessoais alterados.')
			router.push('/usuario/perfil')
		} catch (error) {
			const mensagens = error.response?.data?.mensagens || ['Erro ao alterar dados pessoais.']

			mensagens.forEach(mensagem => toast.error(mensagem))
		}
	}

	useEffect(() => {
		async function consultar() {
			try {
				const response = await service.consultarDadosPessoais()

				const usuario = response.data.entidades[0]

				setUsuario({ ...usuario, dataNascimento: dayjs(usuario.dataNascimento) })
				setTelefone({ ...usuario.telefone })
			} catch (error) {
				const mensagens = error.response?.data?.mensagens || ['Erro ao consultar dados pessoais.']

				mensagens.forEach(mensagem => console.error(mensagem))
			}
		}

		consultar()
	}, [])

	const botaoCancelar = (
		<Button
			className={'me-sm-3 mt-2 mt-sm-0'}
			icon={<i className="bi bi-arrow-left"></i>}
			text={'Cancelar'}
			variant={'dark'}
			onClick={() => router.push('/usuario/perfil')}
		/>
	)

	const botaoSalvar = (
		<Button
			type={'submit'}
			icon={<i className="bi bi-person-check"></i>}
			text={'Salvar'}
			variant={'dark'}
		/>
	)

	return (
		<>
			<Card className={'col-12 col-md-9 col-xxl-7'}>
				<Card.Header className={'bg-transparent'}>
					<h3 className={'my-2'}>Alterar dados pessoais</h3>
				</Card.Header>

				<form onSubmit={handleSubmit}>
					<Card.Body>
						<FormUsuarioDadosPessoais
							obj={usuario}
							onChange={handleChangeUsuario}
						/>

						<hr />

						<FormTelefone
							obj={telefone}
							onChange={handleChangeTelefone}
						/>
					</Card.Body>

					<Card.Footer className={'bg-transparent'}>
						<div className={'d-flex justify-content-sm-end flex-column flex-sm-row'}>
							{isWide ? (
								<>
									{botaoCancelar}
									{botaoSalvar}
								</>
							) : (
								<>
									{botaoSalvar}
									{botaoCancelar}
								</>
							)}
						</div>
					</Card.Footer>
				</form>
			</Card>
		</>
	)
}

//DadosPessoais.auth = true

export default DadosPessoais