import Button from '@/_components/core/Button'

const TableEnderecos = ({enderecos, maxHeight, onClickEditar, onClickExcluir}) => {
	const length = enderecos.length

	const rows = enderecos.map((e, index) => {
		const res = e.tipoLogradouro.tipo + ' ' + e.logradouro + ', ' + e.cidade + ' - ' + e.estado
		const shouldReturnHr = index < length - 1

		return (
			<div key={e.id}>
				<div className="d-flex justify-content-between align-items-center mx-2">
					<p className="my-0">{res}</p>

					<div>
						<Button
							className="me-1"
							variant={'dark'}
							icon={<i className="bi bi-pencil"></i>}
							onClick={() => onClickEditar(e)}
						/>

						<Button
							variant={'dark'}
							icon={<i className="bi bi-trash3"></i>}
							onClick={() => onClickExcluir(e)}
						/>
					</div>
				</div>

				{
					shouldReturnHr && <hr className="m-1"/>
				}
			</div>
		)
	})

	return (
		<div
			style={{maxHeight: maxHeight, overflowY: 'auto'}}
		>
			{rows}
		</div>
	)
}

export default TableEnderecos