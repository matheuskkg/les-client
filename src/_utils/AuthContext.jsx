import {useRouter} from 'next/router'
import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { getToken, setToken as storeToken, clearToken, getUserFromToken, isTokenExpired } from '@/_utils/auth'

const AuthContext = createContext({
	user: null,
	token: null,
	loading: true,
	login: async (_credentials) => {},
	logout: () => {},
	setAuthToken: () => {}
})

export function AuthProvider({children}) {
	const [token, setToken] = useState(null)
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	const router = useRouter()

	useEffect(() => {
		const existing = getToken()
		if (existing && !isTokenExpired(existing)) {
			setToken(existing)
			setUser(getUserFromToken())
		} else if (existing && isTokenExpired(existing)) {
			clearToken()
		}
		setLoading(false)
	}, [])

	const setAuthToken = useCallback((jwt) => {
		if (!jwt) {
			clearToken()
			setToken(null)
			setUser(null)
			return
		}
		storeToken(jwt)
		setToken(jwt)
		setUser(getUserFromToken())
	}, [])

	const logout = useCallback(() => {
		setAuthToken(null)
		router.push('/')
	}, [setAuthToken])

	return (
		<AuthContext.Provider value={{user, token, loading, logout, setAuthToken}}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	return useContext(AuthContext)
}

