import ContadorProduto from '@/_components/produto/ContadorProduto';

const CardProduto = ({ children, className, produto }) => {
    return (
        <>
            <div className={`card ${className}`}>
                {children}

                <div className={'card-footer'}>
                    <ContadorProduto
                        produto={produto}
                    />
                </div>
            </div>
        </>
    );
};

const Body = ({ children, className }) => {
    return (
        <>
            <div className={`card-body ${className}`}>
                {children}
            </div>
        </>
    )
}
CardProduto.Body = Body

export default CardProduto