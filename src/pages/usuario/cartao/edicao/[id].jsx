import TelaCadastro from "@/_components/cartao/TelaCadastro"
import { useState, useEffect } from "react"
import CartaoService from "@/_services/cartao-service"
import { useRouter } from "next/router"
import { toast } from "react-toastify"

const EdicaoCartao = () => {
    const [cartao, setCartao] = useState(null)
    const [loading, setLoading] = useState(true)

    const service = new CartaoService()
    const router = useRouter()

    async function editar(cartao) {
        await service.editar(cartao)

        toast.success('Cartão editado.')
        router.replace('/usuario/perfil')
    }

    useEffect(() => {
        if (!router.isReady || !router.query.id) return

        service.consultarPorId(router.query.id)
            .then(response => {
                setCartao(response.data.entidades[0])
                setLoading(false)
            })
    }, [router.isReady, router.query.id])

    if (loading) return null

    return (
        <TelaCadastro
            initialCartao={cartao}
            onSubmit={editar}
            info={{
                title: 'Edição de cartão',
                modal: {
                    title: 'Cancelar edição',
                    message: 'Tem certeza que deseja cancelar a edição?',
                },
                pathCancelar: '/usuario/perfil'
            }}
        />
    )
}

export default EdicaoCartao