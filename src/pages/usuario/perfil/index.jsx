import TabelaCartao from "@/_components/cartao/TabelaCartao"
import TabelaEndereco from "@/_components/endereco/TabelaEndereco"

const Perfil = () => {
    return (
        <>
            <div className={'w-100 mb-4'}>
                <TabelaEndereco />
            </div>

            <div className={'w-100'}>
                <TabelaCartao />
            </div>
        </>
    )
}

export default Perfil