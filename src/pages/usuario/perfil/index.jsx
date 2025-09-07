import TabelaCartao from "@/_components/cartao/TabelaCartao"
import TabelaEndereco from "@/_components/endereco/TabelaEndereco"
import Card from "@/_components/core/Card"
import Link from "next/link"

const Perfil = () => {
    return (
        <>
            <div className={'w-100 mb-4'}>
                <div className={'col-md-9 col-12 m-auto'}>
                    <Card>
                        <Card.Header className={'bg-transparent'}>
                            <h3 className={'m-0'}>Dados Pessoais</h3>
                        </Card.Header>
                        <Card.Body>
                            <p className={'m-0'}><Link href={'/usuario/perfil/dados-pessoais'}>Alterar dados pessoais</Link></p>
                            <p className={'m-0'}><Link href={'/usuario/perfil/alterar-senha'}>Alterar senha</Link></p>
                        </Card.Body>
                    </Card>
                </div>
            </div>

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