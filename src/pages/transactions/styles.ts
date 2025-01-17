import styled from 'styled-components'

interface PriceHighLightProps {
  $variant: 'income' | 'outcome'
}

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  margin-top: 1.5rem;

  td {
    background-color: ${({ theme }) => theme.COLORS.gray700};
    padding: 1.25rem 2rem;

    &:first-child {
      width: 50%;

      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${({ $variant, theme }) =>
    $variant === 'income' ? theme.COLORS.green300 : theme.COLORS.red300};
`
