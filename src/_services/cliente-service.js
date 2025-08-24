import ApiService from '@/_services/api-service'

export default class ClienteService extends ApiService {
	constructor() {
		super('/cliente')
	}

	consultar(filtro) {
		return this.get('', filtro)
	}
}