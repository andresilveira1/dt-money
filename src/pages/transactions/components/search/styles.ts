import styled from 'styled-components'

export const SearchContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;

    border: 0;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLORS.gray900};
    padding: 1rem;

    color: ${({ theme }) => theme.COLORS.gray300};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.gray500};
    }
  }

  button {
    height: 54px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.green300};

    color: ${({ theme }) => theme.COLORS.green300};
    font-weight: 700;

    background-color: transparent;

    padding: 0 2rem;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.green500};
      border-color: ${({ theme }) => theme.COLORS.green500};

      color: ${({ theme }) => theme.COLORS.white};

      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }
  }
`
