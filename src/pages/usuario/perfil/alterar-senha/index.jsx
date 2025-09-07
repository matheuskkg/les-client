import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import FormUsuarioSenha from '@/_components/usuario/FormUsuarioSenha'
import { defaultSenha } from '@/_utils/DefaultValues'
import { useState } from 'react'
import { useRouter } from 'next/router'
import ClienteService from '@/_services/cliente-service'
import { toast } from 'react-toastify'

const AlterarSenha = () => {
	const [senha, setSenha] = useState(defaultSenha)

	const service = new ClienteService()
	const router = useRouter()

	function handleChange(e) {
		const { name, value } = e.target
		setSenha({ ...senha, [name]: value })
	}

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			await service.alterarSenha(senha)

			toast.success('Senha alterada.')
			router.push('/usuario/perfil')
		} catch (error) {
			const mensagens = error.response?.data?.mensagens || ['Erro ao alterar senha.']

			mensagens.forEach(mensagem => toast.error(mensagem))
		}
	}

	return (
		<>
			<Card className={'alterar-senha-card'}>
				<Card.Header className={'bg-transparent'}>
					<h3 className={'my-2'}>Alterar senha</h3>
				</Card.Header>

				<form onSubmit={handleSubmit}>
					<Card.Body>
						<FormUsuarioSenha
							obj={senha}
							onChange={handleChange}
							display={'column'}
						/>
					</Card.Body>

					<Card.Footer className={'bg-transparent'}>
						<Button
							type={'submit'}
							className={'w-100'}
							variant={'dark'}
							icon={<i className="bi bi-key"></i>}
							text={'Alterar'}
						/>

						<Button
							className={'w-100 mt-2'}
							variant={'dark'}
							icon={<i className="bi bi-arrow-left"></i>}
							text={'Cancelar'}
							onClick={() => router.push('/usuario/perfil')}
						/>
					</Card.Footer>
				</form>
			</Card>
		</>
	)
}

//AlterarSenha.auth = true

export default AlterarSenha