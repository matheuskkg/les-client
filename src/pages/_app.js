import {CarrinhoProvider} from '@/_utils/CarrinhoContext'
import {useEffect} from 'react'
import '@/_assets/css/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/_assets/css/CustomDatePicker.css'
import Navbar from '@/_components/core/Navbar'
import {AuthProvider, useAuth} from '@/_utils/AuthContext'
import {useRouter} from 'next/router'
import {ToastContainer} from 'react-toastify'

function Guard({Component, pageProps}) {
	const {user, loading} = useAuth()
	const router = useRouter()

	if (typeof window !== 'undefined') {
		if (!loading) {
			if (Component.auth && !user) {
				router.replace(`/auth/login?redirect=${encodeURIComponent(router.asPath)}`)
				return null
			}
		}
	}

	if (loading) {
		return <div className="d-flex justify-content-center align-items-center" style={{minHeight: '60vh'}}>
			<div className="spinner-border text-dark" role="status"/>
		</div>
	}

	return <Component {...pageProps} />
}

export default function App({Component, pageProps}) {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap.bundle.min.js')
	}, [])

	return (
		<>
			<ToastContainer/>
			<AuthProvider>
				<CarrinhoProvider>
					<Navbar/>
					<div className={'page-center bg-secondary-subtle'}>
						<Guard Component={Component} pageProps={pageProps}/>
					</div>
				</CarrinhoProvider>
			</AuthProvider>
		</>
	)
}
