import ValidacaoException from "@/_exceptions/validacao-exception"

export default function validar(cartao) {
    const mensagens = []

    if (!cartao.nomeTitular.trim()) {
        mensagens.push('Digite o nome do titular do cartão')
    } else if (cartao.nomeTitular.trim().length > 100) {
        mensagens.push('O nome do titular do cartão deve ter no máximo 100 caracteres')
    }

    if (!cartao.numero.trim()) {
        mensagens.push('Digite o número do cartão')
    } else if (cartao.numero.trim().length !== 16) {
        mensagens.push('O número do cartão deve ter 16 dígitos')
    }

    if (!cartao.bandeira.id) {
        mensagens.push('Selecione a bandeira do cartão')
    }

    if (!cartao.codigoSeguranca.trim()) {
        mensagens.push('Digite o código de segurança do cartão')
    } else if (cartao.codigoSeguranca.trim().length < 3 || cartao.codigoSeguranca.trim().length > 4) {
        mensagens.push('O código de segurança do cartão deve ter 3 ou 4 dígitos')
    }

    if (mensagens.length > 0) {
        throw new ValidacaoException(mensagens)
    }
}