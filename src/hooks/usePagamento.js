import { useState } from 'react'
import { simularPagamento } from '../utils/pagamento'

export function usePagamento() {
  const [processando, setProcessando] = useState(false)

  async function processarCompra(numeroCartao) {
    setProcessando(true)

    const aprovado = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(simularPagamento(numeroCartao))
      }, 1500)
    })

    setProcessando(false)
    return aprovado
  }

  return {
    processando,
    processarCompra,
  }
}