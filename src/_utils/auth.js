const TOKEN_KEY = 'auth.token'

export function setToken(token) {
	if (typeof window === 'undefined') return
	localStorage.setItem(TOKEN_KEY, token)
}

export function getToken() {
	if (typeof window === 'undefined') return null
	return localStorage.getItem(TOKEN_KEY)
}

export function clearToken() {
	if (typeof window === 'undefined') return
	localStorage.removeItem(TOKEN_KEY)
}

export function parseJwt(token) {
	try {
		const base64Url = token.split('.')[1]
		const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
		const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
		}).join(''))
		return JSON.parse(jsonPayload)
	} catch (e) {
		return null
	}
}

export function getUserFromToken() {
	const token = getToken()
	if (!token) return null
	const payload = parseJwt(token)
	if (!payload) return null
	return {
		id: payload.sub,
		nome: payload.nome,
		email: payload.email,
		exp: payload.exp,
	}
}

export function isTokenExpired(token = getToken()) {
	if (!token) return true
	const payload = parseJwt(token)
	const now = Date.now() / 1000
	return payload.exp < now
}

