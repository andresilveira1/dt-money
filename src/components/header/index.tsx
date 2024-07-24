import * as Dialog from '@radix-ui/react-dialog'

import { Content, HeaderContainer, NewTransactionButton } from './styles'
import logo from '../../assets/logo.svg'
import { NewTransactionModal } from '../new-transaction-modal'

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </Content>
    </HeaderContainer>
  )
}
