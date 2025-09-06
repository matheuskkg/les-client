import TelaCadastro from '@/_components/endereco/TelaCadastro'
import EnderecoService from '@/_services/endereco-service'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const CadastroEndereco = () => {
    const service = new EnderecoService
    const router = useRouter()

    function cadastrar(endereco) {
        service.cadastrar(endereco)

        toast.success('Endereço cadastrado.')
        router.replace('/usuario/endereco')
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
                pathCancelar: '/usuario/endereco'
            }}
        />
    )
}

export default CadastroEndereco