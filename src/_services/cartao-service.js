import ApiService from "./api-service";

export default class CartaoService extends ApiService {
    constructor() {
        super('/cartoes')
    }

    cadastrar(cartao) {
        return this.post('', cartao)
    }

    excluir(cartao) {
        return this.delete(`/${cartao.id}`)
    }
}