import axios from 'axios'

export default class ApiService {
	constructor(resourceUrl) {
		this.url = `http://localhost:8080${resourceUrl}`

		this.http = axios.create({
			baseURL: this.url,
		})
	}

	post(url, data) {
		return this.http.post(url, data)
	}

	patch(url, data) {
		return this.http.patch(url, data)
	}

	delete(url) {
		return this.http.delete(url)
	}

	get(url = '', params = {}) {
		return this.http.get(url, {
			params: params,
		})
	}
}