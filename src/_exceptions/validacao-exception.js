export default class ValidacaoException extends Error {
    constructor(mensagens) {
        super()
        this.mensagens = mensagens
    }
}