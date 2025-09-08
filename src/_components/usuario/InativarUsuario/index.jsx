import Link from "next/link"
import Modal from "antd/es/modal/Modal"
import { useState } from "react"
import Button from "@/_components/core/Button"
import ClienteService from "@/_services/cliente-service"
import { useAuth } from "@/_utils/AuthContext"
import { toast } from "react-toastify"

const InativarUsuario = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const service = new ClienteService()
    const { logout } = useAuth()

    async function inativar() {
        try {
            await service.inativar()

            logout()
        } catch (error) {
            const mensagens = error.response?.data?.mensagens || ['Erro ao inativar conta.']

            mensagens.forEach(mensagem => toast.error(mensagem))
        }
    }

    return (
        <>
            <p className={'m-0'}><Link href={'#'} onClick={() => setIsModalOpen(true)}>Inativar conta</Link></p>

            {isModalOpen && (
                <Modal
                    title={<><h3>Inativar conta</h3></>}
                    open={isModalOpen}
                    onCancel={() => setIsModalOpen(false)}
                    footer={
                        <div className={'d-flex justify-content-evenly align-items-center'}>
                            <Button
                                className={'w-100 me-2'}
                                icon={<i className="bi bi-x-lg"></i>}
                                text={'Cancelar'}
                                variant={'dark'}
                                onClick={() => setIsModalOpen(false)}
                            />

                            <Button
                                className={'w-100 ms-2'}
                                icon={<i className="bi bi-check-lg"></i>}
                                text={'Inativar'}
                                variant={'dark'}
                                onClick={inativar}
                            />
                        </div>
                    }
                >
                    <p>Tem certeza que deseja inativar sua conta? Essa ação é irreversível.</p>
                </Modal>
            )}
        </>
    )
}

export default InativarUsuario