import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-datepicker/dist/react-datepicker.css'

export default function App({Component, pageProps}) {
	return (
		<>
			<div className={'page-center'}>
				<Component {...pageProps} />
			</div>
		</>
	)
}
