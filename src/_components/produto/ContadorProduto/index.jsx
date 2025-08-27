import Button from "@/_components/core/Button";
import Input from "@/_components/core/Input";

const ContadorProduto = ({ produto }) => {
    return (
        <>
            <div className={'d-flex justify-content-between'}>
                <Button
                    className={'col-4'}
                    variant={'dark'}
                    icon={<i class="bi bi-dash-lg"></i>}
                />

                <div className={'col-3 mx-2'}>
                    <Input

                    />
                </div>

                <Button
                    className={'col-4'}
                    variant={'dark'}
                    icon={<i class="bi bi-plus-lg"></i>}
                />
            </div>
        </>
    );
};

export default ContadorProduto