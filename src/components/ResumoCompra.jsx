import { calcularTotalProdutos } from '../data/produtos'

function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

function ResumoCompra({ produtos }) {
  const quantidadeTotal = produtos.reduce(
    (total, produto) => total + produto.quantidade,
    0
  )

  const total = calcularTotalProdutos(produtos)

  return (
    <aside className="summary-card" aria-label="Resumo da compra">
      <div className="summary-row">
        <span>Itens</span>
        <strong>{quantidadeTotal}</strong>
      </div>

      <div className="summary-row summary-row--total">
        <span>Total</span>
        <strong>{formatarMoeda(total)}</strong>
      </div>
    </aside>
  )
}

export default ResumoCompra