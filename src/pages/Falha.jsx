import { Link } from 'react-router-dom'

function Falha() {
  return (
    <main className="page page--center">
      <section className="result-card result-card--failure">
        <div className="result-icon" aria-hidden="true">!</div>
        <p className="eyebrow">PAGAMENTO RECUSADO</p>
        <h1>tentativa de golpe</h1>
        <p>
          O número informado possui todos os 16 dígitos iguais e foi recusado
          pela regra de segurança da simulação.
        </p>

        <Link className="button button--primary button--full" to="/pagamento">
          Tentar novamente
        </Link>
      </section>
    </main>
  )
}

export default Falha