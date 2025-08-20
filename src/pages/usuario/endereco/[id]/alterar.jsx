import Card from '@/_components/Card'
import FormEndereco from '@/_components/FormEndereco'
import {useState} from 'react'

const AlterarEndereco = ({initialEndereco}) => {
	const [endereco, setEndereco] = useState(initialEndereco)

	function handleChange(e) {
		const {name, value} = e.target
		setEndereco({...endereco, [name]: value})
	}

	return (
		<>
			<Card>
				<Card.Body>
					<FormEndereco
						obj={endereco}
						onChange={handleChange}
					/>
				</Card.Body>
			</Card>
		</>
	)
}

export async function getServerSideProps(context) {
	const {id} = context.params

	try {
		const res = await fetch(`${process.env.API_URL}/endereco/${id}`, {
			headers: {Accept: 'application/json'},
		})

		if (res.status === 404) {
			return {notFound: true}
		}

		if (!res.ok) {
			return {
				props: {
					initialEndereco: null,
					error: `Fetch failed (status ${res.status})`,
				},
			}
		}

		const data = await res.json()

		return {
			props: {
				initialEndereco: data.entidades[0],
			},
		}
	} catch (e) {
		return {
			props: {
				initialEndereco: null,
				error: e.message || 'Unexpected error',
			},
		}
	}
}

export default AlterarEndereco