import styled, { css } from 'styled-components'

interface CardProps {
  $variant?: 'green'
}

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: -5rem auto 0;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

export const Card = styled.div<CardProps>`
  background-color: ${({ theme }) => theme.COLORS.gray600};
  border-radius: 6px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  header {
    color: ${({ theme }) => theme.COLORS.gray300};

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    font-size: 2rem;
  }

  ${({ $variant, theme }) =>
    $variant === 'green' &&
    css`
      background-color: ${theme.COLORS.green700};
    `}
`
