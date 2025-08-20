import Button from '@/_components/Button'

const TableEnderecos = ({ enderecos, maxHeight }) => {
    const length = enderecos.length

    const rows = enderecos.map((e, index) => {
        const res = e.tipoLogradouro.tipo + ' ' + e.logradouro + ', ' + e.cidade + ' - ' + e.estado
        const shouldReturnHr = index < length - 1

        return (
            <div>
                <div className='d-flex justify-content-between align-items-center mx-2'>
                    <p className='my-0'>{res}</p>

                    <div>
                        <Button
                            className='me-1'
                            variant={'primary'}
                            icon={<i class="bi bi-pencil"></i>}
                        />

                        <Button
                            variant={'danger'}
                            icon={<i class="bi bi-trash3"></i>}
                        />
                    </div>
                </div>

                {
                    shouldReturnHr && <hr className='m-1' />
                }
            </div>
        )
    })

    return (
        <div style={{ maxHeight: maxHeight, overflowY: 'auto' }}>
            {rows}
        </div>
    )
}

export default TableEnderecos