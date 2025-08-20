import Card from '@/_components/Card'
import TableEnderecos from '@/_components/TableEnderecos'

const ConsultaEnderecos = () => {
    const mock = [
        {
            tipoLogradouro: {
                tipo: 'Rua'
            },
            logradouro: 'abc',
            cidade: 'bcd',
            estado: 'a'
        },
        {
            tipoLogradouro: {
                tipo: 'Rua'
            },
            logradouro: 'abc',
            cidade: 'bcd',
            estado: 'a'
        },
        {
            tipoLogradouro: {
                tipo: 'Rua'
            },
            logradouro: 'abc',
            cidade: 'bcd',
            estado: 'a'
        },
    ]

    return (
        <>
            <div className="container">
                <div className="col-9 m-auto">
                    <Card>
                        <Card.Header className={'bg-transparent'}>
                            <h3>Endereços</h3>
                        </Card.Header>

                        <Card.Body>
                            <TableEnderecos
                                enderecos={mock}
                                maxHeight={500}
                            />
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </>
    )
}

export default ConsultaEnderecos