import ApiService from "./api-service"

export default class EnderecoService extends ApiService {
	constructor() {
		super('/enderecos')
	}

	cadastrar(endereco) {
		return this.post('', endereco)
	}
}