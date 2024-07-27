import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

import { Card, SummaryContainer } from './styles'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/use-summary'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <Card>
        <header>
          <span>Entradas</span>

          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </Card>

      <Card>
        <header>
          <span>Saídas</span>

          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </Card>

      <Card $variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </Card>
    </SummaryContainer>
  )
}
