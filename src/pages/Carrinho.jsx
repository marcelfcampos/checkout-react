import { Link } from "react-router-dom";
import { produtos } from "../data/produtos";
import ItemCarrinho from "../components/ItemCarrinho";
import ResumoCompra from "../components/ResumoCompra";
import logo from "../assets/img/logo.svg";

function Carrinho() {
  return (
    <main className="page">
      <div className="container">
        <header className="header">
          <img className="logo" src={logo} alt="Checkout React" />

          <div>
            <p className="eyebrow">CHECKOUT</p>
            <h1>Seu carrinho</h1>
            <p className="subtitle">
              Confira os produtos antes de finalizar a compra.
            </p>
          </div>
        </header>

        <section className="checkout-layout">
          <div className="products-list" aria-label="Produtos do carrinho">
            {produtos.map((produto) => (
              <ItemCarrinho key={produto.id} produto={produto} />
            ))}
          </div>

          <div>
            <ResumoCompra produtos={produtos} />

            <Link
              className="button button--primary button--full"
              to="/pagamento"
            >
              Finalizar compra
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Carrinho;
