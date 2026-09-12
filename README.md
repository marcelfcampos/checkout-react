# Checkout React

Mini-Projeto Avaliativo - Módulo 2.

Aplicação SPA de checkout desenvolvida com React, JavaScript e Vite.

## Tecnologias

- React
- Vite
- React Router
- React Hook Form
- Zod
- @hookform/resolvers
- CSS responsivo

## Instalação

```bash
npm install
npm run dev
```

Depois, abra o endereço exibido pelo Vite no navegador.

## Build

```bash
npm run build
npm run preview
```

## Fluxo

- `/` — resumo do carrinho
- `/pagamento` — formulário de pagamento
- `/sucesso` — compra aprovada
- `/falha` — tentativa de golpe

## Regra da simulação

Qualquer cartão com 16 dígitos é aceito, desde que os 16 dígitos não sejam todos iguais.

Exemplo aprovado:

`4111 1111 1111 1112`

Exemplo que leva à falha:

`1111 1111 1111 1111`

O pagamento é somente uma simulação no navegador. Nenhum dado é enviado para um servidor ou serviço de pagamento.