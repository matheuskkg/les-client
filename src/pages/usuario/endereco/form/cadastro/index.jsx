import TelaCadastroEndereco from '@/_components/endereco/TelaCadastro'
import EnderecoService from '@/_services/endereco-service'

const CadastroEndereco = () => {
    const service = new EnderecoService
    
    function cadastrar(endereco) {
        service.cadastrar(endereco)
    }

    return (
        <TelaCadastroEndereco
            onSubmit={cadastrar}
            info={{
                title: 'Cadastro de endereço',
                modal: {
                    title: 'Cancelar cadastro',
                    message: 'Tem certeza que deseja cancelar o cadastro?'
                }
            }}
        />
    )
}

export default CadastroEndereco