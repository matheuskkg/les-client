import ValidacaoException from "@/_exceptions/validacao-exception"

export default function validarEndereco(endereco) {
    const mensagens = []

    if (!endereco.nomeIdentificador.trim()) {
        mensagens.push('Digite o nome identificador do endereço')
    } else if (endereco.nomeIdentificador.trim().length > 50) {
        mensagens.push('O nome identificador do endereço deve ter no máximo 50 caracteres')
    }

    if (!endereco.pais.trim()) {
        mensagens.push('Digite o pais do endereço')
    } else if (endereco.pais.trim().length > 50) {
        mensagens.push('O pais do endereço deve ter no máximo 50 caracteres')
    }

    if (!endereco.estado.trim()) {
        mensagens.push('Digite o estado do endereço')
    } else if (endereco.estado.trim().length > 50) {
        mensagens.push('O estado do endereço deve ter no máximo 50 caracteres')
    }

    if (!endereco.cidade.trim()) {
        mensagens.push('Digite a cidade do endereço')
    } else if (endereco.cidade.trim().length > 50) {
        mensagens.push('A cidade do endereço deve ter no máximo 50 caracteres')
    }

    if (!endereco.tipoLogradouro.tipo) {
        mensagens.push('Selecione o tipo de logradouro do endereço')
    }

    if (!endereco.logradouro.trim()) {
        mensagens.push('Digite o logradouro do endereço')
    } else if (endereco.logradouro.trim().length > 100) {
        mensagens.push('O logradouro do endereço deve ter no máximo 100 caracteres')
    }
    
    if (!endereco.tipoResidencia.tipo) {
        mensagens.push('Selecione o tipo de residência do endereço')
    }

    if (!endereco.numero.trim()) {
        mensagens.push('Digite o número do endereço')
    } else if (endereco.numero.trim().length > 10) {
        mensagens.push('O número do endereço deve ter no máximo 10 caracteres')
    }

    if (!endereco.bairro.trim()) {
        mensagens.push('Digite o bairro do endereço')
    } else if (endereco.bairro.trim().length > 50) {
        mensagens.push('O bairro do endereço deve ter no máximo 50 caracteres')
    }

    if (!endereco.cep.trim()) {
        mensagens.push('Digite o CEP do endereço')
    }

    if (endereco.observacao.trim().length > 100) {
        mensagens.push('A observação do endereço deve ter no máximo 100 caracteres')
    }

    if (mensagens.length > 0) {
        throw new ValidacaoException(mensagens)
    }
}