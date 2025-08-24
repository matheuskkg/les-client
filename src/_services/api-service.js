import axios from 'axios'
import { getToken } from '@/_utils/auth'

export default class ApiService {
	constructor(resourceUrl) {
		this.url = `http://localhost:8080${resourceUrl}`

		this.http = axios.create({
			baseURL: this.url,
		})

		this.http.interceptors.request.use(config => {
			const token = getToken()
			if (token) {
				config.headers['Authorization'] = `Bearer ${token}`
			}
			return config
		})

		this.http.interceptors.response.use(
			response => response,
			error => {
				if (error?.response?.status === 401) {
					if (typeof window !== 'undefined' && window.location.pathname !== '/auth/login') {
						import('@/_utils/auth').then(m => {
							m.clearToken()
							window.location.href = '/auth/login'
						})
					}
				}
				return Promise.reject(error)
			}
		)
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