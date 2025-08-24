import ApiService from '@/_services/api-service'

export default class AuthService extends ApiService {
	constructor() {
		super('/auth')
	}

	login(credentials) {
		return this.post('/login', credentials)
	}
}

