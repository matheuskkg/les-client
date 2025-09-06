import ApiService from "./api-service"

export default class EnderecoService extends ApiService {
	constructor() {
		super('/enderecos')
	}

	cadastrar(endereco) {
		return this.post('', endereco)
	}

	editar(endereco) {
		return this.patch(`/${endereco.id}`, endereco)
	}

	consultarPorId(id) {
		return this.get(`/${id}`)
	}
}