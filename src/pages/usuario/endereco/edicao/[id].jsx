import TelaCadastro from "@/_components/endereco/TelaCadastro"
import { useState, useEffect } from "react"
import EnderecoService from "@/_services/endereco-service"
import { useRouter } from "next/router"

const EdicaoEndereco = () => {
    const [endereco, setEndereco] = useState(null)
    const [loading, setLoading] = useState(true)

    const service = new EnderecoService()
    const router = useRouter()

    function editar(endereco) {
        service.editar(endereco)
    }

    useEffect(() => {
        if (!router.isReady || !router.query.id) return

        service.consultarPorId(router.query.id)
            .then(response => {
                setEndereco(response.data.entidades[0])
                setLoading(false)
            })
    }, [router.isReady, router.query.id])

    if (loading) return null

    return (
        <TelaCadastro
            initialEndereco={endereco}
            onSubmit={editar}
            info={{
                title: 'Edição de endereço',
                modal: {
                    title: 'Cancelar edição',
                    message: 'Tem certeza que deseja cancelar a edição?'
                }
            }}
        />
    )
}

export default EdicaoEndereco