import TelaCadastro from "@/_components/cartao/TelaCadastro"
import CartaoService from "@/_services/cartao-service"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

const CadastroCartao = () => {
    const service = new CartaoService()
    const router = useRouter()

    async function cadastrar(cartao) {
        await service.cadastrar(cartao)

        toast.success('Cartão cadastrado.')
        router.replace('/usuario/perfil')
    }

    return (
        <TelaCadastro
            onSubmit={cadastrar}
            info={{
                title: 'Cadastro de cartão',
                modal: {
                    title: 'Cancelar cadastro',
                    message: 'Tem certeza que deseja cancelar o cadastro?'
                },
                pathCancelar: '/usuario/perfil'
            }}
        />
    )
}

export default CadastroCartao