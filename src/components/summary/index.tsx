import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

import { Card, SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <Card>
        <header>
          <span>Entradas</span>

          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ 17.400,00</strong>
      </Card>

      <Card>
        <header>
          <span>Saídas</span>

          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>R$ 1.259,00</strong>
      </Card>

      <Card $variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>R$ 16.141,00</strong>
      </Card>
    </SummaryContainer>
  )
}
