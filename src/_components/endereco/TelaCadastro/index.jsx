import Button from '@/_components/core/Button'
import Card from '@/_components/core/Card'
import FormEndereco from '@/_components/endereco/FormEndereco'
import { Modal } from 'antd'
import { useState } from 'react'
import { defaultEndereco } from '@/_utils/DefaultValues'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { validarEndereco } from '@/_utils/validators/validators'

const TelaCadastro = ({info, onSubmit}) => {
    const [endereco, setEndereco] = useState(defaultEndereco)
    const [isModalCancelarOpen, setIsModalCancelarOpen] = useState(false)
    const router = useRouter()

    function handleChange(e) {
        const { name, type, value, checked } = e.target
        const inputValue = type === 'checkbox' ? checked : value

        if (name.includes('.')) {
            const [parent, child] = name.split('.')
            setEndereco(prev => ({
                ...prev,
                [parent]: { ...prev[parent], [child]: inputValue },
            }))
            return
        }

        setEndereco({ ...endereco, [name]: inputValue })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            validarEndereco(endereco)

            onSubmit(endereco)
        } catch (error) {
            const mensagens = error.response?.data?.mensagens || error.mensagens || [error.message]

            mensagens.forEach(m => toast.error(m))
        }
    }

    function showModalCancelar() {
		setIsModalCancelarOpen(true)
	}

	function closeModalCancelar() {
		setIsModalCancelarOpen(false)
	}

    return (
        <>
            <Card className={'col-12 col-md-9 col-xxl-7'}>
                <Card.Header className={'bg-transparent'}>
                    <h3 className={'my-2'}>{info.title}</h3>
                </Card.Header>

                <form onSubmit={handleSubmit}>
                    <Card.Body>
                        <FormEndereco
                            obj={endereco}
                            onChange={handleChange}
                        />
                    </Card.Body>

                    <Card.Footer className={'bg-transparent'}>
                        <div className={'d-flex justify-content-sm-end flex-column-reverse flex-sm-row'}>
                            <Button
                                className={'me-sm-2'}
                                variant={'dark'}
                                icon={<i className="bi bi-arrow-left"></i>}
                                text={'Cancelar'}
                                onClick={showModalCancelar}
                            />

                            <Button
                                type={'submit'}
                                className={'ms-sm-2 mb-sm-0 mb-2'}
                                variant={'dark'}
                                icon={<i className="bi bi-download"></i>}
                                text={'Salvar'}
                            />
                        </div>
                    </Card.Footer>
                </form>
            </Card>

            {isModalCancelarOpen && (
                <Modal
                    centered={true}
                    title={<h3>{info.modal.title}</h3>}
                    open={isModalCancelarOpen}
                    onCancel={closeModalCancelar}
                    footer={
                        <div className={'d-flex justify-content-evenly align-items-center'}>
                            <Button
                                className={'w-100 me-2'}
                                icon={<i className="bi bi-x-lg"></i>}
                                text={'Não'}
                                variant={'dark'}
                                onClick={closeModalCancelar}
                            />
                            
                            <Button
                                className={'w-100 ms-2'}
                                icon={<i className="bi bi-check-lg"></i>}
                                text={'Sim'}
                                variant={'dark'}
                                onClick={router.back}
                            />
                        </div>
                    }
                >
                    <p>{info.modal.message}</p>
                </Modal>
            )}
        </>
    )
}

export default TelaCadastro