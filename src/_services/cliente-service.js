import ApiService from '@/_services/api-service'

export default class ClienteService extends ApiService {
	constructor() {
		super('/clientes')
	}

	cadastrar(cliente) {
		return this.post('', cliente)
	}

	alterar(cliente) {
		return this.patch('', cliente)
	}

	consultar(filtro) {
		return this.get('', filtro)
	}

	consultarDadosPessoais() {
		return this.get('/dados-pessoais')
	}

	consultarEnderecos() {
		return this.get('/enderecos')
	}

	consultarCartoes() {
		return this.get('/cartoes')
	}
}