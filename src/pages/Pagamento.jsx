import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { produtos } from '../data/produtos'
import ResumoCompra from '../components/ResumoCompra'
import { usePagamento } from '../hooks/usePagamento'

const schema = z.object({
  titular: z
    .string()
    .trim()
    .min(1, 'Informe o nome do titular.'),

  cartao: z
    .string()
    .refine(
      (valor) => valor.replace(/\D/g, '').length === 16,
      'Informe um cartão com 16 dígitos.'
    ),

  validade: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      'Use o formato MM/AA e um mês entre 01 e 12.'
    ),

  cvv: z
    .string()
    .regex(/^\d{3}$/, 'O CVV deve conter 3 dígitos.'),
})

function Pagamento() {
  const navigate = useNavigate()
  const { processando, processarCompra } = usePagamento()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      titular: '',
      cartao: '',
      validade: '',
      cvv: '',
    },
  })

  async function onSubmit(dados) {
    const aprovado = await processarCompra(dados.cartao)

    navigate(aprovado ? '/sucesso' : '/falha', {
      replace: true,
    })
  }

  return (
    <main className="page">
      <div className="container">
        <header className="header">
          <div>
            <p className="eyebrow">PAGAMENTO</p>

            <h1>Finalizar compra</h1>

            <p className="subtitle">
              Use somente dados fictícios. Esta é uma simulação local.
            </p>
          </div>
        </header>

        <section className="checkout-layout">
          <form
            className="payment-card"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="form-group">
              <label htmlFor="titular">Nome do titular</label>

              <input
                id="titular"
                type="text"
                autoComplete="cc-name"
                placeholder="Ex.: Marcel Ferreira"
                aria-invalid={Boolean(errors.titular)}
                aria-describedby={
                  errors.titular ? 'titular-error' : undefined
                }
                {...register('titular')}
              />

              {errors.titular && (
                <p className="field-error" id="titular-error">
                  {errors.titular.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="cartao">Número do cartão</label>

              <input
                id="cartao"
                type="text"
                inputMode="numeric"
                autoComplete="cc-number"
                placeholder="0000 0000 0000 0000"
                maxLength={19}
                aria-invalid={Boolean(errors.cartao)}
                aria-describedby={
                  errors.cartao ? 'cartao-error' : undefined
                }
                {...register('cartao')}
              />

              {errors.cartao && (
                <p className="field-error" id="cartao-error">
                  {errors.cartao.message}
                </p>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="validade">Validade</label>

                <input
                  id="validade"
                  type="text"
                  inputMode="numeric"
                  placeholder="MM/AA"
                  maxLength={5}
                  autoComplete="cc-exp"
                  aria-invalid={Boolean(errors.validade)}
                  aria-describedby={
                    errors.validade ? 'validade-error' : undefined
                  }
                  {...register('validade')}
                />

                {errors.validade && (
                  <p className="field-error" id="validade-error">
                    {errors.validade.message}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="cvv">CVV</label>

                <input
                  id="cvv"
                  type="password"
                  inputMode="numeric"
                  placeholder="000"
                  maxLength={3}
                  autoComplete="cc-csc"
                  aria-invalid={Boolean(errors.cvv)}
                  aria-describedby={
                    errors.cvv ? 'cvv-error' : undefined
                  }
                  {...register('cvv')}
                />

                {errors.cvv && (
                  <p className="field-error" id="cvv-error">
                    {errors.cvv.message}
                  </p>
                )}
              </div>
            </div>

            {processando && (
              <div
                className="processing"
                role="status"
                aria-live="polite"
              >
                Processando compra...
              </div>
            )}

            <button
              className="button button--primary button--full"
              type="submit"
              disabled={processando}
            >
              {processando
                ? 'Processando...'
                : 'Confirmar pagamento'}
            </button>

            {!processando && (
              <Link className="back-link" to="/">
                Voltar para o carrinho
              </Link>
            )}
          </form>

          <ResumoCompra produtos={produtos} />
        </section>
      </div>
    </main>
  )
}

export default Pagamento