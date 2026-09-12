import { Link } from 'react-router-dom'

function Sucesso() {
  return (
    <main className="page page--center">
      <section className="result-card result-card--success">
        <div className="result-icon" aria-hidden="true">✓</div>
        <p className="eyebrow">PAGAMENTO CONCLUÍDO</p>
        <h1>Compra aprovada!</h1>
        <p>
          Sua compra foi processada com sucesso. Esta confirmação faz parte da
          simulação realizada no navegador.
        </p>

        <Link className="button button--primary button--full" to="/">
          Voltar ao carrinho
        </Link>
      </section>
    </main>
  )
}

export default Sucesso