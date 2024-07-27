import { useContext } from 'react'

import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { Search } from './components/search'
import { PriceHighLight, Table, TransactionsContainer } from './styles'
import { TransactionsContext } from '../../contexts/transactions-context'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <Search />

        <Table>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <PriceHighLight $variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.created_at))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </TransactionsContainer>
    </div>
  )
}
