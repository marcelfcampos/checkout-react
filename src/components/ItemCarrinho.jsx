function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

function ItemCarrinho({ produto }) {
  const subtotal = produto.preco * produto.quantidade

  return (
    <article className="cart-item">
      <div className="cart-item__info">
        <h2>{produto.nome}</h2>
        <p>Preço unitário: {formatarMoeda(produto.preco)}</p>
      </div>

      <div className="cart-item__quantity">
        <span>Quantidade</span>
        <strong>{produto.quantidade}</strong>
      </div>

      <div className="cart-item__subtotal">
        <span>Subtotal</span>
        <strong>{formatarMoeda(subtotal)}</strong>
      </div>
    </article>
  )
}

export default ItemCarrinho