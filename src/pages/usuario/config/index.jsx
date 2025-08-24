import Link from 'next/link'

const UsuarioPerfil = () => {
	return (
		<>
			<Link href={'/usuario/config/alterar-senha'}>Alterar senha</Link>

			<Link href={'/usuario/config/dados-pessoais'}>Alterar dados pessoais</Link>

			<Link href={'/usuario/endereco'}>Endereços</Link>

			<Link href={'/usuario/cartao'}>Cartões</Link>
		</>
	)
}

UsuarioPerfil.auth = true

export default UsuarioPerfil