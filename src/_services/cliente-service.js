import ApiService from '@/_services/api-service'

export default class ClienteService extends ApiService {
	constructor() {
		super('/clientes')
	}

	cadastrar(cliente) {
		return this.post('', cliente)
	}

	consultar(filtro) {
		return this.get('', filtro)
	}

	consultarEnderecos() {
		return this.get('/enderecos')
	}
}