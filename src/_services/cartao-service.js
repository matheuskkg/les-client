import ApiService from "./api-service";

export default class CartaoService extends ApiService {
    constructor() {
        super('/cartoes')
    }

    cadastrar(cartao) {
        return this.post('', cartao)
    }

    editar(cartao) {
        return this.patch(`/${cartao.id}`, cartao)
    }

    excluir(cartao) {
        return this.delete(`/${cartao.id}`)
    }

    consultarPorId(id) {
        return this.get(`/${id}`)
    }
}