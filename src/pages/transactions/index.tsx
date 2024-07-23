import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { Search } from './components/search'
import { PriceHighLight, Table, TransactionsContainer } from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <Search />

        <Table>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighLight $variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>30/07/2024</td>
            </tr>
            <tr>
              <td>Hamburger</td>
              <td>
                <PriceHighLight $variant="outcome">- R$ 59,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>29/07/2024</td>
            </tr>
            <tr>
              <td>Aluguel do apartamento</td>
              <td>
                <PriceHighLight $variant="outcome">
                  - R$ 1.200,00
                </PriceHighLight>
              </td>
              <td>Casa</td>
              <td>28/07/2024</td>
            </tr>
            <tr>
              <td>Computador</td>
              <td>
                <PriceHighLight $variant="income">R$ 5.400,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>30/07/2024</td>
            </tr>
          </tbody>
        </Table>
      </TransactionsContainer>
    </div>
  )
}
