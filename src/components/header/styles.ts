import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.COLORS.gray900};
  padding: 2.5rem 0 7.5rem;
`
export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
  }
`

export const NewTransactionButton = styled.button`
  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.green500};

  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.white};

  height: 50px;
  padding: 0 1.25rem;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.green700};
    transition: background-color 0.2s;
  }
`
