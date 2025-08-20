import "@/_assets/css/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/_assets/css/CustomDatePicker.css'

export default function App({Component, pageProps}) {
	return (
		<>
			<div className={'page-center'}>
				<Component {...pageProps} />
			</div>
		</>
	)
}
