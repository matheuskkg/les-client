import TelaCadastro from '@/_components/endereco/TelaCadastro'
import EnderecoService from '@/_services/endereco-service'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const CadastroEndereco = () => {
    const service = new EnderecoService
    const router = useRouter()

    async function cadastrar(endereco) {
        await service.cadastrar(endereco)

        toast.success('Endereço cadastrado.')
        router.replace('/usuario/perfil')
    }

    return (
        <TelaCadastro
            onSubmit={cadastrar}
            info={{
                title: 'Cadastro de endereço',
                modal: {
                    title: 'Cancelar cadastro',
                    message: 'Tem certeza que deseja cancelar o cadastro?'
                },
                pathCancelar: '/usuario/perfil'
            }}
        />
    )
}

export default CadastroEndereco