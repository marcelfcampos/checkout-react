export function limparNumeroCartao(numero = '') {
  return numero.replace(/\D/g, '')
}

export function cartaoTemTodosOsDigitosIguais(numero) {
  const cartao = limparNumeroCartao(numero)

  if (cartao.length !== 16) {
    return false
  }

  return cartao.split('').every((digito) => digito === cartao[0])
}

export function simularPagamento(numero) {
  return !cartaoTemTodosOsDigitosIguais(numero)
}