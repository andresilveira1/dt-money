import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 2.5rem 3rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.COLORS.gray800};

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${({ theme }) => theme.COLORS.gray900};
      padding: 1rem;

      color: ${({ theme }) => theme.COLORS.gray300};

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.gray500};
      }
    }

    button[type='submit'] {
      height: 58px;
      border: 0;
      border-radius: 6px;
      background: ${({ theme }) => theme.COLORS.green500};
      padding: 0 1.25rem;
      margin-top: 1.5rem;

      color: ${({ theme }) => theme.COLORS.white};
      font-weight: 700;

      cursor: pointer;

      &:not(:disabled):hover {
        background: ${({ theme }) => theme.COLORS.green700};
        transition: background-color 0.2s;
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
    }
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-top: 0.5rem;
`

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background: ${({ theme }) => theme.COLORS.gray700};
  border: 0;
  border-radius: 6px;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;

  color: ${({ theme }) => theme.COLORS.gray300};

  svg {
    color: ${({ variant, theme }) =>
      variant === 'income' ? theme.COLORS.green300 : theme.COLORS.red300};
  }

  &[data-state='checked'] {
    svg {
      color: ${({ theme }) => theme.COLORS.white};
    }

    color: ${({ theme }) => theme.COLORS.white};
    background: ${({ variant, theme }) =>
      variant === 'income' ? theme.COLORS.green500 : theme.COLORS.red500};
  }

  &[data-state='unchecked']:hover {
    background: ${({ theme }) => theme.COLORS.gray600};
    transition: background-color 0.2s;
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  background: transparent;
  border: 0;

  line-height: 0;
  color: ${({ theme }) => theme.COLORS.gray500};

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.COLORS.gray300};
    transition: color 0.2s;
  }
`
