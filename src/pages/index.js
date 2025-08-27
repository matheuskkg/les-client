import Card from "@/_components/core/Card";
import CardProduto from "@/_components/produto/CardProduto";

export default function Home() {
	return (
		<>
			<Card className={'d-flex'}>
				<Card.Body className={'d-flex justify-content-between flex-column'}>
					<div className={'row d-flex'}>
						<CardProduto className={'col-12 col-md-6 col-lg-3'}>
							<CardProduto.Body>

							</CardProduto.Body>
						</CardProduto>

						<CardProduto className={'col-12 col-md-6 col-lg-3'}>
							<CardProduto.Body>

							</CardProduto.Body>
						</CardProduto>

						<CardProduto className={'col-12 col-md-6 col-lg-3'}>
							<CardProduto.Body>

							</CardProduto.Body>
						</CardProduto>
					</div>
					<div className={'row d-flex'}>
						<CardProduto className={'col-12 col-md-6 col-lg-3'}>
							<CardProduto.Body>

							</CardProduto.Body>
						</CardProduto>

						<CardProduto className={'col-12 col-md-6 col-lg-3'}>
							<CardProduto.Body>

							</CardProduto.Body>
						</CardProduto>

						<CardProduto className={'col-12 col-md-6 col-lg-3'}>
							<CardProduto.Body>

							</CardProduto.Body>
						</CardProduto>
					</div>
					<div className={'row d-flex'}>
						<CardProduto className={'col-12 col-md-6 col-lg-3'}>
							<CardProduto.Body>

							</CardProduto.Body>
						</CardProduto>

						<CardProduto className={'col-12 col-md-6 col-lg-3'}>
							<CardProduto.Body>

							</CardProduto.Body>
						</CardProduto>

						<CardProduto className={'col-12 col-md-6 col-lg-3'}>
							<CardProduto.Body>

							</CardProduto.Body>
						</CardProduto>
					</div>
				</Card.Body>
			</Card>
		</>
	);
}
